/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Alex Clorennec",
  title: "Hi all, I'm Alex",
  subTitle: emoji(
    "A passionate Game Developer mainly working with Unity, with some experience in Unreal Engine and Godot, and a strong interest in building custom engines from scratch using OpenGL and experimenting with Metal."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1sy1YGpxsdeUawPc0j_Mbdc19W5Xcsrw3", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/devalexxx",
  linkedin: "https://www.linkedin.com/in/alex-clorennec-103219204/",
  gmail: "alex.clorennec@gmail.com",
  //   gitlab: "https://gitlab.com/saadpasta",
  //   facebook: "https://www.facebook.com/saad.pasta7",
  //   medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/20295201/alex-clorennec",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "GAME DEVELOPER FOCUSED ON ENGINES, GRAPHICS AND BUILDING FROM SCRATCH",
  skills: [
    emoji(
      "⚡ Design and implementation of core gameplay systems and custom game engines"
    ),
    emoji("⚡ Engine architecture and software design using OpenGL and Metal"),
    emoji(
      "⚡ Experimentation with programming languages, compilers, and game tech foundations"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C",
      fontAwesomeClassname: "mdi mdi-language-c"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "mdi mdi-language-cpp"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "mdi mdi-language-csharp"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "mdi mdi-unity"
    },
    {
      skillName: "Unreal",
      fontAwesomeClassname: "mdi mdi-unreal"
    },
    {
      skillName: "Godot",
      fontAwesomeClassname: "mdi mdi-engine"
    },
    {
      skillName: "OpenGL",
      fontAwesomeClassname: "mdi mdi-expansion-card"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "mdi mdi-git"
    },
    {
      skillName: "CI / CD",
      fontAwesomeClassname: "mdi mdi-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Université Lumière Lyon 2",
      logo: require("./assets/images/lyon2.jpg"),
      subHeader: "Master of Science in Video Game Programming",
      duration: "September 2024 - now",
      desc: "Took courses about Gameplay Programming, Graphics Rendering, Physics Simulation, Pathfinding and AI Algorithms...",
      descBullets: []
    }
    //     {
    //       schoolName: "Stanford University",
    //       logo: require("./assets/images/stanfordLogo.png"),
    //       subHeader: "Bachelor of Science in Computer Science",
    //       duration: "September 2013 - April 2017",
    //       desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //       descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    //     }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Gameplay Programming",
      progressPercentage: "85%"
    },
    {
      Stack: "Engine & Architecture", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming / Low-Level Tech",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile and Backend Developer",
      company: "Freelance",
      companylogo: require("./assets/images/blank.jpg"),
      date: "Jul 2024 – Jun 2025",
      desc: "Followed up my internship at Shauni Studio as a freelance developer.",
      descBullets: []
    },
    {
      role: "Mobile and Backend Developer Intern",
      company: "Shauni Studio",
      companylogo: require("./assets/images/shauni_studio_logo.jpeg"),
      date: "May 2024 – Jul 2024",
      desc: "Design of a mobile application for the New Orchestra Confluence (Apple, Android).",
      descBullets: [
        "React Native interface for musicians and conductors, responsive design for mobile/tablet, with audio and video player",
        "REST API with Node.js and Express, data storage on MongoDB, deployed on VPS"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "GAMES AND PROJECTS I DEVELOPED OR CONTRIBUTED TO",
  projects: [
    {
      image: require("./assets/images/mekaiju.png"),
      projectName: "Mekaiju",
      projectDesc:
        "Gameplay Developer on Mekaiju: developed nearly all Mecha-related systems, including combat mechanics, progression, and interactions with Kaijus.",
      footerLink: [
        {
          name: "Itchio",
          url: "https://gamagora.itch.io/mekaiju"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mcc.webp"),
      projectName: "MCC",
      projectDesc:
        "MCC is a multiplayer voxel-based game written in C++ with OpenGL based on minecraft, featuring dynamic chunk loading, Perlin noise terrain generation, ...",
      footerLink: [
        {
          name: "Source code",
          url: "https://github.com/devalexxx/MinecraftClone"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "alex.clorennec@gmail.com",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
