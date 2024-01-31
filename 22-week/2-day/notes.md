# Reviewing Yesterday's Hot Mess

## Given this One-To-Many association:

```js
// School Model File
class School extends Model {
  static associate(models) {
    School.hasMany(models.Teacher, { foreignKey: "schoolId" });
  }
}

// Teacher Model File
class Teacher extends Model {
  static associate(models) {
    // No associations
  }
}
```

## Which can be the source in a query, `School`, `Teacher`, or both?

<details style="font-size: 20px;">
<summary style="text-decoration: underline; padding: 5px 20px;">Click Here For The Answer: </summary>

Only `School` can be the source, and only `Teacher` can be a target.

If we want `Teacher` to also be a source, we must add this to the `static associate(model)`

<span style="font-size: 15px;">

```js
Teacher.belongsTo(models.School, { foreignKey: "schoolId" });
```

</span>

</details>

## What _Lazy Loading_ query can we write using this association?

Get the school and all teachers that work at that school.

Assume you have `req.params.schoolId`

<details style="font-size: 20px;">
<summary style="text-decoration: underline; padding: 5px 20px;">Click Here For The Answer: </summary>

<span style="font-size: 15px;">

```js
const { schoolId } = req.params;

const mySchool = await School.findByPk(schoolId);

const allTeachersAtMySchool = await mySchool.getTeachers();
```

</span>
</details>

## What _Eager Loading_ query can we write using this association?

Get the school and all teachers that work at that school.

Assume you have `req.params.schoolId`

<details style="font-size: 20px;">
<summary style="text-decoration: underline; padding: 5px 20px;">Click Here For The Answer: </summary>

<span style="font-size: 15px;">

```js
const { schoolId } = req.params;

const mySchoolAndAllTeachersAtMySchool = await School.findOne({
  where: { id: schoolId },
  include: Teacher,
});
```

</span>
</details>

## What's wrong with this query?

```js
const { schoolId } = req.params;

const allMyTeachersAndMySchool = await Teacher.findAll({
  where: { schoolId },
  include: School,
});
```

<details style="font-size: 20px;">
<summary style="text-decoration: underline; padding: 5px 20px;">Click Here For The Answer: </summary>

Because of our association only being created on the `School` model, we can't use `include: School` when our source is the `Teacher` model!

</details>
