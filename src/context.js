import React, {  useReducer } from 'react';
import reducer from './reducer';
import JSONdata from "./data.json";
const initialState = {
    data: JSONdata,
    currDestination: [JSONdata.destinations[0]],
    currCrew:[JSONdata.crew[0]],
    currTechnology:[JSONdata.technology[0]]
}
const SpaceContext = React.createContext();
const SpaceProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer,initialState);
    const dstntionNav = [...new Set(state.data.destinations.map(elem=> elem.name))];
    const crewNav = [...new Set(state.data.crew.map(elem=> elem.name))];
    const techNav = [...new Set(state.data.technology.map(elem=> elem.name))];
    const loadDestination = (place) =>{
        let placeData;
        switch (place) {
            case "Moon":
                placeData = state.data.destinations[0];
                break;
            case "Mars":
                placeData = state.data.destinations[1];
                break;
            case "Europa":
                placeData = state.data.destinations[2];
                break;
            case "Titan":
                placeData = state.data.destinations[3];
                break;
            default:
                break;
        }
        dispatch({
            type: "LOAD_PLACE",
            payload:{
                place: placeData
            }
        });
    };
    const loadCrew = (val)=>{
        dispatch({
            type: "LOAD_CREW",
            payload:{
                crew:state.data.crew[val]
            }
        });
    }
    const loadTech = (tech)=>{
        dispatch({
            type: "LOAD_TECH",
            payload:{
                space:state.data.technology[tech]
            }
        });
    }
    return(
        <SpaceContext.Provider value={{...state, dstntionNav, crewNav, techNav, loadDestination, loadCrew, loadTech}}>
            {children}
        </SpaceContext.Provider>
    )
}
export {SpaceContext,SpaceProvider};