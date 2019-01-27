exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes_modules')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('classes_modules').insert([
        {
          class_id: 1,
          module_id: 1,
          github_page: null,
          start_date: '2018-07-28',
          end_date: '2018-08-19'
        },
        {
          class_id: 1,
          module_id: 3,
          github_page: 'https://github.com/js1',
          start_date: '2018-09-22',
          end_date: '2018-10-13'
        },
        {
          class_id: 1,
          module_id: 5,
          github_page: 'https://github.com/',
          start_date: '2018-11-17',
          end_date: '2018-12-09'
        },
        {
          class_id: 1,
          module_id: 4,
          github_page: 'https://github.com/',
          start_date: '2018-10-21',
          end_date: '2018-11-11'
        },
        {
          class_id: 1,
          module_id: 7,
          github_page: 'https://github.com/',
          start_date: '2019-01-13',
          end_date: '2019-02-03'
        },
        {
          class_id: 1,
          module_id: 6,
          github_page: 'https://github.com/',
          start_date: '2018-12-16',
          end_date: '2019-01-06'
        },
        {
          class_id: 1,
          module_id: 9,
          github_page: 'https://github.com/',
          start_date: '2019-03-17',
          end_date: '2019-04-14'
        },
        {
          class_id: 1,
          module_id: 8,
          github_page: 'https://github.com/',
          start_date: '2019-02-10',
          end_date: '2019-03-10'
        },
        {
          class_id: 1,
          module_id: 2,
          github_page: 'https://github.com/',
          start_date: '2018-08-26',
          end_date: '2018-09-16'
        },
        {
          class_id: 2,
          module_id: 1,
          github_page: 'https://github.com/',
          start_date: '2018-08-25',
          end_date: '2018-09-16'
        },
        {
          class_id: 2,
          module_id: 3,
          github_page: 'https://github.com/',
          start_date: '2018-10-21',
          end_date: '2018-11-11'
        },
        {
          class_id: 2,
          module_id: 5,
          github_page: 'https://github.com/',
          start_date: '2018-12-15',
          end_date: '2019-01-06'
        },
        {
          class_id: 2,
          module_id: 4,
          github_page: 'https://github.com/',
          start_date: '2018-11-18',
          end_date: '2018-12-09'
        },
        {
          class_id: 2,
          module_id: 2,
          github_page: 'https://github.com/',
          start_date: '2018-09-22',
          end_date: '2018-10-14'
        },
        {
          class_id: 2,
          module_id: 7,
          github_page: 'https://github.com/',
          start_date: '2019-01-11',
          end_date: '2019-04-14'
        }
      ])
    })
}
