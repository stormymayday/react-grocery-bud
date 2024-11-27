"use client";

import { Dispatch, SetStateAction, useState } from "react";

interface FormProps {
    items: string[];
    setItems: Dispatch<SetStateAction<string[]>>;
}

function Form({ items, setItems }: FormProps) {
    const [newItemName, setNewItemName] = useState<string>("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                const newItems = [...items, newItemName];
                setItems(newItems);
                setNewItemName("");
            }}
        >
            <h4>grocery bud</h4>
            <div className="form-control">
                <input
                    className="form-input"
                    type="text"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                />
                <button type="submit" className="btn">
                    add item
                </button>
            </div>
        </form>
    );
}
export default Form;
