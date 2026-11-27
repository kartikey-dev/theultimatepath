import {
  TAROT_CARD_HIGH_PRIESTESS,
  TAROT_CARD_SIX_SWORDS,
  TAROT_CARD_STAR,
  TAROT_CARD_TWO_PENTACLES,
  type SiteAsset,
} from "@/lib/assets";

export interface TarotArchetypeCard {
  readonly id: string;
  readonly numeral: string;
  readonly name: string;
  readonly arcana: string;
  readonly image: SiteAsset;
  readonly essence: string;
  readonly reflectionImpact: string;
  readonly promptQuestion: string;
}

export interface TarotImpactPillar {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export const TAROT_GUIDE = {
  eyebrow: "Understanding Tarot",
  heading: "What tarot cards are",
  introParagraphs: [
    "Tarot is a traditional 78-card deck of symbolic imagery used for personal reflection rather than superstition or guaranteed prediction.",
    "The deck has two parts: 22 Major Arcana cards representing meaningful life chapters and inner lessons, and 56 Minor Arcana cards across four everyday suits—Cups (feelings and relationships), Wands (energy and initiative), Swords (thoughts and clarity), and Pentacles (work, stability, and practical care).",
  ],
  impactHeading: "How tarot impacts us",
  impactLead:
    "In a calm consultation with Archana Mahajan, laying out the cards slows down mental noise and turns an overwhelming situation into themes you can examine thoughtfully.",
  impactPillars: [
    {
      number: "01",
      title: "Creates space to pause",
      description:
        "Stepping into a quiet conversation gives your mind permission to settle before making an emotional or rushed decision.",
    },
    {
      number: "02",
      title: "Mirrors unspoken patterns",
      description:
        "Symbolic imagery brings recurring habits, hesitations, and genuine priorities to the surface where you can see them clearly.",
    },
    {
      number: "03",
      title: "Opens fresh perspective",
      description:
        "Looking at a dilemma from a visual story helps widen your viewpoint beyond fear-based assumptions or binary choices.",
    },
    {
      number: "04",
      title: "Strengthens personal agency",
      description:
        "Good guidance never removes your freedom—it supports clear thinking while leaving every choice firmly in your hands.",
    },
  ] satisfies readonly TarotImpactPillar[],
  showcaseCards: [
    {
      id: "the-star",
      numeral: "XVII",
      name: "The Star",
      arcana: "Major Arcana",
      image: TAROT_CARD_STAR,
      essence: "Renewal, composure, and steady hope after a demanding season.",
      reflectionImpact:
        "Invites you to release pressure and recognise where quiet consistency is already restoring confidence.",
      promptQuestion:
        "What becomes simpler if you trust your next small step rather than forcing a sudden outcome?",
    },
    {
      id: "high-priestess",
      numeral: "II",
      name: "The High Priestess",
      arcana: "Major Arcana",
      image: TAROT_CARD_HIGH_PRIESTESS,
      essence: "Listening deeply and honouring quiet discernment before speaking or acting.",
      reflectionImpact:
        "Encourages you to notice what you already sense beneath outside opinions and external urgency.",
      promptQuestion:
        "Where might stillness give you a clearer answer than asking five more voices?",
    },
    {
      id: "two-of-pentacles",
      numeral: "II",
      name: "Two of Pentacles",
      arcana: "Minor Arcana · Earth",
      image: TAROT_CARD_TWO_PENTACLES,
      essence: "Practical balance while juggling work, family commitments, and personal energy.",
      reflectionImpact:
        "Highlights what deserves real priority today and what can be simplified without guilt.",
      promptQuestion:
        "Which responsibility truly matters right now, and which expectation can you lighten?",
    },
    {
      id: "six-of-swords",
      numeral: "VI",
      name: "Six of Swords",
      arcana: "Minor Arcana · Air",
      image: TAROT_CARD_SIX_SWORDS,
      essence: "Transitioning gently from mental clutter toward calmer perspective.",
      reflectionImpact:
        "Helps frame a turning point as steady movement forward rather than leaving everything behind overnight.",
      promptQuestion:
        "What outlook or habit are you ready to leave on the shore as you move ahead?",
    },
  ] satisfies readonly TarotArchetypeCard[],
} as const;
