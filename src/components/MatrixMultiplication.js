import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { generateDotProductExercise } from '../pythonCode'
import Matrix from './Matrix'

const styles = (theme) => ({
  paper: {
    height: '100vh'
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
    float: 'right'
  },
  parameter: {
    width: '12ch',
    margin: theme.spacing(1)
  },
  exercise: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
})

class MatrixMultiplication extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pyodide: props.pyodide,
      maxNumberOfRows: 4,
      maxNumberOfColumns: 4,
      hasExercise: false,
      m: 1,
      n: 1,
      p: 1,
      A: [[0]],
      B: [[0]],
      C: [[0]]
    }
  }

  generateExercise = () => {
    const { maxNumberOfRows, maxNumberOfColumns, pyodide } = this.state
    generateDotProductExercise(pyodide, maxNumberOfRows, maxNumberOfColumns)
      .then((result) => {
        this.setState({
          ...result,
          hasExercise: true
        })
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('handleSubmit')
    this.generateExercise()
  }

  render() {
    const { maxNumberOfRows, maxNumberOfColumns, hasExercise, m, n, p, A, B, C } = this.state
    const { classes } = this.props

    return (
      <Container maxWidth="lg">
        <Paper className={classes.paper}>
          <form onSubmit={this.handleSubmit}>
            <TextField className={classes.parameter} type="number" value={maxNumberOfRows} label="Max Rows" />
            <TextField className={classes.parameter} type="number" value={maxNumberOfColumns} label="Max Columns" />
            <Button type="submit" variant="outlined" color="primary" className={classes.button}>
              New Exercise
            </Button>
          </form>
          <div className={classes.exercise}>
            {hasExercise ? (
              <>
                <Matrix values={A} readOnly={true} />
                <Matrix values={B} readOnly={true} />
              </>
            ) : (
              <Typography variant="body1">Click the button to generate a new exercise</Typography>
            )}
          </div>
        </Paper>
      </Container>
    )
  }
}

MatrixMultiplication.propTypes = {
  classes: PropTypes.object,
  pyodide: PropTypes.object
}

export default withStyles(styles)(MatrixMultiplication)
