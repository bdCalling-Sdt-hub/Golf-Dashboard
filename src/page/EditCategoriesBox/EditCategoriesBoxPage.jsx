import EditCategoriesBox from "../../component/Main/EditCategoriesBox/EditCategoriesBox"
const EditCategoriesBoxPage = () => {
  const getUser = JSON.parse(localStorage.getItem("persist:auth"));
  // console.log(getUser?.user);
  if (getUser?.user == null) {
    return window.location.href = "/auth";
  }
  if (!getUser?.user) {
    return window.location.href = "/auth";
  }

  return <EditCategoriesBox />
}

export default EditCategoriesBoxPage
