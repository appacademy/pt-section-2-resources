// const momo = new Cat();

// momo.meow(); // "maaahhhh"

// Cat.findAll(); // get us all cats

class Person {}
class Job extends Model {
    static associate(models) {
        Job.belongsTo(models.Person, { foreignKey: "personId" });
    }
}

// ! Cooler version
// getting a Job instance by id
const job = await Job.findOne({ where: { id } });

// finding the Person instance that has that job
const personWithJob = await job.getPerson();

// //! Old lame sad slow version
// const job = await Job.findOne({ where: { id } });

// const slowerVersion = await Person.findOne({
//     where: {
//         id: job.personId,
//     },
// });
