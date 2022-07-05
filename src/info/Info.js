import me from "../img/me.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Asliddin",
  lastName: "Kholturaev",
  initials: "KhoAs.", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Front-End Developer",
  selfPortrait: me, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],

  socials: [
    {
      link: "https://github.com/Asliddin2002",
      icon: "fa fa-github",
    },
    {
      link: "https://www.linkedin.com/in/asliddin-kholturaev-264517235",
      icon: "fa fa-linkedin",
    },
    {
      link: "https://t.me/Kholturaev_A",
      icon: "fa fa-telegram",
    },

  ],
  bio: "Hello! I'm Asliddin. I'm a front-end developer for company iTech. Also, I have studied Westminster International University in Tashkent for 2 years, I enjoy coding, and I believe web-development will inevitably rule us all one day. You should hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "typescript",
      "react",
      "redux",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "scss",
      "mui"
    ],
    exposedTo: ["nodejs", "python", "adobe illustrator"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "chess",
      emoji: "♟",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Project 1",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Project 2",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock2,
    },
    {
      title: "Project 3",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock3,
    },
    {
      title: "Project 4",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock4,
    },
    {
      title: "Project 5",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock5,
    },
  ],
};