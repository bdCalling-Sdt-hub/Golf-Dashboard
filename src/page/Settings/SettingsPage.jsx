import Settings from "../../component/Main/Settings/Settings"

const SettingsPage = () => {
    const getUser = JSON.parse(localStorage.getItem("persist:auth"));
    // console.log(getUser?.user);
    if (getUser?.user == null) {
        return window.location.href = "/auth";
    }
    if (!getUser?.user) {
        return window.location.href = "/auth";
    }

    return <Settings />
}

export default SettingsPage
