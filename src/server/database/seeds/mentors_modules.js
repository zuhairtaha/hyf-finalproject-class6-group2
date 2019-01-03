exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('mentors_modules').del()
    .then(function () {
      // Inserts seed entries
      return knex('mentors_modules').insert([
        {
          "mentorid": 1,
          "moduleid": 1
        },
        {
          "mentorid": 1,
          "moduleid": 2
        },
        {
          "mentorid": 1,
          "moduleid": 3
        },
        {
          "mentorid": 2,
          "moduleid": 2
        },
        {
          "mentorid": 2,
          "moduleid": 3
        },
        {
          "mentorid": 3,
          "moduleid": 3
        },
        {
          "mentorid": 4,
          "moduleid": 3
        }])
    })
}
