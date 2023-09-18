// 

export default function quantity(itemId, numItems) {
    const getItems = localStorage.getItem("jackets");
    const parsedItem = JSON.parse(getItems);


    parsedItem.find(item => {
        
        if (itemId === item.id) {
            item.quantity = numItems;

        
        }
    })
 
    localStorage.setItem("cartItems", JSON.stringify(updatedList));
    location.reload();
  };


