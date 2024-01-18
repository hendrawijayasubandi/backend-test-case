const { members } = require('./db');

class MembersService {
    static getAllMembers() {
        return members;
    }

    static getBorrowedBooksCount(memberCode) {
        const member = members.find((m) => m.code === memberCode);
        if (member) {
            const borrowedBooksCount = 2;
            return borrowedBooksCount;
        }

        return null;
    }
}

module.exports = MembersService;
