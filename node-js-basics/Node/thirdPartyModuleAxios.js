// install axios before running code

axios // axios has a function defined as get we are calling it and it is a promise 
  .get("http://www.jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log("Data", response.data);
  })
  .catch((err) => {
    console.log(er.message);
  });
