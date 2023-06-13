// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {

//       // implement node event listeners here
//     },
//     module.exports = {
//       reporter: 'cypress-multi-reporters',
//       reporterOptions: {
//         configFile: 'reporter-config.json'
//       }
//     }

//   },
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1080,
  viewportHeight: 720,
  
  

  plugins: (on, config) => {
    // implement node event listeners here
  },

  e2e: {
    setupNodeEvents(on, config) {
      expirementalSessionAndOrigion:true
      // implement node event listeners here
      
    },
    baseUrl: "https://app.influnaire.dreamkashmir.com/brand/login"
  },
  
});
