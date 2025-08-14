import MainNavigation from "../components/MainNavigation";
import {Outlet} from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <MainNavigation/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}