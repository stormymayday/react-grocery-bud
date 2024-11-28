import { ItemType } from "@/types";
import Item from "./Item";

interface ItemListProps {
    items: ItemType[];
    removeItem: (itemId: string) => void;
    editItem: (itemId: string) => void;
}

function ItemList({ items, removeItem, editItem }: ItemListProps) {
    return (
        <div className="items">
            {items.length > 0 &&
                items.map((item) => {
                    return (
                        <Item
                            key={item.id}
                            item={item}
                            removeItem={removeItem}
                            editItem={editItem}
                        />
                    );
                })}
        </div>
    );
}
export default ItemList;
