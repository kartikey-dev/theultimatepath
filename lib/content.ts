export interface ConsultationPreviewItem {
  readonly number: string;
  readonly title: string;
  readonly summary: string;
  readonly suitableFor: string;
}

export interface ApproachPrinciple {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export const ABOUT_CONTENT = {
  eyebrow: "About Archana",
  headline: "Meet Archana Mahajan",
  lead: "Archana Mahajan is the tarot reader behind The Ultimate Path in Gorakhpur. Her practice begins with quiet listening—understanding the question someone carries and exploring it with warmth, discretion, and respect.",
  storyParagraphs: [
    "At The Ultimate Path, a tarot reading is never about taking choices away from a visitor or promising guaranteed outcomes. Instead, Archana approaches each consultation as a calm, unhurried conversation where the cards serve as a mirror for reflection and a fresh perspective.",
    "Alongside her personal tarot consultations, her public conversation hosted by Soulful Moms of India also introduces her as a numerology expert and explores the difference between thoughtful one-to-one guidance and generic social-media readings.",
    "Archana's personal biography in her own words is being reviewed with her directly so that every published detail about her journey reflects her voice accurately.",
  ],
  approach: {
    eyebrow: "Reflective approach",
    heading: "Listening first, with clear boundaries.",
    principles: [
      {
        number: "01",
        title: "Grounded conversation",
        description:
          "Every session centres on the real question you bring, giving space to talk things through calmly without pressure or fear-based language.",
      },
      {
        number: "02",
        title: "Personal agency",
        description:
          "Tarot offers perspective and reflection; your decisions remain your own at every step.",
      },
      {
        number: "03",
        title: "Respectful discretion",
        description:
          "Consultations are conducted one-to-one with care for your privacy and clear ethical boundaries around medical, legal, or financial matters.",
      },
    ] satisfies readonly ApproachPrinciple[],
  },
  publicVoice: {
    eyebrow: "Public voice",
    heading: "Conversations on tarot, perspective, and responsible practice.",
    copy: "Before reaching out for a consultation, visitors can listen to Archana in her featured podcast collaboration with Soulful Moms of India or explore her YouTube, Instagram, and Facebook channels.",
    podcastCta: "Watch the Soulful Moms of India conversation",
    mediaCta: "Explore Media & Social",
  },
  values: {
    eyebrow: "Values & Community",
    heading: "Nature and community involvement.",
    ngoName: "Aparigraha Foundation",
    ngoMotto: "Less for me, More for we",
    ngoFocusAreas: [
      "Child Education & Learning Support",
      "Clothing & Essential Support",
      "Support Underprivileged",
      "Care, Inclusion & Celebration",
    ],
    paragraphs: [
      "Beyond her consultation table, Archana Mahajan is a nature lover and takes part in community outreach with Aparigraha Foundation, whose motto is “Less for me, More for we”.",
      "Through grassroots drives focused on child education and learning support, clothing and essential aid, and care and inclusion, she enjoys spending time directly with children and volunteers in the community.",
    ],
  },
} as const;

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export const HOME_CONTENT = {
  hero: {
    eyebrow: "The Ultimate Path · Tarot readings with Archana Mahajan",
    headline: "A little clarity for the path ahead.",
    lead: "Bring the question on your mind. Archana Mahajan offers personal tarot readings that create space to pause, reflect, and consider your next step with a fresh perspective.",
    primaryCta: { label: "Enquire about a reading", href: "/connect" },
    secondaryCta: { label: "Meet Archana", href: "/about-archana" },
    footnote: "One-to-one reflective guidance · Gorakhpur",
  },
  intro: {
    eyebrow: "01 · The Practice",
    heading: "A calm, unhurried space to listen to your own questions.",
    paragraphs: [
      "Life often brings moments where a quiet conversation matters more than hurried answers. A personal tarot reading at The Ultimate Path begins with listening—understanding the question you carry and exploring it thoughtfully through the cards.",
      "Rather than making promises about the future, Archana focuses on personal insight and grounded perspective so your decisions always remain your own.",
    ],
  },
  consultations: {
    eyebrow: "02 · Consultations",
    heading: "Personal tarot consultations, shaped around what you bring.",
    lead: "Every consultation is an individual conversation. Reach out directly to discuss your question and confirm format and scheduling.",
    ctaLabel: "Read consultation guide",
    items: [
      {
        number: "01",
        title: "One-to-one personal tarot reading",
        summary:
          "A private, reflective session centred on the question or life situation currently on your mind.",
        suitableFor:
          "Helpful when you want focused time to talk through a personal theme.",
      },
      {
        number: "02",
        title: "Clarity at a turning point",
        summary:
          "Explore options, patterns, and fresh angles around a decision or transition without pressure.",
        suitableFor:
          "Suitable when you are weighing next steps in work, family, or personal direction.",
      },
      {
        number: "03",
        title: "Reflective conversation & boundaries",
        summary:
          "Grounded guidance offered with discretion and clear ethical limits—supporting your own judgment.",
        suitableFor:
          "Ideal for first-time visitors who want a thoughtful, respectful reading.",
      },
    ] satisfies readonly ConsultationPreviewItem[],
  },
  meetArchana: {
    eyebrow: "03 · About Archana",
    heading: "The person behind The Ultimate Path.",
    copy: "Archana Mahajan is a tarot reader based in Gorakhpur whose approach values listening, warmth, and honest perspective. In her conversation with Soulful Moms of India, she also speaks on tarot, numerology, and the importance of ethical guidance.",
    ctaLabel: "Read Archana's story",
    ctaHref: "/about-archana",
  },
  community: {
    eyebrow: "06 · Nature & Community",
    heading: "Beyond the cards, close to what matters.",
    copy: "Outside her consultation room, Archana draws calm from nature and participates in community outreach with Aparigraha Foundation (“Less for me, More for we”), supporting children's learning, essentials, and care.",
    ctaLabel: "See her community work",
    ctaHref: "/about-archana#values",
  },
  faq: {
    eyebrow: "07 · Common Questions",
    heading: "Clear answers before you reach out.",
    ctaLabel: "View all consultation FAQs",
    ctaHref: "/consultations#faq",
    items: [
      {
        question: "Who offers tarot readings at The Ultimate Path?",
        answer:
          "Archana Mahajan conducts all tarot readings at The Ultimate Path, listed on Gorakhnath Road in Gorakhpur, Uttar Pradesh.",
      },
      {
        question: "How can I enquire about a tarot reading?",
        answer:
          "You can submit the consultation enquiry form on the Consultations or Connect page, call +91 90769 77905 or +91 80526 23615 directly, or send a message through Archana's official Instagram or Facebook profiles.",
      },
      {
        question: "What should I expect from a consultation?",
        answer:
          "A reading is a calm, one-to-one reflective conversation using tarot cards to look at a question from a fresh perspective. It offers personal insight rather than guaranteed predictions.",
      },
      {
        question: "Does a tarot reading replace medical, legal, or financial advice?",
        answer:
          "No. Tarot readings are for personal reflection only and are never a substitute for qualified medical, mental-health, legal, or financial support.",
      },
    ] satisfies readonly FaqItem[],
  },
} as const;

export const CONSULTATIONS_CONTENT = {
  eyebrow: "Consultations",
  headline: "Personal tarot consultations",
  lead: "Thoughtful, one-to-one tarot consultations with Archana Mahajan—created to give you space to pause, reflect on a question, and consider your next step.",
  offeringsHeading: "Areas a personal reading can explore",
  offeringsLead:
    "Every consultation is tailored through direct enquiry. Fees, formats, and scheduling are confirmed with Archana directly when you reach out.",
  stepsHeading: "How an enquiry and session work",
  steps: [
    {
      step: "01",
      title: "Share what brings you here",
      description:
        "Call Archana or reach out via her official Instagram or Facebook channels with a brief note about the consultation you are looking for.",
    },
    {
      step: "02",
      title: "Confirm format and timing",
      description:
        "Agree directly with Archana on the format, session timing, and any practical details before your reading.",
    },
    {
      step: "03",
      title: "Explore the cards together",
      description:
        "Have an unhurried, one-to-one reading focused on listening, reflection, and fresh perspective.",
    },
    {
      step: "04",
      title: "Carry the insight forward",
      description:
        "Leave with clear reflections to support your own judgment—your choices always remain your own.",
    },
  ],
  boundariesHeading: "What tarot can and cannot offer",
  canOffer: [
    "A calm, attentive one-to-one space to look at a personal question from a fresh perspective.",
    "Thoughtful exploration of patterns, choices, and turning points in everyday life.",
    "Respectful conversation grounded in listening and personal agency.",
  ],
  cannotOffer: [
    "Guaranteed future predictions, fixed outcomes, or promises of specific life results.",
    "Medical diagnosis, mental-health treatment, psychotherapy, legal counsel, or financial advice.",
    "Pressure-led upsells or instant online automated readings.",
  ],
  faqs: [
    ...HOME_CONTENT.faq.items,
    {
      question: "Do I need to share sensitive personal documents before an enquiry?",
      answer:
        "No. You only need to share your name, preferred way to be reached, and a brief question or topic when you call or message.",
    },
    {
      question: "Are session fees or fixed time slots listed online?",
      answer:
        "Not at this stage. Consultation format, timing, and applicable fee details are shared directly by Archana when you enquire.",
    },
  ] satisfies readonly FaqItem[],
} as const;

export const CONNECT_CONTENT = {
  eyebrow: "Connect",
  headline: "Start a consultation enquiry",
  lead: "Send a consultation enquiry below, call Archana Mahajan directly, or connect through her verified social channels.",
  callHeading: "Direct phone enquiry",
  callNote:
    "Both verified numbers below connect directly for consultation enquiries. Please call to confirm format, timing, and availability.",
  locationHeading: "Public location reference",
  socialHeading: "Official social channels",
  socialNote:
    "Follow or message Archana only through these verified destinations.",
} as const;

