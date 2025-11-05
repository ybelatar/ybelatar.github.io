import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Github, Mail, Twitter } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomeComponent,
  head: () => ({
    meta: [
      {
        title: "younes belataris",
      },
      {
        name: "description",
        content:
          "Software Engineer helping teams scale efficiently through automation.",
      },
    ],
  }),
});

function HomeComponent() {
  return (
    <div className="max-w-5xl pl-8 md:pl-0 md:ml-[16.67%] pr-8 md:pr-16 py-20">
      {/* Header Section */}
      <header className="mb-16">
        <h1 className="text-5xl font-bold mb-6 lowercase">
          <span className="underline decoration-4 underline-offset-4 font-bold">
            hi, i'm younes
          </span>
          .{" "}
          <span className="text-base font-normal">
            paris, france. fullstack developer + (ai) automation engineer.
          </span>
        </h1>

        <p className="text-base mb-4 leading-relaxed">
          i help{" "}
          <span className="highlight font-medium">identify bottlenecks</span>{" "}
          and build{" "}
          <span className="highlight font-medium">
            automations & intelligent systems
          </span>{" "}
          for companies.
          <br />
          currently at{" "}
          <a
            href="https://appchoose.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 underline-offset-2"
          >
            choose
          </a>
          , where i'm helping teams scale efficiently.
        </p>

        <p className="text-base mb-8 leading-relaxed">
          basically, i'm a fullstack developer who loves building things that
          save people time and make companies money.
        </p>

        <p className="text-base mb-2 lowercase">
          <span className="font-medium">connect with me:</span>{" "}
          <a
            href="https://linkedin.com/in/younes-belataris"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 underline-offset-2"
          >
            linkedin
          </a>
          ,{" "}
          <a
            href="https://x.com/igo_super"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 underline-offset-2"
          >
            x
          </a>
          ,{" "}
          <a
            href="https://github.com/ybelatar"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 underline-offset-2"
          >
            github
          </a>
        </p>

        <p className="text-base mb-2">
          <span className="font-medium">email:</span>{" "}
          <a
            href="mailto:younes.automation@gmail.com"
            className="underline decoration-1 underline-offset-2"
          >
            younes.automation@gmail.com
          </a>
        </p>
      </header>

      {/* Work */}
      <section className="mb-16">
        <h2 className="text-base font-medium mb-4 lowercase">work:</h2>

        {/* Choose Section */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2 lowercase">choose</h3>
          <ul className="space-y-3 text-base">
            <li className="leading-relaxed">
              • built ai-powered crawler/scraper to retrieve products from
              ecommerce websites, saving{" "}
              <span className="font-medium">2000 hours/year</span>
            </li>
            <li className="leading-relaxed">
              • developed internal tool streamlining sales & merchandising,
              saving <span className="font-medium">1500 days/year</span>
            </li>
          </ul>
        </div>

        {/* Personal Projects Section */}
        <div>
          <h3 className="text-sm font-medium mb-2 lowercase">personal</h3>
          <ul className="space-y-3 text-base">
            <li className="leading-relaxed">
              • created pisco, a personal AI assistant on discord
            </li>
          </ul>
        </div>
      </section>

      {/* Technologies */}
      <section className="mb-16">
        <p className="text-base mb-2">
          <span className="font-medium">tech:</span> Python, TypeScript
        </p>
        <p className="text-base mb-2">
          <span className="font-medium">frameworks:</span> React, Next.js,
          Node.js, Django, LangGraph, GraphQL, FastAPI
        </p>
        <p className="text-base mb-2">
          <span className="font-medium">tools:</span> Docker, Git, Redis, GitHub
          Actions, LangFuse, GCP, Postman
        </p>
        <p className="text-base">
          <span className="font-medium">ai tools:</span> Cursor, Claude, n8n,
          Clay
        </p>
      </section>

      {/* Education */}
      <section className="mb-16">
        <p className="text-base mb-2">
          <span className="font-medium">education:</span> 42 Paris (Computer
          Science), ESCP (Entrepreneurship)
        </p>
      </section>
    </div>
  );
}
