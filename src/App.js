import React from "react";
import "./App.css";
import "h8k-components";
import NotesApp from "./components/notes-app/index.js";
import { NotesContextProvider } from "./Notes.context";

const title = "Notes App";

function App() {
  return (
    <div>
      <h8k-navbar header={title} />
      <NotesContextProvider>
        <NotesApp />
      </NotesContextProvider>
    </div>
  );
}

export default App;
