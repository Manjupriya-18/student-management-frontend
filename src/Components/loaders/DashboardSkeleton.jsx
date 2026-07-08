const DashboardSkeleton = () => {
  return (
    <div className="animate-pulse">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-gray-300 rounded-xl h-32"></div>

        <div className="bg-gray-300 rounded-xl h-32"></div>

        <div className="bg-gray-300 rounded-xl h-32"></div>

      </div>

    </div>
  );
};

export default DashboardSkeleton;