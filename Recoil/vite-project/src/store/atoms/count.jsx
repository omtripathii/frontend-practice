import { atom, selector } from "recoil";

// export const countAtom = atom({
//   key: "countAtom",
//   default: 0,
// });

export const titleAtom = atom({
  key: "titleAtom",
  default: "",
});
export const descriptionAtom = atom({
  key: "descriptionAtom",
  default: "",
});

export const todosAtom = atom({
  key: "todosAtom",
  default: [],
});
export const filteredTodosAtom = atom({
  key: "filteredTodosAtom",
  default: [],
});

export const searchAtom = atom({
  key: "searchAtom",
  default: "",
});
export const filteredList = selector({
  key: "filteredList",
  get: ({ get }) => {
    const toSearch = get(searchAtom);
    const list = get(todosAtom);
    if (!toSearch) return get(todosAtom);

    const newList = list.filter((item) => {
      return item.title.includes(toSearch);
    });
    return newList;
  },
});
