export default function quantity(itemId, numItems) {
    const getItems = localStorage.getItem("jackets");
    const parsedItem = JSON.parse(getItems);
  
    console.log(parsedItem);
    const updatedList = parsedItem
      .map((item, i) => {
        if (itemId === item.id) {
          if (numItems <= 0) {
            return null;
          } else {
            item.quantity = numItems;
            return item;
          }
        } else {
          return item;
        }
      })
      .filter((item) => item !== null);
  
    localStorage.setItem("jackets", JSON.stringify(updatedList));
  }

