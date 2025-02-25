import Donation from "../../component/Main/Donation/Donation";

const DonationPage = () => {

    const getUser = JSON.parse(localStorage.getItem("persist:auth"));
    // console.log(getUser?.user);
    if (getUser?.user == null) {
        return window.location.href = "/auth";
    }
    if (!getUser?.user) {
        return window.location.href = "/auth";
    }


    return (
        <div>
            <Donation />
        </div>
    );
};

export default DonationPage;