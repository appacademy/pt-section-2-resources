// class Color {
//     constructor()
// }

const Color = {
    getAll: () => "SELECT * FROM colors",
    getById: (id) => `SELECT * FROM colors WHERE id = ${id}`,
    getWithConditions: ({ where, orderBy, values }) => {
        let query = "SELECT ";

        if (values) {
            query += values;
        } else {
            query += "*";
        }

        query += " FROM colors ";

        if (where) {
            query += where + " ";
        }

        if (orderBy) {
            query += orderBy;
        }

        return query;
    },
};

module.exports = Color;
