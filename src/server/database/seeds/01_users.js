exports.seed = (knex, Promise) =>
  knex('users')
    .del()
    .then(() => knex('mentors_modules').del())
    .then(() =>
      knex('users').insert([
        {
          name: 'Christopher Klüter',
          type: 'Director',
          email: 'christopher@hackyourfuture.net',
          linkedin:
            'https://www.linkedin.com/in/christopher-kl%C3%BCter-26794643/',
          avatar: 'https://imgur.com/Lj29FDP.jpg'
        },
        {
          name: 'Marie Hoff',
          type: 'Public Affairs',
          email: 'marie@hackyourfuture.net',
          linkedin: 'https://www.linkedin.com/in/marie-hoff/',
          avatar: 'https://imgur.com/sK7RHV4.jpg'
        },
        {
          name: 'Benjamin Dalsgaard Hughes',
          type: 'Educational director',
          avatar: 'https://i.imgur.com/HC4l4na.jpg',
          linkedin: '',
          slack_nickname: ''
        },
        {
          name: 'Alicia Gonzales',
          type: 'mentor',
          avatar: 'https://i.imgur.com/CpK28fb.png',
          linkedin: '',
          slack_nickname: ''
        },
        {
          name: 'Zaki Wasik',
          type: 'mentor',
          avatar: 'https://i.imgur.com/dMhbTTP.jpg',
          linkedin: 'https://www.linkedin.com/in/zakiwasik/',
          slack_nickname: 'https://github.com/zkwsk'
        },
        {
          name: 'Rohit Sharma',
          type: 'mentor',
          avatar: 'https://i.imgur.com/m8L1xEn.jpg',
          linkedin: '',
          slack_nickname: ''
        },
        {
          name: 'Rasmus Jones',
          type: 'mentor',
          avatar:
            'https://www.dtu.dk/gimage.ashx?i=VHJ1ZV9ffHxfX2h0dHBzOi8vd3d3LmR0dWJhc2VuLmR0dS5kay9zaG93aW1hZ2UuYXNweD9pZD03OTUxNl9ffHxfXzEwM19ffHxfXzE0MF9ffHxfX1RydWVfX3x8X19GYWxzZV9ffHxfX0ZhbHNlX198fF9fMF9ffHxfX19ffHxfXzA_:_3d',
          linkedin: 'https://www.linkedin.com/in/rasmus-jones-b4552480/',
          slack_nickname: 'https://github.com/Rassibassi'
        },
        {
          name: 'Pachito Marco Calabrese',
          type: 'mentor',
          avatar: 'https://avatars1.githubusercontent.com/u/1509241?s=460&v=4',
          linkedin: 'https://www.linkedin.com/in/pmcalabrese/',
          slack_nickname: 'https://github.com/pmcalabrese/'
        },
        {
          name: 'Martin Clemmensen',
          type: 'mentor',
          avatar: 'https://i.imgur.com/8hJo6Sp.jpg',
          linkedin: 'https://www.linkedin.com/in/martinclemmensen/',
          slack_nickname: 'https://github.com/mclemme'
        },
        {
          name: 'Marta Matos',
          type: 'mentor',
          avatar: 'https://i.imgur.com/rq6WNi2.jpg',
          linkedin: 'https://www.linkedin.com/in/marta-matos-829a7050/',
          slack_nickname: 'https://github.com/martamatos'
        },
        {
          name: 'Nynne Just Christofferson',
          type: 'mentor',
          avatar: 'https://i.imgur.com/EwbPr66.jpg',
          linkedin:
            'https://www.linkedin.com/in/nynne-just-christoffersen-0361a316/',
          slack_nickname: 'https://github.com/nynnejc/'
        },
        {
          name: 'Pankaj Kumar Singh',
          type: 'mentor',
          avatar: 'https://avatars0.githubusercontent.com/u/432980?s=460&v=4',
          linkedin: 'https://dk.linkedin.com/in/pankaj28843',
          slack_nickname: 'https://github.com/pankaj28843/'
        },
        {
          name: 'Svetlana Galkina',
          type: 'mentor',
          avatar: 'https://i.imgur.com/nTxq371.jpg',
          linkedin: '',
          slack_nickname: ''
        },
        {
          name: 'Jacob Andresen',
          type: 'mentor',
          avatar: 'https://avatars0.githubusercontent.com/u/15238?s=400&v=4',
          linkedin: 'https://www.linkedin.com/in/jacobandresen/',
          slack_nickname: 'https://github.com/jacobandresen'
        },
        {
          name: 'Kevin Simper',
          type: 'mentor',
          avatar: 'https://i.imgur.com/quTEcgF.png',
          linkedin: 'https://www.linkedin.com/in/kevinsimper/',
          slack_nickname: 'https://github.com/kevinsimper'
        },
        {
          name: 'Younes Meliani',
          type: 'mentor',
          avatar: 'https://i.imgur.com/raR78e5.png',
          linkedin: '',
          slack_nickname: ''
        },
        {
          name: 'Fehime Seven',
          type: 'mentor',
          avatar: '',
          linkedin: '',
          slack_nickname: ''
        },
        {
          name: 'Moritz Beber',
          type: 'mentor',
          avatar: 'https://i.imgur.com/1x0oWRJ.jpg',
          linkedin: 'https://www.linkedin.com/in/moritz-beber-b597a55a/',
          slack_nickname: 'https://github.com/Midnighter'
        },
        {
          name: 'Abed Sujan',
          type: 'mentor',
          avatar:
            'https://secure.gravatar.com/avatar/678b0439a52359c99d1ed00b9a019ad7?size=400',
          linkedin: 'https://www.linkedin.com/in/abedsujan/',
          slack_nickname: ''
        },
        {
          name: 'Jakub Cioslowski',
          type: 'mentor',
          avatar: '',
          linkedin: '',
          slack_nickname: 'https://github.com/jakub-c/'
        },
        {
          name: 'Ahmed Magdy',
          type: 'mentor',
          avatar:
            'https://avatars1.githubusercontent.com/u/14139855?s=400&u=b070e4c61cab4383c2868400aadb7bf5de3fa45d&v=4',
          linkedin: 'https://www.linkedin.com/in/a-magdy/',
          slack_nickname: 'https://github.com/a-magdy'
        },
        {
          name: 'Petru Catana',
          type: 'mentor',
          avatar:
            'https://media.licdn.com/dms/image/C4D03AQEsK5ZbI2RS0A/profile-displayphoto-shrink_800_800/0?e=1550707200&v=beta&t=jfoeICLCmitXtEg3Im66bYluNNy9p-I3ldtVY98sTsw',
          linkedin: 'https://www.linkedin.com/in/petru-catana-3151a268/',
          slack_nickname: 'https://github.com/pcatana'
        },
        {
          name: 'Mikael Wistoft-Ibsen',
          type: 'mentor',
          avatar: 'https://i.imgur.com/9kJRICy.png',
          linkedin: '',
          slack_nickname: 'https://github.com/wistoft'
        },
        {
          name: 'Emil Bay',
          type: 'mentor',
          avatar: 'https://avatars2.githubusercontent.com/u/416524?s=460&v=4',
          linkedin: 'https://www.linkedin.com/in/emilbayes/',
          slack_nickname: 'https://github.com/emilbayes'
        },
        {
          type: 'alumni',
          name: 'Katsisaac50',
          email: 'katsisaac50@gmail.com',
          avatar: '1.jpg',
          slack_nickname: 'http://link-goes-here.com/github',
          remarks: 'Looking for jobs'
        },
        {
          type: 'alumni',
          name: 'Hala Kasim',
          email: 'halakasim16@gmail.com',
          avatar: '2.jpg',
          slack_nickname: 'http://link-goes-here.com/github',
          remarks: 'Looking for new opportunities'
        },
        {
          type: 'alumni',
          name: 'Rufaida Jumaa',
          email: 'eng.rufaidajumaa@gmail.com',
          avatar: '',
          slack_nickname: 'http://link-goes-here.com/github',
          remarks: 'Looking for jobs'
        },
        {
          type: 'alumni',
          name: 'Mohammed Abd',
          email: 'moha.abd.99@gmail.com',
          avatar: '3.jpg',
          slack_nickname: 'http://link-goes-here.com/github',
          remarks: 'looking for internship'
        },
        {
          type: 'alumni',
          name: 'Richard Paredes',
          email: 'chard.paredes@gmail.com',
          avatar: '4.jpg',
          slack_nickname: 'http://link-goes-here.com/github',
          remarks: 'Looking for jobs'
        },

        {
          avatar: 'https://avatars0.githubusercontent.com/u/38817334?v=4',
          name: null,
          type: 'User',
          github_login: 'marcodca',
          github_id: '38817334'
        },
        {
          avatar: 'https://avatars1.githubusercontent.com/u/19361362?v=4',
          name: null,
          type: 'User',
          github_login: 'T1ish',
          github_id: '19361362'
        },
        {
          avatar: 'https://avatars1.githubusercontent.com/u/955233?v=4',
          name: 'Zuhair Taha',
          type: 'User',
          github_login: 'zuhairtaha',
          github_id: '955233'
        },
        {
          avatar: 'https://avatars0.githubusercontent.com/u/29578565?v=4',
          name: 'Joe (Yousof)',
          type: 'User',
          github_login: 'YousofMersal',
          github_id: '29578565'
        }
      ])
    )
