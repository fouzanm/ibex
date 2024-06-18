import useAuth from "../../hooks/useAuth";
import style from "./Home.module.css"

const Home = () => {
    useAuth();

    return (
        <>Home</>
    )
};

export default Home;