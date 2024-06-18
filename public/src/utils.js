import {useCookies} from "react-cookie";

const [cookies, setCookie, removeCookie] = useCookies([]);

export const BASE_URL = "http://localhost:4000";

export const verifyUser = async () => {
    if (!cookies.ibex) navigate('/auth');
    else {
        const {data} = await axios.post(BASE_URL, {}, {withCredentials: true});
        if (!data.status) {
            removeCookie("ibex");
            navigate("/auth");
        };
    };
};