import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Matrix.css'

const getShape = (matrix) => {
  return [matrix.length, matrix.length === 0 ? 0 : matrix[0].length]
}

export default class Matrix extends Component {
  render() {
    const { values, readonly, onChange } = this.props
    const [numberOfRows, numberOfColumns] = getShape(values)
    console.log(values, numberOfRows, numberOfColumns)

    return (
      <div>
        <h1>Test</h1>
        <p>This is not a test.</p>
        {values.map((row, i) => (
          <div key={`row-${i}`}>
            {row.map((column, j) => (
              <input
                className="MatrixCell"
                key={`cell-${i}-${j}`}
                type="text"
                value={column}
                pattern="\d*"
                readOnly={readonly}
                onChange={(e) => onChange(i, j, e.target.value)}
              />
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
  readonly: PropTypes.bool
}

Matrix.defaultProps = {
  readonly: false
}
