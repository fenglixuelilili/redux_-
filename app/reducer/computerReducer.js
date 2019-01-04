let computer = {"num":0}
export default  (state=computer,action)=>{
  // switch (action.type) {
  //   case 'ADD':
  //     return {
  //       ...state,
  //       "num": state.num+action.num
  //     }
  //     break;
  //   default:
  //     break;
  // }
  if(action.type == "ADD"){
    return {
      ...state,
      "num": state.num+action.num
    }
  }
  return state
}