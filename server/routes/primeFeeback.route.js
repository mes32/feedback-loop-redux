const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Adds a feeback entry when requested via POST /prime-feeback
router.post('/', (req, res) => {    
    const feedback = req.body;
    const sqlText = `
    INSERT INTO "feedback"
        (feeling, understanding, support, comments)
        VALUES
        ($1, $2, $3, $4);
    `;
    pool.query(sqlText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments]).then(function (sqlResult) {
        res.sendStatus(201);
    }).catch(function (sqlError) {
        console.log(`SQL error in POST /prime-feedback: ${sqlError}`);
        res.sendStatus(500);
    });
});

// Returns all feeback entries when requested via GET /prime-feeback
router.get('/', (req, res) => {
    const sqlText = `
    SELECT id, feeling, understanding, support, comments FROM "feedback";
    `;
    pool.query(sqlText).then(function (sqlResult) {
        res.send(sqlResult.rows);
    }).catch(function (sqlError) {
        console.log(`SQL error in GET /prime-feedback: ${sqlError}`);
        res.sendStatus(500);
    });
});

module.exports = router;