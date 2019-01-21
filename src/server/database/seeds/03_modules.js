exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('modules')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('modules').insert([
        {
          id: 1,
          title: 'HTML',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea et iste omnis perspiciatis tempora!',
          length: 3
        },
        {
          id: 2,
          title: 'CSS',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea et iste omnis perspiciatis tempora!',
          length: 3
        },
        {
          id: 3,
          title: 'Javascript 1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea et iste omnis perspiciatis tempora!',
          length: 4
        },
        {
          id: 4,
          title: 'javascript 2',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea et iste omnis perspiciatis tempora!',
          length: 4
        },
        {
          id: 5,
          title: 'javascript 3',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea et iste omnis perspiciatis tempora!',
          length: 4
        },
        {
          id: 6,
          title: 'Node.js',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea et iste omnis perspiciatis tempora!',
          length: 3
        },
        {
          id: 7,
          title: 'MySQL',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea et iste omnis perspiciatis tempora!',
          length: 3
        },
        {
          id: 8,
          title: 'React',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea et iste omnis perspiciatis tempora!',
          length: 4
        },
        {
          id: 9,
          title: 'Final Project',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ea et iste omnis perspiciatis tempora!',
          length: 8
        }
      ])
    })
}
