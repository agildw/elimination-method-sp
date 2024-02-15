export type Matrix = number[][];

export interface Solution {
  value: number;
  variable: string;
  steps: string[];
}

export interface Step {
  matrix: Matrix;
  step: string;
}

export interface GaussianEliminationResult {
  eliminationSteps: Step[];
  solution: Solution[];
  equations: string[];
  inputMatrix: Matrix;
}

function gaussianElimination(input: string): GaussianEliminationResult {
  const { matrix, equations } = parseInput(input);
  const inputMatrix = JSON.parse(JSON.stringify(matrix));
  const steps: Step[] = [];
  const n = matrix.length;

  // Mengonversi matriks menjadi bentuk segitiga atas
  for (let i = 0; i < n; i++) {
    // Menyederhanakan baris saat ini
    const factor = matrix[i][i];
    for (let k = i; k < n + 1; k++) {
      matrix[i][k] /= factor;
    }
    steps.push({
      matrix: JSON.parse(JSON.stringify(matrix)),
      step: `Sederhanakan baris ${i + 1} dengan pembagi ${factor}`,
    });

    // Mengeliminasi elemen di bawah baris saat ini
    for (let j = i + 1; j < n; j++) {
      const factor = matrix[j][i];
      for (let k = i; k < n + 1; k++) {
        matrix[j][k] -= factor * matrix[i][k];
      }
      steps.push({
        matrix: JSON.parse(JSON.stringify(matrix)),
        step: `Eliminasi baris ${j + 1} menggunakan baris ${i + 1}`,
      });
    }
  }

  const solution = backSubstitution(matrix);

  return {
    eliminationSteps: steps,
    solution: solution,
    equations,
    inputMatrix,
  };
}

export function backSubstitution(matrix: Matrix): Solution[] {
  const n = matrix.length;
  const solution: Solution[] = new Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    const variable = String.fromCharCode(120 + i);
    const steps: string[] = [];
    steps.push(`Substitusi ${variable}`);

    let sum = 0;
    for (let j = i + 1; j < n; j++) {
      sum += matrix[i][j] * solution[j].value;
    }

    steps.push(`${variable} = ${matrix[i][n]} - ${sum}`);
    steps.push(`${variable} = ${matrix[i][n] - sum}`);

    solution[i] = {
      value: matrix[i][n] - sum,
      variable,
      steps,
    };
  }

  return solution;
}

// fungsi untuk mengonversi input menjadi matriks
export function parseInput(input: string): {
  matrix: Matrix;
  equations: string[];
} {
  // Memisahkan persamaan dalam input
  const equations = input.split(";").map((equation) => equation.trim());
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

  return {
    matrix,
    equations,
  };
}

export default gaussianElimination;
