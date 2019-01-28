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
        console.log(`SQL error in POST /prime-feedback, ${sqlError}`);
        res.sendStatus(500);
    });
});

// Returns all feeback entries when requested via GET /prime-feeback
router.get('/', (req, res) => {
    const sqlText = `
    SELECT id, feeling, understanding, support, comments FROM "feedback"
        ORDER BY id DESC
        LIMIT 200;
    `;
    pool.query(sqlText).then(function (sqlResult) {
        res.send(sqlResult.rows);
    }).catch(function (sqlError) {
        console.log(`SQL error in GET /prime-feedback, ${sqlError}`);
        res.sendStatus(500);
    });
});

// Flags/unflags one feeback entry when requested via PUT /prime-feeback/:id
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const sqlText = `
    UPDATE "feedback"
        SET flagged = NOT flagged
        WHERE id = $1;
    `;
    pool.query(sqlText, [id]).then(function (sqlResult) {
        res.sendStatus(200);
    }).catch(function (sqlError) {
        console.log(`SQL error in PUT /prime-feedback/:id, ${sqlError}`);
        res.sendStatus(500);
    });
});

// Deletes one feeback entry when requested via DELETE /prime-feeback/:id
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const sqlText = `
    DELETE FROM "feedback"
        WHERE id = $1;
    `;
    pool.query(sqlText, [id]).then(function (sqlResult) {
        res.sendStatus(200);
    }).catch(function (sqlError) {
        console.log(`SQL error in DELETE /prime-feedback/:id, ${sqlError}`);
        res.sendStatus(500);
    });
});

module.exports = router;