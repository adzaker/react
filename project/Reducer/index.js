import {combineReducers} from "redux";
import {TOGGLE_ACTIVE, FILTER, FILTER_DETAILS, LAST_NAME} from '../Constants'

let gridRecords = [
    {firstName: "John", lastName: "Doe", active: false, id: 1},
    {firstName: "Mary", lastName: "Moe", active: false, id: 2},
    {firstName: "Peter", lastName: "Noname", active: true, id: 3}
  ],
  detailsRecords = [{
    id:1,
    name:"John Doe",
    about:"Nice guy",
    hobby:"Likes drinking wine",
    skills:["html", "javascript", "redux"]
  },{
    id:2,
    name:"Mary Moe",
    about:"Cute girl",
    hobby:"Likes playing xbox whole days long",
    skills:["Fortran", "Lua", "R#"]
  },{
    id:3,
    name:"Peter Noname",
    about:"Ab Cd",
    hobby:"Whole javascript long xbox ",
    skills:["redux", "html", "girl"]
  }];


export function grid(state = gridRecords, action){
  let newState;
  switch (action.type) {
    case TOGGLE_ACTIVE:
      newState = [...state];
      newState[action.value].active = !newState[action.value].active;
      return newState;
    case FILTER:
      newState = [...state];
      newState = newState.filter((record) => record.firstName.toUpperCase().includes(action.value.toUpperCase()));
      return action.value === "" ? gridRecords : newState;
    case LAST_NAME:
      newState = [...state];
      newState[action.index].lastName = action.value;
      return newState;
    default:
      return state
  }
}

export function details(state = detailsRecords, action){
    switch (action.type) {
    case FILTER_DETAILS:
      console.log("FILTER_DETAILS");
      let newState = detailsRecords;
      console.log(action.value);
      if (action.value) {
        newState = newState.filter((record) => {
          return record.id == action.value;
        })
        console.log(newState);
      } else {
        newState = detailsRecords;
      }
      return newState;
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  details,
  grid
});
