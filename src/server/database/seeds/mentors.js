exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("mentors")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("mentors").insert(
        [
          {
            id: 1,
            first_name: "Ahmed",
            last_name: "Magdy",
            bday: null,
            type: "Mentor",
            slack_nickname: "https://github.com/a-magdy",
            admission_date: null,
            status: "Active",
            active: 1,
          },
          {
            id: 2,
            first_name: "Daniel",
            last_name: "Fernandes",
            bday: null,
            type: "Mentor",
            slack_nickname: "https://github.com/dpfernandes/",
            admission_date: null,
            status: "Active",
            active: 1,
          },
          {
            id: 3,
            first_name: "Jacob",
            last_name: "Andresen",
            bday: null,
            type: "Mentor",
            slack_nickname: "https://github.com/jacobandresen",
            admission_date: null,
            status: "Active",
            active: 1,
          },
          {
            id: 4,
            first_name: "Zaki",
            last_name: "Wasik",
            bday: null,
            type: "Mentor",
            slack_nickname: "https://github.com/zkwsk",
            admission_date: null,
            status: "Active",
            active: 1,
          }
        ]
      )
    })
}
