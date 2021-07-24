import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import MatrixMultiplication from './components/MatrixMultiplication'

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
      pyodide: null
    }
  }

  componentDidMount() {
    window
      .loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.17.0/full/' })
      .then((pyodide) => {
        this.setState({ pyodide })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { pyodide } = this.state
    const { classes } = this.props

    return pyodide == null ? (
      <div className={classes.progress}>
        <Typography variant="h2">Loading Python</Typography>
        <LinearProgress />
      </div>
    ) : (
      <div>
        <MatrixMultiplication pyodide={pyodide} />
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(App)
