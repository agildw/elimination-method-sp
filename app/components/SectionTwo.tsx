import Image from "next/image";

interface TeamMemberProps {
  name: string;
  title: string;
  nim: string;
  image: string;
}

const TeamMember = ({ name, title, nim, image }: TeamMemberProps) => {
  return (
    <div className="w-full md:w-6/12 lg:w-4/12 mb-6 px-6 sm:px-6 lg:px-4">
      <div className="flex flex-col">
        <Image
          alt="team member"
          width={400}
          height={400}
          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
          src={image}
        />

        <div className="text-center mt-6 space-y-1">
          <h1 className="text-gray-900 text-xl font-bold">{name}</h1>
          <div className="text-gray-700 font-light">{nim}</div>
          <div className="text-gray-500 font-semibold">{title}</div>
        </div>
      </div>
    </div>
  );
};

const SectionTwo = () => {
  return (
    <div className="flex flex-col">
      <div className="container max-w-4xl lg:max-w-6xl px-4">
        <div className="flex flex-wrap justify-center text-center mb-10">
          <div className="w-full lg:w-6/12 px-4">
            <h1 className="text-gray-900 text-4xl font-bold">Meet the Team</h1>
          </div>
        </div>

        <div className="flex flex-wrap">
          <TeamMember
            name="Agil Dwiki Yudistira"
            title="Ketua Kelompok"
            image="/profile_1.png"
            nim="41522110068"
          />
          <TeamMember
            name="Alhamdi Rifai"
            title="Anggota Kelompok"
            image="/profile_2.png"
            nim="41522110035"
          />

          <TeamMember
            name="Ridho Pangestu"
            title="Anggota Kelompok"
            image="/profile_3.png"
            nim="41522110041"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
