
import ServiceDetailPage from "@/components/ServiceDetailPage";

export default function PerformancePage() {
  return (
    <ServiceDetailPage
      service={{
        number: "02",
        category: "Paid Growth",
        title: "Performance Marketing",
        highlight: "built around revenue.",
        description:
          "Paid media engineered around customer acquisition cost, payback period and actual business growth.",
        media: "/assets/webdevep.jpg",
        mediaType: "image",

        strategyTitle:
          "Every campaign starts with the economics.",

        strategyText:
          "We connect audience, creative, media buying, landing pages and tracking into one acquisition system. Instead of optimizing for clicks, we optimize for what happens after the click.",

        capabilities: [
          "Google Ads strategy & campaign architecture",
          "Meta Ads & audience development",
          "Creative testing systems",
          "Landing page optimization",
          "Conversion tracking & attribution",
          "Budget allocation & scaling",
        ],

        process: [
          {
            number: "01",
            title: "Research",
            description:
              "We understand your offer, audience, competitors and acquisition economics before spending a dollar.",
          },
          {
            number: "02",
            title: "Launch",
            description:
              "We build campaigns, audiences, creative variations and conversion infrastructure.",
          },
          {
            number: "03",
            title: "Test",
            description:
              "We continuously test messaging, creative, audiences, offers and landing pages.",
          },
          {
            number: "04",
            title: "Scale",
            description:
              "Winning campaigns receive more capital while inefficient spend gets removed.",
          },
        ],

        outcomes: [
          "Lower acquisition costs",
          "Higher return on ad spend",
          "More qualified customers",
          "Better creative performance",
          "Smarter media allocation",
          "Predictable paid growth",
        ],
      }}
    />
  );
}
