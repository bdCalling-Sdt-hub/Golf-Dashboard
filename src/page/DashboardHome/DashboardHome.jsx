import IncomeGraphChart from "../../component/Main/Dashboard/IncomeGraphChart";
import Piechart from "../../component/Main/Dashboard/Piechart";
import RecentTransactions from "../../component/Main/Dashboard/RecentTransactions";
import Status from "../../component/Main/Dashboard/Status";
const DashboardHome = () => {

  const getUser = JSON.parse(localStorage.getItem("persist:auth"));
  // console.log(getUser?.user);

  if (getUser?.user == null) {
    return window.location.href = "/auth";
  }
  if (!getUser?.user) {
    return window.location.href = "/auth";
  }
  return (
    <section>
      <h1 className="text-2xl font-semibold py-3 px-3">Overview</h1>
      <div className="px-3">
        <Status />
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 pt-3">
          <IncomeGraphChart />
          <Piechart />
        </div>
        <RecentTransactions />
      </div>
    </section>
  );
};

export default DashboardHome;
