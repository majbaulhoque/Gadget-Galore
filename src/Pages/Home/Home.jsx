import { useLoaderData } from "react-router-dom";
import Banner from "../../Componet/Header/Banner/Banner";
import Phones from "../../Componet/Phones/Phones";


const Home = () => {
    const phones = useLoaderData()
    return (
        <div className="mt-5">
            <Banner></Banner>
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;