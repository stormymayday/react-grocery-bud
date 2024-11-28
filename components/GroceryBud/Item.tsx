"use client";

import { ItemType } from "@/types";

interface ItemProps {
    item: ItemType;
    removeItem: (itemId: string) => void;
    editItem: (itemId: string) => void;
}

function Item({ item, removeItem, editItem }: ItemProps) {
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
