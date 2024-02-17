const express = require("express");
const router = express.Router();

const { Player } = require("../db/models");

router.get("/", async (req, res) => {
    //! --------------------------------------------------------------------
    //*                            Filtering
    //! --------------------------------------------------------------------

    let { firstName, number } = req.query;

    const where = {};

    if (firstName && firstName !== "") {
        where.firstName = firstName[0].toUpperCase() + firstName.slice(1);
    } else if (firstName === "") {
        res.status(400);
        return res.json({
            errors: [{ message: "firstName filter should not be empty" }],
        });
    }

    if (number) {
        if (!isNaN(number) && number >= 0) {
            where.number = parseInt(number);
        } else {
            res.status(400);
            return res.json({
                errors: [
                    {
                        message:
                            "number filter should be a number greater or equal to 0",
                    },
                ],
            });
        }
    }

    //! --------------------------------------------------------------------
    //*                             Pagination
    //! --------------------------------------------------------------------

    let { page, size } = req.query;

    //? Check if we are missing query params
    if (!page) {
        page = 1;
    }
    if (!size) {
        size = 2;
    }

    //? Check for number data type
    if (isNaN(page)) {
        page = 1;
    } else {
        page = Number(page);
    }
    if (isNaN(size)) {
        size = 2;
    } else {
        size = Number(size);
    }

    //? Check if less than 0
    if (page < 0) {
        page = 1;
    }
    if (size < 0) {
        size = 2;
    }

    //? Check if greater than 10
    if (size > 10) {
        size = 10;
    }

    const pagination = {};

    pagination.limit = size;
    pagination.offset = size * (page - 1);

    const players = await Player.findAll({
        where,
        ...pagination,
    });
    return res.json({
        players,
        page,
        size,
    });
});

// router.get("/", async (req, res) => {
//     let { firstName, number, page, size } = req.query;

//     const where = {};

//     if (firstName && firstName !== "") {
//         where.firstName = firstName[0].toUpperCase() + firstName.slice(1);
//     } else if (firstName === "") {
//         res.status(400);
//         return res.json({
//             errors: [{ message: "firstName filter should not be empty" }],
//         });
//     }

//     if (number) {
//         if (!isNaN(number) && number >= 0) {
//             where.number = parseInt(number);
//         } else {
//             res.status(400);
//             return res.json({
//                 errors: [
//                     {
//                         message:
//                             "number filter should be a number greater or equal to 0",
//                     },
//                 ],
//             });
//         }
//     }

//     if (isNaN(page) || Number(page) < 0) {
//         page = 1;
//     } else {
//         page = Number(page);
//     }
//     if (isNaN(size) || Number(size) < 0) {
//         size = 2;
//     } else if (Number(size) > 10) {
//         size = 10;
//     } else {
//         size = Number(size);
//     }

//     const players = await Player.findAll({
//         where,
//         limit: size,
//         offset: size * (page - 1),
//     });
//     return res.json({
//         players,
//         page,
//         size,
//     });
// });

module.exports = router;
