export interface EmploymentContent {
  title: string;
  timeText?: string;
  projects?: {
    company: string;
    blurb: string;
    technologies?: string[];
  }[];
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
    "I’m a full-stack engineer with 5+ years of experience building software for everything from nimble startups to large banks and consultancies. Adept across the full development stack, with deep expertise in backend, frontend, DevOps, and systems architecture.",
    "I’m big on clear communication, team collaboration, and mentoring, and I love applying systems thinking to help teams ship great software faster. Whether I’m hands-on coding or guiding a team through complex decisions, I aim to raise the bar and keep things moving forward.",
  ],

  employment: [
    {
      title: "Software Engineer, Digizoo Services, Sydney",
      timeText: "October 2023 - PRESENT",
      projects: [
        {
          blurb: "Core banking integration",
          company: "Regional Australia Bank",
          technologies: [
            "NestJS",
            "TypeScript",
            "SQL Server",
            "Turborepo",
            "Azure",
          ],
        },
        {
          blurb: "Data pipelines for online banking",
          company: "ING",
          technologies: [
            "Kafka",
            "KStreams",
            "Avro",
            "Spring",
            "Java",
            "SQL Server",
            "Azure",
            "Grafana",
            "Prometheus",
            "OTEL",
            "Unix",
          ],
        },
      ],
    },
    {
      title: "Software Engineer, Greater Bank, Newcastle",
      timeText: "April 2022 - October 2023",
      blurb:
        "As part of a digital transformation project, I helped build and deliver a modern, cloud-first digital bank from scratch.",
      achievements: [
        "Helped design and implement  multi-repo release and regression strategy spanning the entire digital stack.",
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
        "Worked with startup team to build and grow new online yoga streaming platform.",
      achievements: [
        "Involved in all stages of feature development from inception to deployment.",
        "Automated and integrated end-to-end testing via CI/CD pipelines.",
        "Responsible for an authentication microservice gateway to connect multiple IAM providers.",
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
      projects: [
        {
          blurb: "Real-time aged care communication platform",
          company: "Whistle",
          technologies: ["Laravel", "PHP", "Redis"],
        },
        {
          blurb: "Community pest tracker",
          company: "FeralScan",
          technologies: ["ServiceStack", "C#"],
        },
      ],
    },
    {
      title: "Junior Developer, Global Acoustics, Newcastle",
      timeText: "February 2020 - November 2020",
      blurb:
        "Solely responsible for delivery of a full-stack safety management tracker used by on-the-ground teams every day to log safety and compliance paperwork.",
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
