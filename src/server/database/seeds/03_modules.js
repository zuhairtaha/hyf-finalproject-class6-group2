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
            'HTML is the standard markup language for creating Web pages. CSS is a language that describes the style of an HTML document. This module will introduce the basic concepts of HTML5 and CSS. We spend time getting you familiar with your text editor and handy',
          length: 3
        },
        {
          id: 2,
          title: 'CSS',
          description:
            'CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable',
          length: 3
        },
        {
          id: 3,
          title: 'Javascript 1',
          description:
            'A basic understanding of the following topics: Intro JavaScript (What is it, where can you use it for), Variables [var, let, const], Basic Data types [Strings, Numbers, Arrays, Booleans], Operators, Naming conventions, Conditions, Advanced data types [Ob',
          length: 4
        },
        {
          id: 4,
          title: 'javascript 2',
          description:
            'Capturing user input Basic DOM manipulations [img src, innerHTML] Code debugging using the browser Code commenting Structuring code files Functions + JSON/Arrays Array Manipulations JSON Map and filter Arrow functions Closures Scope Events Callbacks',
          length: 4
        },
        {
          id: 5,
          title: 'javascript 3',
          description:
            'Object Oriented Programming Code flow (order of execution) Async VS Sync Structure for a basic SPA XHTTP Requests API calls (re)writing data structures (in JSON) Promises',
          length: 4
        },
        {
          id: 6,
          title: 'Node.js',
          description:
            "Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). For almost any web application, it is essential to have a backend. The backend is a place where we, the developers, can store our data, communicate with users and le",
          length: 3
        },
        {
          id: 7,
          title: 'MySQL',
          description:
            'MySQL Enterprise Edition includes the most comprehensive set of advanced features, management tools and technical support to achieve the highest levels of MySQL scalability, security, reliability, and uptime. It reduces the risk, cost, and complexity ',
          length: 3
        },
        {
          id: 8,
          title: 'React',
          description:
            'By the end of this module, students should have a familiarity with and basic understanding of the following: React Components State and Lifecycle Forms and Managing State Flux & MobX MobX API Integration',
          length: 4
        },
        {
          id: 9,
          title: 'Final Project',
          description:
            'Learn to understand an existing codebase in a short period of time Get experience working on existing projects Get experience working on open-source projects Get familiar with the basics of project management with agile Become comfortable with reporti',
          length: 8
        }
      ])
    })
}
