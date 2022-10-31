import { createContext, useContext, useState } from "react";

export const NavbarContext = createContext(null);

export const useNavbar = () => {
    const [variant, setThisVariant] = useState('light')

    const setVariant = (thisVariant) => {
        setThisVariant(thisVariant)
    }

    return {
        variant,
        setVariant
    }
}

export const useNavbarHooks = () => {
    const context = useContext(NavbarContext);
    if (context === undefined) {
        throw new Error("useUserContext was used outside of its Provider");
    }
    return context;
}