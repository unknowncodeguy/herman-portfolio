import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Herman Smerda',
  title: "Hi all, I'm Herman",
  description:
    "I'm passionate Front-end Engineer having over 7 years experience of web applications with Modern Javascript Frameworks such as React.js, Next.js and Angular",
  resumeLink:
    '/resume.pdf',
};

export const openSource = {
  githubUserName: 'hermansmerda',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  gmail: 'yuanjett82@gmail.com',
  github: 'https://github.com/hermansmerda',
  skype: 'https://join.skype.com/invite/CGHs0cpzSvj0'
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY SOFTWARE ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Web Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in ReactJS and Angular'
        ),
        emoji('⚡ Building responsive static websites using NextJS'),
        emoji('⚡ Building RESTful APIs in MERN & MEAN Stack'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Typescript',
          fontAwesomeClassName: 'logos:typescript-icon-round',
        },
        {
          skillName: 'PHP',
          fontAwesomeClassName: 'skill-icons:php-dark',
        },
        {
          skillName: 'Laravel',
          fontAwesomeClassName: 'logos:laravel',
        },
        {
          skillName: 'Wordpress',
          fontAwesomeClassName: 'devicon-plain:wordpress',
        },
        {
          skillName: 'NodeJS',
          fontAwesomeClassName: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'MySQL',
          fontAwesomeClassName: 'logos:mysql-icon',
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassName: 'skill-icons:mongodb',
        },
        {
          skillName: 'SASS',
          fontAwesomeClassName: 'logos:sass',
        },
        {
          skillName: 'TailwindCSS',
          fontAwesomeClassName: 'devicon:tailwindcss',
        },
        {
          skillName: 'UIkit',
          fontAwesomeClassName: 'logos:uikit',
        },
        {
          skillName: 'Storybook',
          fontAwesomeClassName: 'vscode-icons:file-type-storybook',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'Material UI',
          fontAwesomeClassName: 'simple-icons:mui',
        },
        {
          skillName: 'Angular',
          fontAwesomeClassName: 'devicon:angularjs',
        },
        {
          skillName: 'ElectronJS',
          fontAwesomeClassName: 'fontisto:electronjs',
        },
        {
          skillName: 'MeteorJS',
          fontAwesomeClassName: 'logos:meteor-icon',
        },
        {
          skillName: 'GraphQL',
          fontAwesomeClassName: 'vscode-icons:file-type-graphql',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'vscode-icons:file-type-yarn',
        }
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'Vercel',
          fontAwesomeClassName: 'logos:vercel-icon',
        },
        {
          skillName: 'Netlify',
          fontAwesomeClassName: 'logos:netlify-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'CloudFlare',
          fontAwesomeClassName: 'skill-icons:cloudflare-dark',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Ubuntu',
          fontAwesomeClassName: 'logos:ubuntu',
        },
      ],
    },
    {
      title: 'UX/UI and Mobile-First Web Design',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ I use colour psychology, grid systems, and web fonts to design websites that are visually appealing and which are responsive to all kinds of devices.'
        )
      ],
      softwareSkills: [
        {
          skillName: 'Figma',
          fontAwesomeClassName: 'logos:figma',
        },
        {
          skillName: 'Adobe Illustrator',
          fontAwesomeClassName: 'logos:adobe-illustrator',
        },
        {
          skillName: 'Adobe Photoshop',
          fontAwesomeClassName: 'vscode-icons:file-type-photoshop',
        },
        {
          skillName: 'Sketch',
          fontAwesomeClassName: 'devicon:sketch',
        },
        {
          skillName: 'Wix',
          fontAwesomeClassName: 'logos:wix',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Front-end Development', //Insert stack or technology you have experience in
    progressPercentage: '99', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Web Design',
    progressPercentage: '90',
  },
  {
    Stack: 'Communicate, Teamwork and Customer Service',
    progressPercentage: '100',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Czech Technical University in Prague',
    subHeader: 'B.S. in Computer Science',
    duration: 'Jan 2013 - Nov 2016',
    desc: 'Participated in the research of Network communication and published a papers.',
    grade: 'Grade A',
    descBullets: [
      'Silver Medal in Felber for CTU',
      'Best Student Paper Award in 2016',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Self-Employed',
    companyLogo: '/img/icons/common/freelance.jfif',
    date: 'May 2023 – Present',
    desc: 'With rich experiences, I am responsible for developing, implementing and maintaining web applications for the clients and is participating in the design, development testing, implementation and production support of enterprise applications.',
  },
  {
    role: 'Senior Front-End Engineer',
    company: 'EnterERP, Istanbul, Turkey',
    companyLogo: '/img/icons/common/enterp.png',
    date: 'Sep 2020 – May 2023',
    desc: 'I was being assumed a position to development, implement and maintain internal websites and services and worked as technical staff in the design, development, testing, implementation and production support of enterprise applications',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Senior Front-End Engineer',
    company: 'BOOTIQ, Prague, Czech',
    companyLogo: '/img/icons/common/btq.png',
    date: 'Dec 2017 - Aug 2020',
    desc: 'As a senior engineer of the development team, I was responsibilities in the complete development lifecycle including Requirement Analysis, Design, Implementation, Testing and helped the team stick to specific standards in developing web pages under company guidelines',
  },
  {
    role: 'Front-End Engineer',
    company: 'MARKETSOUL S.R.O, Zlin, Czech',
    companyLogo: '/img/icons/common/soul.jfif',
    date: 'Jul 2016 - Nov 2017',
    desc: 'I provided web services for finance and business including Payment, Remittance and Customer management and participated in structuring of internal financial manager system. During this, I gained a lot of experience in web technology of finance and business fields',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Shotify music app',
    desc: 'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information and more.',
    github: 'https://github.com/priincemuhammad/spotify-music-app',
    link: 'https://spotify-m.netlify.app/',
  },
  {
    name: 'HackUMass Website',
    desc: 'HackUMass IX landing website with new functionalities and UI improvements, maintained alongside 10+ tech members',
    github: 'https://github.com/fuseumass/hackumass.github.io',
    link: 'https://www.hackumass.com/',
  },
  {
    name: 'Perpetual Crusades',
    desc: 'Two-player online dice-based board game with a theme loosely set around Dungeons & Dragons.',
    github: 'https://github.com/1hanzla100/django-react-forum',
    link: 'https://www.adityavsingh.com/perpetual-crusades/',
  },
  {
    name: 'Disney media clone',
    desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
    github: 'https://github.com/priincemuhammad/disney-v1',
    link: 'https://disney-v1.vercel.app/',
  },
  {
    name: 'Shoppinigfy',
    desc: 'It allows consumers to directly buy goods or services from a seller over the Internet',
    github: 'https://github.com/arafat4693/shoppingify',
    link: 'https://shoppingify-ashy.vercel.app/',
  },
  {
    name: 'Real-Time Chat App',
    desc: 'Provided message reactions, stickers, emojis, GIFs, and voice calls and video chat',
    github: 'https://github.com/arafat4693/realtime-chat-app',
    link: 'https://realtime-chat-app-five.vercel.app/',
  }
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Herman Smerda',
  description: 'A passionate Front-end Engineer',
  author: 'Herman Smerda',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Herman',
    'Herman Smerda',
    'hermansmerda',
    'hermansmerda',
    'Portfolio',
    'Herman Portfolio ',
    'Herman Smerda Portfolio',
  ],
};
