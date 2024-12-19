const express = require("express");
const { Client, auth } = require("twitter-api-sdk");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const URL = process.env.URL || "http://127.0.0.1";
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const authClient = new auth.OAuth2User({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  callback: `${URL}:${PORT}/callback`,
  scopes: ["tweet.read", "tweet.write", "users.read"],
});

const client = new Client(authClient);

const STATE = "my-state";

// OAuth callback endpoint to request access token
app.get("/callback", async (req, res) => {
  try {
    const { code, state } = req.query;
    if (state !== STATE) return res.status(500).send("State doesn't match.");
    await authClient.requestAccessToken(code);
    res.redirect("/tweets");
  } catch (error) {
    console.error("OAuth callback error:", error);
    res.status(500).send("OAuth callback error.");
  }
});

// Redirects to Twitter for OAuth authorization
app.get("/login", (req, res) => {
  const authUrl = authClient.generateAuthURL({
    state: STATE,
    code_challenge_method: "s256",
  });
  res.redirect(authUrl);
});

// Endpoint to send tweet via query parameter `text`
app.get("/tweets", async (req, res) => {
  try {
    const { text } = req.query;

    if (!text || typeof text !== "string") {
      return res.status(400).send({ error: "Text parameter is required." });
    }

    const response = await client.tweets.createTweet({ text });
    console.log("Tweet response:", JSON.stringify(response, null, 2));
    res.send(response);
  } catch (error) {
    console.error("Tweet error:", error);
    res.status(500).send("Failed to post tweet.");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at ${URL}:${PORT}`);
  console.log(`Visit ${URL}:${PORT}/login to start the OAuth process.`);
});
