import { createContext, useContext, useState } from "react"
import { RenderMenu, RenderRoutes } from "./RenderNavigation";
//import { useAuth0 } from "@auth0/auth0-react";
export const AuthWrapper = () => {
    //const { user } = useAuth0();
    return (
        <>
            {/* <RenderMenu /> */}
            <RenderRoutes />
        </>
    )

}




