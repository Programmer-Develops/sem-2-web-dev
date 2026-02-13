// netflix like system through asynchronous programming

movies = {
  1: "The Shawshank Redemption",
  2: "The Godfather",
  3: "The Dark Knight",
  4: "Pulp Fiction",
  5: "The Lord of the Rings: The Return of the King",
};

userDB = {
    "john_doe": "password123",
    "jane_smith": "securepassword",
    "alice_jones": "mypassword",
}

function signIn(username,password,callback) {
    console.log("signing in...");
    setTimeout(()=> {
        if (userDB[username] === password) {
            callback(`Welcome, ${username}!`);
        }else {
            callback("Invalid username or password.");
        }
    }, 1000)

}

function fetchMovie(movieId, callback) {
  console.log("fetching movie...");
  setTimeout(() => {
    callback(`Movie with id ${movieId} is "${movies[movieId]}"`);
  }, 1000);
}
-
signIn("john_doe", "password123", (message) => {
  console.log(message);
  if (message.startsWith("Welcome")) {
    fetchMovie(3, (result) => {
        console.log(result)
        setTimeout(()=>{console.log(`Playing movie "${movies[3]}"`)}, 1000)
    })
  }
});
