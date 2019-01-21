exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes_modules').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes_modules').insert(
        [
          {
            "class_id": 1,
            "module_id": 1,
            "start_date": "2019-01-01",
            "end_date": "2019-02-01"
          },
          {
            "class_id": 1,
            "module_id": 2,
            "start_date": "2019-02-01",
            "end_date": "2019-03-01"
          },
          {
            "class_id": 1,
            "module_id": 3,
            "start_date": "2019-03-01",
            "end_date": "2019-03-01"
          },
          {
            "class_id": 1,
            "module_id": 4,
            "start_date": "2019-03-01",
            "end_date": "2019-04-01"
          },
          {
            "class_id": 2,
            "module_id": 1,
            "start_date": "2019-02-01",
            "end_date": "2019-03-01"
          },
          {
            "class_id": 2,
            "module_id": 2,
            "start_date": "2019-02-01",
            "end_date": "2019-03-01"
          },
          {
            "class_id": 2,
            "module_id": 3,
            "start_date": "2019-03-01",
            "end_date": "2019-04-01"
          },
          {
            "class_id": 2,
            "module_id": 4,
            "start_date": "2019-04-01",
            "end_date": "2019-05-01"
          },
          {
            "class_id": 2,
            "module_id": 5,
            "start_date": "2019-05-01",
            "end_date": "2019-06-01"
          },
          {
            "class_id": 3,
            "module_id": 1,
            "start_date": "2019-04-01",
            "end_date": "2019-05-01"
          },
          {
            "class_id": 3,
            "module_id": 2,
            "start_date": "2019-05-01",
            "end_date": "2019-06-01"
          },
          {
            "class_id": 3,
            "module_id": 4,
            "start_date": "2019-06-01",
            "end_date": "2019-07-01"
          },
          {
            "class_id": 4,
            "module_id": 1,
            "start_date": "2019-04-01",
            "end_date": "2019-05-01"
          },
          {
            "class_id": 4,
            "module_id": 2,
            "start_date": "2019-05-01",
            "end_date": "2019-06-01"
          },
          {
            "class_id": 4,
            "module_id": 3,
            "start_date": "2019-06-01",
            "end_date": "2019-07-01"
          },
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



