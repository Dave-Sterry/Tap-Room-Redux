export const deleteKeg = id => ({
  type:'DELETE_KEG',
  id
});

export const toggleForm =() => ({
  type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
  const {name, brand, price, alcoholContent, beer, id } = keg;
  return {
    type: "ADD_KEG",
    name: 'Street Cider',
    brand: 'VanBeer',
    price: 3,
    alcoholContent: "5.3",
    beer: 23,
    id: 1
  }
}