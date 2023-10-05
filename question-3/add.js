const fs = require('fs');
const path = require('path');

const logFiles = './Logs';

// Define a function to create log files
function createLogFiles() {
  try {
    if (!fs.existsSync(logFiles)) {
      fs.mkdirSync(logFiles); 
    }

    process.chdir(logFiles);

    console.log('Created log files:');
    for (let i = 1; i <= 10; i++) {
      const fileName = `log${i}.txt`;
      const fileContent = `This is log file ${i}.`;

      fs.writeFileSync(fileName, fileContent); 
      console.log(fileName);
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

// Call the function to create log files
createLogFiles();
