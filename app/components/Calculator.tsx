"use client";
import { useState } from "react";
import gaussianElimination, {
  GaussianEliminationResult,
  type Matrix,
  Step,
} from "../utils/solver";

const Matrix = ({ matrix }: { matrix: Matrix }) => {
  return (
    <table className="matrix w-full max-w-40">
      <tbody>
        {matrix.map((row, i) => (
          <tr key={i}>
            {row.map((col, j) => (
              <td
                key={j}
                className={`w-10 text-center font-base text-xl ${
                  j === row.length - 1 ? "w-20" : ""
                }`}
              >
                {col}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const EliminationSolutionStep = ({ step }: { step: Step }) => {
  return (
    <div className="flex flex-col space-y-4">
      <p className="text-gray-500 text-lg font-base text-left">{step.step}</p>
      <Matrix matrix={step.matrix} />
    </div>
  );
};

const SubstitutionSolutionStep = ({ step }: { step: string[] }) => {
  return (
    <div className="flex flex-col space-y-4">
      {step.map((eq, i) => (
        <p key={i} className="text-gray-500 text-xl font-base text-left">
          {eq}
        </p>
      ))}
    </div>
  );
};

const StepByStep = ({
  eliminationSteps,
  substitutionSteps,
}: {
  eliminationSteps: Step[];
  substitutionSteps: string[][];
}) => {
  return (
    <div className="flex flex-col space-y-8">
      <p className="text-gray-500 text-xl font-bold text-left">
        1. Eliminasi maju
      </p>
      <div className="flex flex-col space-y-8">
        {eliminationSteps.map((step, i) => (
          <EliminationSolutionStep key={i} step={step} />
        ))}
      </div>
      <p className="text-gray-500 text-xl font-bold text-left">
        2. Subtitusi mundur
      </p>
      <div className="flex flex-col space-y-8">
        {substitutionSteps.map((step, i) => (
          <SubstitutionSolutionStep key={i} step={step} />
        ))}
      </div>
    </div>
  );
};

const Solution = ({ result }: { result: GaussianEliminationResult }) => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col space-y-4">
        <p className="text-gray-500 text-2xl font-bold text-left">Persamaan</p>
        {result.equations.map((eq, i) => (
          <p key={i} className="text-gray-500 text-xl font-base text-left">
            {eq}
          </p>
        ))}
        <p className="text-gray-500 text-2xl font-bold text-left">Matriks</p>
        <Matrix matrix={result.inputMatrix} />
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-gray-500 text-2xl font-bold text-left mt-8">Hasil</p>
        <code className="w-full flex-col items-center rounded-lg bg-gray-800 p-4 pl-6 text-left text-sm text-white sm:text-base">
          <span className="flex gap-4">
            <span>
              {result.solution.map((res, i) => (
                <span key={i} className="text-gray-100 text-xl">
                  {res.variable} = {res.value}
                  <br />
                </span>
              ))}
            </span>
          </span>
        </code>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            Langkah-langkah
          </div>
          <div className="collapse-content">
            <StepByStep
              eliminationSteps={result.eliminationSteps}
              substitutionSteps={result.solution
                .toReversed()
                .map((s) => s.steps)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Calculator = () => {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState<GaussianEliminationResult | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    setResult(null);

    try {
      const res = gaussianElimination(equation);
      console.log(res);
      setResult(res);
    } catch (e: any) {
      console.log(e);
      setError("Persamaan tidak valid");
    }
  };
  return (
    <div className="flex flex-col justify-center p-4 max-w-6xl w-full space-y-12">
      <h2 className="text-3xl w-full text-gray-800 p-4 font-bold self-start text-left rounded-lg">
        Kalkulator
      </h2>
      <div className="flex flex-col space-y-2 md:space-y-2">
        <p className="text-gray-500 text-xl font-base text-left">
          Masukkan persamaan
        </p>
        <div className="flex flex-col md:flex-row justify-start md:items-center md:justify-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            value={equation}
            onChange={(e) => setEquation(e.target.value)}
            //   className="p-4 rounded-lg w-full md:w-1/2 border-4"
            className="input input-bordered input-lg w-full"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
          <button
            className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg h-full"
            onClick={handleSubmit}
          >
            Hitung
          </button>
        </div>
        <p className="text-gray-500 text-lg font-light text-left">
          Pisahkan dengan tanda titik koma (;)
        </p>
      </div>

      {error && (
        <div
          role="alert"
          className="alert alert-error bg-red-300 flex flex-row"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {!result && (
        <div className="flex flex-col space-y-4">
          <p className="text-gray-500 text-2xl font-bold text-left">Contoh</p>
          <button
            className="text-lg bg-gray-800 hover:bg-gray-600 text-white font-semibold py-4 px-4 rounded-md w-full text-left"
            onClick={() => setEquation("2x + 4y = 28 ; 3x + 2y = 22")}
          >
            2x + 4y = 28; 3x + 2y = 22
          </button>
          <p className="text-gray-500 text-md font-light text-left">
            Klik untuk memasukkan contoh persamaan
          </p>
        </div>
      )}

      {result && <Solution result={result} />}
    </div>
  );
};

export default Calculator;
