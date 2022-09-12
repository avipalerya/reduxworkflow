import * as actionTypes from "./action";
const initalState = {
  persons: [],
};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Math.random(),
        name: action.personData.name,
        age: action.personData.age,
      };
      return {
        ...state,
        persons: state.persons.concat(newPerson),
      };
    case actionTypes.REMOVE_PERSON:
      return {
        ...state,
        persons: state.persons.concat(newPerson),
      };
  }
  return state;
};
export default reducer;
