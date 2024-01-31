// app.post(
//     "/bands/:bandId/musicians/:musicianId/:eldenRing",
//     async (req, res, next) => {
//         // const { bandId } = req.params; //? Either or
//         // const bandId = req.params.bandId; //? Either or

//         const { bandId } = req.params; // 1
//         const musicianId = req.params.musicianId; // 5
//         req.params.eldenRing; // "Best game ever"

//         Musician.findAll({
//             where: {
//                 bandId,
//                 hairColor: "blonde",
//                 age: {
//                     [Op.gte]: 50,
//                 },
//             },
//             limit: 10,
//             offset: 10,
//             // order: [], //? same level as order
//         });

//         /**
//          * req.params = {
//          * bandId: 1,
//          * musicianId: 5,
//          * eldenRing: "Best game ever"
//          * }
//          */
//     }
// );

// // https://www.amazon.com/s?k=cat+toys&page=2&crid=2M3FGSB3PXB1X&qid=1706657395&sprefix=cat+toy%2Caps%2C268&ref=sr_pg_2
// app.get("/s", async (req, res) => {
//     // const { k, page, crid, qid, sprefix, ref } = req.query;
//     const k = req.query.k;
//     req.query.page;
// });

// // RESTFUL Routes
// // GET requests do NOT have request bodies

const myObj = {
    name: "Zaviar",
    location: undefined
};

console.log(myObj.location); // undefined
