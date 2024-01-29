type Matrix = number[][];

function gaussianElimination(input: string): number[] {
  const matrix = parseInput(input);
  const n = matrix.length;

  // Mengonversi matriks menjadi bentuk segitiga atas
  for (let i = 0; i < n; i++) {
    // Normalisasi baris saat ini
    const factor = matrix[i][i];
    for (let k = i; k < n + 1; k++) {
      matrix[i][k] /= factor;
    }

    // Mengeliminasi elemen di bawah baris saat ini
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

// fungsi untuk mengonversi input menjadi matriks
function parseInput(input: string): Matrix {
  // Memisahkan persamaan dalam input
  const equations = input.split(";");
  const matrix: Matrix = [];

  for (const equation of equations) {
    const terms = equation
      .split("=")[0]
      .split(/(?=[-+])/)
      .map((term) => term.trim());
    const row: number[] = [];

    let rhs = equation.split("=")[1].trim(); // Mendapatkan bagian kanan persamaan
    if (!rhs) {
      throw new Error("Persamaan tidak valid");
    }

    for (let term of terms) {
      const match = term.match(/([-+]?[0-9]*)([a-z])/);
      if (!match) {
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

      if (term.startsWith("-") && coefficient > 0) {
        coefficient *= -1;
      } else if (!term.startsWith("-") && coefficient === 1) {
        coefficient = 1;
      }

      row.push(coefficient);
    }

    row.push(parseInt(rhs, 10)); // Menambahkan bagian kanan sebagai elemen terakhir
    matrix.push(row);
  }

  return matrix;
}

export default gaussianElimination;
