"use client";
import { useState } from "react";
import gaussianElimination from "../utils/solver";

const Calculator = () => {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState<number[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setError("");
    setResult(null);
    setLoading(true);
    try {
      const res = gaussianElimination(equation);
      setResult(res);
    } catch (e: any) {
      console.log(e);
      setError("Persamaan tidak valid");
    }
    setLoading(false);
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
      {!result && !error && !loading && (
        <div className="flex flex-col space-y-4">
          <p className="text-gray-500 text-2xl font-bold text-left">
            Contoh (Klik untuk memasukkan)
          </p>
          <button
            className="text-lg bg-gray-800 hover:bg-gray-600 text-white font-bold py-4 px-4 rounded-lg w-full text-left tracking-widest"
            onClick={() => setEquation("x+2y-3z=1;2x-y+z=1;x+4y-2z=9")}
          >
            x+2y-3z=1;2x-y+z=1;x+4y-2z=9
          </button>
        </div>
      )}

      {loading && <div className="skeleton h-32 w-full" />}

      {result && (
        <div className="flex flex-col space-y-4">
          <p className="text-gray-500 text-2xl font-bold text-left">Hasil</p>
          <code className="w-full flex-col items-center rounded-lg bg-gray-800 p-4 pl-6 text-left text-sm text-white sm:text-base">
            <span className="flex gap-4">
              <span>
                {/* <span className="text-gray-100 text-xl">
                [{result.join(", ")}]{" "}
              </span> */}
                {result.map((res, i) => (
                  <span key={i} className="text-gray-100 text-xl">
                    x<sub>{i + 1}</sub> = {res}
                    <br />
                  </span>
                ))}
              </span>
            </span>
          </code>
        </div>
      )}
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
    </div>
  );
};

export default Calculator;
