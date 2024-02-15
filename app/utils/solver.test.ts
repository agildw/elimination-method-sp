import gaussianElimination, { parseInput, backSubstitution } from "./solver";

describe("Parse Input", () => {
  it("should parse input with multiple equations", () => {
    const input = "2x + 3y = 5; 4x - 2y = 10";
    const expected = {
      matrix: [
        [2, 3, 5],
        [4, -2, 10],
      ],
      equations: ["2x + 3y = 5", "4x - 2y = 10"],
    };
    const result = parseInput(input);
    expect(result).toEqual(expected);
  });

  it("should handle negative coefficients", () => {
    const input = "-2x - 3y = -5; 4x + 2y = -10";
    const expected = {
      matrix: [
        [-2, -3, -5],
        [4, 2, -10],
      ],
      equations: ["-2x - 3y = -5", "4x + 2y = -10"],
    };
    const result = parseInput(input);
    expect(result).toEqual(expected);
  });

  it("should handle missing right-hand side", () => {
    const input = "2x + 3y = ";
    expect(() => parseInput(input)).toThrow("Persamaan tidak valid");
  });

  it("should handle invalid equations", () => {
    const input = "2x + 3y = 5; 5x + 4 = 10";
    expect(() => parseInput(input)).toThrow("Persamaan tidak valid");
  });
});

describe("Back Subtitution", () => {
  it("should perform back substitution correctly", () => {
    const matrix = [
      [1, 2, 14],
      [0, 1, 5],
    ];
    const expected = [
      {
        value: 4,
        variable: "x",
        steps: ["Substitusi x", "x = 14 - 10", "x = 4"],
      },
      {
        value: 5,
        variable: "y",
        steps: ["Substitusi y", "y = 5 - 0", "y = 5"],
      },
    ];
    const result = backSubstitution(matrix);
    expect(result).toEqual(expected);
  });
});

describe("Gaussian Elimination", () => {
  it("should solve multiple equations correctly", () => {
    const input = "2x + 4y = 28 ; 3x + 2y = 22";
    const solution = [
      {
        value: 4,
        variable: "x",
        steps: ["Substitusi x", "x = 14 - 10", "x = 4"],
      },
      {
        value: 5,
        variable: "y",
        steps: ["Substitusi y", "y = 5 - 0", "y = 5"],
      },
    ];

    const result = gaussianElimination(input);
    // expect(result).toEqual(expected);
    // equal to solution variable and value but not equal to steps
    expect(result.solution).toEqual(solution);
  });

  it("should handle negative coefficients correctly", () => {
    const input = "-2x - 3y = -5; 4x + 2y = -10";
    const solution = [
      {
        value: -5,
        variable: "x",
        steps: ["Substitusi x", "x = 2.5 - 7.5", "x = -5"],
      },
      {
        value: 5,
        variable: "y",
        steps: ["Substitusi y", "y = 5 - 0", "y = 5"],
      },
    ];

    const result = gaussianElimination(input);
    expect(result.solution).toEqual(solution);
  });

  it("Should return NaN if the equation has no solution", () => {
    const input = "2x + 3y = 5; 4x + 6y = 10";
    const solution = [
      {
        value: NaN,
        variable: "x",
        steps: ["Substitusi x", "x = 2.5 - NaN", "x = NaN"],
      },
      {
        value: NaN,
        variable: "y",
        steps: ["Substitusi y", "y = NaN - 0", "y = NaN"],
      },
    ];

    const result = gaussianElimination(input);
    expect(result.solution).toEqual(solution);
  });
});
