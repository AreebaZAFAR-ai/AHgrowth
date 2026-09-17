
import ServiceDetailPage from "@/components/ServiceDetailPage";

export default function WebDevelopmentPage() {
  return (
    <ServiceDetailPage
      service={{
        number: "05",
        category: "Digital Experiences",
        title: "Web Development",
        highlight: "built to convert.",
        description:
          "Fast, conversion-focused websites designed to make every other growth channel perform better.",
        media: "/assets/website.mp4",
        mediaType: "video",

        strategyTitle:
          "A website should do more than look good.",

        strategyText:
          "We combine UX, design, development, performance and conversion strategy to create websites that communicate clearly, load quickly and turn attention into action.",

        capabilities: [
          "UX & conversion strategy",
          "Next.js development",
          "Responsive interface systems",
          "Motion & interaction design",
          "Technical SEO foundations",
          "Analytics & conversion tracking",
        ],

        process: [
          {
            number: "01",
            title: "Strategy",
            description:
              "We understand your audience, positioning, business goals and conversion journey.",
          },
          {
            number: "02",
            title: "Design",
            description:
              "We translate the strategy into an intentional visual and interaction system.",
          },
          {
            number: "03",
            title: "Develop",
            description:
              "We build a fast, responsive and scalable digital experience.",
          },
          {
            number: "04",
            title: "Launch",
            description:
              "We test performance, responsiveness, accessibility and conversion paths before launch.",
          },
        ],

        outcomes: [
          "Faster page experiences",
          "Higher conversion potential",
          "Stronger brand perception",
          "Better mobile experience",
          "Improved search foundations",
          "A website built for growth",
        ],
      }}
    />
  );
}
