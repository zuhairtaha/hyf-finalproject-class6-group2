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
            birth_date: '1980-01-01',
            type: "Mentor",
            slack_nickname: "https://github.com/a-magdy",
            admission_date: '1980-01-01',
            status: "Active",
            active: 1,
          },
          {
            id: 2,
            first_name: "Daniel",
            last_name: "Fernandes",
            birth_date: '1980-01-01',
            type: "Mentor",
            slack_nickname: "https://github.com/dpfernandes/",
            admission_date: '1980-01-01',
            status: "Active",
            active: 1,
          },
          {
            id: 3,
            first_name: "Jacob",
            last_name: "Andresen",
            birth_date: '1980-01-01',
            type: "Mentor",
            slack_nickname: "https://github.com/jacobandresen",
            admission_date: '1980-01-01',
            status: "Active",
            active: 1,
          },
          {
            id: 4,
            first_name: "Zaki",
            last_name: "Wasik",
            birth_date: '1980-01-01',
            type: "Mentor",
            slack_nickname: "https://github.com/zkwsk",
            admission_date: '1980-01-01',
            status: "Active",
            active: 1,
          }
        ]
      )
    })
}
