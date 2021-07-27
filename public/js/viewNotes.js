
const getNotes = () => {
 const notesRef = firebase.database().ref('/users');
 notesRef.on('value', (snapshot) => {
     const data = snapshot.val();
    //  console.log(data);
     findNote(data);
 });
}


let counter = 0;
const findNote = (notes) => {
 for (note in notes) {
     const noteData = notes[note];
        renderNoteAsHtml(noteData);
     }
}

const goBack = () => {
    document.querySelector("#back").classList.add("hidden");
    const passcodeInput = document.querySelector('#passcodeInput');
    passcodeInput.style.display = 'block';
    const displayDiv = document.querySelector('#display');
    displayDiv.innerHTML = "";
    document.querySelector("#image").classList.add("hidden");
}

const renderNoteAsHtml = (noteData) => {
document.querySelector("#back").classList.remove("hidden");
document.querySelector("#image").classList.remove("hidden");
 // Hide the passcode view
 const passcodeInput = document.querySelector('#passcodeInput');
 passcodeInput.style.display = 'none';
 
 // Show the title
 const displayDiv = document.querySelector('#display');
 displayDiv.innerHTML = "Title: " + noteData.title + "<br>Text: " + noteData.text 
}
