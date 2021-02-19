import * as a from './../../actions';

describe("post list actions", () => {
  it('DELETE_KEG should create DELETE_KEG action', () =>{
    expect(a.deletePost(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });
});