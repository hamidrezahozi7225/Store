export const trimTitle = (title) => {
  const newTitle = title.split(" ");
  return `${newTitle[0]} ${newTitle[1]}`;
};

export const AddPlus = (state, id) => {
  const result = !!state.items.find((item) => item.id === id);
  return result;
};

export const DeleteDec = (state, id) => {
  const index = state.items.findIndex((item) => item.id === id);

  if (index === -1) {
    return false;
  }

  return state.items[index].quantity;
};
