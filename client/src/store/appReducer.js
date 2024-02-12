export const appReducer = (state, action) => {
  let newState = {...state};
  let {type,payload} = action;

  switch(type) {
    case '':
      newState.captions = payload;
      break;
  };
  return newState;
};

export default appReducer;