const notes = require('express').Router();
const { json } = require('express');
// const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');


// GET ALL TASKS
notes.get('/',(req, res)=>
readFromFile('./db/db.json').then((data)=> res.json(JSON.parse(data)))
);

//POST ROUTE FOR NEW TASK
notes.post('/',(req, res) => {

const { title,text} = req.body;

if(req.body){
    const newNote = {
        title,
        text,
    }
    readAndAppend (newNote, './db/db.json');
    res.json(`note added succes`);
}else {
    res.errored(`Error`)
}
    
});

// DELETE ROUTE FOR A SPECIFIC TASK

notes.delete('/:note_id', (req, res)=>
{
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) =>{
        const result = json.filter((notes)=> notes.note_id !== noteId);

        writeToFile('./db/db.json', result);

        res.json(`item ${noteId} has been deleted`)
    })
})

module.exports = notes;