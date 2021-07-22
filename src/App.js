import React, { Component } from 'react'
import Matrix from './components/Matrix'

function updateMatrix(matrix, i, j, value) {
  return matrix.map((row, r) => row.map((column, c) => (r === i && c === j ? value : column)))
}
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      matrix: [
        [1, 2, 3],
        [4, 5, 6]
      ]
    }
  }

  onChangeHandler = (i, j, value) => {
    this.setState({
      matrix: updateMatrix(this.state.matrix, i, j, value)
    })
  }

  render() {
    const { matrix } = this.state

    return (
      <div>
        <Matrix values={matrix} readonly={true} onChange={this.onChangeHandler} />
      </div>
    )
  }
}
