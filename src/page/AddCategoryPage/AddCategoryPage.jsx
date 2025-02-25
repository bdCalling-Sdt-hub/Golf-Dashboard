import AddCategoryBox from "../../component/Main/AddCategoryBox/AddBox"



const AddCategoryPage = () => {
  const getUser = JSON.parse(localStorage.getItem("persist:auth"));
  // console.log(getUser?.user);
  if (getUser?.user == null) {
    return window.location.href = "/auth";
  }
  if (!getUser?.user) {
    return window.location.href = "/auth";
  }

  return <AddCategoryBox />
}

export default AddCategoryPage
