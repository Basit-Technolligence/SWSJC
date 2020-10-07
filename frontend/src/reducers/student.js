export const studentReducer = (
  state = {
    students: [],
  },
  action
) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return { students: [...state.students, action.payload] };
    default:
      return state;
  }
};
