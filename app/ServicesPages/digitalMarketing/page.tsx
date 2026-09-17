import ServiceDetailPage from "@/components/ServiceDetailPage";

export default function DigitalMarketingPage() {
  return (
    <ServiceDetailPage
      service={{
        number: "05",
        category: "Growth & Performance",
        title: "Digital Marketing",
        highlight: "built to move the numbers.",
        description:
          "We build connected digital marketing systems that bring your brand in front of the right people, turn attention into action, and create measurable growth across every important channel.",

        media: "/assets/DM.jpg",
        mediaType: "image",

        strategyTitle:
          "Marketing works better when everything works together.",

        strategyText:
          "We combine paid media, content, search, social, landing pages, analytics, and conversion strategy into one connected growth system. Instead of treating every channel separately, we focus on how each touchpoint moves people closer to becoming customers.",

        capabilities: [
          "Digital marketing strategy",
          "Paid advertising & campaign management",
          "Social media marketing",
          "Search & performance marketing",
          "Content marketing",
          "Landing page optimization",
          "Conversion rate optimization",
          "Analytics & performance tracking",
        ],

        process: [
          {
            number: "01",
            title: "Discover",
            description:
              "We understand your business, audience, competitors, existing channels, and the opportunities with the greatest growth potential.",
          },
          {
            number: "02",
            title: "Strategize",
            description:
              "We create a channel strategy that connects your audience, offer, messaging, content, campaigns, and conversion journey.",
          },
          {
            number: "03",
            title: "Launch",
            description:
              "We build campaigns, content, landing experiences, and tracking systems designed to turn attention into measurable actions.",
          },
          {
            number: "04",
            title: "Optimize",
            description:
              "We analyze performance, test new ideas, improve campaigns, and continuously refine the customer journey.",
          },
          {
            number: "05",
            title: "Scale",
            description:
              "Once we identify what works, we invest more into the strongest channels and opportunities to create sustainable growth.",
          },
        ],

        outcomes: [
          "More qualified traffic",
          "Stronger digital visibility",
          "Higher campaign performance",
          "More leads and enquiries",
          "Better conversion rates",
          "Stronger customer acquisition",
          "Clearer marketing performance data",
          "A scalable digital growth system",
        ],
      }}
    />
  );
}