exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes_modules_mentors').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes_modules_mentors').insert([
        {
          "classid": 1,
          "moduleid": 1,
          "mentorid": 1
        },
        {
          "classid": 1,
          "moduleid": 1,
          "mentorid": 2
        },
        {
          "classid": 1,
          "moduleid": 1,
          "mentorid": 3
        },
        {
          "classid": 1,
          "moduleid": 2,
          "mentorid": 1
        },
        {
          "classid": 1,
          "moduleid": 2,
          "mentorid": 2
        },
        {
          "classid": 1,
          "moduleid": 2,
          "mentorid": 4
        },
        {
          "classid": 2,
          "moduleid": 1,
          "mentorid": 1
        },
        {
          "classid": 2,
          "moduleid": 1,
          "mentorid": 2
        },
        {
          "classid": 2,
          "moduleid": 2,
          "mentorid": 4
        },
        {
          "classid": 2,
          "moduleid": 2,
          "mentorid": 5
        }])
    })
}
