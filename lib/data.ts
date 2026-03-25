// ============================================================
//  H2CI Lab — Data
//  Edit this file to update lab content
// ============================================================

export const LAB = {
  name: "H2CI Lab",
  fullName: "Health and Human-Computer Interaction Lab",
  affiliation: "POSTECH",
  department: "Department of Computer Science and Engineering & Graduate School of Artificial Intelligence",
  description:
    "We investigate how technology can better support health monitoring, communication, and care — bridging the gap between human-computer interaction and real-world healthcare systems.",
  email: "eunkyungjo@postech.ac.kr",
  location: "POSTECH, Pohang, Gyeongbuk, South Korea",
  twitter: "https://x.com",
  github: "https://github.com",

  // 히어로 섹션 슬라이드쇼 사진 (선택사항)
  // 사진이 1장 이상 있으면 → 왼쪽 텍스트 + 오른쪽 슬라이드쇼 레이아웃
  // 빈 배열 [] → 텍스트 중앙 정렬 유지
  heroPhotos: [
    // "/sigchi.png",
    // "/people/sangeunseo.jpg",
    // "/people/jiminlee.png",
    // "/people/jumikim.jpeg",
    // "/hero2.jpg",  ← 사진 추가할 때마다 여기에 한 줄씩
  ],
};

export interface Member {
  id: string;
  name: string;
  nameKr: string;
  role: "pi" | "phd" | "ms" | "undergrad" | "intern" | "admin" | "alumni";
  roleLabel: string;
  affiliation: string;
  bio: string;
  research: string[];
  website?: string;
  scholar?: string;
  email?: string;
  photo?: string; // path to image in /public/people/
  startYear: number;
}

export const MEMBERS: Member[] = [
  {
    id: "eunkyung-jo",
    name: "Eunkyung Jo",
    nameKr: "조은경",
    role: "pi",
    roleLabel: "Principal Investigator",
    affiliation: "Assistant Professor, Dept. of CSE / GSAI, POSTECH",
    bio: "I research at the intersection of HCI, CSCW, and Health. My work examines how health monitoring technology can better account for the infrastructural complexity of clinical and public health care — through interviews, surveys, log analysis, system prototyping, and real-world field deployments.",
    research: ["Assistant Professor"],
    website: "https://eunkyungjo.com",
    email: "eunkyungjo@postech.ac.kr",
    startYear: 2026,
    photo: "/people/eunkyungjo.jpg",
  },
  {
    id: "sangeun-seo",
    name: "Sangeun Seo",
    nameKr: "서상은",
    role: "phd",
    roleLabel: "Ph.D. Student",
    affiliation: "Dept. of CSE, POSTECH",
    bio: "I aim to support human well-being and meaningful learning in real-world contexts by bridging social computing and educational technology. Currently I focus on socially withdrawn youth — exploring how online communities can serve as a bridge back to society.",
    research: ["Social Computing", "Educational Technology"],
    website: "https://sangeunseo.com",
    email: "sangeunseo@postech.ac.kr",
    startYear: 2026,
    photo: "/people/sangeunseo_profile_square.jpg",
  },
  {
    id: "jimin-lee",
    name: "Jimin Lee",
    nameKr: "이지민",
    role: "phd",
    roleLabel: "Ph.D. Student",
    affiliation: "Dept. of CSE, POSTECH",
    bio: "My research sits at the intersection of HCI and affective computing, focusing on how conversational AI conveys empathy nonverbally. I'm interested in the gap between what AI says and what it communicates — and what that means for people in emotionally meaningful interactions.",
    research: ["Human-AI Interaction", "Conversational AI"],
    website: "https://jiminlee.me",
    email: "leejm21@postech.ac.kr",
    startYear: 2026,
    photo: "/people/jiminlee.png",
  },
  {
    id: "dami-so",
    name: "Dami So",
    nameKr: "소다미",
    role: "admin",
    roleLabel: "Administrator",
    affiliation: "POSTECH",
    bio: "",
    research: [],
    email: "ssodami@postech.ac.kr",
    startYear: 2026,
    photo: "/people/damiso.png",
  },
  {
    id: "nara-lee",
    name: "Nara Lee",
    nameKr: "이나라",
    role: "intern",
    roleLabel: "Intern",
    affiliation: "POSTECH",
    bio: "",
    research: [],
    email: "02leenara@postech.ac.kr",
    startYear: 2026,
    photo: "/people/naralee.jpeg",
  },
  {
    id: "jumi-kim",
    name: "Jumi Kim",
    nameKr: "김주미",
    role: "ms",
    roleLabel: "M.S. Student",
    affiliation: "Dept. of CSE, POSTECH",
    bio: "I'm interested in Digital Wellbeing — specifically how we can better design and utilize Digital Self-Control Tools (DSCTs). Through human-centered computing, I hope to build systems that genuinely empower people to form healthier relationships with their devices.",
    research: ["Digital Wellbeing", "Self-Control Tools", "Human-Centered Computing"],
    website: "https://jglosa.github.io",
    email: "glosajumi@postech.ac.kr",
    startYear: 2026,
    photo: "/people/jumikim.jpeg",
  },
];

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  venueShort: string;
  year: number;
  type: "conference" | "journal" | "workshop";
  doi?: string;
  pdf?: string;
  award?: string;
  tags: string[];
}

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-chi2025",
    title:
      "Understanding Public Agencies' Expectations and Realities of AI-Driven Chatbots for Public Health Monitoring",
    authors: "Eunkyung Jo, Young-Ho Kim, Sang-Houn Ok, Daniel A. Epstein",
    venue: "ACM CHI Conference on Human Factors in Computing Systems",
    venueShort: "CHI 2025",
    year: 2025,
    type: "conference",
    doi: "https://dl.acm.org/doi/full/10.1145/3706598.3713593",
    tags: ["Conversational AI", "Public Health", "Chatbots"],
  },
  {
    id: "pub-cscw2024",
    title:
      "Exploring Patient-Generated Annotations to Digital Clinical Symptom Measures for Patient-Centered Communication",
    authors:
      "Eunkyung Jo, Rachael Zehrung, Katherine E. Genuario, Alexandra Papoutsaki, Daniel A. Epstein",
    venue: "Proceedings of the ACM on Human-Computer Interaction (CSCW)",
    venueShort: "CSCW 2024",
    year: 2024,
    type: "journal",
    doi: "https://dl.acm.org/doi/10.1145/3686997",
    tags: ["Clinical Communication", "Patient-Generated Data", "Health Tracking"],
  },
  {
    id: "pub-chi2024",
    title:
      "Understanding the Impact of Long-Term Memory on Self-Disclosure with Large Language Model-Driven Chatbots for Public Health Intervention",
    authors: "Eunkyung Jo, Yuin Jeong, SoHyun Park, Daniel A. Epstein, Young-Ho Kim",
    venue: "ACM CHI Conference on Human Factors in Computing Systems",
    venueShort: "CHI 2024",
    year: 2024,
    type: "conference",
    doi: "https://doi.org/10.1145/3613904.3642420",
    tags: ["LLM", "Chatbots", "Mental Health", "Self-Disclosure"],
  },
  {
    id: "pub-jmir2023",
    title:
      "Exploring User Perspectives of and Ethical Experiences With Teletherapy Apps: Qualitative Analysis of User Reviews",
    authors: "Eunkyung Jo, Whitney-Jocelyn Kouaho, Stephen M. Schueller, Daniel A. Epstein",
    venue: "JMIR Mental Health",
    venueShort: "JMIR MH 2023",
    year: 2023,
    type: "journal",
    doi: "https://mental.jmir.org/2023/1/e49684",
    tags: ["Teletherapy", "Mental Health Apps", "Ethics"],
  },
  {
    id: "pub-chi2023",
    title:
      "Understanding the Benefits and Challenges of Deploying Conversational AI Leveraging Large Language Models for Public Health Intervention",
    authors: "Eunkyung Jo, Daniel A. Epstein, Hyunhoon Jung, Young-Ho Kim",
    venue: "ACM CHI Conference on Human Factors in Computing Systems",
    venueShort: "CHI 2023",
    year: 2023,
    type: "conference",
    award: "Best Paper Award (Top 1%)",
    doi: "https://dl.acm.org/doi/10.1145/3544548.3581503",
    tags: ["LLM", "Conversational AI", "Public Health"],
  },
  {
    id: "pub-chi2022",
    title:
      "Designing Flexible Longitudinal Regimens: Supporting Clinician Planning for Discontinuation of Psychiatric Drugs",
    authors:
      "Eunkyung Jo, Myeonghan Ryu, Georgia Kenderova, Samuel So, Bryan Shapiro, Alexandra Papoutsaki, Daniel A. Epstein",
    venue: "ACM CHI Conference on Human Factors in Computing Systems",
    venueShort: "CHI 2022",
    year: 2022,
    type: "conference",
    doi: "https://dl.acm.org/doi/10.1145/3491102.3502206",
    tags: ["Clinical Decision Support", "Psychiatric Care", "Longitudinal Health"],
  },
  {
    id: "pub-cscw2022",
    title:
      "GeniAuti: Toward Data-Driven Interventions to Challenging Behaviors of Autistic Children through Caregivers' Tracking",
    authors:
      "Eunkyung Jo, Seora Park, Hyeonseok Bang, Youngeun Hong, Yeni Kim, Jungwon Choi, Bung Nyun Kim, Daniel A. Epstein, Hwajung Hong",
    venue: "Proceedings of the ACM on Human-Computer Interaction (CSCW)",
    venueShort: "CSCW 2022",
    year: 2022,
    type: "journal",
    doi: "https://dl.acm.org/doi/10.1145/3512939",
    tags: ["Autism", "Caregiver Technology", "Data-Driven Intervention"],
  },
  {
    id: "pub-cscw2020",
    title:
      "MAMAS: Supporting Parent-Child Mealtime Interactions Using Automated Tracking and Speech Recognition",
    authors:
      "Eunkyung Jo, Hyeonseok Bang, Myeonghan Ryu, Eun Jee Sung, Sungmook Leem, Hwajung Hong",
    venue: "Proceedings of the ACM on Human-Computer Interaction (CSCW)",
    venueShort: "CSCW 2020",
    year: 2020,
    type: "journal",
    doi: "https://dl.acm.org/doi/10.1145/3392876",
    tags: ["Family Technology", "Mealtime", "Automated Tracking"],
  },
  {
    id: "pub-chi2020",
    title: "Understanding Parenting Stress through Co-designed Self-Trackers",
    authors: "Eunkyung Jo, Austin L. Toombs, Colin M. Gray, Hwajung Hong",
    venue: "ACM CHI Conference on Human Factors in Computing Systems",
    venueShort: "CHI 2020",
    year: 2020,
    type: "conference",
    doi: "https://dl.acm.org/doi/10.1145/3313831.3376359",
    tags: ["Parenting", "Self-Tracking", "Co-design"],
  },
];

// ============================================================
//  News
// ============================================================

export type NewsCategory = "paper" | "award" | "talk" | "event" | "join" | "misc";

export interface NewsItem {
  id: string;
  date: string;        // "2026-02"  (YYYY-MM 또는 YYYY-MM-DD)
  category: NewsCategory;
  title: string;
  content: string;
  link?: string;       // optional URL
}

export const NEWS: NewsItem[] = [
  {
    id: "news-1",
    date: "2026-03",
    category: "misc",
    title: "NRF Young Researcher Program",
    content: "H2CI Lab has been selected for the National Research Foundation of Korea's Young Researcher Support Program.",
  },
  {
    id: "news-2",
    date: "2026-02",
    category: "award",
    title: "🏆 2026 ACM SIGCHI Outstanding Dissertation Award",
    content: "Dr. Jo has been recognized with the ACM SIGCHI Outstanding Dissertation Award.",
    link: "https://medium.com/sigchi/2026-acm-sigchi-awards-and-special-recognitions-d942983d9228",
  },
  {
    id: "news-3",
    date: "2026-02",
    category: "join",
    title: "🎉 H2CI Lab is officially open!",
    content: "We are excited to welcome our first members — Sangeun, Jimin, and Jumi!",
  },
  {
    id: "news-5",
    date: "2025-09",
    category: "misc",
    title: "CHI 2026 Associate Chair",
    content: "Dr. Jo served as an Associate Chair for the Understanding People — Qualitative Methods Subcommittee at CHI 2026.",
    link: "https://chi2026.acm.org/authors/papers/selecting-a-subcommittee/#understanding_qualitative",
  },
  {
    id: "news-4",
    date: "2025-07",
    category: "misc",
    title: "Dr. Jo joins POSTECH",
    content: "Prof. Eunkyung Jo has joined POSTECH as an Assistant Professor in the Department of Computer Science and Engineering and the Graduate School of Artificial Intelligence.",
    link: "https://cse.postech.ac.kr/csepostech/news/new.do?mode=view&articleNo=24587&title=%EC%A1%B0%EC%9D%80%EA%B2%BD+%EA%B5%90%EC%88%98+%EB%B6%80%EC%9E%84",
  },
];

export const CATEGORY_LABEL: Record<NewsCategory, string> = {
  paper:  "📄 Paper",
  award:  "🏆 Award",
  talk:   "🎤 Talk",
  event:  "📅 Event",
  join:   "👋 New Member",
  misc:   "📌 Misc",
};

export const CATEGORY_COLOR: Record<NewsCategory, string> = {
  paper:  "bg-blue-50 text-blue-700",
  award:  "bg-yellow-50 text-yellow-700",
  talk:   "bg-purple-50 text-purple-700",
  event:  "bg-green-50 text-green-700",
  join:   "bg-orange-50 text-orange-700",
  misc:   "bg-stone-100 text-stone-600",
};

export const RESEARCH_AREAS = [
  {
    icon: "🌱",
    title: "Technology for Wellbeing",
    description:
      "Designing and evaluating technologies that support the physical and mental wellbeing of individuals and families.",
    tags: [],
  },
  {
    icon: "🫂",
    title: "Social Isolation",
    description:
      "Investigating technological interventions and monitoring systems for individuals experiencing social isolation.",
    tags: [],
  },
  {
    icon: "💬",
    title: "AI-Mediated Health Communication",
    description:
      "Exploring trust, self-disclosure, and patient-centered interaction in AI-mediated health communication.",
    tags: [],
  },
];

export const COLLABORATORS = [
  {
    name: "Joel Wester",
    affiliation: "University of Copenhagen",
    website: "https://www.joelwester.com/",
  },
  {
    name: "Hyunjoo Na",
    affiliation: "The Catholic University of Korea",
    website: "https://nursing.catholic.ac.kr/html/sub02/sub01_2_2.jsp",
  },
];
