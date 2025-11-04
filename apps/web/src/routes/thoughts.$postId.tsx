import { createFileRoute, Link } from "@tanstack/react-router";
import { thoughts } from "@/data/thoughts";

export const Route = createFileRoute("/thoughts/$postId")({
  component: ThoughtPostComponent,
});

function ThoughtPostComponent() {
  const { postId } = Route.useParams();
  const thought = thoughts.find((t) => t.id === postId);

  if (!thought) {
    return (
      <div className="max-w-5xl pl-8 md:pl-0 md:ml-[16.67%] pr-8 md:pr-16 py-20">
        <Link
          to="/thoughts"
          className="text-base underline decoration-1 underline-offset-2 mb-8 inline-block lowercase"
        >
          ← back to thoughts
        </Link>
        <h1 className="text-3xl font-bold lowercase">thought not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl pl-8 md:pl-0 md:ml-[25%] pr-8 md:pr-16 py-20">
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
          {thought.content.split("\n\n").map((paragraph, index) => {
            // Handle headers
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold mt-10 mb-4 lowercase"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }

            // Handle list items
            if (paragraph.match(/^\d+\./m)) {
              const items = paragraph.split("\n").filter((line) => line.trim());
              return (
                <ol
                  key={index}
                  className="list-decimal list-inside space-y-2 my-6"
                >
                  {items.map((item, i) => (
                    <li key={i} className="text-base leading-relaxed">
                      {item.replace(/^\d+\.\s*/, "")}
                    </li>
                  ))}
                </ol>
              );
            }

            // Handle bullet points
            if (paragraph.startsWith("- ")) {
              const items = paragraph.split("\n").filter((line) => line.trim());
              return (
                <ul
                  key={index}
                  className="list-disc list-inside space-y-2 my-6"
                >
                  {items.map((item, i) => (
                    <li key={i} className="text-base leading-relaxed">
                      {item.replace(/^- /, "")}
                    </li>
                  ))}
                </ul>
              );
            }

            // Regular paragraphs
            if (paragraph.trim()) {
              return (
                <p key={index} className="text-base mb-6 leading-relaxed">
                  {paragraph.trim()}
                </p>
              );
            }

            return null;
          })}
        </div>
      </article>
    </div>
  );
}
