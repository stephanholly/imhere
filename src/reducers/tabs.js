const initialState = {
  checkIn: false,
  feed: true,
  planAhead: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_IN':
      return { ...state, checkIn: true, feed: false, planAhead: false};
    case 'FEED':
      return { ...state, feed: true, planAhead: false, checkIn: false };
    case 'PLAN_AHEAD':
      return { ...state, planAhead: true, checkIn: false, feed: false };
    default:
      return state;
  }
};
