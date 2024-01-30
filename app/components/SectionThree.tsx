import Image from "next/image";

const SectionThree = () => {
  return (
    <div className="flex flex-col space-y-12 lg:flex-row-reverse lg:mx-auto lg:space-y-0 lg:space-x-4">
      <Image
        src="/algebra.jpg"
        width={1920}
        height={1080}
        alt="Algebra"
        className="object-cover h-96 w-full object-left-bottom lg:w-1/2 xl:h-[30rem] 2xl:h-[36rem] "
      />
      <div className="flex flex-col items-center justify-center space-y-8 px-8 2xl:px-56">
        <h2 className="font-bold text-4xl">
          Apa itu Gaussian Elimination Method With Back Substitution?
        </h2>
        <p className="text-gray-500 text-2xl font-medium">
          Metode Eliminasi Gaussian dengan Substitusi Mundur adalah suatu
          algoritma untuk menyelesaikan sistem persamaan linear menggunakan
          matriks dan bentuk baris eselon. Ini melibatkan dua tahap utama, yaitu
          <span className="font-bold"> eliminasi maju</span> dan
          <span className="font-bold"> substitusi mundur</span>.
        </p>
      </div>
    </div>
  );
};

export default SectionThree;
