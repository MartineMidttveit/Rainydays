export default function quantity(item, numItems) {
  const getItems = localStorage.getItem("jackets");
  const parsedItem = JSON.parse(getItems);

  const updatedList = parsedItem
    .map((pItem) => {
      if (item.id == pItem.id) {
        if (numItems <= 0) {
          return null;
        } else {
          pItem.quantity = numItems;
          return pItem;
        }
      } else {
        return pItem;
      }
    })
    .filter((pItem) => pItem !== null);

  localStorage.setItem("jackets", JSON.stringify(updatedList));
}
