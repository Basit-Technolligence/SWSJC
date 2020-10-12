export const studentReducer = (
  state = {
    singleStudent: [],
    students: [],
  },
  action
) => {
  switch (action.type) {
    case "ADD_STUDENT":
      console.log("payload", action.payload);
      return { students: [...state.students, action.payload] };
    case "GET_STUDENTS":
      return { students: action.payload };
    case "GET_STUDENT_BY_ID":
      return { singleStudent: action.payload, students: state.students };
    case "DELETE_STUDENT":
      const copyStudents = [...state.students];
      const indexToDelete = copyStudents.findIndex(
        (stu) => stu.id === action.payload
      );
      return {
        students: [
          ...copyStudents.slice(0, indexToDelete),
          ...copyStudents.slice(indexToDelete + 1),
        ],
      };
    default:
      return state;
  }
};
