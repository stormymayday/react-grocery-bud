import { ItemType } from "@/types";

export const setLocalStorage = (items: ItemType[]) => {
    localStorage.setItem("list", JSON.stringify(items));
};

export const getLocalStorage = (): ItemType[] => {
    const list = localStorage.getItem("list");
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
};
