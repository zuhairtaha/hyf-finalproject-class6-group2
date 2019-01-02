exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {
          "classid": 1,
          "classname": "class01",
          "active": true
        },
        {
          "classid": 2,
          "classname": "class02",
          "active": true
        },
        {
          "classid": 3,
          "classname": "class03",
          "active": true
        },
        {
          "classid": 4,
          "classname": "class04",
          "active": true
        },
        {
          "classid": 20,
          "classname": "class05",
          "active": false
        },
        {
          "classid": 21,
          "classname": "class06",
          "active": true
        },
        {
          "classid": 22,
          "classname": "class07",
          "active": false
        },
        {
          "classid": 23,
          "classname": "c8",
          "active": false
        },
        {
          "classid": 24,
          "classname": "cla",
          "active": false
        },
        {
          "classid": 25,
          "classname": "class08",
          "active": true
        },
        {
          "classid": 26,
          "classname": "class9",
          "active": true
        }])
    })
}
