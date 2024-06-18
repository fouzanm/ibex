import { useEffect, useState } from "react";
import {useCookies} from "react-cookie";
import style from "./Home.module.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils";
import useAuth from "../../hooks/useAuth";

const Home = () => {
    useAuth();

    return (
        <>Home</>
    )
};

export default Home;