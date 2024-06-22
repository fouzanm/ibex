import { useEffect, useState } from "react";
import {useCookies} from "react-cookie";
import style from "./Home.module.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils";
import { IoLogOutOutline } from "react-icons/io5";

const Home = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['ibex']);
    const navigate = useNavigate();
    
    useEffect(() => {
        const verifyUser = async () => {
            if (!cookies.ibex){
                navigate('/auth');
            } else {
                try {
                    const { data } = await axios.post(BASE_URL, {}, { withCredentials: true });
                    if (!data.status) {
                        removeCookie('ibex');
                        navigate('/auth');
                    }
                } catch (error) {
                    console.error('Error verifying user', error);
                    removeCookie('ibex');
                    navigate('/auth');
                }
            };
        };
        verifyUser();
    }), [cookies, navigate, removeCookie];

    return (<>
        <div>Home</div>
        <div className={style.logout}>
            <button onClick={() => removeCookie('ibex')}>Logout <IoLogOutOutline /></button>
        </div>

    </>)
};

export default Home;