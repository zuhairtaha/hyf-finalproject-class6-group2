exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(() => knex('classes_modules').del())

    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {
          "id": 1,
          "name": "Class 1",
          "active": false
        },
        {
          "id": 2,
          "name": "Class 2",
          "active": false
        },
        {
          "id": 3,
          "name": "Class 3",
          "active": false
        },
        {
          "id": 4,
          "name": "Class 4",
          "active": false
        },
        {
          "id": 5,
          "name": "Class 5",
          "active": false
        },
        {
          "id": 6,
          "name": "Class 6",
          "active": true
        },
        {
          "id": 7,
          "name": "Class 7",
          "active": true
        },
        {
          "id": 8,
          "name": "Class 8",
          "active": true
        },
        {
          "id": 9,
          "name": "Class 9",
          "active": true
        },
        {
          "id": 10,
          "name": "Class 10",
          "active": true
        },
        {
          "id": 11,
          "name": "Class 11",
          "active": true
        }])
    })
}
