export function updateMatrixCell(matrix, i, j, value) {
  return matrix.map((row, r) => row.map((column, c) => (r === i && c === j ? value : column)))
}

export function getMatrixShape(matrix) {
  return [matrix.length, matrix.length === 0 ? 0 : matrix[0].length]
}
