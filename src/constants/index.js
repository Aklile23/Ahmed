import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "3",
    title: "Intro",
    url: "#intro",
  },
  {
    id: "0",
    title: "APPLICATIONS",
    url: "#applications",
  },
  {
    id: "1",
    title: "FEATURES",
    url: "#features",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "4",
    title: "Contact Us",
    url: "#contact",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Cultural Nuance Understanding",
  "Cross-Language Efficiency",
  "Broad Accessibility",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const  collabText =
  "Elevate guest experiences in hotels and resorts with Aref, offering impecable assistance for reservations, amenities information, and local attractions guidance.";

export const  collabText1 =
  "Aref simplifies property searches and inquiries, providing insights on listings, market trends, and buying or renting tips.";

export const  collabText2 =
  "Transform how commuters access information with Aref, offering guidance on schedules, routes, and fare details for public transport systems";

export const  collabText3 =
  " Each of Aref's capabilitys, from multilingual understanding to customizable responses, are crafted to enrich interactions, making every dialogue seamlessly intelligent and uniquely personal.";

  export const collabContent = [
  {
    id: "0",
    title: "Hospitality Service Enhancer",
    text: collabText,
  },
  {
    id: "1",
    title: "Real Estate Advisor",
    text: collabText1,
  },
  {
    id: "2",
    title: "Public Transportation Navigator",
    text: collabText2,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  // {
  //   id: "0",
  //   title: "Starter",
  //   description: "Ideal for: Small businesses or individual users looking to use Ahmed.",
  //   price: "9.99/mo",
  //   features: [
  //     "Access to Starter features",
  //     "Up to 100 conversations per day",
  //     "English language",
  //     "Default Avatar And Voice",
  //   ],
  // },
  // {
  //   id: "1",
  //   title: "Basic",
  //   description: "Ideal for: Small businesses seeking more customization and enhanced support.",
  //   price: "29.99/mo",
  //   features: [
  //     "Access to Basic features",
  //     "Up to 200 conversations per day",
  //     "Upto 2 languages available",
  //     "Upto 2 Avatars and 2 Voices ",
  //     "Standard customer support"
  //   ],
  // },
  // {
  //   id: "2",
  //   title: "Professional",
  //   description: "Ideal for: Growing & Large organizations with specific needs and high-volume usage.",
  //   price: null,
  //   features: [
  //     "All Pro features",
  //     "unlimited conversations",
  //     "Custom Avatars & Multiple Languages",
  //     "custom integrations",
  //     "dedicated account manager",
  //     "Priority customer support"

  //   ],
  // },


  //Draft
  {
    id: "0",
    title: "Small Level",
    description: "Ideal for: Small businesses or individual users looking to use Aref.",
    price: "320/mo",
    features: [
      "Up to 100 Conversations per Day",
      "English Language",
      "Default Avatar And Voice",
      "One Time & Limited Data Update"
    ],
  },
  {
    id: "1",
    title: "Mid Level",
    description: "Ideal for: Small businesses seeking more customization and enhanced support.",
    price: "640/mo",
    features: [
      "Up to 300 conversations per day",
      "Upto 2 languages, 2 Avatars and 2 Voices available",
      "Monthly Data Update",
      "Standard customer support"
    ],
  },
  {
    id: "2",
    title: "Large Level",
    description: "Ideal for: Growing & Large organizations with specific needs and high-volume usage.",
    price: null,
    features: [
      "All Mid Level Features",
      "Unlimited Conversations",
      "Multiple Languages, Avatars and Voices ",
      "Daily Data Update",
      "Dedicated customer support"

    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Conversational Customer Service",
    text: "Redefine client interactions with Aref, providing instant, reliable customer service dialogue round-the-clock.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Healthcare Information Assistant",
    text: "Aref offers conversational support, supplying information on health topics and guiding patients through Healthcare facility resources.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Interactive Learning Aid",
    text: "Enrich the education experience with Aref's interactive dialogue, engaging students in subject matter discussions and deep explanations on any topic.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Travel Information Concierge",
    text: "Aref acts as an excellent concierge, offering travelers details about destinations, cultural and historical insights, and navigational tips.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Retail Inquiry Specialist",
    text: "Enhance the shopping experience with Aref's product information and inventory discussions, guiding customers through their purchasing journey.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Corporate Information Relay",
    text: "Facilitate corporate communications with Aref, providing 24/7 access to company information, personnel directories, and scheduling details.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
