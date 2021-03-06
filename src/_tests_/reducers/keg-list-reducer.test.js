import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from '../../actions/ActionTypes';


describe('kegListReducer', () => {

  let action;
  const kegData = {
  name: 'Street Cider',
  brand: 'VanBeer',
  price: 3,
  alcoholContent: "5.3",
  beer: 23,
  id: 1
}

const currentState ={
  1:{
    name: 'Street Cider',
    brand: 'VanBeer',
    price: 3,
    alcoholContent: "5.3",
    beer: 23,
    id: 1
  },
  2:{
    name: 'Dopple Impact',
    brand: 'VanBeer',
    price: 4,
    alcoholContent: "6.8",
    beer: 120,
    id: 1
  }
}

test('Should successfully add new keg data to masterKegList', () => {
  const {name, brand, price, alcoholContent, beer, id} = kegData;
  action = {
    type: c.ADD_KEG, 
    name: name, 
    brand: brand, 
    price: price, 
    alcoholContent: alcoholContent, 
    beer: beer, 
    id: id, 
  };

  expect (kegListReducer({}, action)).toEqual({
    [id] : {
      name: name, 
      brand: brand, 
      price: price, 
      alcoholContent: alcoholContent, 
      beer: beer, 
      id: id, 
    }
  });
});

test("should delete a keg", () => {
  action = {
    type: c.DELETE_KEG,
    id: 1
  };
  expect(kegListReducer(currentState, action)).toEqual({
    2:{
      name: 'Dopple Impact',
      brand: 'VanBeer',
      price: 4,
      alcoholContent: "6.8",
      beer: 120,
      id: 1
    }
  });
});
  test("should return default state if there is no action type passed into the reducer", () => {
    expect(kegListReducer({}, {type: null})).toEqual({});
  });
});