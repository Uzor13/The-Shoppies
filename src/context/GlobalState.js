import React, {createContext, useEffect, useReducer} from "react";
import AppReducer from "./AppReducer";

//Initial state
const initialState = {
    nominations: localStorage.getItem('nominations')
        ? JSON.parse(localStorage.getItem('nominations'))
        : []
};

// create context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('nominations', JSON.stringify(state.nominations))
    }, [state]);

    //actions
    const addMovieToNominations = (movie) => {
        dispatch({type: 'ADD_MOVIE_TO_NOMINATIONS', payload: movie})
    }
    const removeMovieFromNominations = (imdbID) => {
        dispatch({type: 'REMOVE_MOVIE_FROM_NOMINATIONS', payload: imdbID})
    }

    return (
        <GlobalContext.Provider value={{
            nominations: state.nominations,
            addMovieToNominations,
            removeMovieFromNominations
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
