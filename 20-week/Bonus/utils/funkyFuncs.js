
function htmlTransform(req) {
    let arr = [];
    console.log("REQ SCHEMA", req.schemaInfo  == true)
    if(!req.schemaInfo === true){
      console.log("No", "Tables",  "Detected",  "Ensure", "You've", "Added Them",)
      return ["No", "Tables",  "Detected",  "Ensure", "You've", "Added Them",]
    }
    for (let key in req.schemaInfo) {
      let resStr = "<div class='t-and-c'>";
      resStr += `<h2>${key}</h2>`;
      if (key === "sqlite_sequence") {
        continue;
      }

      let mapped = req.schemaInfo[key].map((obj) => {
        return `<li>${obj.name} ${obj.type}</li>`;
      });
      let columns = `<ul>${mapped.join("")}</ul>`;

      resStr += columns + '</div>';
      arr.push(...resStr);
    }
    return arr;
  }


  module.exports = { modOneIsClutch: htmlTransform}
