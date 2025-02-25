import Suggestion from "../../component/Main/Suggestion/suggestion";

const SuggestionPage = () => {

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
            <Suggestion />
        </div>
    );
};

export default SuggestionPage;