const express = require('express');
const router = express.Router();
const MembersService = require('../services/members.service');

// Routes for members

// GET all members
router.get('/', (req, res) => {
    const allMembers = MembersService.getAllMembers();
    res.json(allMembers);
});

// GET borrowed books count for a member
router.get('/borrowed/:memberCode', (req, res) => {
    const { memberCode } = req.params;
    const borrowedBooksCount = MembersService.getBorrowedBooksCount(memberCode);

    if (borrowedBooksCount !== null) {
        res.json({ memberCode, borrowedBooksCount });
    } else {
        res.status(404).send('Member not found');
    }
});

module.exports = router;
