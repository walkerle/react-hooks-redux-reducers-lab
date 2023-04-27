const initialState = { numberOfPresents: 0 };

export function managePresents(state = initialState, action) {

  switch(action.type) {
    case 'presents/increase':
      console.log('presents/increase action');
      return { numberOfPresents: state.numberOfPresents + 1 };
    default:
      console.log('no action invoked')
      return state;
    }

}