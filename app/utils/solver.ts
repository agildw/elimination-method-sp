type Matrix = number[][];

function gaussianElimination(input: string): number[] {
  const matrix = parseInput(input);
  const n = matrix.length;

  // Convert to upper triangular form
  for (let i = 0; i < n; i++) {
    // Normalize the current row
    const factor = matrix[i][i];
    for (let k = i; k < n + 1; k++) {
      matrix[i][k] /= factor;
    }

    // Eliminate below
    for (let j = i + 1; j < n; j++) {
      const factor = matrix[j][i];
      for (let k = i; k < n + 1; k++) {
        matrix[j][k] -= factor * matrix[i][k];
      }
    }
  }

  return backSubstitution(matrix);
}

function backSubstitution(matrix: Matrix): number[] {
  const n = matrix.length;
  const solution = new Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    let sum = 0;
    for (let j = i + 1; j < n; j++) {
      sum += matrix[i][j] * solution[j];
    }
    solution[i] = matrix[i][n] - sum;
  }

  return solution;
}

function parseInput(input: string): Matrix {
  const equations = input.split(";");
  console.log(equations);
  const matrix: Matrix = [];

  for (const equation of equations) {
    const terms = equation
      .split("=")[0]
      .split(/(?=[-+])/)
      .map((term) => term.trim());
    const row: number[] = [];

    let rhs = equation.split("=")[1].trim(); // Get the right-hand side of the equation
    if (!rhs) {
      throw new Error("Persamaan tidak valid");
    }

    for (let term of terms) {
      const match = term.match(/([-+]?[0-9]*)([a-z])/);
      if (!match) {
        // throw new Error("Term not valid");
        throw new Error("Persamaan tidak valid");
      }

      let coefficient = 0;
      switch (match[1]) {
        case "":
          coefficient = 1;
          break;
        case "-":
          coefficient = -1;
          break;
        case "+":
          coefficient = 1;
          break;
        default:
          coefficient = parseInt(match[1], 10);
          break;
      }

      //   let coefficient = match[1] === "" ? 1 : parseInt(match[1], 10);
      if (term.startsWith("-") && coefficient > 0) {
        coefficient *= -1;
      } else if (!term.startsWith("-") && coefficient === 1) {
        coefficient = 1;
      }

      row.push(coefficient);
    }

    row.push(parseInt(rhs, 10)); // Push the right-hand side as the last element
    matrix.push(row);
  }

  return matrix;
}

export default gaussianElimination;
