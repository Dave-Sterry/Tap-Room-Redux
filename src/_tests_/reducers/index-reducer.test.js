import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import kegListReducer from '../../reducers/keg-list-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  
  test('should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type:null})).toEqual({
      masterKegList:{},
      formVisibleOnPage: false
    });
  });

  test('check that initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, {type: null }));
  });

  test('check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('check that ADD_KEG action works for kegListReducer and root reducer', () => {
    const action = {
      type: "ADD_KEG",
      name: 'Street Cider',
      brand: 'VanBeer',
      price: 3,
      alcoholContent: "5.3",
      beer: 23,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });

  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: "TOGGLE_FORM"
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

});