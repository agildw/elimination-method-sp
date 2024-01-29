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
      className={`flex flex-col  space-y-12 lg:flex-row lg:mx-auto lg:space-y-0 lg:space-x-4 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <Image
        src={image}
        width={1920}
        height={1080}
        alt="Algebra"
        className="object-cover h-96 p-4 rounded-[2.3rem] w-full object-left-bottom  lg:p-6 lg:w-1/2 xl:h-[30rem]"
      />

      <div className="flex flex-col justify-center space-y-8 px-8">
        <h2 className="font-bold text-3xl text-left">{title}</h2>
        <p className="text-gray-500 text-2xl font-medium">{description}</p>
      </div>
    </div>
  );
};

const SectionFour = () => {
  return (
    // <div className="bg-gray-100 flex flex-col">
    // <div className="flex flex-col space-y-20 w-full max-w-6xl">
    <div className="flex flex-col w-screen py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-20">
        <Section
          title="Tahap eliminasi maju"
          description="Pada tahap ini, matriks diubah menjadi bentuk segitiga atas dengan melakukan operasi baris elementer. Ini dilakukan dengan cara mengurangkan atau mengalikan baris tertentu untuk mencapai bentuk yang diinginkan."
          image="/vector_1.jpg"
        />
        <Section
          title="Tahap substitusi mundur"
          description="Setelah matriks berada dalam bentuk segitiga atas, nilai variabel dihitung dengan menggantikan nilai variabel dari persamaan paling bawah ke persamaan paling atas."
          image="/vector_2.jpg"
          reverse
        />
      </div>
    </div>
    // </div>
  );
};

export default SectionFour;
