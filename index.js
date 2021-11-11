const pa11y = require("pa11y");
const express = require("express");
const { request, response } = require("express");
// I normally run on port 5000 for node projects
const PORT = process.env.PORT || 5000;

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
