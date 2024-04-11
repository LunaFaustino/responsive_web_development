import { useRouter } from "next/router";
import { useEffect } from "react";

const dashboard: React.FC = () => {

    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if(!isLoggedIn){
            router.push("/");
        }
    })

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.setItem("error","0");
        router.push("/");

    }

    return(
        <>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default dashboard;