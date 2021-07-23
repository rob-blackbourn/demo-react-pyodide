export function dotProductExerciseCode(maxNumberOfColumns, maxNumberOfRows) {
  return `
import random
import numpy as np

m = random.randint(1, ${maxNumberOfRows})
n = random.randint(1, ${maxNumberOfColumns})
p = random.randint(1, ${maxNumberOfColumns})

A = np.random.randint(10, size=(m, n))
B = np.random.randint(10, size=(n, p))
C = A @ B
  `
}

export async function generateDotProductExercise(pyodide, maxNumberOfRows, maxNumberOfColumns) {
  const code = dotProductExerciseCode(maxNumberOfRows, maxNumberOfColumns)
  await pyodide.runPythonAsync(code)
  const results = {
    m: pyodide.globals.get('m'),
    n: pyodide.globals.get('n'),
    p: pyodide.globals.get('p'),
    A: pyodide.globals
      .get('A')
      .toJs()
      .map((x) => Array.from(x)),
    B: pyodide.globals
      .get('B')
      .toJs()
      .map((x) => Array.from(x)),
    C: pyodide.globals
      .get('C')
      .toJs()
      .map((x) => Array.from(x))
  }
  return results
}
