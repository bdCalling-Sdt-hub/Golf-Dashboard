import Users from '../../component/Main/Users/Users'

const UsersPage = () => {
  const getUser = JSON.parse(localStorage.getItem("persist:auth"));
  // console.log(getUser?.user);

  if (getUser?.user == null) {
    return window.location.href = "/auth";
  }
  if(!getUser?.user){
    return window.location.href = "/auth";
  }
  
  return <Users />
}

export default UsersPage
