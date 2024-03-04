import { Task } from "@/types";

export const publicProjects = [
  {
    id: 1,
    title: "Implement Payment Gateway Integration",
    description:
      "🛒 Integrate a secure payment gateway into our e-commerce platform to enable seamless transactions for customers. This task involves setting up SSL encryption, configuring payment methods, and ensuring compliance with PCI-DSS standards to safeguard sensitive financial information.\n\nAdditionally, it requires testing various scenarios, including successful transactions, refunds, and error handling, to guarantee a smooth user experience. Collaboration with the finance and development teams is crucial to ensure alignment with business requirements and technical feasibility. Continuous monitoring and optimization of the payment process are essential to identify and address any performance or security issues promptly.",
    status: "IN_PROGRESS",
    category: "web-development", // Updated category key
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    completedAt: null,
    cancelledAt: null,
    startedAt: new Date().toISOString(),
    availableAt: new Date().toISOString(),
    assignee: "Development Team",
  },
  {
    id: 2,
    title: "Create Marketing Campaign Strategy",
    description:
      "💡 Develop a comprehensive marketing campaign strategy including target audience analysis, content creation, and promotional activities. This task requires market research to identify consumer preferences, competitor analysis to identify market gaps, and SWOT analysis to determine the company's strengths and weaknesses.\n\nThe strategy should outline clear goals, key performance indicators (KPIs), and a timeline for execution. Collaborating with the creative team is essential to develop engaging content, including visuals, videos, and copywriting, tailored to different marketing channels such as social media, email, and advertising. Continuous monitoring and analytics tracking help measure campaign performance and make data-driven adjustments to optimize results and maximize ROI.",
    status: "AVAILABLE",
    category: "marketing-advertising", // Updated category key
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    completedAt: null,
    cancelledAt: null,
    startedAt: null,
    availableAt: new Date().toISOString(),
    assignee: null,
  },
  {
    id: 3,
    title: "Optimize Website SEO",
    description:
      "🔍 Improve website's search engine optimization (SEO) by optimizing meta tags, content, and site structure to increase organic traffic. This task involves conducting keyword research to identify high-potential search terms and integrating them strategically into website content.\n\nAdditionally, it requires optimizing website performance, including page load speed and mobile responsiveness, to improve user experience and search rankings. Collaboration with the content and development teams is essential to ensure alignment between SEO efforts and overall website goals.",
    status: "AVAILABLE",
    category: "web-development", // Updated category key
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    completedAt: null,
    cancelledAt: null,
    startedAt: null,
    availableAt: new Date().toISOString(),
    assignee: null,
  },
  {
    id: 4,
    title: "Upgrade Server Infrastructure",
    description:
      "🔧 Upgrade server infrastructure to enhance performance, scalability, and security of our application. This task involves assessing current infrastructure limitations and planning upgrades to meet growing demands.\n\nAdditionally, it requires implementing cloud-based solutions for scalability and redundancy, as well as enhancing security measures such as firewalls and intrusion detection systems. Collaboration with the operations and development teams is crucial to minimize downtime and ensure a smooth transition to the upgraded infrastructure.",
    status: "COMPLETED",
    category: "devops", // Updated category key
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    completedAt: new Date().toISOString(),
    cancelledAt: null,
    startedAt: new Date().toISOString(),
    availableAt: new Date().toISOString(),
    assignee: "Operations Team",
  },
  {
    id: 5,
    title: "Design Mobile App UI",
    description:
      "📱 Design intuitive and user-friendly mobile app UI with modern aesthetics and seamless navigation. This task involves creating wireframes and prototypes to visualize the app's layout and functionality.\n\nAdditionally, it requires collaboration with the development team to ensure design feasibility and adherence to platform guidelines. User feedback and usability testing play a crucial role in refining the UI design to enhance user satisfaction and engagement.",
    status: "IN_PROGRESS",
    category: "ui-ux-design", // Updated category key
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    completedAt: null,
    cancelledAt: null,
    startedAt: new Date().toISOString(),
    availableAt: new Date().toISOString(),
    assignee: "Design Team",
  },
  {
    id: 6,
    title: "Organize Product Launch Event",
    description:
      "🎉 Plan and execute a successful product launch event including venue booking, guest invitations, and promotional materials. This task involves coordinating with vendors to ensure timely delivery of event-related services such as catering, audiovisual equipment, and event signage.\n\nAdditionally, it requires creating a compelling event agenda, including product demonstrations and keynote presentations, to engage attendees and generate excitement. Collaboration with the marketing and sales teams is essential to promote the event and maximize attendance and media coverage.",
    status: "IN_PROGRESS",
    category: "project-management", // Updated category key
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    completedAt: null,
    cancelledAt: null,
    startedAt: new Date().toISOString(),
    availableAt: new Date().toISOString(),
    assignee: "Marketing Team",
  },
  {
    id: 7,
    title: "Create Content Calendar",
    description:
      "📅 Develop a content calendar outlining topics, publishing schedule, and distribution channels for our blog and social media platforms. This task involves brainstorming content ideas that resonate with our target audience and align with our brand values.\n\nAdditionally, it requires coordinating with the content creators to ensure timely production and publication of high-quality content. Analyzing performance metrics such as engagement rates and audience demographics helps optimize content strategy for maximum impact and reach.",
    status: "AVAILABLE",
    category: "content-creation", // Updated category key
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    completedAt: null,
    cancelledAt: null,
    startedAt: null,
    availableAt: new Date().toISOString(),
    assignee: null,
  },
  {
    id: 8,
    title: "Implement Customer Feedback System",
    description:
      "📝 Set up a customer feedback system to gather and analyze user feedback for continuous product improvement. This task involves selecting and configuring feedback collection tools such as surveys, feedback forms, and customer support tickets.\n\nAdditionally, it requires establishing feedback analysis processes to extract valuable insights from customer responses and prioritize product enhancements. Integration with customer relationship management (CRM) systems helps track feedback history and monitor customer satisfaction metrics over time.",
    status: "AVAILABLE",
    category: "customer-support", // Updated category key
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    completedAt: null,
    cancelledAt: null,
    startedAt: null,
    availableAt: new Date().toISOString(),
    assignee: null,
  },
  {
    id: 9,
    title: "Create Employee Training Program",
    description:
      "🎓 Develop a comprehensive employee training program covering onboarding, skill development, and compliance training. This task involves identifying training needs through skills assessments and performance evaluations.\n\nAdditionally, it requires designing training modules and materials tailored to different employee roles and learning styles. Collaboration with subject matter experts and trainers ensures training content accuracy and effectiveness. Continuous evaluation and feedback mechanisms help refine the training program to meet evolving business needs and employee development goals.",
    status: "AVAILABLE",
    category: "project-management", // Updated category key
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    completedAt: null,
    cancelledAt: null,
    startedAt: null,
    availableAt: new Date().toISOString(),
    assignee: null,
  },
  {
    id: 10,
    title: "Enhance Customer Support System",
    description:
      "📞 Improve customer support system by implementing chatbot integration, ticket management, and knowledge base enhancement. This task involves selecting and configuring customer support tools such as helpdesk software, chatbots, and knowledge base platforms.\n\nAdditionally, it requires training support agents on new tools and processes to streamline customer interactions and resolve issues more efficiently. Integration with customer relationship management (CRM) systems helps provide personalized support and track customer interactions across channels for better insights and service.",
    status: "AVAILABLE",
    category: "customer-support", // Updated category key
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    completedAt: null,
    cancelledAt: null,
    startedAt: null,
    availableAt: new Date().toISOString(),
    assignee: null,
  },
];

export const statusList: { label: string; value: string }[] = [
  {
    label: "Available",
    value: "AVAILABLE",
  },
  {
    label: "In Progress",
    value: "IN_PROGRESS",
  },
  {
    label: "Completed",
    value: "COMPLETED",
  },
  {
    label: "Canceled",
    value: "CANCELED",
  },
];

export const projectCategories: { label: string; value: string }[] = [
  { label: "Web Development", value: "web-development" },
  { label: "Mobile Development", value: "mobile-development" },
  { label: "REST API Development", value: "rest-api-development" },
  { label: "Data Analysis", value: "data-analysis" },
  { label: "UI/UX Design", value: "ui-ux-design" },
  { label: "DevOps", value: "devops" },
  { label: "Quality Assurance (QA)", value: "quality-assurance" },
  { label: "Project Management", value: "project-management" },
  { label: "Content Creation", value: "content-creation" },
  { label: "Marketing and Advertising", value: "marketing-advertising" },
  { label: "Customer Support", value: "customer-support" },
  { label: "Research and Development", value: "research-development" },
  { label: "Cybersecurity", value: "cybersecurity" },
  { label: "Database Administration", value: "database-administration" },
  { label: "System Administration", value: "system-administration" },
];

export const tasks: Task[] = [
  {
    id: 1,
    assigned_user_id: 123,
    assigned_user_name: "John Doe",
    assigned_user_pic: "https://example.com/profile_pic.jpg",
    project_id: 1,
    project_title: "Implement Payment Gateway Integration",
    title: "Test Payment Gateway Scenarios",
    description:
      "Test various scenarios including successful transactions, refunds, and error handling.",
    dueDate: new Date("2024-03-10"),
    created_at: new Date(),
    finished_at: undefined,
  },
  {
    id: 2,
    assigned_user_id: undefined,
    assigned_user_name: undefined,
    assigned_user_pic: undefined,
    project_id: 2,
    project_title: "Create Marketing Campaign Strategy",
    title: "Draft Email Campaign Content",
    description: "Draft engaging email content for the marketing campaign.",
    dueDate: new Date("2024-03-05"),
    created_at: new Date(),
    finished_at: undefined,
  },
  {
    id: 3,
    assigned_user_id: 456,
    assigned_user_name: "Jane Smith",
    assigned_user_pic: "https://example.com/jane_profile_pic.jpg",
    project_id: 3,
    project_title: "Optimize Website SEO",
    title: "Conduct SEO Analysis",
    description:
      "Conduct an analysis of the website's SEO performance and identify areas for improvement.",
    dueDate: new Date("2024-03-15"),
    created_at: new Date(),
    finished_at: undefined,
  },
  {
    id: 4,
    assigned_user_id: undefined,
    assigned_user_name: undefined,
    assigned_user_pic: undefined,
    project_id: 4,
    project_title: "Upgrade Server Infrastructure",
    title: "Evaluate Cloud Solutions",
    description:
      "Evaluate cloud-based solutions for enhancing server infrastructure.",
    dueDate: new Date("2024-03-08"),
    created_at: new Date(),
    finished_at: undefined,
  },
  {
    id: 5,
    assigned_user_id: 789,
    assigned_user_name: "Alex Johnson",
    assigned_user_pic: "https://example.com/alex_profile_pic.jpg",
    project_id: 6,
    project_title: "Organize Product Launch Event",
    title: "Coordinate Catering Services",
    description: "Coordinate catering services for the product launch event.",
    dueDate: new Date("2024-03-20"),
    created_at: new Date(),
    finished_at: undefined,
  },
];

export const users: { label: string; value: string }[] = [
  {
    label: "Me",
    value: "me",
  },
  {
    label: "Unassigned",
    value: "unassigned",
  },
  {
    label: "John Doe",
    value: "2",
  },
  {
    label: "Jane Smith",
    value: "1",
  },
];
