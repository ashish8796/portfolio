interface State {}

const initState: State = {};
type MainAction = object;
//@ts-ignore
function reducer(state = initState, { type, payload }: MainAction) {
  switch (type) {
    default:
      return state;
  }
}

export default reducer;
