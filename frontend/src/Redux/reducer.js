const initial = {
  booklist: [],
  isLoading:true
};

export const reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case 'BookList':return {...state,booklist:payload,isLoading:false}
    default:
      return state;
  }
};
