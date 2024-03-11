const router = require('express').Router();

//Importing modular routers for /notes /index 

const notesRouter = require('./notes');

router.use ('/notes', notesRouter);

module.exports = router;