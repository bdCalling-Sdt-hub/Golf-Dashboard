import PersonalInformation from "../../component/Main/PersonalInformation/PersonalInformation"

const PersonalInformationPage = () => {

  const getUser = JSON.parse(localStorage.getItem("persist:auth"));
  // console.log(getUser?.user);
  if (getUser?.user == null) {
    return window.location.href = "/auth";
  }
  if (!getUser?.user) {
    return window.location.href = "/auth";
  }


  return <PersonalInformation />
}

export default PersonalInformationPage
