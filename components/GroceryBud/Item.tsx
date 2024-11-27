"use client";

import { useState } from "react";
import { ItemType } from "@/types";

interface ItemProps {
    item: ItemType;
    removeItem: (itemId: string) => void;
}

function Item({ item, removeItem }: ItemProps) {
    const [isChecked, setIsChecked] = useState<boolean>(item.completed);

    return (
        <article className="single-item">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />
            <p
                style={{
                    textDecoration: isChecked ? "line-through" : "none",
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
