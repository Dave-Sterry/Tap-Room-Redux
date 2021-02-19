import * as a from './../../actions';
import * as c from './../../actions/ActionTypes';

describe("post list actions", () => {
  it('DELETE_KEG should create DELETE_KEG action', () =>{
    expect(a.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(a.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(a.addKeg({ name: 'Street Cider', brand: 'VanBeer', price: 3,alcoholContent: "5.3", beer: 23, id: 1})).toEqual({
      type: c.ADD_KEG,
      name: 'Street Cider',
      brand: 'VanBeer',
      price: 3,
      alcoholContent: "5.3",
      beer: 23,
      id: 1
    });
  });
});