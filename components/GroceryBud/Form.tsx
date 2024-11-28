"use client";

import { useContext, useState } from "react";
import { GroceryBudContext } from ".";

function Form() {
    const { addItem } = useContext(GroceryBudContext);

    const [newItemName, setNewItemName] = useState<string>("");

    // console.log(`Form`);

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
