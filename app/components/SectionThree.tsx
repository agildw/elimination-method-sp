import Image from "next/image";

interface SectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const Section = ({
  title,
  description,
  image,
  reverse = false,
}: SectionProps) => {
  return (
    <div
      className={`flex flex-col space-y-12 lg:flex-row lg:mx-auto lg:space-y-0 lg:space-x-4 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <Image
        src={image}
        width={1920}
        height={1080}
        alt="Algebra"
        className="object-cover h-96 w-full object-left-bottom lg:w-1/2 xl:h-[30rem] lg:rounded-2xl"
      />
      <div className="flex flex-col items-center justify-center space-y-8 px-8">
        <h2 className="font-bold text-3xl">{title}</h2>
        <p className="text-gray-500 text-2xl font-medium">{description}</p>
      </div>
    </div>
  );
};

const SectionThree = () => {
  return (
    <div className="flex flex-col space-y-20 max-w-6xl">
      <Section
        title="Apa itu Gaussian Elimination Method With Back Substitution?"
        description="Metode Eliminasi Gaussian dengan Substitusi Mundur adalah suatu
            algoritma untuk menyelesaikan sistem persamaan linear menggunakan
            matriks dan bentuk baris eselon. Ini melibatkan dua tahap utama,
            yaitu eliminasi dan substitusi mundur"
        image="/algebra.jpg"
      />
      <Section
        title="Tahap eliminasi"
        description="Pada tahap ini, matriks diubah menjadi bentuk segitiga atas dengan melakukan operasi baris elementer. Ini dilakukan dengan cara mengurangkan atau mengalikan baris tertentu untuk mencapai bentuk yang diinginkan."
        image="/algebra.jpg"
        reverse
      />
      <Section
        title="Tahap substitusi mundur"
        description="Setelah matriks berada dalam bentuk segitiga atas, nilai variabel dihitung dengan menggantikan nilai variabel dari persamaan paling bawah ke persamaan paling atas."
        image="/algebra.jpg"
      />

      {/* <div className="flex flex-col space-y-12 lg:flex-row-reverse lg:mx-auto lg:space-y-0 lg:space-x-4">
        <Image
          src="/algebra.jpg"
          width={1920}
          height={1080}
          alt="Algebra"
          className="object-cover h-96 w-full object-left-bottom lg:w-1/2 xl:h-[30rem] lg:rounded-2xl"
        />
        <div className="flex flex-col items-center justify-center space-y-8 px-8">
          <h2 className="font-bold text-3xl">
            Apa itu Gaussian Elimination Method With Back Substitution?
          </h2>
          <p className="text-gray-500 text-2xl font-medium">
            Metode Eliminasi Gaussian dengan Substitusi Mundur adalah suatu
            algoritma untuk menyelesaikan sistem persamaan linear menggunakan
            matriks dan bentuk baris eselon. Ini melibatkan dua tahap utama,
            yaitu eliminasi maju dan substitusi mundur
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-12 lg:flex-row lg:mx-auto lg:space-y-0 lg:space-x-4">
        <Image
          src="/algebra.jpg"
          width={1920}
          height={1080}
          alt="Algebra"
          className="object-cover h-96 w-full object-left-bottom lg:w-1/2 xl:h-[30rem] 2xl:h-[36rem] "
        />
        <div className="flex flex-col items-center justify-center space-y-8 px-8">
          <h2 className="font-bold text-3xl">
            Apa itu Gaussian Elimination Method With Back Substitution?
          </h2>
          <p className="text-gray-500 text-2xl font-medium">
            Metode Eliminasi Gaussian dengan Substitusi Mundur adalah suatu
            algoritma untuk menyelesaikan sistem persamaan linear menggunakan
            matriks dan bentuk baris eselon. Ini melibatkan dua tahap utama,
            yaitu eliminasi maju dan substitusi mundur
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default SectionThree;
