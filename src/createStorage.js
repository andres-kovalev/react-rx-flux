const { createContext, createElement, useMemo, useRef, useContext, useState, useEffect } = require('react');
const { BehaviorSubject } = require('rxjs');

module.exports = (reducer) => {
    const StorageContext = createContext();

    const Provider = ({ state, children }) => {
        const storageSubject = useMemo(
            () => new BehaviorSubject(state),
            []
        );

        const dispatch = (action) => {
            const oldState = storageSubject.getValue();
            const newState = reducer(oldState, action);

            if (newState === oldState.current) {
                return;
            }

            storageSubject.next(newState);
        };
        const value = [ storageSubject, dispatch ];

        return createElement(StorageContext.Provider, { value }, children);
    };

    const useObservable = (stream, dispatch) => {
        const [ state, updateState ] = useState(stream.getValue());

        useEffect(() => {
            const subscription = stream.subscribe(updateState);

            return () => subscription.unsubscribe();
        }, [ stream ]);

        return [ state, dispatch ];
    };

    const useStorage = () => useObservable(...useContext(StorageContext));

    const useStream = (pipe, checksum) => {
        const [ stream, dispatch ] = useContext(StorageContext);
        const lastSubject = useRef();
        const newStream = useMemo(() => {
            const subject = new BehaviorSubject(
                lastSubject.current && lastSubject.current.getValue()
            );
            lastSubject.current = subject;

            stream.pipe(...pipe).subscribe(subject);

            return subject;
        }, [ stream, ...checksum ]);

        return useObservable(newStream, dispatch);
    };

    const useActionCreators = (actionCreatorsMap = {}) => {
        const [ , dispatch ] = useContext(StorageContext);

        return Object.entries(actionCreatorsMap)
            .reduce(
                (reduced, [ key, actionCreator ]) => Object.assign(reduced, {
                    [key]: payload => dispatch(actionCreator(payload))
                }), {}
            );
    };

    return {
        Provider,
        useStorage,
        useStream,
        useActionCreators
    };
};
