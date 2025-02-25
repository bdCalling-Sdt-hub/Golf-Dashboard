import EditPersonalInfo from "../../component/Main/EditPersonalInfo/EditPersonalInfo"

const EditPersonalInformationPage = () => {

  const getUser = JSON.parse(localStorage.getItem("persist:auth"));
  // console.log(getUser?.user);
  if (getUser?.user == null) {
    return window.location.href = "/auth";
  }
  if (!getUser?.user) {
    return window.location.href = "/auth";
  }

  return <EditPersonalInfo />
}

export default EditPersonalInformationPage
