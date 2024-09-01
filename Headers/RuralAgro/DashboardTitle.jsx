const DashboardTitle = ({ main, sub }) => {
  return (
    <div className="text-center md:pt-7 py-4 bg-black bg-opacity-80">
      <h2 className="text-2xl md:text-5xl font-semibold text-yellow-500 py-2 md:py-3">
        {main}
      </h2>
      <h5 className="text-sm md:text-xl font-normal text-white py-1 md:py-3">
        {sub}
      </h5>
    </div>
  );
};

export default DashboardTitle;
