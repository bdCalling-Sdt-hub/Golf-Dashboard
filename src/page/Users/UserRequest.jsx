import RecentTransactions from '../../component/Main/Dashboard/RecentTransactions'
 
const UsersRequest = () => {

  const getUser = JSON.parse(localStorage.getItem("persist:auth"));
  // console.log(getUser?.user);

  if (getUser?.user == null) {
    return window.location.href = "/auth";
  }
  if(!getUser?.user){
    return window.location.href = "/auth";
  }

  return <RecentTransactions/>
}

export default UsersRequest
