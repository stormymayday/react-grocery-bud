"use client";

import { useState } from "react";
import Form from "./Form";

function GroceryBud() {
    const [items, setItems] = useState<string[]>([]);

    return (
        <section className="section-center">
            <Form items={items} setItems={setItems} />
            {items.length > 0 &&
                items.map((item, index) => {
                    return (
                        <div key={index}>
                            <h4>{item}</h4>
                            <button
                                type="button"
                                className="btn"
                                onClick={() =>
                                    setItems(items.filter((i) => i !== item))
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
