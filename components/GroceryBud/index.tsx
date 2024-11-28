"use client";

import Form from "@/components/GroceryBud/Form";
import ItemList from "@/components/GroceryBud/ItemList";

import { GroceryBudContextProvider } from "@/components/GroceryBud/context/GroceryBudContext";

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
