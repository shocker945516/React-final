import { createStore } from "redux";
// import { createSlice, configureStore } from "@reduxjs/toolkit";

const initIssueData = [
  {
    id: 1492652302,
    title: "build: update actions/checkout digest to 7dd9e2a",
    state: "open",
    url: "https://api.github.com/repos/angular/angular/issues/48460",
    createdAt: "2022-12-12T20:02:45Z",
    updatedAt: "2022-12-13T20:02:45Z",
  },
  {
    id: 1492636893,
    title: "docs: call interval methods explicitly from window",
    state: "open",
    url: "https://api.github.com/repos/angular/angular/issues/48459",
    createdAt: "2022-12-12T21:05:11Z",
    updatedAt: "2022-12-13T21:02:45Z",
  },
];

// const crudSlice = createSlice({
//   name: "crud",
//   issueData: initIssueData,
//   reducers: {
//     refresh(state) {
//       state.InitIssueData;
//     },
//     addNew() {},
//     edit() {},
//     remove() {},
//     searchInput() {},
//   },
// });

// const store = configureStore({
//   reducer: crudSlice.reducer,
// });

// export const crudActions = crudSlice.actions;

const IssueReducer = (state = initIssueData, action) => {
  if (action.type === "ADD_NEW") {
    return [...state, action.newData];
  }

  if (action.type === "EDIT") {
    return state.map((element) => {
      if (element.id === action.editData.id) {
        return action.editData;
      }
      return element;
    });
  }
  if (action.type === "REMOVE") {
    return [...state.filter((item) => item.id !== action.itemId)];
  }
  if (action.type === "REFRESH") {
    return state;
  }

  // if (action.type === "SEARCH") {
  //   if (action.searchInput === "") return initIssueData;
  //   return state.filter((item) => {
  //     const stringObj = JSON.stringify(item);
  //     return stringObj.includes(action.searchInput);
  //   });
  // }
  if (action.type === "SEARCH") {
    if (action.searchInput === "") return initIssueData;
    return state.filter((item) => {
      let isMatch = false;
      Object.values(item).forEach((element) => {
        if (element.toString().includes(action.searchInput)) isMatch = true;
      });
      return isMatch;
    });
  }
  return state;
};

const store = createStore(IssueReducer);

export default store;
