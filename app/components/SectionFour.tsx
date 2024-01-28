const MathEquation = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-gray-500 text-md font-medium text-center">{children}</p>
  );
};

const ExplanationText = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-gray-500 text-md font-medium">{children}</p>;
};

const SectionFour = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-8">
      <h2 className="text-4xl font-bold">Contoh Soal</h2>
    </div>
  );
};

export default SectionFour;
