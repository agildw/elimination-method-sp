import Image from "next/image";

const SectionOne = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-8 max-w-screen lg:max-w-3xl xl:mt-20">
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
      <p className="text-gray-400 font-semibold text-sm mt-4 text-center md:max-w-xs">
        Metode Eliminasi menyelesaikan persamaan dengan cara menghilangkan salah
        satu dari variabel yang ada
      </p>
    </div>
  );
};

export default SectionOne;
