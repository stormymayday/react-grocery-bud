"use client";

import { useState, useEffect, createContext } from "react";
import Form from "./Form";
import ItemList from "./ItemList";
import { ItemType } from "@/types";
import { v4 as uuidv4 } from "uuid";
import { setLocalStorage, getLocalStorage } from "./utils";

export const GroceryBudContext = createContext<{
    items: ItemType[];
    addItem: (itemName: string) => void;
    removeItem: (itemId: string) => void;
    editItem: (itemId: string) => void;
}>({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    editItem: () => {},
});

function GroceryBud() {
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
        <section className="section-center">
            <GroceryBudContext.Provider
                value={{ items, addItem, removeItem, editItem }}
            >
                <Form />
                <ItemList />
            </GroceryBudContext.Provider>
        </section>
    );
}
export default GroceryBud;
