const defaultBranches = ["lagos", "benin"];

export default function branches(state = defaultBranches, action) {
  switch (action.type) {
    case "CHANGE_BRANCHES":
      return [...state, action.payload];
    default:
      return state;
  }
}
