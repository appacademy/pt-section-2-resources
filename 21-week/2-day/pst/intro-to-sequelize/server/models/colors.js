// class Colors {
//     constructor() {
//     }
// }

const Colors = {
    getAll: () => "SELECT * FROM colors;",
    getById: (id) => `SELECT * FROM colors WHERE id = ${id}`,
    getWithConditions: ({ where, order, values }) => {
        let query = "SELECT ";

        if (values) {
            query += values + " "; // SELECT user, input, values FROM colors
        } else {
            query += "* "; // SELECT * FROM colors
        }

        query += "FROM colors ";

        if (where) {
            query += where + " ";
        }

        if (order) {
            query += order;
        }

        return query;
    },
};

module.exports = Colors;
