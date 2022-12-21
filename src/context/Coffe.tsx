import { createContext, useState } from "react";
import Coffe from "../types/Coffe";


interface CoffeContextType {
    coffes: Coffe[];
    setCoffes: (coffes: Coffe[]) => void;
}


const CoffeContext = createContext<CoffeContextType>({} as CoffeContextType);


const CoffeProvider = ({ children }: { children: React.ReactNode }) => {

    const [coffes, setCoffes] = useState<Coffe[]>([]);

    return (
        <CoffeContext.Provider value={{ coffes, setCoffes }}>
            {children}
        </CoffeContext.Provider>
    )
};


export { CoffeContext, CoffeProvider };
