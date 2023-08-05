// import { combineReducers } from "@reduxjs/toolkit";
// import { depReducer } from "./department/department-slice";
// import { parcelReducer } from "./parcel/parcel-slice";

// export const rootReducer = combineReducers({
//   parcel: parcelReducer,
//   department: depReducer,
// });

import { combineReducers } from "@reduxjs/toolkit";
import { parcelReducer } from "./parcel/parcel-slice";
import { departmentsReducer } from "./department/department-slice";

export const rootReducer = combineReducers({
  parcel: parcelReducer,
  department: departmentsReducer,
});
