import React, { createContext, useReducer, useContext } from "react";

export const NotesContext = createContext();

const initialState = {
  notes: [],
  filteredNotes: [],
};

export const useNotes = () => {
  return useContext(NotesContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTES":
      return {
        notes: [...state.notes, action.payload],
        filteredNotes: [...state.filteredNotes, action.payload],
      };
    case "ALL_NOTES":
      return {
        notes: state.notes,
        filteredNotes: state.notes,
      };
    case "ACTIVE_NOTES":
      return {
        filteredNotes: state.notes.filter((note) => note.status === "active"),
        notes: state.notes,
      };
    case "COMPLETED_NOTES":
      return {
        filteredNotes: state.notes.filter(
          (note) => note.status === "completed"
        ),
        notes: state.notes,
      };
    default:
      return state;
  }
};

export const NotesContextProvider = (props) => {
  const [notes, dispatch] = useReducer(reducer, initialState);

  const value = {
    notes,
    dispatch,
  };

  return (
    <NotesContext.Provider value={value}>
      {props.children}
    </NotesContext.Provider>
  );
};
