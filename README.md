# Demo of using React with Python

## Create the app

```bash
npx create-react-app --use-npm demo-react-pyodide
```

## Add material-ui

We want to use the material-ui toolkit which currently wants react version 16.8 or better.

Update the `package.json` with the following.

```json
{
  ...
  "dependencies": {
    ...
    "react": "^16.8",
    "react-dom": "^16.8",
    ...
  },
  ...
}
```


```bash
npm install @material-ui/core @material-ui/icons @fontsource/roboto
```

Change the `src/index.js` to not use strict


```javascript
...
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
...
```

to

```javascript
...
import CssBaseline from '@material-ui/core/CssBaseline'
...

ReactDOM.render(
  <>
    <CssBaseline />
    <App />
  </>,
  document.getElementById('root')
)
ReactDOM.render(<App />, document.getElementById('root'))
```

Make the contents of `src/index.css` be:

```css
body {
  margin: 0;
  width: 100%;
  height: 100%;
}
```

Make the contents of `src/App.js` be:

```javascript
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    )
  }
}
```

## Add pyodide

```bash
npm install @pyodide/pyodide
```

Add `public/pyodide/` to the `.gitignore`.
