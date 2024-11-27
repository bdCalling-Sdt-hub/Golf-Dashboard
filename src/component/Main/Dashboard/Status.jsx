import { FaDatabase } from "react-icons/fa";
import { PiCurrencyCircleDollar, PiUsers, PiUsersThreeFill } from "react-icons/pi";
// import { useGetDashboardStatusQuery } from "../../../redux/features/dashboard/dashboardApi";
const Status = () => {
  // const {} = useGetDashboardStatusQuery();
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-5">
      <div className="flex justify-between items-center p-5 rounded-lg bg-[#fef8e8]">
        <div className="size-20 p-3 flex justify-center items-center rounded-full bg-primary text-white bg-[#f1bd19] ">
          <PiUsersThreeFill className="size-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-center text-4xl font-semibold text-[#222222]">
          120
          </h1>
          <h1>Total User</h1>
        </div>
      </div>
      <div className="flex justify-between items-center p-5 rounded-lg bg-[#fef8e8]">
        <div className="size-20 p-3 flex justify-center items-center rounded-full bg-primary text-white bg-[#f1bd19] ">
          <PiCurrencyCircleDollar className="size-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-center text-4xl font-semibold text-[#222222]">
          $2.5k
          </h1>
          <h1>Total Donation </h1>
        </div>
      </div>
      <div className="flex justify-between items-center p-5 rounded-lg bg-[#fef8e8]">
        <div className="size-20 p-3 flex justify-center items-center rounded-full bg-primary text-white bg-[#f1bd19] ">
        <FaDatabase className="size-8" /> 
        </div>
        <div className="space-y-2">
          <h1 className="text-center text-4xl font-semibold text-[#222222]">
            12
          </h1>
          <h1>Categorye</h1>
        </div>
      </div>
      <div className="flex justify-between items-center p-5 rounded-lg bg-[#fef8e8]">
        <div className="size-20 p-3 flex justify-center items-center rounded-full bg-primary text-white bg-[#f1bd19] ">
        <PiUsers className="size-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-center text-4xl font-semibold text-[#222222]">
            1200
          </h1>
          <h1>Recent User</h1>
        </div>
      </div>
    </div>
  );
};

export default Status;
