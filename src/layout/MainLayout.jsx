import { Outlet } from "react-router-dom";
import NavBar from "../Componet/Header/Nav Bar/NavBar";


const MainLayout = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
            <NavBar></NavBar>
            <div className="my-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;