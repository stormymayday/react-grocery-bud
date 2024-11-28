"use client";

import { useContext } from "react";
import { GroceryBudContext } from "@/components/GroceryBud/context/GroceryBudContext";
import { ItemType } from "@/types";

interface ItemProps {
    item: ItemType;
}

function Item({ item }: ItemProps) {
    const { removeItem, editItem } = useContext(GroceryBudContext);
    // console.log(`Item`);
    return (
        <article className="single-item">
            <input
                type="checkbox"
                checked={item.completed}
                onChange={() => editItem(item.id)}
            />
            <p
                style={{
                    textDecoration: item.completed ? "line-through" : "none",
                    textTransform: "capitalize",
                }}
            >
                {item.name}
            </p>
            <button
                type="button"
                className="btn remove-btn"
                onClick={() => removeItem(item.id)}
            >
                delete
            </button>
        </article>
    );
}
export default Item;
