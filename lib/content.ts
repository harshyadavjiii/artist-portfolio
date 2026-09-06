import "server-only";

import { promises as fs } from "node:fs";
import path from "node:path";
import { artworks as defaultArtworks, type Artwork } from "../app/portfolio-data";
import { sceneryEntries as defaultJournal, type SceneryEntry } from "../app/scenery-data";

export type SiteContent = {
  settings: { siteTitle: string; siteDescription: string; email: string };
  home: {
    topline: string;
    kicker: string;
    firstName: string;
    lastName: string;
    intro: string;
    highlights: string[];
    artistNote: string;
    contactCopy: string;
    showcaseKicker: string;
    showcaseTitle: string;
    showcaseCopy: string;
    showcaseScenery: string[];
  };
  about: {
    topline: string;
    kicker: string;
    title: string;
    intro: string;
    body: string;
    values: { number: string; title: string; copy: string }[];
    journey: { image: string; eyebrow: string; title: string; copy: string; detail: string }[];
  };
  blog: { topline: string; kicker: string; title: string; intro: string };
  contact: { topline: string; kicker: string; title: string; intro: string; availability: string };
  artworks: Artwork[];
  journal: SceneryEntry[];
};

type StoredContent = Partial<Omit<SiteContent, "artworks" | "journal">> & {
  artworks?: Artwork[];
  journal?: SceneryEntry[];
};

const contentPath = path.join(process.cwd(), "content", "site-content.json");

async function readStoredContent(): Promise<StoredContent> {
  try {
    return JSON.parse(await fs.readFile(contentPath, "utf8")) as StoredContent;
  } catch {
    return {};
  }
}

export async function getContent(): Promise<SiteContent> {
  const stored = await readStoredContent();
  return {
    settings: { ...stored.settings } as SiteContent["settings"],
    home: { ...stored.home } as SiteContent["home"],
    about: { ...stored.about } as SiteContent["about"],
    blog: { ...stored.blog } as SiteContent["blog"],
    contact: { ...stored.contact } as SiteContent["contact"],
    artworks: stored.artworks ?? defaultArtworks,
    journal: stored.journal ?? defaultJournal,
  };
}

export async function saveContent(content: SiteContent) {
  await fs.mkdir(path.dirname(contentPath), { recursive: true });
  await fs.writeFile(contentPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
}

export function isContentSection(value: string): value is keyof SiteContent {
  return ["settings", "home", "about", "blog", "contact", "artworks", "journal"].includes(value);
}
