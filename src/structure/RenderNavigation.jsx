import { Link, Route, Routes } from "react-router-dom";
import { navList } from "./Navigation";
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
//import { useAuth0 } from "@auth0/auth0-react";
import LogOutButton from "../pages/login/LogOutButton";

export const RenderRoutes = () => {
    //const { isAuthenticated } = useAuth0();
    const isAuthenticated=false
    const location = useLocation();
    return (
        <Routes>
            {navList.map((r, i) => {

                if (r.isPrivate && isAuthenticated) {
                    return <Route key={i} path={r.path} element={r.element} />
                } else if (!r.isPrivate) {
                    return <Route key={i} path={r.path} element={r.element} />
                } else return false
            })}
            
            {/* <Route path="*" element={<Navigate to="/LoginInButton" replace state={{ from: location }} />} /> */}
         
        </Routes>
          
    )
    
}

export const RenderMenu = () => {
    //const { user, isAuthenticated } = useAuth0();
    const isAuthenticated=false
    const MenuItem = ({ r }) => {
        return (
            <div className="menuItem"><Link to={r.path}>{r.name}</Link></div>
        )
    }
    return (
        <div className="menu">
            {navList.map((r, i) => {

                if (!r.isPrivate && r.isMenu) {
                    return (
                        <MenuItem key={i} r={r} />
                    )
                } else if (isAuthenticated && r.isMenu) {
                    return (
                        <MenuItem key={i} r={r} />
                    )
                } else return false
            })}

        </div>
    )
}

// export const RenderMenuArray = () => {
//     const { user, isAuthenticated } = useAuth0();

//     return navList.map((r, i) => {

//         if (!r.isPrivate && r.isMenu) {
//             return { key: r.path, label: r.name }

//         } else if (isAuthenticated && r.isMenu) {
//             return { key: r.path, label: r.name }

//         } else return false
//     })
// }

