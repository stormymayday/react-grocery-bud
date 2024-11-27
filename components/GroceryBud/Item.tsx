import { ItemType } from "@/types";

interface ItemProps {
    item: ItemType;
    removeItem: (itemId: string) => void;
}

function Item({ item, removeItem }: ItemProps) {
    return (
        <div>
            <h4>{item.name}</h4>
            <button
                type="button"
                className="btn"
                onClick={() => removeItem(item.id)}
            >
                delete
            </button>
        </div>
    );
}
export default Item;
