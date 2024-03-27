
// class Color {

// }




const Color = {

  getAll: () => "SELECT * FROM colors",
  getById: (id) => `SELECT * FROM colors where id = ${id};`

};

module.exports = Color;
