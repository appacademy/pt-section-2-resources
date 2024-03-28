
// class Color {

// }




const Color = {
  getAll: () => "SELECT * FROM colors;",
  getById: (id) => `SELECT * FROM colors WHERE id = ${id}`
};

module.exports = Color;
