import ServiceDetailPage from "@/components/ServiceDetailPage";

export default function GoogleMapsBusinessPage() {
  return (
    <ServiceDetailPage
      service={{
        number: "01",
        category: "Local Search & Maps",
        title: "Google Maps Business",
        highlight: "be found where customers are looking.",
        description:
          "Turn local searches into real customers with a stronger Google Business presence, better Maps visibility, and a local search strategy built to help your business get discovered, trusted, and chosen.",

        media: "/assets/location_icon.jpg",
        mediaType: "image",

        strategyTitle:
          "Your next customer could already be searching nearby.",

        strategyText:
          "Google Maps has become one of the first places people go when they need a local business. We optimize your Google Business presence, local relevance, reviews, business information, and location signals so your brand has a stronger chance of appearing when high-intent customers are ready to take action.",

        capabilities: [
          "Google Business Profile optimization",
          "Google Maps visibility strategy",
          "Local search optimization",
          "Business category & service optimization",
          "Local keyword strategy",
          "Review & reputation optimization",
          "Local citations & business listings",
          "Location-based content strategy",
        ],

        process: [
          {
            number: "01",
            title: "Audit",
            description:
              "We analyze your Google Business Profile, Maps presence, local rankings, competitors, reviews, and existing location signals.",
          },
          {
            number: "02",
            title: "Position",
            description:
              "We identify the searches, locations, services, and customer intent that matter most to your business.",
          },
          {
            number: "03",
            title: "Optimize",
            description:
              "We improve your profile, categories, services, descriptions, business information, media, and local relevance signals.",
          },
          {
            number: "04",
            title: "Strengthen",
            description:
              "We build stronger local authority through reviews, citations, content, and consistent business information across the web.",
          },
          {
            number: "05",
            title: "Grow",
            description:
              "We monitor local visibility and continuously refine your Maps strategy to create more discovery and customer opportunities.",
          },
        ],

        outcomes: [
          "Stronger Google Maps visibility",
          "More local search discovery",
          "Higher-quality local traffic",
          "More calls and direction requests",
          "Stronger Google Business presence",
          "Better customer trust through reviews",
          "Greater visibility across target locations",
          "More opportunities to turn searches into customers",
        ],
      }}
    />
  );
}