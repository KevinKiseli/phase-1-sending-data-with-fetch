// Add your code here



// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };

const formData = {
    id: 186,
    name: "Steve",
    email: "steve@steve.com",
}
  
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    });


    function submitData(name, email) {
        const userData = {
            name : 'Steve',
            email : 'steve@steve.com',
        }


        const configObject = {
            method: "POST",
            headers:{
                "content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(userData),
        }


    return fetch("http://localhost:3000/users", configObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (object){
            console.log(object);
        })
        .catch(error => {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = "error: " + error.message;
            document.body.appendChild(errorMessage);
        })
    }
    submitData("Steve", "steve@steve.com", configurationObject);