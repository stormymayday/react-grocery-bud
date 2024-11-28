import Item from "./Item";
import { GroceryBudContext } from ".";
import { useContext } from "react";

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
