"use client";

import Form from "./Form";
import ItemList from "./ItemList";

import { GroceryBudContextProvider } from "./context/GroceryBudContext";

function GroceryBud() {
    return (
        <section className="section-center">
            <GroceryBudContextProvider>
                <Form />
                <ItemList />
            </GroceryBudContextProvider>
        </section>
    );
}
export default GroceryBud;
