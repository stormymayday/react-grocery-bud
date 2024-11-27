import { ItemType } from "@/types";
import Item from "./Item";

interface ItemListProps {
    items: ItemType[];
    removeItem: (itemId: string) => void;
}

function ItemList({ items, removeItem }: ItemListProps) {
    return (
        <div className="items">
            {items.length > 0 &&
                items.map((item) => {
                    return (
                        <Item
                            key={item.id}
                            item={item}
                            removeItem={removeItem}
                        />
                    );
                })}
        </div>
    );
}
export default ItemList;
