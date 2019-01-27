exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes_modules').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes_modules').insert(
        [

          {
            "class_id": 4,
            "module_id": 4,
            "start_date": "2019-07-01",
            "end_date": "2019-08-01"
          }
        ]
      )
    })
}



