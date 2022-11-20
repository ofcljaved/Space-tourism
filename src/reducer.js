const reducer = (state, action)=>{
    switch (action.type) {
        case "LOAD_PLACE":
            return{
                ...state,
                currDestination: [action.payload.place]
            };
        case "LOAD_CREW":
            return{
                ...state,
                currCrew: [action.payload.crew]
        };
        case "LOAD_TECH":
            return{
                ...state,
                currTechnology: [action.payload.space]
            }
        default:
            break;
    }
    return state;
}
export default reducer;