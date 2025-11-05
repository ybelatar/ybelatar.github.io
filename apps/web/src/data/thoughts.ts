export interface Thought {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

type Frontmatter = Record<string, string>;

interface ParsedMarkdown {
  frontmatter: Frontmatter;
  body: string;
}

interface ThoughtRecord {
  thought: Thought;
  order: number;
  timestamp: number;
}

const RAW_THOUGHT_MODULES = import.meta.glob("../thoughts/**/*.md", {
  as: "raw",
  eager: true,
}) as Record<string, string>;

const FRONTMATTER_REGEX = /^---\s*\n([\s\S]+?)\n---\s*\n?/;

function parseFrontmatter(markdown: string): ParsedMarkdown {
  const match = markdown.match(FRONTMATTER_REGEX);

  if (!match) {
    return {
      frontmatter: {},
      body: markdown.trim(),
    };
  }

  const [, frontmatterBlock] = match;
  const body = markdown.slice(match[0].length).trim();

  const frontmatter: Frontmatter = {};
  frontmatterBlock.split("\n").forEach((line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) return;

    const key = line.slice(0, separatorIndex).trim();
    if (!key) return;

    const value = line
      .slice(separatorIndex + 1)
      .trim()
      .replace(/^['"]|['"]$/g, "");

    frontmatter[key] = value;
  });

  return { frontmatter, body };
}

function slugFromPath(path: string): string {
  const normalized = path.replace(/\\/g, "/");
  const withoutExtension = normalized.replace(/\.md$/, "");
  const [, slug = withoutExtension] = withoutExtension.split("/thoughts/");
  return slug;
}

function titleFromSlug(slug: string): string {
  const segment = slug.split("/").pop() ?? slug;
  return segment
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function toExcerpt(source: string): string {
  const cleaned = source.replace(/\s+/g, " ").trim();
  if (cleaned.length <= 200) {
    return cleaned;
  }
  return `${cleaned.slice(0, 197).trim()}...`;
}

function toOrder(value?: string): number {
  if (!value) return Number.POSITIVE_INFINITY;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : Number.POSITIVE_INFINITY;
}

function toTimestamp(value: string): number {
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function buildThoughtRecord(
  path: string,
  rawMarkdown: string
): ThoughtRecord | null {
  const slug = slugFromPath(path);
  const { frontmatter, body } = parseFrontmatter(rawMarkdown);

  if (frontmatter.draft?.toLowerCase() === "true") {
    return null;
  }

  const title = frontmatter.title || titleFromSlug(slug);
  const date = frontmatter.date || "recent";

  const paragraphs = body.split(/\n\s*\n/).map((paragraph) => paragraph.trim());
  const firstParagraph = paragraphs.find(Boolean) ?? "";
  const excerptSource = frontmatter.excerpt || firstParagraph;

  const thought: Thought = {
    id: slug,
    title,
    date,
    excerpt: toExcerpt(excerptSource),
    content: body,
  };

  return {
    thought,
    order: toOrder(frontmatter.order || frontmatter.priority),
    timestamp: toTimestamp(date),
  };
}

const thoughtRecords = Object.entries(RAW_THOUGHT_MODULES)
  .map(([path, raw]) => buildThoughtRecord(path, raw))
  .filter((record): record is ThoughtRecord => Boolean(record))
  .sort((a, b) => {
    if (a.order !== b.order) {
      return a.order - b.order;
    }
    return b.timestamp - a.timestamp;
  });

export const thoughts: Thought[] = thoughtRecords.map(
  (record) => record.thought
);

const thoughtsById = new Map(thoughts.map((thought) => [thought.id, thought]));

export function getThoughtById(id: string): Thought | undefined {
  return thoughtsById.get(id);
}
