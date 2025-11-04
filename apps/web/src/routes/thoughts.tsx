import { createFileRoute, Link } from "@tanstack/react-router";
import { thoughts } from "@/data/thoughts";

export const Route = createFileRoute("/thoughts")({
  component: ThoughtsComponent,
  head: () => ({
    meta: [
      {
        title: "thoughts - younes belataris",
      },
      {
        name: "description",
        content: "My thoughts",
      },
    ],
  }),
});

function ThoughtsComponent() {
  return (
    <div className="max-w-5xl pl-8 md:pl-0 md:ml-[16.67%] pr-8 md:pr-16 py-20">
      <h1 className="text-4xl font-bold mb-12 lowercase">thoughts</h1>

      <div className="space-y-8">
        {thoughts.map((thought) => (
          <article
            key={thought.id}
            className="border-b border-black/5 dark:border-white/5 pb-6 last:border-0"
          >
            <Link to={`/thoughts/${thought.id}`} className="group">
              <h2 className="text-lg font-medium mb-2 group-hover:underline decoration-1 underline-offset-2 lowercase">
                {thought.title}
              </h2>
            </Link>
            <p className="text-sm text-foreground/60 mb-2 lowercase">
              {thought.date}
            </p>
            <p className="text-base leading-relaxed">{thought.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
