exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes_modules').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes_modules').insert([
        {
          "classid": 1,
          "moduleid": 1
        },
        {
          "classid": 1,
          "moduleid": 2
        },
        {
          "classid": 1,
          "moduleid": 3
        },
        {
          "classid": 1,
          "moduleid": 4
        },
        {
          "classid": 2,
          "moduleid": 1
        },
        {
          "classid": 2,
          "moduleid": 2
        },
        {
          "classid": 2,
          "moduleid": 3
        },
        {
          "classid": 3,
          "moduleid": 4
        },
        {
          "classid": 4,
          "moduleid": 5
        },
        {
          "classid": 4,
          "moduleid": 6
        }])
    })
}
