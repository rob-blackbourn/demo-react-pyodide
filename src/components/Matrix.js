import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = (theme) => ({
  button: {
    margin: theme.spacing(1, 1, 0, 0)
  },
  cell: {
    width: '4ch',
    margin: theme.spacing(1),
    '& .MuiInputBase-input': {
      textAlign: 'center'
    }
  },
  divTable: {
    display: 'inline-flex',
    width: 'auto',
    borderLeft: '1px solid #666666',
    borderRight: '1px solid #666666',
    borderSpacing: '5px',
    margin: theme.spacing(1)
  },
  divTableRow: {
    display: 'table-row',
    width: 'auto',
    clear: 'both'
  },
  divTableCol: {
    // float: 'left' /* fix for  buggy browsers */,
    display: 'tableColumn',
    width: 'auto'
  }
})

const getShape = (matrix) => {
  return [matrix.length, matrix.length === 0 ? 0 : matrix[0].length]
}

class Matrix extends Component {
  render() {
    const { values, readOnly, onChange, classes } = this.props
    const [numberOfRows, numberOfColumns] = getShape(values)
    console.log(values, numberOfRows, numberOfColumns)

    return (
      <div className={classes.divTable}>
        {values.map((row, i) => (
          <div key={`row-${i}`} className={classes.divTableRow}>
            {row.map((column, j) => (
              <div className={classes.divTableCol} key={`cell-${i}-${j}`}>
                <TextField
                  className={classes.cell}
                  value={column}
                  readOnly={readOnly}
                  onChange={(e) => onChange(i, j, e.target.value)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

Matrix.propTypes = {
  values: PropTypes.arrayOf(PropTypes.array),
  onChange: PropTypes.func,
  readOnly: PropTypes.bool
}

Matrix.defaultProps = {
  readonly: false,
  onChange: () => {}
}

export default withStyles(styles)(Matrix)
