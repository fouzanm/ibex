import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils';

const useAuth = () => {
    const [cookies, setCookie, removeCookie] = useCookies([]);
    const navigate = useNavigate();
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
    useEffect(() => {
        verifyUser().then(() => {
            console.log("DONE")
        })
    }), [cookies, navigate, removeCookie];
};

export default useAuth;