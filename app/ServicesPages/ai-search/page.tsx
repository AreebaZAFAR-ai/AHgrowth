import ServiceDetailPage from "@/components/ServiceDetailPage";

export default function AIAutomationPage() {
  return (
    <ServiceDetailPage
      service={{
        number: "04",
        category: "AI & Automation",
        title: "AI & Automation",
        highlight: "build systems that move your business forward.",
        description:
          "Turn repetitive business processes into intelligent, connected systems that move information faster, reduce manual work, and help your team focus on meaningful work.",
        media: "/assets/aiautomation.jpg",
        mediaType: "image",

        strategyTitle:
          "Automation built around how your business actually works.",
        strategyText:
          "We identify repetitive processes, connect the tools your business already uses, and introduce AI where it can create real value. The goal is not to automate everything, but to build reliable systems that remove friction from the work your team already does.",

        capabilities: [
          "AI workflow automation",
          "Lead qualification",
          "Intelligent customer support",
          "CRM automation",
          "AI communication",
          "Document processing",
          "Automated reporting",
          "System integrations",
        ],

        process: [
          {
            number: "01",
            title: "Discover",
            description:
              "Understand your existing processes, systems, bottlenecks, and the repetitive work that slows your team down.",
          },
          {
            number: "02",
            title: "Design",
            description:
              "Map the workflow and decide where automation, AI, integrations, and human checkpoints should fit.",
          },
          {
            number: "03",
            title: "Build",
            description:
              "Connect your tools and develop the automation system around your actual business requirements.",
          },
          {
            number: "04",
            title: "Integrate",
            description:
              "Connect CRM, forms, email, calendars, databases, APIs, AI models, and internal systems.",
          },
          {
            number: "05",
            title: "Optimize",
            description:
              "Monitor the workflow, improve reliability, and continuously refine the system as your business grows.",
          },
        ],

        outcomes: [
          "Less repetitive work for your team",
          "Faster movement of information and actions",
          "More consistent business processes",
          "Better visibility across connected systems",
          "Faster lead and customer response",
          "Automated reporting and operational insights",
        ],
      }}

      prevService={{
        slug: "web-development",
        title: "Web Development",
      }}

      nextService={{
        slug: "digital-marketing",
        title: "Digital Marketing",
      }}
    />
  );
}