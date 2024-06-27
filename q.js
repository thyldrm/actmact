const password = 123456
console.log(password)

const SECRET_KEY = "123456"
console.log(SECRET_KEY)

fs.writeFile("user-data.txt", "userName=asd", (err) => {
  if (err) {
    console.log(err);
  } else console.log("wrote file");
});
