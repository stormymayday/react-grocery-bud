"use client";

import { useState } from "react";
import Form from "./Form";
import { ItemType } from "@/types";
import { v4 as uuidv4 } from "uuid";

function GroceryBud() {
    const [items, setItems] = useState<ItemType[]>([]);

    const addItem = (itemName: string) => {
        const newItem: ItemType = {
            id: uuidv4(),
            name: itemName,
            completed: false,
        };
        setItems([...items, newItem]);
    };

    return (
        <section className="section-center">
            <Form addItem={addItem} />
            {items.length > 0 &&
                items.map((item) => {
                    return (
                        <div key={item.id}>
                            <h4>{item.name}</h4>
                            <button
                                type="button"
                                className="btn"
                                onClick={() =>
                                    setItems(
                                        items.filter((i) => i.id !== item.id)
                                    )
                                }
                            >
                                delete
                            </button>
                        </div>
                    );
                })}
        </section>
    );
}
export default GroceryBud;
