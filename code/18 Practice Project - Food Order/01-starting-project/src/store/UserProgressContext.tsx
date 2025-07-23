import {createContext, type ReactElement, type ReactNode, useState} from "react";
import type {UserProgress, UserProgressContextType} from "../types";

export const UserProgressContext = createContext<UserProgressContextType>({
    progress: '',
    showCart: () => {
    },
    hideCart: () => {
    },
    showCheckout: () => {
    },
    hideCheckout: () => {
    },
})

export default function UserProgressContextProvider({children}: { children: ReactNode }): ReactElement {
    const [userProgress, setUserProgress] = useState<UserProgress>('')

    const context = {
        progress: userProgress,
        showCart: () => setUserProgress('cart'),
        hideCart: () => setUserProgress(''),
        showCheckout: () => setUserProgress('checkout'),
        hideCheckout: () => setUserProgress(''),
    }

    return (
        <UserProgressContext.Provider value={context}>
            {children}
        </UserProgressContext.Provider>
    );
}

