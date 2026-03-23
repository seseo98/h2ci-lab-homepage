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
  role: "pi" | "phd" | "ms" | "undergrad" | "alumni";
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
    research: ["Health Monitoring Technology", "Conversational AI for Health", "CSCW", "HCI"],
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
    research: ["Social Computing", "Educational Technology", "Human Well-being"],
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
    research: ["Affective Computing", "Conversational AI", "Nonverbal Communication"],
    website: "https://jiminlee.me",
    startYear: 2026,
    photo: "/people/jiminlee.png",
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
    doi: "https://doi.org/10.1145/3706598.3714080",
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
    doi: "https://dl.acm.org/doi/10.1145/3637407",
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
    doi: "https://mental.jmir.org/2023/1/e46862",
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
    doi: "https://dl.acm.org/doi/10.1145/3491102.3501912",
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
    doi: "https://dl.acm.org/doi/10.1145/3512906",
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
    doi: "https://dl.acm.org/doi/10.1145/3392860",
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
  content: string;
  link?: string;       // optional URL
}

export const NEWS: NewsItem[] = [
  {
    id: "news-1",
    date: "2026-03",
    category: "join",
    content: "H2CI Lab officially launched at POSTECH! Welcome to Sangeun, Jimin, and Jumi!",
  },
  {
    id: "news-2",
    date: "2026-02",
    category: "award",
    content: "Prof. Jo received the 2026 ACM SIGCHI Outstanding Dissertation Award.",
    link: "https://sigchi.org/awards/sigchi-award-recipients/2026-sigchi-award-recipients/",
  },
  {
    id: "news-3",
    date: "2025-04",
    category: "paper",
    content: "Paper accepted at CHI 2025 — \"Understanding Public Agencies' Expectations and Realities of AI-Driven Chatbots for Public Health Monitoring\"",
    link: "https://doi.org/10.1145/3706598.3714080",
  },
  {
    id: "news-5",
    date: "2024-01",
    category: "paper",
    content: "Paper accepted at CHI 2024 — \"Understanding the Impact of Long-Term Memory on Self-Disclosure with LLM-Driven Chatbots\"",
    link: "https://doi.org/10.1145/3613904.3642420",
  },
  {
    id: "news-6",
    date: "2023-04",
    category: "award",
    content: "Best Paper Award (Top 1%) at CHI 2023 — \"Understanding the Benefits and Challenges of Deploying Conversational AI Leveraging LLMs for Public Health Intervention\"",
    link: "https://dl.acm.org/doi/10.1145/3544548.3581503",
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
    icon: "🩺",
    title: "Health Monitoring Technology",
    description:
      "Examining how health monitoring tools work in clinical and public health contexts — understanding stakeholder needs, challenges, and designing for infrastructural complexity.",
    tags: ["Clinical Systems", "Public Health", "Field Deployments"],
  },
  {
    icon: "🤖",
    title: "Conversational AI for Health",
    description:
      "Designing and evaluating LLM-powered chatbots for mental health, chronic care, and public health interventions — with focus on safety, ethics, and real-world effectiveness.",
    tags: ["LLMs", "Mental Health", "Chatbot Design"],
  },
  {
    icon: "👥",
    title: "Sociotechnical Systems",
    description:
      "Understanding how social contexts shape technology use in health care — from caregiver-patient communication to clinician decision support and digital wellbeing.",
    tags: ["CSCW", "Caregiving", "Digital Wellbeing"],
  },
];
