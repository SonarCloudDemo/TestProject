const STORAGE_KEY = "cart";

export const getCartItems = () => {
  
    const cartStorage = localStorage.getItem(STORAGE_KEY);
    return JSON.parse(cartStorage) || [];
  
};

export const addToCart = (item) => {
  const cartStorage = getCartItems();
  if(cartStorage.filter(e => e.name === item.name).length > 0){
    const itemIndex = cartStorage.findIndex(x => x.name === item.name);
    cartStorage[itemIndex].quantity += 1;
  }else{
    cartStorage.push(item);
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartStorage));
};

export const removeFromCart = (name) => {
  const cartStorage = getCartItems();
  const filteredCart = cartStorage.filter((c) => c.name !== name);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredCart));
  return filteredCart;
};
