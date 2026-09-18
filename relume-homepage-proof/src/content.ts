export const CALENDLY = "https://calendly.com/stella_e/15min";
export const EMAIL = "mailto:admin@accountstar.co.uk?subject=Accountstar%20enquiry";
export const WAITLIST = "mailto:admin@accountstar.co.uk?subject=Accountstar%20waitlist";
export const WHATSAPP =
  "https://api.whatsapp.com/send?phone=447742232685&text=I'm%20interested%20in%20Accountstar%20services!";
export const TEMPLATE_EMAIL =
  "mailto:admin@accountstar.co.uk?subject=Financial%20Plan%20Template%20request";

export const MISSION =
  "The mission of Accountstar is to provide clients with innovative, yet practical solutions that increase profitability, anticipate needs, and deliver the highest level of customer service, resulting in a worry-free experience.";

export const navLinks = [
  { title: "Home", url: "/" },
  {
    title: "Services",
    url: "/services",
    subMenuLinks: [
      { title: "All services", url: "/services" },
      { title: "Self-employed", url: "/self-employed" },
      { title: "Limited companies", url: "/limited-company-accounting" },
      { title: "Non-profits", url: "/non-profit-accounting" },
      { title: "Speaking engagements", url: "/speaking-engagements" },
    ],
  },
  {
    title: "About",
    url: "/about-us",
    subMenuLinks: [
      { title: "About us", url: "/about-us" },
      { title: "Meet the team", url: "/team" },
    ],
  },
  { title: "Resources", url: "/resources" },
  { title: "Reviews", url: "/reviews" },
  { title: "Contact us", url: "/contact-us" },
];

export const footerColumns = [
  {
    title: "Menu",
    links: [
      { title: "Home", url: "/" },
      { title: "About us", url: "/about-us" },
      { title: "Meet the team", url: "/team" },
      { title: "Resources", url: "/resources" },
      { title: "Reviews", url: "/reviews" },
      { title: "Contact us", url: "/contact-us" },
    ],
  },
  {
    title: "Services",
    links: [
      { title: "All services", url: "/services" },
      { title: "Self-employed", url: "/self-employed" },
      { title: "Limited companies", url: "/limited-company-accounting" },
      { title: "Non-profits", url: "/non-profit-accounting" },
      { title: "Speaking engagements", url: "/speaking-engagements" },
    ],
  },
  {
    title: "Contact",
    links: [
      { title: "admin@accountstar.co.uk", url: EMAIL },
      { title: "WhatsApp", url: WHATSAPP },
      { title: "Book a free chat", url: CALENDLY },
    ],
  },
];

export const services = [
  {
    name: "Self-employed",
    title: "Self-employed accounting services",
    href: "/self-employed",
    summary:
      "Accountstar specialises in providing bookkeeping and taxation services for self-employed professionals.",
    icon: "/images/icons/service-self-employed.svg",
    image: "/images/self-employed-hero.png",
    imageAlt: "Stella Ezeogu of Accountstar",
  },
  {
    name: "Limited companies",
    title: "Limited company accounting services",
    href: "/limited-company-accounting",
    summary:
      "Accountstar understands that running a limited liability company is a challenge, and it comes with great responsibility.",
    icon: "/images/icons/service-company.svg",
    image: "/images/limited-company-hero.jpg",
    imageAlt: "Accountant working at a desk",
  },
  {
    name: "Non-profits",
    title: "Non-profit accounting services",
    href: "/non-profit-accounting",
    summary:
      "Accountstar offers accounting services to nonprofit organisations, such as Charities and CICs.",
    icon: "/images/icons/value-service.svg",
    image: "/images/non-profit-hero.jpg",
    imageAlt: "Colleagues reviewing financial information",
  },
  {
    name: "Speaking",
    title: "Speaking engagements",
    href: "/speaking-engagements",
    summary:
      "Engaging talks, workshops and seminars that make business finance and tax easier to understand.",
    icon: "/images/icons/value-professionalism.svg",
    image: "/images/speaking-hero.jpg",
    imageAlt: "A speaker addressing an audience",
  },
];

export const testimonials = [
  {
    quote:
      "\"Stella's attention to detail is exceptional and her services are very affordable. She found a major error in my HMRC records, saving nearly £1,500 in tax and securing a further refund.\"",
    name: "Tina Pokuaah",
    position: "GBV Consultant",
    companyName: "",
  },
  {
    quote:
      '"Stella has been extremely helpful in explaining the tax-return process and has always been on hand for questions. She filed my return smoothly and efficiently."',
    name: "Axel Anglin",
    position: "Axel Designs",
    companyName: "",
  },
  {
    quote:
      '"Stella provided a flawless service tailored to my needs and went the extra mile to explain the options available. The service was professional, hands-on and quick."',
    name: "Jay Wright",
    position: "Rodeo Donuts",
    companyName: "",
  },
  {
    quote:
      '"Stella has been integral to our planning and growth. Her sound knowledge and expertise have been guiding factors in the development of our business."',
    name: "Ziggy Moore",
    position: "Moore Education",
    companyName: "",
  },
];

export const team = [
  {
    name: "Stella Ezeogu",
    role: "Founder & Head Accountant",
    image: "/images/team-stella.png",
    alt: "Stella Ezeogu",
    bio: [
      "Stella is a financial educator and ACCA-qualified accountant who founded Accountstar to provide high-quality accounting and tax consulting to start-ups and people from underrepresented communities.",
      "With more than eight years of professional experience, including work at HMRC, she provides expert accounting and tax advice. She also shares her knowledge through finance-management workshops and seminars.",
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
    image: "/images/team-muiz.png",
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
    image: "/images/team-angela.png",
    alt: "Angela, Accountstar Office Manager",
    bio: [
      "Angela is a multi-talented professional with more than ten years of administration and office-management experience. She works closely with Stella to manage schedules and resources and keep the firm running smoothly.",
      "Her time-management and customer-service skills help ensure that client accounts and tax work are completed in a timely manner.",
    ],
    specialties: ["Office operations", "Scheduling and coordination", "Client service", "Administration"],
  },
];

export type Offering = { name: string; intro: string; items?: string[] };
export type ServiceDetail = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  blocks: { title: string; paragraphs: string[] }[];
  offeringTitle: string;
  offeringIntro: string;
  offerings: Offering[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    path: "/self-employed",
    eyebrow: "For sole traders",
    title: "Self-employed accounting services",
    description:
      "Accounting and taxation support for self-employed people who want to spend less time on admin and more time on their business.",
    image: "/images/self-employed-hero.png",
    imageAlt: "Stella Ezeogu of Accountstar",
    blocks: [
      {
        title: "Why Accountstar?",
        paragraphs: [
          "Running every part of a self-employed business can quickly become overwhelming. Outsourcing the accounts gives you back time while keeping your records and tax obligations on track.",
          "Our professional accountants follow current accounting principles and provide a smooth tax-return service.",
        ],
      },
      {
        title: "Benefits of choosing Accountstar",
        paragraphs: [
          "With Accountstar you have a one-stop solution and direct access to an accountant to discuss your tax-planning strategy.",
          "We can also help you put bookkeeping systems in place so the business stays organised and tax compliant.",
        ],
      },
    ],
    offeringTitle: "Self-employed packages",
    offeringIntro: "Choose the level of support that fits your business today.",
    offerings: [
      {
        name: "Bronze",
        intro: "A straightforward self-assessment tax return service.",
        items: ["Prepare and submit your Self Assessment to HMRC", "Identify relevant tax savings"],
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
  },
  {
    path: "/limited-company-accounting",
    eyebrow: "For company directors",
    title: "Limited company accounting services",
    description:
      "Running a company comes with significant responsibilities. Our flexible support keeps your accounts and tax obligations in reliable hands.",
    image: "/images/limited-company-hero.jpg",
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
        ],
      },
    ],
    offeringTitle: "Limited company packages",
    offeringIntro: "Choose the package that matches your company's size and pace.",
    offerings: [
      {
        name: "Bronze",
        intro: "For small businesses with turnover below £30k, no employees, or those just starting out.",
        items: [
          "Director's Self Assessment return",
          "Corporation Tax return (CT600)",
          "Statutory company accounts",
        ],
      },
      {
        name: "Silver",
        intro: "For growing businesses that want all core accounting and tax compliance covered.",
        items: [
          "Director's Self Assessment return",
          "Confirmation Statement and CT600",
          "QuickBooks subscription",
          "Quarterly bookkeeping reviews",
          "Payroll for one director or employee",
        ],
      },
      {
        name: "Gold",
        intro: "For rapidly growing businesses that need stronger financial visibility.",
        items: [
          "Two directors' Self Assessment returns",
          "Confirmation Statement and CT600",
          "QuickBooks and quarterly bookkeeping reviews",
          "Payroll for up to four employees",
          "Quarterly VAT returns",
        ],
      },
    ],
  },
  {
    path: "/non-profit-accounting",
    eyebrow: "For purpose-led organisations",
    title: "Non-profit accounting",
    description:
      "Specialist support for charities and community interest companies, so your organisation can focus on its mission and goals.",
    image: "/images/non-profit-hero.jpg",
    imageAlt: "Team members collaborating around a table",
    blocks: [
      {
        title: "Experience and expertise",
        paragraphs: [
          "Our team has supported charities and CICs with bookkeeping and accounting for a number of years. We understand the reporting and compliance needs that make non-profit organisations different.",
        ],
      },
      {
        title: "Accurate records, available when you need them",
        paragraphs: [
          "Our accountants make sure the information presented is accurate, leaving you free to concentrate on the organisation's work.",
        ],
      },
    ],
    offeringTitle: "Non-profit services",
    offeringIntro: "Bespoke packages for charities and community interest companies.",
    offerings: [
      {
        name: "Charity services",
        intro: "Accounting and compliance support designed for registered charities.",
        items: [
          "Charity accounts preparation",
          "SORP accounting and compliance",
          "Payroll and VAT",
        ],
      },
      {
        name: "Community interest companies",
        intro: "Practical support for the reporting and tax needs of CICs.",
        items: ["Accounts preparation and submission", "Tax preparation and submission", "CIC registration"],
      },
    ],
  },
  {
    path: "/speaking-engagements",
    eyebrow: "Talks, workshops and seminars",
    title: "Speaking engagements",
    description:
      "Engaging and informative finance sessions for live and online audiences, delivered nationally and internationally.",
    image: "/images/speaking-hero.jpg",
    imageAlt: "A presenter speaking to a live audience",
    blocks: [
      {
        title: "Finance made engaging",
        paragraphs: [
          "If your organisation or community group is planning an event, Accountstar can provide professional group conversations around tax, accounting and business finance.",
          "Stella combines subject-matter expertise with a warm, practical delivery that helps attendees understand the topic. We know how to make finance fun.",
        ],
      },
    ],
    offeringTitle: "Speaking topics",
    offeringIntro: "Choose one topic or build a tailored session around your audience's needs.",
    offerings: [
      { name: "Small business accounting", intro: "Current accounting practices explained clearly for small-business owners." },
      { name: "Managing business finances", intro: "Practical financial-management skills for starting, running and scaling a business." },
      { name: "Business taxes", intro: "An accessible guide to tax obligations, planning and sustainable business growth." },
      { name: "Navigating HMRC", intro: "A logical, step-by-step guide to dealing with HM Revenue & Customs processes." },
    ],
  },
];
