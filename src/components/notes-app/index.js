import React, { useState } from "react";
import "./index.css";
import { useNotes } from "../../Notes.context";

function NotesApp() {
  const [noteName, setNoteName] = useState("");
  const [noteStatus, setNoteStatus] = useState("");
  const {
    dispatch,
    notes: { notes, filteredNotes },
  } = useNotes();

  // Add Note
  const addNote = () => {
    setNoteName("");
    setNoteStatus("");
    dispatch({
      type: "ADD_NOTES",
      payload: { name: noteName, status: noteStatus },
    });
  };

  // Get all Notes
  const allNotes = () => {
    dispatch({ type: "ALL_NOTES" });
  };

  // Active Notes
  const activeNotes = () => {
    dispatch({ type: "ACTIVE_NOTES" });
  };

  // Completed Notes
  const completedNotes = () => {
    dispatch({ type: "COMPLETED_NOTES" });
  };

  return (
    <div className="layout-column align-items-center justify-content-start">
      <section className="layout-row align-items-center justify-content-center mt-30">
        <input
          data-testid="input-note-name"
          type="text"
          className="large mx-8"
          placeholder="Note Title"
          name="noteName"
          value={noteName}
          onChange={(e) => setNoteName(e.target.value)}
        />
        <input
          data-testid="input-note-status"
          type="text"
          className="large mx-8"
          placeholder="Note Status"
          name="noteStatus"
          value={noteStatus}
          onChange={(e) => setNoteStatus(e.target.value)}
        />
        <button className="" data-testid="submit-button" onClick={addNote}>
          Add Note
        </button>
      </section>

      <div className="mt-50">
        <ul className="tabs">
          <li
            className="tab-item slide-up-fade-in"
            data-testid="allButton"
            onClick={allNotes}
          >
            All
          </li>
          <li
            className="tab-item slide-up-fade-in"
            data-testid="activeButton"
            onClick={activeNotes}
          >
            Active
          </li>
          <li
            className="tab-item slide-up-fade-in"
            data-testid="completedButton"
            onClick={completedNotes}
          >
            Completed
          </li>
        </ul>
      </div>
      <div className="card w-40 pt-30 pb-8">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody data-testid="noteList">
            {filteredNotes.map((note, index) => {
              return (
                <tr key={index}>
                  <td>{note.name}</td>
                  <td>{note.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotesApp;
