import { useEffect } from "react";
import {useCookies} from "react-cookie";
import style from "./Home.module.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils";

const Home = () => {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies([]);

    useEffect(() => {
        const verifyUser = async () => {
            if (!cookies.ibex) navigate('/auth');
            else {
                const {data} = await axios.post(BASE_URL, {}, {withCredentials: true});
                if (!data.status) {
                    removeCookie("ibex");
                    navigate("/auth");
                };
            };
        };
        verifyUser();
    }, [cookies, navigate, removeCookie]);
    return (
        <>Home</>
    )
};

export default Home;