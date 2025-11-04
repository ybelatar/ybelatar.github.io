import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resume")({
  component: ResumeComponent,
  head: () => ({
    meta: [
      {
        title: "resume - younes belataris",
      },
      {
        name: "description",
        content:
          "Younes Belataris - FullStack Developer & AI Automation Engineer Resume",
      },
    ],
  }),
});

function ResumeComponent() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-[#f5f5f0] dark:bg-[#1a1a1a] py-8">
      <div className="w-full max-w-4xl mx-auto">
        <iframe
          src="/Resume.pdf"
          type="application/pdf"
          className="w-full h-[calc(100vh-4rem)]"
          style={{
            border: "none",
            outline: "none",
            boxShadow: "none",
          }}
          title="Resume"
        />
      </div>
    </div>
  );
}
