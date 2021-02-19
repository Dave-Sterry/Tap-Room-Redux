import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  switch(action.type){
    case c.SELECT_KEG:
      return action.keg;
    case c.DESELECT_KEG:
      return null;
    default:
      return state;
  }
}