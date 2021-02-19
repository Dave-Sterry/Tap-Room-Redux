import * as c from './ActionTypes';
export const deleteKeg = id => ({
  type:c.DELETE_KEG,
  id
});

export const toggleForm =() => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
  const {name, brand, price, alcoholContent, beer, id } = keg;
  return {
    type: c.ADD_KEG,
    name,
    brand,
    price,
    alcoholContent,
    beer,
    id 
  }
}

export const selectKeg = (keg) => ({
  type: c.SELECT_KEG,
  KEG
});

export const deselectKeg = (keg) => ({
  type: c.DESELECT_KEG,
  KEG
});