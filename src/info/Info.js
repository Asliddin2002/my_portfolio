import me from "../img/me.png"
import moc1 from "../img/moc1.jpg"
import moc2 from "../img/moc2.jpg"
import moc3 from "../img/moc3.jpg"


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
      "mui",
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
  ],
  portfolio: [
    {
      title: "Commercial App",
      live: "https://yengilcredit.uz", 
      source: "", 
      image: moc1,
    },
    {
      title: "My Works",
      live: "https://kholturaev-asliddin.vercel.app/",
      source: "https://github.com/Asliddin2002/My-portfolio",
      image: moc2,
    },
    {
      title: "Music Player",
      live: "https://khoas-muisc-player.vercel.app/",
      source: "https://github.com/Asliddin2002/Muisc-Player",
      image: moc3,
    },
  ],
};