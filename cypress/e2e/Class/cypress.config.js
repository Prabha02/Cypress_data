const { defineConfig } = require("cypress");
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

async function setupNodeEvents(on, config){
  on('task',{
    excelToJsonConverter(filePath){
      const result = excelToJson({
        source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
        });
        return result;
    }
  })
}

module.exports = defineConfig({
  chromeWebSecurity:false,
  defaultCommandTimeout:8000,
  //pageLoadTimeout:6000,
  //reporter:'mochawesome',
  //.
 env:{url:'https://rahulshettyacademy.com',},
  retries:{runMode:1,},
  projectId:'qdpjbx',

  



  e2e: {
    setupNodeEvents, 
      //on('file:preprocessor',cucumber())
      // implement node event listeners here
  
    specPattern: 'cypress/integration/examples/*.js'
  },
 
});
