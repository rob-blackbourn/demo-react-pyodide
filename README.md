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

Put the script tag to get the pyodide code in the head of the `index.html`.

```html
...
  <head>
    ...
    <script src="https://cdn.jsdelivr.net/pyodide/v0.17.0/full/pyodide.js"></script>
  </head>
...
```

Change the `src/App.js` to the following:

```javascript
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = (theme) => ({
  progress: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      version: '',
      pyodide: null
    }
  }

  getVersion = () => {
    this.pyodide.runPythonAsync(`
    import sys
    sys.version
`)
      .then(version => this.setState({ version }))
      .catch(error => console.log(error))
  }

  pyodideLoadedHandler = (pyodide) => {
    this.setState(
      { isLoaded: true, pyodide },
      getVersion)
  }

  componentDidMount() {
    window
      .loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.17.0/full/' })
      .then((response) => {
        this.pyodideLoadedHandler(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { isLoaded, version } = this.state
    const { classes } = this.props

    if (!isLoaded) {
      return (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      )
    }

    return <div>{version}</div>
  }
}

App.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(App)
```
