const express = require("express");
const colors = require("colors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 3000;
const cors = require("cors");
const app = express();
const path = require("path");
// Connect to database
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: require("./schema/schema"),
    graphiql: process.env.NODE_ENV === "production" ? false : true,
  })
);

// Serve client
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "client", "dist", "index.html")
    )
  );
}

else{
  app.get("/", (req, res) => {
    res.send("Please set to production mode to see the client side.");
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
