const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    pool.query('SELECT * FROM "item";')
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for secrets:', error);
            res.sendStatus(500);
        });
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    console.log('item and user:', req.body.item, req.user.id);
    queryText = `INSERT INTO item (description, user_id) VALUES ($1, $2) ;`;
    pool.query(queryText, [req.body.item, req.user.id])
        .then(result => {
            res.sendStatus(201);
        }).catch(error => {
            res.sendStatus(500);
            alert('Issues adding you item, try again later')
            console.log('error adding item:', error);
        })
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    console.log('deleting item:', req.params.id);
    console.log('user who made it:', req.user.id);
    if (req.isAuthenticated() && req.user.id === req.params.id) {
        let queryText = `DELETE FROM "item" WHERE "id" = $1 AND "user_id" = $2;`;
        pool.query(queryText[req.user.id, req.params.id])
            .then(result => {
                res.sendStatus(200);
            }).catch(error => {
                res.sendStatus(500);
                console.log(error);
            })
    }
    else {
        alert("You can only delete items you've created!")
    }
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
    queryText = `SELECT * FROM "item"`
    pool.query('/', queryText)
    .then(result => res.send(result.rows))
    .catch(error => {
        console.log('Error making GET request', error);
        res.sendStatus(500);
        
    })
});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;