exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('modules')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('modules').insert([
        {
          id: 1,
          module: 'HTML',
          description: null,
          length: 3
        },
        {
          id: 2,
          module: 'CSS',
          description: null,
          length: 3
        },
        {
          id: 3,
          module: 'Javascript 1',
          description: null,
          length: 4
        },
        {
          id: 4,
          module: 'javascript 2',
          description: null,
          length: 4
        },
        {
          id: 5,
          module: 'javascript 3',
          description: null,
          length: 4
        },
        {
          id: 6,
          module: 'Node.js',
          description: null,
          length: 3
        },
        {
          id: 7,
          module: 'MySQL',
          description: null,
          length: 3
        },
        {
          id: 8,
          module: 'React',
          description: null,
          length: 4
        },
        {
          id: 9,
          module: 'Final Project',
          description: null,
          length: 8
        }
      ])
    })
}
