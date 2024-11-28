import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
    useEffect,
} from "react";
import { ItemType } from "@/types";
import { v4 as uuidv4 } from "uuid";
import {
    setLocalStorage,
    getLocalStorage,
} from "@/components/GroceryBud/utils";

const GroceryBudContext = createContext<{
    items: ItemType[];
    setItems: Dispatch<SetStateAction<ItemType[]>>;
    addItem: (itemName: string) => void;
    removeItem: (itemId: string) => void;
    editItem: (itemId: string) => void;
}>({
    items: [],
    setItems: () => {},
    addItem: () => {},
    removeItem: () => {},
    editItem: () => {},
});

type GroceryBudContextProviderProps = {
    children: ReactNode;
};

const GroceryBudContextProvider = ({
    children,
}: GroceryBudContextProviderProps) => {
    const [items, setItems] = useState<ItemType[]>([]);

    useEffect(() => {
        setItems(getLocalStorage());
    }, []);

    const addItem = (itemName: string): void => {
        const newItem: ItemType = {
            id: uuidv4(),
            name: itemName,
            completed: false,
        };
        const newItems = [...items, newItem];
        setItems(newItems);
        setLocalStorage(newItems);
    };

    const removeItem = (itemId: string): void => {
        const newItems = items.filter((item) => item.id !== itemId);
        setItems(newItems);
        setLocalStorage(newItems);
    };

    const editItem = (itemId: string): void => {
        const newItems = items.map((item) => {
            if (item.id === itemId) {
                const newItem = { ...item, completed: !item.completed };
                return newItem;
            }
            return item;
        });
        setItems(newItems);
        setLocalStorage(newItems);
    };

    return (
        <GroceryBudContext.Provider
            value={{ items, setItems, addItem, removeItem, editItem }}
        >
            {children}
        </GroceryBudContext.Provider>
    );
};

export { GroceryBudContext, GroceryBudContextProvider };
