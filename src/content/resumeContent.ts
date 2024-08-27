export type EmploymentContent = {
	title: string,
	timeText?: string,
	blurb: string,
	achievements?: string[],
	technologies?: string[]
}

export type ResumeContent = {
	heading: string,
	mainText: string[],
	employment: EmploymentContent[]
	education: EmploymentContent[]
}

export const resumeContent: ResumeContent = {
	heading: "Hi, welcome to my resume",
	mainText: [
		"My professional journey first started a couple of years ago, in the midst of my uni degree, when I stumbled upon a YouTube video titled \"How to build Facebook in under 16 hours.\" Fast forward to now, I’ve had the privilege of building software for a wide array of companies, from banks to startups to consultancies. I've collaborated on a wide array of challenging projects, both big and small, and worked with some exceptional teams and fantastic people.",
		"I have strong skills in frontend, backend, testing, and DevOps; but also in teamwork, communication, and problem-solving. I have a bias for action, am always eager to contribute, and love helping the team ship first-class software."
	],
	
	employment: [
		{
			title: "Software Engineer, Digizoo Services",
			timeText: "October 2023 - PRESENT",
			blurb:
				"As a consultant for Digizoo, I work primarily at ING where I'm helping build, design, and release real-time, high-volume data pipelines to power critical components within ING's current and future systems.",
			achievements: [
				"Design and implementation of data streaming systems - focusing on accuracy, validity, and performance at high loads.",
				"Application of domain and event-driven architectural principles.",
				"Productionisation of the system - from pipelines and infrastructure to observability and testing.",
			],
			technologies: [
				"Kafka",
				"KStreams",
				"Kafka Connect",
				"Avro",
				"Spring",
				"Java",
				"SQL Server",
				"Azure",
				"Grafana",
				"Prometheus",
				"OTEL",
				"Unix"
			],
		},
		{
			title: "Software Engineer, Greater Bank, Newcastle",
			timeText: "April 2022 - October 2023",
			blurb:
				"As part of Greater Bank's digital transformation project, I helped build and deliver a modern, cloud-first digital banking platform from scratch; new frontends, new backends, new infrastructure, and new processes.",
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
				"Working within a dynamic startup environment, I helped build and grow a new online yoga streaming platform.",
			achievements: [
				"Involved in all stages of feature development from inception to deployment.",
				"Automated and integrated end-to-end testing via CI/CD pipelines.",
				"Performed an SEO and accessibility audit and uplift.",
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
			title: "Junior Software Engineer, Newton Green Technologies, Newcastle",
			timeText: "November 2020 - September 2021",
			blurb:
				"Worked on a variety of projects for clients such as:",
			achievements: [
				"Real-time communication platform for a startup serving aged care facilities.",
				"Community pest management tracker.",
				"Various cancer research agencies.",
			],
			technologies: [
				"Laravel",
				"ServiceStack (.NET)",
				"C#",
				"Redis",
				"Azure Pipelines",
				"React",
				"WordPress",
			],
		},
		{
			title: "Intern, Userlot, Newcastle",
			timeText: "February 2021 - September 2021",
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
			title:
				"Junior Developer / Acoustic Technician, Global Acoustics, Newcastle",
			timeText: "July 2019 - November 2020",
			blurb:
				"Worked as a part-time developer / part-time technician. Solely responsible for delivery of a full-stack safety management tracker used by on-the-ground teams every day to log safety and compliance paperwork.",
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
