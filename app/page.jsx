"use client";
import React, { useRef } from "react";
import "./globals.css";

function NoteContainer({ onDelete }) {
  return (
    <div className="note-container bg-yellow-300 rounded-lg w-1/3 h-40 relative">
      <button
        className="absolute top-1 left-1 text-red-500 hover:text-red-700"
        onClick={onDelete}
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <textarea
        className="note-input w-full h-full bg-transparent text-black placeholder-gray-500 dark:text-black dark:placeholder-gray-800 border-none focus:outline-none focus:border-none p-4"
        placeholder="Type your note here..."
      ></textarea>
    </div>
  );
}

export default function Home() {
  const noteContainerRef = useRef();

  const handleNewNoteClick = () => {
    const notesContainer = noteContainerRef.current;
    if (notesContainer) {
      const lastNote = notesContainer.lastChild;
      if (lastNote) {
        const newNote = lastNote.cloneNode(true);
        notesContainer.appendChild(newNote);
      }
    }
  };

  const handleDeleteNoteClick = (note) => {
    const notesContainer = noteContainerRef.current;
    if (notesContainer) {
      notesContainer.removeChild(note);
    }
  };

  const handleSaveNotesClick = () => {
    const notesContainer = noteContainerRef.current;
    if (notesContainer) {
      const notes = notesContainer.querySelectorAll(".note-container textarea");
      const notesContent = Array.from(notes).map((note) => note.value);
      console.log(notesContent);
    }
  };

  return (
    <main>
      <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-10">
        <a href="#" class="flex items-center">
          <img src="https://i.postimg.cc/15RNW37X/logo.png" class="h-8 mr-3" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Notes</span>
        </a>
          <div className="flex md:order-2 space-x-3">
            <button
              type="button"
              onClick={handleNewNoteClick}
              className="text-white bg-lime-400 hover:bg-lime-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-lime-400 dark:hover:bg-lime-400 dark:focus:ring-lime-800 dark:text-black transition ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <svg
                className="w-4 h-4 inline-block mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              New note
            </button>
            <button
              type="button"
              className="text-white bg-lime-400 hover:bg-lime-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-lime-400 dark:hover:bg-lime-400 dark:focus:ring-lime-800 dark:text-black transition ease-in-out hover:-translate-y-1 hover:scale-110"
              onClick={handleSaveNotesClick}
            >
              Save Notes
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        className="notes-row flex flex-wrap justify-center gap-4 mt-10"
        ref={noteContainerRef}
      >
        <NoteContainer
          onDelete={() =>
            handleDeleteNoteClick(noteContainerRef.current.lastChild)
          }
        />
      </div>
    </main>
  );
}
