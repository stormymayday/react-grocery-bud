import Item from "@/components/GroceryBud/Item";
import { useContext } from "react";
import { GroceryBudContext } from "@/components/GroceryBud/context/GroceryBudContext";

function ItemList() {
    const { items } = useContext(GroceryBudContext);

    // console.log(`Item List`);

    return (
        <div className="items">
            {items.length > 0 &&
                items.map((item) => {
                    return <Item key={item.id} item={item} />;
                })}
        </div>
    );
}
export default ItemList;
