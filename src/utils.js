export function updateMatrixCell(matrix, i, j, value) {
  return matrix.map((row, r) => row.map((column, c) => (r === i && c === j ? value : column)))
}

export function getMatrixShape(matrix) {
  return [matrix.length, matrix.length === 0 ? 0 : matrix[0].length]
}

export function isMatrixEqual(lhs, rhs) {
  if (lhs.length !== rhs.length) {
    return false
  }
  for (let i = 0; i < lhs.length; ++i) {
    const lhsRow = lhs[i]
    const rhsRow = rhs[i]
    if (lhsRow.length !== rhsRow.length) {
      return false
    }
    for (let j = 0; j < lhsRow.length; ++j) {
      if (lhsRow[j] !== rhsRow[j]) {
        return false
      }
    }
  }
  return true
}
