"use client";

import { useState } from "react";
import Form from "./Form";
import ItemList from "./ItemList";
import { ItemType } from "@/types";
import { v4 as uuidv4 } from "uuid";

function GroceryBud() {
    const [items, setItems] = useState<ItemType[]>([]);

    const addItem = (itemName: string): void => {
        const newItem: ItemType = {
            id: uuidv4(),
            name: itemName,
            completed: false,
        };
        setItems([...items, newItem]);
    };

    const removeItem = (itemId: string): void => {
        const newItems = items.filter((item) => item.id !== itemId);
        setItems(newItems);
    };

    return (
        <section className="section-center">
            <Form addItem={addItem} />
            <ItemList items={items} removeItem={removeItem} />
        </section>
    );
}
export default GroceryBud;
