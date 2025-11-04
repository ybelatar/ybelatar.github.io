import { Link } from "@tanstack/react-router";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const links = [
    { to: "/", label: "me" },
    { to: "/resume", label: "resume" },
    { to: "/thoughts", label: "thoughts" },
  ] as const;

  return (
    <div>
      <div className="flex flex-row items-center justify-between pl-8 pr-8 py-6">
        <Link to="/" className="text-base font-normal lowercase">
          younes belataris
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm">
            {links.map(({ to, label }) => {
              return (
                <Link
                  key={to}
                  to={to}
                  className="hover:underline decoration-1 underline-offset-4 transition-none lowercase"
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
