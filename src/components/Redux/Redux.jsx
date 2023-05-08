// Initial value for store
const initialState = {
  deleteData: null,
  editData: {
    name: "",
    email: "",
    age: "",
    branch: "",
    gender: "",
    department: "",
  },
  getData: [],
};

// Dispatch
const reducer = (state, action) => {
  switch (action.type) {
    case "delete":
      return { ...state, deleteData: action.payload };
    case "edit":
      return { ...state, editData: action.payload };
    case "getdata":
      return { ...state, getData: action.payload };
  }
};
export { initialState, reducer };
