/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Alejandro Tello's Portfolio",
  description:
    "Software Engineer focused on Cloud Infrastructure and Automation.",
  og: {
    title: "Alejandro Tello Portfolio",
    type: "website",
    url: "http://alejandrotello.com/",
  },
};

//Home Page
const greeting = {
  title: "Alejandro Tello Flores",
  subTitle:
    "Software Engineer focused on Cloud Infrastructure, Automation and DevOps",
  resumeLink:
    "https://drive.google.com/file/d/1b0ingHK0viiJZ3bF1QllqEdJ83BBD4zD/view?usp=sharing",
  portfolio_repository: "https://github.com/alejandrotello7/portfolio",
  githubProfile: "https://github.com/alejandrotello7",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/alejandrotello7",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/alejandrotellof/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:alejandro.tello.f@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Vue, React and Gatsby.",
        "⚡ Creating application backend in Flask, FastAPI, Go and Spring Boot",
        "⚡ Developing mobile multi-platform applications using Flutter",
      ],
      softwareSkills: [
        {
          skillName: "Vue",
          fontAwesomeClassname: "logos:vue",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "devicon:typescript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "logos:flask",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "devicon:fastapi",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "devicon:go",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "bxl:spring-boot",
          style: {
            color: "#4e9933",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Engineering and Infrastructure",
      fileName: "CloudDevImg",
      skills: [
        "⚡ Experience managing infrastructure and services on AWS and Azure.",
        "⚡ Develop, maintain and deploy Kubernetes cluster through Helm charts in Azure (AKS) and AWS (EKS). ",
        "⚡ Spin infrastructure-as-code (IaC) services such as VM Instances and Storage Claims with Terraform and Cloud Formation.",
        "⚡ Deploy static websites through Azure Storage and AWS Amplify Hosting  ",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Helm",
          fontAwesomeClassname: "logos:helm",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "devicon:terraform",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "CI/CD Pipeline development",
      fileName: "CICDImg",
      skills: [
        "⚡ Develop the complete lifecycle of CI/CD Pipelines in Azure DevOps and Jenkins",
        "⚡ Develop build and release pipelines, deployment to container registries,  ",
        "⚡ Develop testing environments with Jest/Cypress, and deployment to different environments (testing, staging and production) ",
      ],
      softwareSkills: [
        {
          skillName: "Azure DevOps",
          fontAwesomeClassname: "devicon:azuredevops",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "devicon:jenkins",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Pipeline",
          fontAwesomeClassname: "file-icons:azure-pipelines",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Jest",
          fontAwesomeClassname: "logos:jest",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Cypress",
          fontAwesomeClassname: "logos:cypress",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Confidential Computing",
      fileName: "EnclaveImg",
      skills: [
        "⚡ Experience developing and deploying Dockerize applications in Confidential Computing environments such as Nitro Enclaves (AWS)",
        "⚡ Technical expertise developing in Nitro Enclaves (AWS) SDK to develop enclave applications",
        "⚡ Worked with TLS connections, gRPCS servers, sock/vsock communication, data encryption and decryption",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Open SSL",
          fontAwesomeClassname: "simple-icons:openssl",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "gRPC",
          fontAwesomeClassname: "logos:grpc",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "TU Dresden",
      subtitle: "MSc. in Computer Science",
      location: "Dresden, Germany",
      logo_path: "tudresden.png",
      alt_name: "TU Dresden",
      duration: "2019 - 2023",
      descriptions: [],
      website_link: "https://tu-dresden.de/",
    },
    {
      title: "CETYS University",
      subtitle: "BSc. Computer Science and Electrical Engineering",
      location: "Mexicali, Mexico",
      logo_path: "cetyscircular.png",
      alt_name: "CETYS University ",
      duration: "2012 - 2016",
      descriptions: [],
      website_link: "https://www.cetys.mx/en/",
    },
    {
      title: "City University of Seattle",
      subtitle: "BA. in Management",
      location: "Seattle, USA",
      logo_path: "cityu.png",
      alt_name: "City University of Seattle",
      duration: "2012 - 2016",
      descriptions: [],
      website_link: "https://www.cityu.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Spanish",
      subtitle: "Native",
      logo_path: "",
      certificate_link: "",
      alt_name: "",
      color_code: "#8C151599",
    },
    {
      title: "English",
      subtitle: "Native",
      logo_path: "",
      certificate_link: "",
      alt_name: "",
      color_code: "#8C151599",
    },
    {
      title: "German",
      subtitle: "B1/B2",
      logo_path: "",
      certificate_link: "",
      alt_name: "",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Professional experience",
  subtitle: "",
  description:
    "I  have over 5 years of experience working as software, cloud and DevOps Engineer with multinational companies such as Bosch and SAP, as well as, consulting firms such as LBD.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer  - Cloud Infrastructure",
          company: "LBD Beratung",
          company_url: "https://www.lbd.de/",
          logo_path: "lbd_logo.png",
          duration: "Dec 2021 - Dec 2022",
          location: "Berlin, Germany",
          description: [
            "• Full stack development with Vue/React and Flask/FastAPI.",
            "• Cloud infrastructure design and maintenance with Azure.",
            "• Develop, maintain and deploy Kubernetes cluster (AKS) with Helm and dockerization of applications.",
            "• CI/CD pipeline design and deployment in Azure DevOps. ",
          ],
          color: "#0879bf",
        },
        {
          title: "Software Engineer",
          company: "SAP",
          company_url: "https://www.sap.com/",
          logo_path: "sap_logo.png",
          duration: "May 2020 - May 2021",
          location: "Dresden, Germany",
          description: [
            "• Full stack development with React and Java.",
            "• E2E Testing with Cypress and unit testing with Jest.",
            "• Pipeline development with Github Actions.",
          ],
          color: "#9b1578",
        },
        {
          title: "IT Engineer Leader",
          company: "Bosch",
          company_url: "https://www.bosch.com/",
          logo_path: "bosch_logo.png",
          duration: "Dec 2016 - Oct 2019",
          location: "Mexicali, Mexico",
          description: [
            "• Business consultant for IT projects implementation.",
            "• Full stack web applications development for Manufacturing Requirements such as KPI and Kanban boards.",
            "• Local department leader with 3 engineers under my team.",
          ],
          color: "#fc1f20",
        },
        {
          title: "IT Engineer",
          company: "Bosch",
          company_url: "https://www.bosch.com/",
          logo_path: "bosch_logo.png",
          duration: "Jul 2015 - Nov 2016",
          location: "Mexicali, Mexico",
          description: [
            "• Network design, implementation and troubleshooting with ITSM Ticketing System (BMC Remedy).",
            "• IT Services and devices troubleshooting for over 300 active users. ",
            "• Point of contact for IT vendors suppliers and project implementations.",
          ],
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "The projects I've been working demonstrate the skills that I posses as a full-stack software, Cloud and DevOps engineer.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "",
  description: "",
  avatar_image_path: "",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "atello.png",
    description:
      "The fastest way to reach me is through email. I'll get back to you in less than 24 hours!",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "",
    subtitle: "",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
