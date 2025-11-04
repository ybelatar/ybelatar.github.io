export interface Thought {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

// Parse frontmatter from markdown content
function parseMarkdown(content: string, filename: string): Thought {
  const id = filename.replace(/\.md$/, "");

  // Try to parse frontmatter (format: ---\nkey: value\n---\ncontent)
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  let metadata: Record<string, string> = {};
  let markdownContent = content;

  if (match) {
    // Parse frontmatter
    const frontmatter = match[1];
    markdownContent = match[2];

    frontmatter.split("\n").forEach((line) => {
      const colonIndex = line.indexOf(":");
      if (colonIndex > 0) {
        const key = line.substring(0, colonIndex).trim();
        const value = line
          .substring(colonIndex + 1)
          .trim()
          .replace(/^["']|["']$/g, "");
        metadata[key] = value;
      }
    });
  }

  // Extract excerpt from first paragraph if not in frontmatter
  const paragraphs = markdownContent.split("\n\n").filter((p) => p.trim());
  const excerpt =
    metadata.excerpt || paragraphs[0]?.trim().substring(0, 150) || "";

  // Generate title from filename if not in frontmatter
  const title =
    metadata.title ||
    id
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  // Use date from frontmatter or default
  const date = metadata.date || "recent";

  return {
    id,
    title: title.toLowerCase(),
    date,
    excerpt: excerpt.length > 150 ? excerpt.substring(0, 150) + "..." : excerpt,
    content: markdownContent.trim(),
  };
}

// Load all markdown files from the thoughts folder
// Vite glob patterns are relative to project root (apps/web)
const thoughtsModules = import.meta.glob("../thoughts/*.md?raw", {
  eager: true,
}) as Record<string, string>;

// Convert to array of thoughts
export const thoughts: Thought[] = Object.entries(thoughtsModules)
  .map(([path, content]) => {
    // Extract filename from path (remove query params and path)
    const fullPath = path.split("/").pop() || "";
    const filename = fullPath.split("?")[0];
    return parseMarkdown(content, filename);
  })
  .sort((a, b) => {
    // Sort by date (most recent first) - simple string comparison for now
    return b.date.localeCompare(a.date);
  });
