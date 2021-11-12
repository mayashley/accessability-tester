const pa11y = require("pa11y");
const express = require("express");
const { request, response } = require("express");
//running on port 5001 because 5000 will not run, not sure if its an m1 issues or otherwise...all other ports will run except 5000
const PORT = process.env.PORT || 5001;

const app = express();

//middleware for the static folder "might use react later for this but for now its vanilla js"
app.use(express.static("public"));

app.get("/api/testing", async (request, response) => {
  if (!request.query.url) {
    //using a statues of 400 for the client error
    response.status(400).json({ err: "You must enter a URL, it is required" });
  } else {
    const results = await pa11y(request.query.url);
    //using a status of 200 for OK/success
    response.status(200).json(results);
  }
});

app.listen(PORT, () => console.log("Server has started on port ${PORT}"));

//get request for postman http://localhost:5001/api/testing?url=https://alphatechdevs.com/
