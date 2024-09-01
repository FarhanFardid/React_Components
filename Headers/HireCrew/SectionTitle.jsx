const Title = ({ main, sub }) => {
  return (
    <div className="text-center p-2 md:p-5 md:w-[900px] mx-auto md:pt-20">
      <h2 className="text-2xl md:text-5xl font-semibold  pb-1 md:pb-7">
        {main}
      </h2>
      <h5 className="text-sm md:text-lg font-medium  py-1 md:py-3">{sub}</h5>
    </div>
  );
};

export default Title;
