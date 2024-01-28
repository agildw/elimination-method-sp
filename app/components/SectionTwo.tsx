interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
}

const TeamMember = ({ name, title, image }: TeamMemberProps) => {
  return (
    <div className="w-full md:w-6/12 lg:w-4/12 mb-6 px-6 sm:px-6 lg:px-4">
      <div className="flex flex-col">
        <img
          className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
          src={image}
        />

        <div className="text-center mt-6">
          <h1 className="text-gray-900 text-xl font-bold mb-1">{name}</h1>

          <div className="text-gray-700 font-light mb-2">{title}</div>
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
            title="Founder & Specialist"
            image="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
          />
          <TeamMember
            name="Ridho"
            title="Tired & M. Specialist"
            image="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80"
          />

          <TeamMember
            name="Alhamdi Rifai"
            title="Team Memeber"
            image="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
