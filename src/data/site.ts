import selfEmployedHero from "@/assets/images/self-employed-hero.png";
import limitedCompanyHero from "@/assets/images/limited-company-hero.jpg";
import nonProfitHero from "@/assets/images/non-profit-hero.jpg";
import speakingHero from "@/assets/images/speaking-hero.jpg";
import teamStella from "@/assets/images/team-stella.png";
import teamMuiz from "@/assets/images/team-muiz.png";
import teamAngela from "@/assets/images/team-angela.png";

export const CONTACT = {
  email: "admin@accountstar.co.uk",
  emailHref: "mailto:admin@accountstar.co.uk?subject=Accountstar%20enquiry",
  whatsapp:
    "https://api.whatsapp.com/send?phone=447742232685&text=I'm%20interested%20in%20Accountstar%20services!",
  calendly: "https://calendly.com/stella_e/15min",
};

export const MISSION =
  "The mission of Accountstar is to provide clients with innovative, yet practical solutions that increase profitability, anticipate needs, and deliver the highest level of customer service, resulting in a worry-free experience.";

export const services = [
  {
    name: "Self-employed",
    title: "Self-employed accounting services",
    href: "/self-employed",
    summary:
      "Accountstar specialises in providing bookkeeping and taxation services for self-employed professionals.",
    image: selfEmployedHero,
    imageAlt: "Stella Ezeogu of Accountstar",
  },
  {
    name: "Limited companies",
    title: "Limited company accounting services",
    href: "/limited-company-accounting",
    summary:
      "Accountstar understands that running a limited liability company is a challenge, and it comes with great responsibility.",
    image: limitedCompanyHero,
    imageAlt: "Accountant working at a desk",
  },
  {
    name: "Non-profits",
    title: "Non-profit accounting services",
    href: "/non-profit-accounting",
    summary:
      "Accountstar offers accounting services to nonprofit organisations, such as Charities and CICs.",
    image: nonProfitHero,
    imageAlt: "Colleagues reviewing financial information",
  },
  {
    name: "Speaking",
    title: "Speaking engagements",
    href: "/speaking-engagements",
    summary:
      "Engaging talks, workshops and seminars that make business finance and tax easier to understand.",
    image: speakingHero,
    imageAlt: "A speaker addressing an audience",
  },
];

export type ContentBlock = {
  title: string;
  paragraphs: string[];
  items?: string[];
};

export type Offering = {
  name: string;
  intro: string;
  items?: string[];
};

export type DetailPage = {
  eyebrow: string;
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  blocks: ContentBlock[];
  offeringTitle: string;
  offeringIntro: string;
  offerings: Offering[];
};

export const selfEmployedPage: DetailPage = {
  eyebrow: "For sole traders",
  title: "Self-employed accounting services",
  description:
    "Accounting and taxation support for self-employed people who want to spend less time on admin and more time on their business.",
  image: selfEmployedHero,
  imageAlt: "Stella Ezeogu of Accountstar",
  blocks: [
    {
      title: "Why Accountstar?",
      paragraphs: [
        "Running every part of a self-employed business can quickly become overwhelming. Outsourcing the accounts gives you back time while keeping your records and tax obligations on track.",
        "Our professional accountants follow current accounting principles and provide a smooth tax-return service. We also share tax-efficient methods, bookkeeping recommendations and practical advice to support your business for the long term.",
      ],
    },
    {
      title: "Benefits of choosing Accountstar",
      paragraphs: [
        "Being a sole trader is not always easy. With Accountstar you have a one-stop solution and direct access to an accountant to discuss your tax-planning strategy.",
        "We can also help you put bookkeeping systems in place so the business stays organised and tax compliant.",
      ],
    },
  ],
  offeringTitle: "Self-employed packages",
  offeringIntro:
    "Choose the level of support that fits your business today. We can tailor a package if you need something different.",
  offerings: [
    {
      name: "Bronze",
      intro: "A straightforward self-assessment tax return service.",
      items: [
        "Prepare and submit your Self Assessment to HMRC",
        "Identify relevant tax savings",
      ],
    },
    {
      name: "Silver",
      intro: "For sole traders who want regular oversight as well as filing.",
      items: [
        "Self-assessment preparation and submission",
        "Quarterly bookkeeping reviews",
        "Basic tax advice and planning",
      ],
    },
    {
      name: "Gold",
      intro: "A comprehensive service for growing self-employed businesses.",
      items: [
        "Self-assessment preparation and submission",
        "Sole trader accounts",
        "Periodic bookkeeping reviews",
        "Tax advice and planning",
      ],
    },
  ],
};

export const limitedCompanyPage: DetailPage = {
  eyebrow: "For company directors",
  title: "Limited company accounting services",
  description:
    "Running a company comes with significant responsibilities. Our flexible support keeps your accounts and tax obligations in reliable hands.",
  image: limitedCompanyHero,
  imageAlt: "Accountant working with a calculator and laptop",
  blocks: [
    {
      title: "Why Accountstar?",
      paragraphs: [
        "Our clients are our priority. We focus on the accounting and taxation needs of your business and work in a way that suits you.",
        "You get peace of mind knowing that your statutory and tax requirements are being managed by an experienced team.",
      ],
    },
    {
      title: "Why your company needs accounting support",
      paragraphs: [
        "Limited companies must meet statutory accounting and tax obligations. Keeping up with accounting practice and tax legislation protects your company and helps it stay compliant.",
        "Accountstar offers a flexible, approachable service with three package levels for different stages of growth.",
      ],
    },
  ],
  offeringTitle: "Limited company packages",
  offeringIntro:
    "From a light-touch compliance service to regular financial oversight, choose the package that matches your company's size and pace.",
  offerings: [
    {
      name: "Bronze",
      intro:
        "For small businesses with turnover below £30k, no employees, or those just starting out.",
      items: [
        "Director's Self Assessment return",
        "Corporation Tax return (CT600)",
        "Statutory company accounts",
        "Abbreviated company accounts",
      ],
    },
    {
      name: "Silver",
      intro:
        "For growing businesses that want all core accounting and tax compliance covered.",
      items: [
        "Director's Self Assessment return",
        "Confirmation Statement and CT600",
        "Statutory and abbreviated accounts",
        "QuickBooks subscription",
        "Quarterly bookkeeping reviews",
        "Payroll for one director or employee",
        "Basic tax planning",
      ],
    },
    {
      name: "Gold",
      intro:
        "For rapidly growing businesses that need stronger financial visibility as well as compliance.",
      items: [
        "Two directors' Self Assessment returns",
        "Confirmation Statement and CT600",
        "Statutory and abbreviated accounts",
        "QuickBooks and quarterly bookkeeping reviews",
        "Payroll for up to four employees",
        "Quarterly VAT returns",
        "Tax planning and advice",
      ],
    },
  ],
};

export const nonProfitPage: DetailPage = {
  eyebrow: "For purpose-led organisations",
  title: "Non-profit accounting",
  description:
    "Specialist support for charities and community interest companies, so your organisation can focus on its mission and goals.",
  image: nonProfitHero,
  imageAlt: "Team members collaborating around a table",
  blocks: [
    {
      title: "Experience and expertise",
      paragraphs: [
        "Our team has supported charities and CICs with bookkeeping and accounting for a number of years. We understand the reporting and compliance needs that make non-profit organisations different.",
        "You can rely on Accountstar for an efficient service and clear guidance around your in-house accounting processes.",
      ],
    },
    {
      title: "Accurate records, available when you need them",
      paragraphs: [
        "Our accountants make sure the information presented is accurate, leaving you free to concentrate on the organisation's work.",
        "We use professional accounting software to give you real-time access to books, records and financial reports that can be shared with funders and donors.",
      ],
    },
  ],
  offeringTitle: "Non-profit services",
  offeringIntro:
    "Bespoke packages for charities and community interest companies.",
  offerings: [
    {
      name: "Charity services",
      intro:
        "Accounting and compliance support designed for registered charities.",
      items: [
        "Charity accounts preparation",
        "SORP accounting and compliance",
        "Payroll and VAT",
        "Assistance with annual returns",
      ],
    },
    {
      name: "Community interest companies",
      intro: "Practical support for the reporting and tax needs of CICs.",
      items: [
        "Accounts preparation and submission",
        "Tax preparation and submission",
        "VAT",
        "CIC registration",
        "Submission of annual returns",
      ],
    },
  ],
};

export const speakingPage: DetailPage = {
  eyebrow: "Talks, workshops and seminars",
  title: "Speaking engagements",
  description:
    "Engaging and informative finance sessions for live and online audiences, delivered nationally and internationally.",
  image: speakingHero,
  imageAlt: "A presenter speaking to a live audience",
  blocks: [
    {
      title: "Finance made engaging",
      paragraphs: [
        "If your organisation or community group is planning an event, Accountstar can provide professional group conversations around tax, accounting and business finance.",
        "Stella combines subject-matter expertise with a warm, practical delivery that helps attendees understand the topic and remember what they have learned. We know how to make finance fun.",
      ],
    },
    {
      title: "What do you get?",
      paragraphs: [
        "Choose an in-person or online session for community groups, organisations or business owners. Each engagement is tailored to your audience and selected topic.",
      ],
    },
  ],
  offeringTitle: "Speaking topics",
  offeringIntro:
    "Choose one topic or build a tailored session around your audience's needs.",
  offerings: [
    {
      name: "Small business accounting",
      intro:
        "Current accounting practices explained clearly for small-business owners.",
    },
    {
      name: "Managing business finances",
      intro:
        "Practical financial-management skills for starting, running and scaling a business.",
    },
    {
      name: "Business taxes",
      intro:
        "An accessible guide to tax obligations, planning and sustainable business growth.",
    },
    {
      name: "Navigating HMRC",
      intro:
        "A logical, step-by-step guide to dealing with HM Revenue & Customs processes.",
    },
    {
      name: "Inheritance tax and generational wealth",
      intro:
        "An introduction to inheritance tax, wealth planning and creating a lasting legacy.",
    },
  ],
};

export const testimonials = [
  {
    quote:
      "Stella's attention to detail is exceptional and her services are very affordable. She found a major error in my HMRC records, saving nearly £1,500 in tax and securing a further refund. She guides you through the process, educating and empowering you along the way.",
    name: "Tina Pokuaah",
    role: "GBV Consultant",
  },
  {
    quote:
      "Stella has been extremely helpful in explaining the tax-return process and has always been on hand for questions. She filed my return smoothly and efficiently and has proven to be an affordable and trustworthy accountant for my business.",
    name: "Axel Anglin",
    role: "Axel Designs",
  },
  {
    quote:
      "Stella provided a flawless service tailored to my needs and went the extra mile to explain the options available. The service was professional, hands-on and quick. She has a loyal customer in me.",
    name: "Jay Wright",
    role: "Rodeo Donuts",
  },
  {
    quote:
      "Stella has been integral to our planning and growth. Her sound knowledge and expertise have been guiding factors in the development of our business.",
    name: "Ziggy Moore",
    role: "Moore Education",
  },
];

export const team = [
  {
    name: "Stella Ezeogu",
    role: "Founder & Head Accountant",
    image: teamStella,
    alt: "Stella Ezeogu",
    bio: [
      "Stella is a financial educator and ACCA-qualified accountant who founded Accountstar to provide high-quality accounting and tax consulting to start-ups and people from underrepresented communities.",
      "With more than eight years of professional experience, including work at HMRC, she provides expert accounting and tax advice. She also shares her knowledge through finance-management workshops and seminars.",
      "Her work has been recognised in the Top 50 Women in Accounting, and she was a finalist across three categories at the 2020 Women in Accounting and Finance Awards.",
    ],
    specialties: [
      "Statutory accounting",
      "Corporate and personal taxation",
      "Financial reporting",
      "Financial management",
    ],
  },
  {
    name: "Muiz Agbaje",
    role: "Senior Accountant",
    image: teamMuiz,
    alt: "Muiz Agbaje",
    bio: [
      "Muiz is an ACCA-qualified accountant with substantial knowledge and experience. His strength in financial and business reporting helps clients improve efficiency through timely, accurate advice.",
      "With more than eight years of professional experience and a passion for supporting small-business owners, Muiz brings a dependable, first-class service.",
    ],
    specialties: [
      "Not-for-profit accounting",
      "Bookkeeping",
      "Corporate advice",
      "Financial and business reporting",
    ],
  },
  {
    name: "Angela",
    role: "Office Manager",
    image: teamAngela,
    alt: "Angela, Accountstar Office Manager",
    bio: [
      "Angela is a multi-talented professional with more than ten years of administration and office-management experience. She works closely with Stella to manage schedules and resources and keep the firm running smoothly.",
      "Her time-management and customer-service skills help ensure that client accounts and tax work are completed in a timely manner.",
    ],
    specialties: [
      "Office operations",
      "Scheduling and coordination",
      "Client service",
      "Administration",
    ],
  },
];
