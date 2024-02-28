const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

const githubData = {
  login: "g3vind",
  id: 70854788,
  node_id: "MDQ6VXNlcjcwODU0Nzg4",
  avatar_url: "https://avatars.githubusercontent.com/u/70854788?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/g3vind",
  html_url: "https://github.com/g3vind",
  followers_url: "https://api.github.com/users/g3vind/followers",
  following_url: "https://api.github.com/users/g3vind/following{/other_user}",
  gists_url: "https://api.github.com/users/g3vind/gists{/gist_id}",
  starred_url: "https://api.github.com/users/g3vind/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/g3vind/subscriptions",
  organizations_url: "https://api.github.com/users/g3vind/orgs",
  repos_url: "https://api.github.com/users/g3vind/repos",
  events_url: "https://api.github.com/users/g3vind/events{/privacy}",
  received_events_url: "https://api.github.com/users/g3vind/received_events",
  type: "User",
  site_admin: false,
  name: "Govind Kumar",
  company: null,
  blog: "https://g3vind.vercel.app/",
  location: " India",
  email: null,
  hireable: true,
  bio: "Frontend Developer | MCA'24 @ VIT Vellore",
  twitter_username: "g3vind",
  public_repos: 46,
  public_gists: 0,
  followers: 13,
  following: 15,
  created_at: "2020-09-06T16:30:19Z",
  updated_at: "2024-02-17T05:35:54Z",
};

app.get("/", (req, res) => {
  res.send({ status: "OK" });
});

app.get("/twitter", (req, res) => {
  res.send("@g3vind");
});

app.get("/login", (req, res) => {
  res.send("<h1>LOGIN PAGE</h1>");
});

app.get("/github", (req, res) => {
  res.send(githubData);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
