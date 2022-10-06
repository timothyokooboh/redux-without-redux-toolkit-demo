const defaultDepartments = ["QA", "engineering"];

export default function departments(state = defaultDepartments, action) {
  switch (action.type) {
    case "CHANGE_DEPARTMENTS":
      return [...state, action.payload];
    default:
      return state;
  }
}
