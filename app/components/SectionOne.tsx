"use client";
import Image from "next/image";

const SectionOne = () => {
  const handleClickScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-8 max-w-screen lg:max-w-3xl mt-10">
      <h1 className="text-5xl font-extrabold">
        Gaussian Elimination Method With Back Substitution
      </h1>

      <Image
        src="/gauss.jpg"
        width={600}
        height={600}
        alt="gauss"
        // fill
        className="rounded-3xl w-full object-cover max-h-48 md:max-h-96"
      />
      <p className="text-gray-400 font-base text-sm mt-4 text-center md:max-w-md">
        Eliminasi Gauss adalah algoritma yang digunakan untuk menyelesaikan
        sistem persamaan linear
      </p>
      <button
        className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
        onClick={handleClickScroll}
      >
        Kalkulator
      </button>
    </div>
  );
};

export default SectionOne;
