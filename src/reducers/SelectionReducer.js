export default (state, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state || null;
  }
};
