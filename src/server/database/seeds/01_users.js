exports.seed = (knex, Promise) =>
  knex('users').del()
    .then(() => knex('mentors_modules').del())
    .then(() => knex('users').insert(
      [
        {
          first_name: 'Christopher ',
          last_name: 'Klüter',
          role: 'Director',
          email: 'christopher@hackyourfuture.net',
          linkedin:
            'https://www.linkedin.com/in/christopher-kl%C3%BCter-26794643/',
          avatar: 'https://imgur.com/Lj29FDP.jpg'
        },
        {
          first_name: 'Marie ',
          last_name: 'Hoff',
          role: 'Public Affairs',
          email: 'marie@hackyourfuture.net',
          linkedin: 'https://www.linkedin.com/in/marie-hoff/',
          avatar: 'https://imgur.com/sK7RHV4.jpg'
        },
        {
          first_name: 'Benjamin ',
          last_name: 'Dalsgaard Hughes',
          role: 'Educational director',
          avatar: 'https://i.imgur.com/HC4l4na.jpg',
          linkedin: '',
          slack_nickname: ''
        },
        {
          first_name: 'Alicia ',
          last_name: 'Gonzales',
          role: 'mentor',
          avatar: 'https://i.imgur.com/CpK28fb.png',
          linkedin: '',
          slack_nickname: ''
        },
        {
          first_name: 'Zaki ',
          last_name: 'Wasik',
          role: 'mentor',
          avatar: 'https://i.imgur.com/dMhbTTP.jpg',
          linkedin: 'https://www.linkedin.com/in/zakiwasik/',
          slack_nickname: 'https://github.com/zkwsk'
        },
        {
          first_name: 'Rohit ',
          last_name: 'Sharma',
          role: 'mentor',
          avatar: 'https://i.imgur.com/m8L1xEn.jpg',
          linkedin: '',
          slack_nickname: ''
        },
        {
          first_name: 'Rasmus ',
          last_name: 'Jones',
          role: 'mentor',
          avatar:
            'https://www.dtu.dk/gimage.ashx?i=VHJ1ZV9ffHxfX2h0dHBzOi8vd3d3LmR0dWJhc2VuLmR0dS5kay9zaG93aW1hZ2UuYXNweD9pZD03OTUxNl9ffHxfXzEwM19ffHxfXzE0MF9ffHxfX1RydWVfX3x8X19GYWxzZV9ffHxfX0ZhbHNlX198fF9fMF9ffHxfX19ffHxfXzA_:_3d',
          linkedin: 'https://www.linkedin.com/in/rasmus-jones-b4552480/',
          slack_nickname: 'https://github.com/Rassibassi'
        },
        {
          first_name: 'Pachito ',
          last_name: 'Marco Calabrese',
          role: 'mentor',
          avatar: 'https://avatars1.githubusercontent.com/u/1509241?s=460&v=4',
          linkedin: 'https://www.linkedin.com/in/pmcalabrese/',
          slack_nickname: 'https://github.com/pmcalabrese/'
        },
        {
          first_name: 'Martin ',
          last_name: 'Clemmensen',
          role: 'mentor',
          avatar: 'https://i.imgur.com/8hJo6Sp.jpg',
          linkedin: 'https://www.linkedin.com/in/martinclemmensen/',
          slack_nickname: 'https://github.com/mclemme'
        },
        {
          first_name: 'Marta ',
          last_name: 'Matos',
          role: 'mentor',
          avatar: 'https://i.imgur.com/rq6WNi2.jpg',
          linkedin: 'https://www.linkedin.com/in/marta-matos-829a7050/',
          slack_nickname: 'https://github.com/martamatos'
        },
        {
          first_name: 'Nynne ',
          last_name: 'Just Christofferson',
          role: 'mentor',
          avatar: 'https://i.imgur.com/EwbPr66.jpg',
          linkedin:
            'https://www.linkedin.com/in/nynne-just-christoffersen-0361a316/',
          slack_nickname: 'https://github.com/nynnejc/'
        },
        {
          first_name: 'Pankaj ',
          last_name: 'Kumar Singh',
          role: 'mentor',
          avatar: 'https://avatars0.githubusercontent.com/u/432980?s=460&v=4',
          linkedin: 'https://dk.linkedin.com/in/pankaj28843',
          slack_nickname: 'https://github.com/pankaj28843/'
        },
        {
          first_name: 'Svetlana ',
          last_name: 'Galkina',
          role: 'mentor',
          avatar: 'https://i.imgur.com/nTxq371.jpg',
          linkedin: '',
          slack_nickname: ''
        },
        {
          first_name: 'Jacob ',
          last_name: 'Andresen',
          role: 'mentor',
          avatar: 'https://avatars0.githubusercontent.com/u/15238?s=400&v=4',
          linkedin: 'https://www.linkedin.com/in/jacobandresen/',
          slack_nickname: 'https://github.com/jacobandresen'
        },
        {
          first_name: 'Kevin ',
          last_name: 'Simper',
          role: 'mentor',
          avatar: 'https://i.imgur.com/quTEcgF.png',
          linkedin: 'https://www.linkedin.com/in/kevinsimper/',
          slack_nickname: 'https://github.com/kevinsimper'
        },
        {
          first_name: 'Younes ',
          last_name: 'Meliani',
          role: 'mentor',
          avatar: 'https://i.imgur.com/raR78e5.png',
          linkedin: '',
          slack_nickname: ''
        },
        {
          first_name: 'Fehime ',
          last_name: 'Seven',
          role: 'mentor',
          avatar: '',
          linkedin: '',
          slack_nickname: ''
        },
        {
          first_name: 'Moritz ',
          last_name: 'Beber',
          role: 'mentor',
          avatar: 'https://i.imgur.com/1x0oWRJ.jpg',
          linkedin: 'https://www.linkedin.com/in/moritz-beber-b597a55a/',
          slack_nickname: 'https://github.com/Midnighter'
        },
        {
          first_name: 'Abed ',
          last_name: 'Sujan',
          role: 'mentor',
          avatar:
            'https://secure.gravatar.com/avatar/678b0439a52359c99d1ed00b9a019ad7?size=400',
          linkedin: 'https://www.linkedin.com/in/abedsujan/',
          slack_nickname: ''
        },
        {
          first_name: 'Jakub ',
          last_name: 'Cioslowski',
          role: 'mentor',
          avatar: '',
          linkedin: '',
          slack_nickname: 'https://github.com/jakub-c/'
        },
        {
          first_name: 'Ahmed ',
          last_name: 'Magdy',
          role: 'mentor',
          avatar:
            'https://avatars1.githubusercontent.com/u/14139855?s=400&u=b070e4c61cab4383c2868400aadb7bf5de3fa45d&v=4',
          linkedin: 'https://www.linkedin.com/in/a-magdy/',
          slack_nickname: 'https://github.com/a-magdy'
        },
        {
          first_name: 'Petru ',
          last_name: 'Catana',
          role: 'mentor',
          avatar:
            'https://media.licdn.com/dms/image/C4D03AQEsK5ZbI2RS0A/profile-displayphoto-shrink_800_800/0?e=1550707200&v=beta&t=jfoeICLCmitXtEg3Im66bYluNNy9p-I3ldtVY98sTsw',
          linkedin: 'https://www.linkedin.com/in/petru-catana-3151a268/',
          slack_nickname: 'https://github.com/pcatana'
        },
        {
          first_name: 'Mikael ',
          last_name: 'Wistoft-Ibsen',
          role: 'mentor',
          avatar: 'https://i.imgur.com/9kJRICy.png',
          linkedin: '',
          slack_nickname: 'https://github.com/wistoft'
        },
        {
          first_name: 'Emil ',
          last_name: 'Bay',
          role: 'mentor',
          avatar: 'https://avatars2.githubusercontent.com/u/416524?s=460&v=4',
          linkedin: 'https://www.linkedin.com/in/emilbayes/',
          slack_nickname: 'https://github.com/emilbayes'
        },
        {
          role: 'alumni',
          first_name: 'Katsisaac50',
          last_name: '',
          email: 'katsisaac50@gmail.com',
          avatar: '1.jpg',
          slack_nickname: 'http://link-goes-here.com/github',
          remarks: 'Looking for jobs'
        },
        {
          role: 'alumni',
          first_name: 'Hala ',
          last_name: 'Kasim',
          email: 'halakasim16@gmail.com',
          avatar: '2.jpg',
          slack_nickname: 'http://link-goes-here.com/github',
          remarks: 'Looking for new opportunities'
        },
        {
          role: 'alumni',
          first_name: 'Rufaida ',
          last_name: 'Jumaa',
          email: 'eng.rufaidajumaa@gmail.com',
          avatar: '',
          slack_nickname: 'http://link-goes-here.com/github',
          remarks: 'Looking for jobs'
        },
        {
          role: 'alumni',
          first_name: 'Mohammed ',
          last_name: 'Abd',
          email: 'moha.abd.99@gmail.com',
          avatar: '3.jpg',
          slack_nickname: 'http://link-goes-here.com/github',
          remarks: 'looking for internship'
        },
        {
          role: 'alumni',
          first_name: 'Richard ',
          last_name: 'Paredes',
          email: 'chard.paredes@gmail.com',
          avatar: '4.jpg',
          slack_nickname: 'http://link-goes-here.com/github',
          remarks: 'Looking for jobs'
        }
      ]
      )
    )