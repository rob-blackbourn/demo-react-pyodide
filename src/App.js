import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'

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
      version: null
    }
  }

  pyodideLoadedHandler = (pyodide) => {
    const version = pyodide.runPython(`
    import sys
    sys.version
`)
    this.setState({ isLoaded: true, version })
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
          <Typography variant="h2">Loading Python</Typography>
          <LinearProgress />
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
