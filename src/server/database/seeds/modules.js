exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('modules').del()
    .then(function () {
      // Inserts seed entries
      return knex('modules').insert([
        {
          "moduleid": 1,
          "module": "HTML",
          "description": null,
          "start": null,
          "length": null
        },
        {
          "moduleid": 2,
          "module": "CSS",
          "description": null,
          "start": null,
          "length": null
        },
        {
          "moduleid": 3,
          "module": "Javascript1",
          "description": null,
          "start": null,
          "length": null
        },
        {
          "moduleid": 4,
          "module": "javascript2",
          "description": null,
          "start": null,
          "length": null
        },
        {
          "moduleid": 5,
          "module": "Node",
          "description": null,
          "start": null,
          "length": null
        },
        {
          "moduleid": 6,
          "module": "React",
          "description": null,
          "start": null,
          "length": null
        }])
    })
}
