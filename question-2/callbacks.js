// Function to create a resolved Promise with a delay of 500ms
const resolvedPromise = () => {
    const p = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let sucess = {'message': 'delayed sucess!'}
            resolve(sucess);
        }, 500)

    })

    return p
}

// Function to create a rejected Promise with a delay of 500ms
const rejectedPromise = () => {
    const s = new Promise((resolve,reject) =>{
        setTimeout(() => {
            try {
                throw new Error('delayed exception!');
              } catch (e) {
                reject({ error: e.message });
              }
        }, 500)   
    })

    return s
}

// Call the resolvedPromise function and handle the result
resolvedPromise()
.then((result) =>{
    console.log(result)
})
.catch((error) =>{
    console.log(error.message)
})

// Call the rejectedPromise function and handle the result
rejectedPromise()
.then((result) =>{
    console.log(result)
})
.catch((error) =>{
    console.log(error)
})

