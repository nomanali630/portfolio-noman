/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Noman Ali",
  logo_name: "Noman Ali",
  nickname: "Nomi",
  full_name: "Noman Ali",
  subTitle:
    "MERN Stack Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    // "https://docs.google.com/document/d/1uBRWSnPAmmSBu3gqr4rzs_BqO92tF45leZbMYPlaIF4/edit?usp=sharing",
    "https://app.luminpdf.com/viewer/60dae2830ca504001135dea8",
  mail: "mailto:hussainkhaan78@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/nomanali630",
  linkedin: "https://www.linkedin.com/in/noman-ali-6a2877192/",
  twitter:"https://twitter.com/NomiYousfzai",
  gmail: "hussainkhaan78@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100005414894763",
  instagram: "https://www.instagram.com/noman8537/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        // "⚡ Developing mobile applications using Flutter and Android",
        "⚡ Creating application backend in Node, Express ",
        "⚡ Integration of third party services such as Firebase"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        // {
        //   skillName: "PHP",
        //   fontAwesomeClassname: "simple-icons:php",
        //   style: {
        //     color: "#7377AD",
        //   },
        // },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        // {
        //   skillName: "Java",
        //   fontAwesomeClassname: "simple-icons:java",
        //   style: {
        //     color: "#f89820",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        // {
        //   skillName: "MySQL",
        //   fontAwesomeClassname: "simple-icons:mysql",
        //   style: {
        //     color: "#4479A1",
        //   },
        // },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },
        // {
        //   skillName: "Apache",
        //   fontAwesomeClassname: "simple-icons:apache",
        //   style: {
        //     color: "#CA1A22",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        // {
        //   skillName: "C",
        //   fontAwesomeClassname: "simple-icons:c",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        // {
        //   skillName: "C++",
        //   fontAwesomeClassname: "simple-icons:cplusplus",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        // {
        //   skillName: "Python",
        //   fontAwesomeClassname: "simple-icons:python",
        //   style: {
        //     color: "#3776AB",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        // {
        //   skillName: "AWS",
        //   fontAwesomeClassname: "simple-icons:amazonaws",
        //   style: {
        //     color: "#FF9900",
        //   },
        // },
        // {
        //   skillName: "Netlify",
        //   fontAwesomeClassname: "simple-icons:netlify",
        //   style: {
        //     color: "#38AFBB",
        //   },
        // },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bacholar of computer science ",
      subtitle: "MERN stack development",
      logo_path: "ssgandhy.png",
      alt_name: "SETI",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      // website_link: "http://www.ssgc.cteguj.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "MERN Stack Development",
      subtitle: "Saylani Mass IT Training",
      logo_path: "mongo.png",
      // certificate_link:
      //   "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "Mern stack",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "AUTOCAD-CIVIL",
      subtitle: "Hack The Mountains",
      logo_path: "hackathon1.svg",
      // certificate_link:
        // "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "Autocad civil",
      color_code: "#E2405F",
    },
    // {
    //   title: "A300: Atlas Security",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#F6B808",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "Cyber Security & Cyber Forensics",
    //   subtitle: "Workshop at IIT Bombay",
    //   logo_path: "iit.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
    //   alt_name: "Workshop",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "MLH Local Hack Day: Build",
    //   subtitle: "Major League Hacking",
    //   logo_path: "mlh-logo.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "#fe0037",
    // },
    // {
    //   title: "Hack20",
    //   subtitle: "Flutter Internation Hackathon",
    //   logo_path: "flutter.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
    //   alt_name: "Flutter Internation Hackathon",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Postman Student Expert",
    //   subtitle: "Postman",
    //   logo_path: "postman.png",
    //   certificate_link:
    //     "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
    //   alt_name: "Postman",
      // color_code: "#f36c3d",
    //   color_code: "#fffbf3",
    // },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Full Stack Developer (Intern)",
          company: "Sysborg",
          company_url: "https://sysborg.com/",
          logo_path: "valora.jpg",
          duration: " 2020 - present",
          location: "Office",
          description:
            "I worked on different like swwt shop application and a small chat app with a the help of React js MongoDB Express js and Node js now i am working on vehicle maintanance application.",
          color: "#0071C5",
        },
        {
          title: "Customer Support Representative",
          company: "Sybrid Pvt Limited",
          company_url: "https://www.facebook.com/SybridCareers/",
          logo_path: "nightowls.jpg",
          duration: "2017 - 2018",
          location: "Office",
          description:
            "I was Tele Sales representative in Sybrid pvt limited ",
          color: "#ee3c26",
        }
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Cross Winter of Code Mentor",
    //       company: "CWOC",
    //       company_url: "https://crosswoc.ieeedtu.in/",
    //       logo_path: "cwoc.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Campus Hustler",
    //       company: "Skillenza",
    //       company_url: "https://skillenza.com/",
    //       logo_path: "skillenza.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work from Home",
    //       description: "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
    //       color: "#196acf",
    //     },
    //     {
    //       title: "GitHub Student Developer",
    //       company: "GitHub",
    //       company_url: "https://github.com/",
    //       logo_path: "github.png",
    //       duration: "Nov 2019 - Present",
    //       location: "Work from Home",
    //       description:
    //       "Contribute to Open Source Community and Open Source Project.",
    //       color: "#040f26",
    //     },
    //     {
    //       title: "Google Local Guide",
    //       company: "Google Map",
    //       company_url: "https://maps.google.com/localguides/",
    //       logo_path: "localguide.png",
    //       duration: "Sep 2018 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "GDG Student Volunteer",
    //       company: "Google Developer Groups",
    //       company_url: "https://gdg.community.dev/",
    //       logo_path: "gdg.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Google Developer Group Surat Student Volunteer and Member.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "E. F. I. Student Volunteer",
    //       company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
    //       company_url: "https://indiaenvironment.org/",
    //       logo_path: "efi.png",
    //       duration: "Apr 2017 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
    //       color: "#5a900f",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "noman.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/NomiYousfzai",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Sweet Shop App",
      url: "https://github.com/nomanali630/sweet-shop-material-ui",
      description: "This is Instagram Bot. This will login to your Instagram account. Follow Users, Unfollow Users, Remove Profile Photo",
      languages: [
        {
          name: "React js",
          iconifyClass: "logos-react",
        },
        {
          name: "Node js",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Express js",
          iconifyClass: "logos-expressjs",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "Material UI",
          iconifyClass: "logos-materialui",
        },
        {
          name: "Bootsrap",
          iconifyClass: "logos-bootstrap",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "1",
      name: "Simple Chat app",
      url: "https://github.com/nomanali630/tweet-app-complete",
      description:
        "It is a simple chat application where you can talk to other persons you can upload your Dp",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Express js",
          iconifyClass: "logos-expressjs",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "Node js",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "2",
      name: "Simple signup LOgin and update ",
      url: "https://github.com/nomanali630/firebase-authentication-work",
      description:
        "simple firebase login sign up and update in react",
      languages: [
        {
          name: "React js",
          iconifyClass: "logos-react",
        },
        {
          name: "Node js",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Express js",
          iconifyClass: "logos-expressjs",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "Material UI",
          iconifyClass: "logos-materialui",
        },
        {
          name: "Bootsrap",
          iconifyClass: "logos-bootstrap",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        
      ],
    },
    {
      id: "3",
      name: "Vehicle maintainance app",
      url: "https://github.com/nomanali630/vehile-maintainance-app",
      description:
        "It is maintainance application where your put the details of his vehicle when he is fueling to check the milage ",
      languages: [
        {
          name: "React js",
          iconifyClass: "logos-react",
        },
        {
          name: "Node js",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Express js",
          iconifyClass: "logos-expressjs",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "Material UI",
          iconifyClass: "logos-materialui",
        },
        {
          name: "Bootsrap",
          iconifyClass: "logos-bootstrap",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
 
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
