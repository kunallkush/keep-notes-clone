import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./notes.css";
function Notes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    axios
      .get("http://localhost:3001/api/notes")
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  };

  const addNote = async () => {
    if (!newNote.trim()) return;
    try {
      await axios.post("http://localhost:3001/api/notes", { note: newNote });
      setNewNote("");
      fetchNotes();
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };
  const handleBlur = async () => {
    await addNote();
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      setNewNote((prevNote) => prevNote + "\n");
    }
  };

  const deleteNote = async (id) => {
    Swal.fire({
      title: "Do you want to delete this note?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      cancelButtonColor: "#3085d6",
      confirmButtonColor: "#d33",
      reverseButtons: true, // Reverses the button order
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3001/api/notes/${id}`);
          fetchNotes();
          Swal.fire("Deleted!", "Your note has been deleted.", "success");
        } catch (error) {
          console.error("Error deleting note:", error);
          Swal.fire(
            "Error",
            "An error occurred while deleting the note.",
            "error"
          );
        }
      }
    });
  };

  return (
    <>
      <div className="container">
        <div class="input-group mb-5 mt-4 mx-auto" style={{ width: "500px" }}>
          <textarea
            // type="textarea"
            style={{
              backgroundColor: "#e0d7cb",
              height: "70px",
              boxShadow: "none",
              border: "none",
            }}
            class="form-control"
            value={newNote}
            placeholder="Take a note..."
            onChange={(e) => setNewNote(e.target.value)}
            aria-label=""
            aria-describedby="basic-addon1"
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
          />
        </div>
      </div>
      <div className="mx-2">
        <div className="notes-container">
          {notes.map((note) => (
            <div key={note.id} className="note-card">
              <div className="note-content">
                <h5 className="note-title">
                  {note.note.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h5>

                {/* <h5 className="note-title">{note.note}</h5> */}
                <p className="note-created-time">{note.created_time}</p>
              </div>
              <div className="note-actions">
                <i
                  className="bi bi-trash3"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    deleteNote(note.id);
                  }}
                ></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Notes;
