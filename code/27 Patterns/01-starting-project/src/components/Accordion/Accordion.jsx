import {createContext, useContext, useState} from "react";
import AccordionItem from "./AccordionItem.jsx";

const AccordionContext = createContext(null)

export const useAccordionContext = () => {
    const context = useContext(AccordionContext)
    if(!context){
        throw new Error("useAccordionContext must be used within an AccordionProvider")
    }
    return context
}

export default function Accordion({ children, classname }) {

    const [openItemId, setOpenItemId] = useState()

    const toggleItem=(id)=>{
        setOpenItemId((currentOpenItemId) =>
            currentOpenItemId === id ? null : id
        )
    }
    const contextValue = {
        openItemId,
        toggleItem
    }
    return (
        <AccordionContext.Provider value={contextValue}>
            <ul className={classname}>
                {children}
            </ul>
        </AccordionContext.Provider>

    )
}
// Static property to access AccordionItem directly from Accordion
// Used to make sure AccordionItem is always used within Accordion!
Accordion.Item = AccordionItem