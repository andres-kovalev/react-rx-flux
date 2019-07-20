[![ci](https://img.shields.io/circleci/build/github/andres-kovalev/react-rx-flux.svg?style=flat-square&logo=circleci)](https://circleci.com/gh/andres-kovalev/react-rx-flux)
[![codecov](https://img.shields.io/codecov/c/github/andres-kovalev/react-rx-flux.svg?style=flat-square&logo=codecov&token=1280f2cf41a24522add9857967be2a73)](https://codecov.io/gh/andres-kovalev/react-rx-flux)
[![downloads](https://img.shields.io/npm/dm/react-rx-flux.svg?style=flat-square&logo=data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiCj48ZyBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTM3OSwxODAuNWgtMTAydi0xMDBoLTE1M3YxMDBoLTEwMmwxNzguNSwxNzguNWwxNzguNSwtMTc4LDUiLz48L2c+PC9zdmc+Cg==)](https://www.npmjs.com/package/react-rx-flux)
[![node](https://img.shields.io/node/v/react-rx-flux.svg?style=flat-square&logo=node.js&color=007ec6)](https://nodejs.org/)
[![npm](https://img.shields.io/npm/v/react-rx-flux.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/react-rx-flux)
[![MIT](https://img.shields.io/npm/l/react-rx-flux.svg?color=007ec6&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA5ElEQVR4AY3SJWyDcRQE8G+MsnIg63XNmMm2ZuB9xjyv5tWYfAZ2TD6tGW9qzHCX3H9bX4rJz7y7K3t8NK20OT7ogHnYl3ndfK5nRwFYgxf4Nl6UBVzfjcoholIiEXbdsBS2TCERdks5HIaPVIfqDnN4HCO8gUm5iZEfc/gYI+gBT3pi5I8M3szxE0LgSYg303ljcGqOtAHFshEjP+VwOkbwCvXyGiOf5rASrkwQhhIJm4zdKg4zYBDe/z8j72Te0bu6GRxSIUzAHXxBF3jSpdudOoX2/5oDQVgEP3ji1y3Ijhv9ABp7euvVsybrAAAAAElFTkSuQmCC&style=flat-square)](https://github.com/andres-kovalev/react-rx-flux/blob/master/LICENSE)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-rx-flux.svg?style=flat-square&logo=data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnIGZpbGw9IndoaXRlIj48cGF0aCBkPSJNNzUsMzBoMTc1bDEwMCwxMDB2MjQwaC0yNzV2LTI0MCIvPjwvZz48ZyBmaWxsPSIjREREIj48cGF0aCBkPSJNMjUwLDMwbDEwMCwxMDBoLTEwMHYtMTAwIi8+PC9nPjwvc3ZnPgo=)](https://www.npmjs.com/package/react-rx-flux)

# react-rx-flux

React binding for rxjs powered flux.

# Description

`react-rx-flux` implements [flux](https://facebook.github.io/flux/) architecture in a way similar to [react-easy-flux](https://www.npmjs.com/package/react-easy-flux) package, but with a small difference - it uses [rxjs](https://www.npmjs.com/package/rxjs) under the hood.

# Installation

As any other npm package `react-rx-flux` can be added to your project by following command:

```bash
npm i -S react-rx-flux
```

It requires any version of [rxjs](https://www.npmjs.com/package/rxjs) and [react](https://www.npmjs.com/package/react) with new context API support as peer dependency, so it should be installed as well.

```bash
npm i -S rxjs react
```

# API

## createStorage(reducer)

`createStorage` function creates new storage attributes such as `Provider`, `useStorage()`, `useStream()` and `useActionCreators()` hooks. You can crete several storages for different kind of data or use single storage (redux-like-way).

```js
const {
    Provider: ThemeProvider,
    useStorage: useTheme,
    useStream: useThemeStream,
    useActionCreators: useThemeActions
} = createStorage(themeReducer);

const {
    Provider: GlobalStateProvider,
    useStorage: useGlobalState,
    useStream: useGloabalStream,
    useActionCreators: useGlobalActions
} = createStorage(globalStateRedurec);
```

### Provider

All storage data consumers should be wrapped with `Provider` component, created by `createStorage()` function. You can pass `state` prop to set initial storage state.

```js
render(
    <ThemeProvider state={ initialTheme }>
        <GlobalStorageProvider state={ initialGlobalState }>
            <App />
        </GlobalStorageProvider>
    </ThemeProvider>,
    document.getElementById('app')
);
```

### useStorage() / useStream(pipe, checksum)

To consume/interact with storage state component should use `useStorage()` hook. It returns array of two elements: current state and `dispatch()` function to dispatch actions.

```js
const Button = ({ ... }) => {
    const [ theme ] = useTheme();

    // use theme to set component style
};
```

```js
import { setTheme } from './themeActions.js';

const ThemeSelector = ({ ... }) => {
    const [ , dipatch ] = useTheme();
    const onSelect = theme => dispatch(
        setTheme(theme)
    );

    ...
}
```

Until this moment `react-rx-flux` shows the same functionality as [react-easy-flux](https://www.npmjs.com/package/react-easy-flux). But as we mentioned before, it uses [rxjs](https://www.npmjs.com/package/rxjs) under the hood. To feel its advantages special `useStream()` hook exist. This hook allows user to create his own stream and subscribe to it from his components. In code snippet below we're implementing simple selector.

```js
import { map } from 'rxjs/operators';

const MyComponent = () => {
    const [ value ] = useStream([
        map(
            state => state.value
        )
    ], []);

    ...
}
```

`useStream()` hook consumes two parameters:

- array of [rxjs pipeable operators](https://github.com/ReactiveX/rxjs/blob/master/doc/pipeable-operators.md) to genereate new stream (using [Observable.prototype.pipe()](https://rxjs.dev/api/index/function/pipe));
- array of values considered as stream dependencies. `react-rx-flux` will generate new stream each time on one of this dependencies changed.

Why this hook is so interesting? It gives us an opportunity to use all power of `rxjs`, so we can implement our own selector functionality as we did before, or optimize rendering by checking changes...

```js
const [ value ] = useStream([
    map(
        ({ value }) => value
    ),
    distinct()
])
```

...or even apply debouncing...

```js
const [ value ] = useStream([
    map(
        ({ search }) => search
    ),
    debounce(() => interval(500))
])
```

...without any significant effort.

### useActionCreators(actionCreatorsMap)

To bind action creators `useActionCreators()` hook can be used.

```js
import { setTheme } from './themeActions.js';

const ThemeSelector = ({ ... }) => {
    // const [ , dipatch ] = useTheme();
    // const onSelect = theme => dispatch(
    //    setTheme(theme)
    // );
    const { setTheme: onSelect } = useActionCreators({ setTheme })

    ...
}
```

