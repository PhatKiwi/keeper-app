import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./create";

function App() {
    function addNote(note) {

    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            <Note title="Note Title" content="Note Body" />
            <Footer />
        </div>
    )
}

export default App;