import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from '../../actions';

describe('selectedKegReducer', () => {
  let action 
  const keg = {
      name: 'Street Cider',
      brand: 'VanBeer',
      price: 3,
      alcoholContent: "5.3",
      beer: 23,
      id: 1
  }
  test('should return default state if no type is recognized', () =>{
    expect(selectedKegReducer({}, {type:null})).toEqual({})
  });

  test('should return selected keg when SELECT_KEG is called', () => {
    const action = a.selectKeg(keg);
    expect(selectedKegReducer({}, action)).toEqual(keg);
  });
})

