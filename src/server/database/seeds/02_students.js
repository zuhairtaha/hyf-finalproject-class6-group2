exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
          first_name: 'Ibrahim',
          last_name: 'Taha',
          active: true,
          email: 'ibrahim@gmail.com'
        },
        {
          first_name: 'Zuhair',
          last_name: 'Taha',
          active: true,
          email: 'zuhair@gmail.com'
        }
      ])
    })
}
