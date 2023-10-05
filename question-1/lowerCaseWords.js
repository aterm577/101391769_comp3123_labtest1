const mixedArray = ['Pizza', 10, true, 25, false, 'Wings']

function lowerCaseWords(mixedArray){
    return new Promise ((resolve, reject) =>{
        if (!Array.isArray(mixedArray)){
            reject("Input is not an array")
            return
        }

        // Filter out only string elements from the mixedArray
        const stringsOnly = mixedArray.filter((input) =>{
            return typeof input === 'string'
        })

        const wordsInLowerCase = []
        // Iterate through the filtered strings and convert them to lowercase
        for (let i = 0; i < stringsOnly.length; i++){
            const lowercaseWrds = stringsOnly[i].toLowerCase()
            wordsInLowerCase.push(lowercaseWrds)
        }

        // Check if any lowercase words were found
        if(wordsInLowerCase.length > 0){
            resolve(wordsInLowerCase)
        }else{
            reject("No lowercase words found in the input array")
        }
    })
}

// Call the lowerCaseWords function with the mixedArray
lowerCaseWords(mixedArray)
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.error(error)
  })