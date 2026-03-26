import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description: "Research areas and projects at H2CI Lab, POSTECH.",
};

const THEMES = [
  {
    title: "Technology for Wellbeing",
    description:
      "Designing and evaluating technologies that support the physical and mental wellbeing of individuals and families.",
    cards: [
      {
        type: "student",
        label: "Student Research",
        title: "Intervention for Digital Wellbeing",
        desc: "Exploring self-control technologies that help people stay in charge of their own screen time. With a focus on infinite scrolling environments like short-form video, we investigate how to preserve human autonomy and prevent mindless scrolling through thoughtful technical interventions.",
        link: null,
        award: null,
        image: "/research/wellbeing/digitalwellbeing.png",
      },
      {
        type: "pub",
        label: "CHI 2022",
        title: "Flexible Tools for Clinical Care",
        desc: "Discontinuing psychiatric medication is a complex, long-term process that requires careful coordination between clinicians and patients. This research explores how flexible digital tools can support clinicians in planning and adjusting personalized tapering regimens over time.",
        link: "https://dl.acm.org/doi/10.1145/3491102.3502206",
        award: null,
        image: "/research/wellbeing/psy_drugs.png",
      },
      {
        type: "pub",
        label: "CSCW 2022",
        title: "Supporting Families of Autistic Children",
        desc: "Caregivers of autistic children often struggle to identify patterns behind challenging behaviors. This research designs a data-driven tracking system that helps caregivers log and interpret behavioral data, enabling more informed and timely interventions.",
        link: "https://dl.acm.org/doi/10.1145/3512939",
        award: null,
        image: "/research/wellbeing/genauti.png",
      },
    ],
  },
  {
    title: "Social Isolation",
    description:
      "Investigating technological interventions and monitoring systems for individuals experiencing social isolation.",
    cards: [
      {
        type: "student",
        label: "Student Research",
        title: "Micro-Bridges for Socially Isolated Youth",
        desc: "Combining low-effort technical interventions with mixed-methods analysis of extreme online discourse, this research works to safely transition reclusive and socially isolated youth into healthier support networks. This effort ranges from NLP-driven insights into how marginalized individuals express themselves in anonymous spaces to privacy-preserving check-in widgets that foster daily micro-connections.",
        link: null,
        award: null,
        image: "/research/isloation/hikikomori.png",
      },
      {
        type: "pub",
        label: "CHI 2023",
        title: "AI Check-in Calls for Isolated Households",
        desc: "Socially isolated individuals often fall outside the reach of traditional support systems. This research examines the real-world deployment of CareCall, an LLM-driven conversational agent that conducts proactive check-in calls, uncovering key benefits and challenges in delivering AI-based public health interventions at scale.",
        link: "https://dl.acm.org/doi/10.1145/3544548.3581503",
        award: null,
        image: "/research/isloation/carecall.jpg",
      },
      {
        type: "pub",
        label: "CHI 2025",
        title: "Public Health Chatbots in Practice",
        desc: "As public agencies increasingly turn to AI chatbots for population-level health monitoring, gaps emerge between institutional expectations and operational realities. This research investigates how agencies perceive, adopt, and struggle with AI-driven chatbot systems — offering design implications for sustainable public health infrastructure.",
        link: "https://dl.acm.org/doi/full/10.1145/3706598.3713593",
        award: null,
        image: "/research/isloation/publicchat.jpg",
      },
    ],
  },
  {
    title: "AI-Mediated Communication",
    description:
      "Exploring trust, self-disclosure, and patient-centered interaction in AI-mediated communication.",
    cards: [
      {
        type: "student",
        label: "Student Research",
        title: "Effects of Non-verbal Empathy Expressions by AI Peer Counselling Avatars",
        desc: "Nonverbal cues such as eye contact, facial expressions, and head-nodding are crucial for conveying empathy in counseling. This project explores how AI avatars can express empathy nonverbally in real time, and whether that shapes how emotionally supported users feel in the peer support context.",
        link: null,
        award: null,
        image: "/research/ai_communication/truelisten.png",
      },
      {
        type: "pub",
        label: "CHI 2024",
        title: "Memory-Aware Chatbots for Deeper Disclosure",
        desc: "Self-disclosure is key to effective health support, yet users often hold back with AI systems. This research investigates how equipping LLM-driven chatbots with long-term memory affects users' willingness to open up, revealing design implications for building more trusted and continuous AI health companions.",
        link: "https://doi.org/10.1145/3613904.3642420",
        award: null,
        image: "/research/ai_communication/memoryaware.jpg",
      },
    ],
  },
];

export default function ResearchPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="mb-16 text-center">
          <div className="brand-divider w-36 mb-5 mx-auto" />
          <h1 className="font-rajdhani text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
            Research
          </h1>
        </div>

        {/* Research themes */}
        <div className="space-y-20">
          {THEMES.map((theme) => (
            <section key={theme.title}>
              {/* Section header with left accent border */}
              <div className="border-l-4 pl-5 mb-3" style={{ borderColor: "#A61955" }}>
                <h2 className="text-2xl font-extrabold text-stone-900">{theme.title}</h2>
              </div>
              <p className="text-stone-500 text-base leading-relaxed mb-8 pl-5">
                {theme.description}
              </p>

              {/* Cards row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {theme.cards.map((card) => {
                  const CardTag = card.link ? "a" : "div";
                  const cardProps = card.link
                    ? { href: card.link, target: "_blank", rel: "noopener noreferrer" }
                    : {};

                  return (
                    <CardTag
                      key={card.title}
                      {...(cardProps as object)}
                      className={`block bg-white rounded-xl border border-stone-100 shadow-sm overflow-hidden transition-all duration-200 ${
                        card.link ? "hover:shadow-md hover:-translate-y-1 cursor-pointer" : ""
                      }`}
                    >
                      {/* Image */}
                      {card.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full aspect-video object-cover"
                        />
                      ) : (
                        <div className="w-full aspect-video bg-stone-200 flex items-center justify-center">
                          <span className="text-stone-400 text-xs">Image</span>
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-5">
                        {/* Award */}
                        {card.award && (
                          <div className="mb-2">
                            <span className="award-badge">🏆 {card.award}</span>
                          </div>
                        )}

                        {/* Title */}
                        <h3 className="font-bold text-stone-900 text-sm leading-snug mb-2">
                          {card.title}
                        </h3>

                        {/* Description */}
                        <p className="text-stone-500 text-xs leading-relaxed">{card.desc}</p>
                      </div>
                    </CardTag>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

      </div>
    </div>
  );
}
