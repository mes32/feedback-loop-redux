const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Adds a feeback entry
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
        console.log(`SQL error in POST /prime-feeback: ${sqlError}`);
        res.sendStatus(500);
    });
});

module.exports = router;