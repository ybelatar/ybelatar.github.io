import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getThoughtById } from "@/data/thoughts";

export const Route = createFileRoute("/thoughts/$postId")({
  component: ThoughtPostComponent,
  loader: ({ params }) => {
    const thought = getThoughtById(params.postId);
    if (!thought) {
      throw notFound();
    }
    return { thought };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData.thought.title} - thoughts - younes belataris`,
      },
      {
        name: "description",
        content: loaderData.thought.excerpt,
      },
    ],
  }),
});

function ThoughtPostComponent() {
  const { thought } = Route.useLoaderData();

  return (
    <div className="max-w-5xl pl-8 md:pl-0 md:ml-[16.67%] pr-8 md:pr-16 py-20">
      <Link
        to="/thoughts"
        className="text-base underline decoration-1 underline-offset-2 mb-8 inline-block lowercase"
      >
        ← back to thoughts
      </Link>
      <article>
        <h1 className="text-4xl font-bold mb-3 lowercase">{thought.title}</h1>
        <p className="text-sm text-foreground/60 mb-10 lowercase">
          {thought.date}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {thought.content
            .split(/\n\s*\n/)
            .filter((p) => p.trim())
            .map((paragraph, index) => {
              const trimmed = paragraph.trim();

              // Handle headers
              if (trimmed.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold mt-10 mb-4 lowercase"
                  >
                    {trimmed.replace(/^##\s+/, "")}
                  </h2>
                );
              }

              // Handle list items (numbered)
              if (trimmed.match(/^\d+\./m)) {
                const items = trimmed
                  .split("\n")
                  .filter((line) => line.trim() && /^\d+\./.test(line.trim()));
                return (
                  <ol
                    key={index}
                    className="list-decimal list-inside space-y-2 my-6"
                  >
                    {items.map((item, i) => (
                      <li key={i} className="text-base leading-relaxed">
                        {item.replace(/^\d+\.\s*/, "").trim()}
                      </li>
                    ))}
                  </ol>
                );
              }

              // Handle bullet points
              if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
                const items = trimmed
                  .split("\n")
                  .filter((line) => {
                    const trimmedLine = line.trim();
                    return trimmedLine && /^[-*]/.test(trimmedLine);
                  });
                return (
                  <ul
                    key={index}
                    className="list-disc list-inside space-y-2 my-6"
                  >
                    {items.map((item, i) => (
                      <li key={i} className="text-base leading-relaxed">
                        {item.replace(/^[-*]\s+/, "").trim()}
                      </li>
                    ))}
                  </ul>
                );
              }

              // Regular paragraphs
              return (
                <p key={index} className="text-base mb-6 leading-relaxed">
                  {trimmed}
                </p>
              );
            })}
        </div>
      </article>
    </div>
  );
}
