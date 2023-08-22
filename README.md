# Ecommerce_Cypress

required softwares
Node.js
VSC
Cypress
Cucucmber

for Node.js goto - https://nodejs.org/en/download
download and start install

VSC code- https://code.visualstudio.com/download

for cypress - 
npm init -y
npm install cypress

it will install required thing into local

open cypress 

- npx cypress open 
- choose config
- choose browser
- choose spec


Install cucumber
Install below two plugins
npm install -save-dev cypress-cucumber-preprocessor

npm i -D cypress cypress-cucumber-preprocessor

open cypress.config.js

const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
  },
});

open package.js
past last 
"cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true,
    "step_definitions": "cypress/e2e/"
  }
