"use client";

import { useState, useEffect } from "react";
import Form from "./Form";
import ItemList from "./ItemList";
import { ItemType } from "@/types";
import { v4 as uuidv4 } from "uuid";

const setLocalStorage = (items: ItemType[]) => {
    localStorage.setItem("list", JSON.stringify(items));
};

const getLocalStorage = (): ItemType[] => {
    const list = localStorage.getItem("list");
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
};

function GroceryBud() {
    const [items, setItems] = useState<ItemType[]>([]);

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

    useEffect(() => {
        setItems(getLocalStorage());
    }, []);

    return (
        <section className="section-center">
            <Form addItem={addItem} />
            <ItemList items={items} removeItem={removeItem} />
        </section>
    );
}
export default GroceryBud;
