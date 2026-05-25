export interface EmploymentContent {
  title: string;
  timeText?: string;
  blurb?: string;
  achievements?: string[];
  technologies?: string[];
}

export interface ResumeContent {
  heading: string;
  mainText: string[];
  employment: EmploymentContent[];
  education: EmploymentContent[];
}

export const resumeContent: ResumeContent = {
  heading: "Hi, welcome to my resume",
  mainText: [
    "I'm a full-stack senior engineer with 6+ years of experience building software for everything from startups to large banks and consultancies. Adept across the full development stack, with deep expertise in backend, frontend, DevOps, and systems architecture.",
    "I'm big on clear communication, team collaboration, and mentoring, and I love applying systems thinking to help teams ship great software faster. Whether I'm hands-on coding or guiding a team through complex decisions, I aim to raise the bar and keep things moving forward.",
  ],

  employment: [
    {
      title: "Senior Software Engineer, Digizoo Services, Sydney",
      timeText: "October 2023 - March 2026",
      blurb:
        "Worked across several client engagements in the finance sector as part of a boutique technology consultancy.",
      achievements: [
        "Built high-throughput real-time data pipelines bridging core banking and digital services for a major international bank.",
        "Delivered engineering uplift for a major regional Australian bank.",
        "Developed banking integration products targeting the mutual banking sector.",
      ],
      technologies: [
        "NestJS",
        "TypeScript",
        "SQL Server",
        "Turborepo",
        "Azure",
        "Kafka",
        "KStreams",
        "Avro",
        "Spring",
        "Java",
        "Grafana",
        "Prometheus",
        "OTEL",
        "Unix",
      ],
    },
    {
      title: "Software Engineer, Greater Bank, Newcastle",
      timeText: "April 2022 - October 2023",
      blurb:
        "I helped build and deliver a modern, cloud-first digital bank from the ground up.",
      achievements: [
        "Helped design and implement a multi-repo release and regression strategy spanning the entire digital stack.",
        "Designed and deployed shared CI/CD configuration across microservices to standardise and enforce release, testing, quality, and compliance processes.",
        "Implemented an automated dependency management solution for 30+ repositories to meet strict security requirements.",
        "Performed performance testing and fixed bottlenecks, leading to considerable increases in application stability and significant reduction in response times.",
      ],
      technologies: [
        "Kubernetes",
        "Helm",
        "Spring",
        "Kotlin",
        "Angular",
        "TypeScript",
        "TestCafe",
        "Jest",
        "GCP",
        "OpenAPI",
        "GitLab CI",
      ],
    },
    {
      title: "Software Engineer, BodyMindLife Online, Newcastle",
      timeText: "October 2021 - April 2022",
      blurb:
        "Worked with a startup team to build and grow a new online yoga streaming platform.",
      achievements: [
        "Participated in all stages of feature development from inception to deployment.",
        "Automated and integrated end-to-end testing via CI/CD pipelines.",
        "Developed an authentication microservice gateway connecting multiple IAM providers.",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Apollo Client",
        "Contentful",
        "Tailwind",
        "Cypress",
        "Jest",
        "GitHub Actions",
        "Go",
        "GCP",
      ],
    },
    {
      title: "Intern, Userlot, Newcastle",
      timeText: "February 2021 - October 2021",
      blurb:
        "As part of UON's Work Integrated Learning (WIL) project, I built an embeddable third-party widget to collect surveys from customers and capture data in a dashboard for a local tech startup.",
      technologies: [
        "React",
        "Apollo Client",
        "GraphQL",
        "Preact",
        "Webpack",
        "Ruby on Rails",
        "Sidekiq",
      ],
    },
    {
      title: "Junior Software Engineer, Newton Green Technologies, Newcastle",
      timeText: "November 2020 - October 2021",
      achievements: [
        "Real-time aged care communication platform (Whistle).",
        "Community pest tracker (FeralScan).",
      ],
      technologies: ["Laravel", "PHP", "Redis", "ServiceStack", "C#"],
    },
    {
      title: "Junior Developer, Global Acoustics, Newcastle",
      timeText: "February 2020 - November 2020",
      blurb:
        "Independently delivered a full-stack safety management tracker used by on-the-ground teams every day to log safety and compliance paperwork.",
      technologies: [
        "Next.js",
        "Express",
        "GraphQL",
        "OAuth",
        "Docker Compose",
        "NGINX",
        "TypeORM",
        "Chakra UI",
        "Redis",
        "GitLab",
      ],
    },
  ],
  education: [
    {
      title:
        "Bachelor of Computer Science / Mathematics, University of Newcastle",
      blurb:
        "Studied topics including artificial intelligence, systems thinking, data science, machine learning, databases, algorithms, system and network security, web development, predictive analytics, operating systems, and human-computer interaction, linear algebra, statistical inference.",
      achievements: [
        "Recipient of the Dr. Robert M. Sheahan Memorial Scholarship.",
        "Graduated with Distinction.",
      ],
    },
  ],
};