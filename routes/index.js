// Initializing Router
const router = require('express').Router();

//Importing modular routers for /notes 

const notesRouter = require('./notes');

router.use ('/notes', notesRouter);

module.exports = router;