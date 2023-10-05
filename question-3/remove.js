const fs = require('fs')
const path = require('path')

const logFiles = './Logs'

 // Define a function to remove log files 
function removeFiles () {
  if (!fs.existsSync(logFiles)) {
    console.log('Logs directory does not exist')
    return
  }

  // Read the contents of the Logs directory 
  fs.readdir(logFiles, (err, files) => {
    if (err){
        console.error('Error reading directory:', err)
        return
    }

    // Check if there are no files in the directory
    if (files.length === 0) {
      console.log('No files in this folder')
      return
    }

    console.log('Files to delete:');
    for (const file of files) {
      console.log(file);

      // Delete each file
      fs.unlink(path.join(logFiles, file), (err) => {
        if (err){
            console.error('Error deleting file ${file}', err)
            return
        }
        console.log(`Deleting file... ${file}`);
      });
    }

    // Remove the Logs directory
    fs.rmdir(logFiles, (err) =>{
        if(err){
            console.error('Error removing directory:', err)
            return
        }
        console.log('Logs directory removed');
    })
  })
}

// Call the function to remove log files 
removeFiles()


