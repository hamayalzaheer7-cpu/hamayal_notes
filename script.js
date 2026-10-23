var notes = JSON.parse(localStorage.getItem("notes")) || [];
var notesDiv = document.getElementById("notes");

// Show all notes
function showNotes() {
    notesDiv.innerHTML = "";
    var i = 0
    for (; i < notes.length; i++) {
        notesDiv.innerHTML += `
            <div class="note">
                <p>${notes[i]}</p>
                <button onclick="deleteNote(${i})">Delete</button>
            </div>`;
    }
}

// Save a new note
function saveNote() {
    var text = document.getElementById("note").value;

    if (text == "") {
        alert("Write a note first!");
        return;
    }

    notes.push(text);
    localStorage.setItem("notes", JSON.stringify(notes));

    document.getElementById("note").value = "";
    showNotes();
}

// Delete a note
function deleteNote(i) {
    notes.splice(i, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
}

// Display saved notes
showNotes();
