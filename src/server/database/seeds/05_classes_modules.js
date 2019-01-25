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
            "start_date": "2019-01-06",
            "end_date": "2019-1-20"
          },
          {
            "class_id": 1,
            "module_id": 2,
            "start_date": "2019-01-27",
            "end_date": "2019-02-10"
          },
          {
            "class_id": 1,
            "module_id": 3,
            "start_date": "2019-02-17",
            "end_date": "2019-03-03"
          },
          {
            "class_id": 1,
            "module_id": 4,
            "start_date": "2019-03-10",
            "end_date": "2019-03-24"
          },
          {
            "class_id": 2,
            "module_id": 1,
            "start_date": "2019-02-03",
            "end_date": "2019-02-17"
          },
          {
            "class_id": 2,
            "module_id": 2,
            "start_date": "2019-02-24",
            "end_date": "2019-03-10"
          },
          {
            "class_id": 2,
            "module_id": 3,
            "start_date": "2019-03-17",
            "end_date": "2019-03-31"
          },
          {
            "class_id": 2,
            "module_id": 4,
            "start_date": "2019-04-07",
            "end_date": "2019-04-21"
          },
          {
            "class_id": 2,
            "module_id": 5,
            "start_date": "2019-04-28",
            "end_date": "2019-05-12"
          },
          {
            "class_id": 3,
            "module_id": 1,
            "start_date": "2019-03-03",
            "end_date": "2019-03-17"
          },
          {
            "class_id": 3,
            "module_id": 2,
            "start_date": "2019-03-24",
            "end_date": "2019-06-07"
          },
          {
            "class_id": 3,
            "module_id": 4,
            "start_date": "2019-05-05",
            "end_date": "2019-05-19"
          },
          {
            "class_id": 4,
            "module_id": 1,
            "start_date": "2019-04-07",
            "end_date": "2019-04-21"
          },
          {
            "class_id": 4,
            "module_id": 2,
            "start_date": "2019-04-28",
            "end_date": "2019-05-12"
          },
          {
            "class_id": 4,
            "module_id": 3,
            "start_date": "2019-05-19",
            "end_date": "2019-06-02"
          },
          {
            "class_id": 4,
            "module_id": 4,
            "start_date": "2019-06-09",
            "end_date": "2019-06-23"
          }
        ]
      )
    })
}



