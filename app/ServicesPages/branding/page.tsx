
import ServiceDetailPage from "@/components/ServiceDetailPage";

export default function BrandingPage() {
  return (
    <ServiceDetailPage
      service={{
        number: "06",
        category: "Identity & Positioning",
        title: "Branding",
        highlight: "people remember.",
        description:
          "Identity systems built to make your brand recognizable, relevant and consistent everywhere it appears.",
        media: "/assets/branding.png",
        mediaType: "image",

        strategyTitle:
          "A brand is more than a logo.",

        strategyText:
          "We build the strategic and visual foundation that gives your company a distinct point of view. Positioning, identity, voice and visual language work together as one system.",

        capabilities: [
          "Brand positioning",
          "Visual identity systems",
          "Typography & color direction",
          "Brand voice & messaging",
          "Creative guidelines",
          "Digital brand applications",
        ],

        process: [
          {
            number: "01",
            title: "Define",
            description:
              "We uncover the positioning, audience, personality and competitive opportunity.",
          },
          {
            number: "02",
            title: "Concept",
            description:
              "We explore visual directions that give your brand a distinct and ownable identity.",
          },
          {
            number: "03",
            title: "Systemize",
            description:
              "We turn the chosen direction into a complete and scalable identity system.",
          },
          {
            number: "04",
            title: "Deploy",
            description:
              "We make sure the identity works consistently across every important touchpoint.",
          },
        ],

        outcomes: [
          "Clearer brand positioning",
          "Stronger visual recognition",
          "Consistent brand language",
          "More memorable identity",
          "Better customer perception",
          "A brand built to scale",
        ],
      }}
    />
  );
}
