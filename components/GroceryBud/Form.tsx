"use client";

import { useState } from "react";

interface FormProps {
    addItem: (itemName: string) => void;
}

function Form({ addItem }: FormProps) {
    const [newItemName, setNewItemName] = useState<string>("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (!newItemName) return;
                addItem(newItemName);
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
