import * as a from './../../actions';

describe("post list actions", () => {
  it('DELETE_KEG should create DELETE_KEG action', () =>{
    expect(a.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(a.toggleForm()).toEqual({
      type: "TOGGLE_FORM"
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(a.addKeg({ name: 'Street Cider', brand: 'VanBeer', price: 3,alcoholContent: "5.3", beer: 23, id: 1})).toEqual({
      name: 'Street Cider',
      brand: 'VanBeer',
      price: 3,
      alcoholContent: "5.3",
      beer: 23,
      id: 1
    });
  });
});