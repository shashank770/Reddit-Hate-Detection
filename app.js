const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("node-fetch");
const connectToMongoDB = require("./config/database");
const Subreddit = require('./models/subreddit');

const port = process.env.PORT || 3001;

require("dotenv").config();
app.use(cors());
app.use(express.json());

const REDDIT_CLIENT_ID = "rnyVZZYSU5qj1qWo34RpRg";
const REDDIT_CLIENT_SECRET = "U45URrgbWsGSc0V615ozM9Qqy4wyOg";
app.get("/login_reddit", async (req, res) => {
  try {
    const code = req.query.code;
    const encodedHeader = Buffer.from(
      `${REDDIT_CLIENT_ID}:${REDDIT_CLIENT_SECRET}`
    ).toString("base64");
    let response = await fetch("https://www.reddit.com/api/v1/access_token", {
      method: "POST",
      body: `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/login/callback`,
      headers: {
        authorization: `Basic ${encodedHeader}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    let body = await response.json();
    response = await fetch("https://oauth.reddit.com/api/v1/me", {
      method: "GET",
      headers: { authorization: `bearer ${body.access_token}` },
    });

    let TOKEN = body.access_token;
    let responseJSON = await response.json();
    let username = await responseJSON.name;

    response = await fetch(
      `https://oauth.reddit.com/user/${username}/upvoted`,
      {
        method: "GET",
        headers: {
          "User-Agent": "MyAPI/0.0.1",
          Authorization: `bearer ${TOKEN}`,
        },
      }
    );

    responseJSON = await response.json();
    let upvotedList = await responseJSON.data.children;
    console.log(upvotedList);
    res.json(upvotedList);
  } catch (e) {
    // res.send(["Something went wrong."])
    console.log(e);
  }
});

app.post("/submit_data", async (req, res) => {
    console.log('trying submit');
    console.log(req);
    try {
    console.log(req.body);
    console.log('hii');
    const { subredditValueMapping } = req.body;
    console.log('hii2');
    for(const subreddit in subredditValueMapping) {
      console.log(subreddit);
      console.log('hii3');
        const score = parseInt(subredditValueMapping[subreddit]);
        console.log(score);
        let subredditDoc = await Subreddit.findOne({ subreddit });
        console.log('subredditDoc', subredditDoc);
        if (!subredditDoc) {
          subredditDoc = new Subreddit({ subreddit, scores: [] });
        }
        else{
          console.log('found');
        }
        console.log('subredditDoc', subredditDoc);
        subredditDoc.scores.push(score);
        console.log('subredditDoc updated', subredditDoc);
        await subredditDoc.save();
    }
    res.send("Success");
  } catch (e) {
    res.send(["Something went wrong."]);
  }
});

const startServer = async () => {
  try {
    await connectToMongoDB();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

startServer();
