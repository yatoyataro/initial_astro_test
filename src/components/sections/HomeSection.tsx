import { Button } from "@components/ui/Button";
import { TerminalBox } from "@components/widgets/TerminalBox";
import { profile } from "@data/profile";
import type { ReactNode } from "react";

interface HomeSectionProps {
  /** Optional portrait card (see IdCard.astro). Without it the hero is just the title and buttons. */
  children?: ReactNode;
}

/** "https://www.linkedin.com/in/name/" → "linkedin.com/in/name" (display only). */
const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export function HomeSection({ children }: HomeSectionProps) {
  return (
    <section id="home" className="section" aria-labelledby="hero-name">
      <div className="hero">
        <div className={`hero-grid${children ? "" : " hero-grid--solo"}`}>
          <div className="hero-title">
            <h1 id="hero-name" className="hero-name">
              {profile.name}
            </h1>
            <p className="hero-subtitle caps">{profile.title}</p>
          </div>

          {children && <div className="hero-id">{children}</div>}

          <div className="hero-actions">
            <Button as="a" variant="primary" href="#uplink">
              [ {">"} CONTACT ]
            </Button>
            <Button as="a" href={profile.github} target="_blank" rel="noopener noreferrer">
              [ {">"} GITHUB ]<span className="sr-only"> (opens in a new tab)</span>
            </Button>
            <Button as="a" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              [ {">"} LINKEDIN ]<span className="sr-only"> (opens in a new tab)</span>
            </Button>
            {profile.resumeFile && (
              <Button as="a" href={`${import.meta.env.BASE_URL}${profile.resumeFile}`} download>
                [ {">"} CV ]
              </Button>
            )}
          </div>
        </div>
      </div>

      <h2 className="sr-only">Profile</h2>

      <TerminalBox title="BIOGRAPHICAL_DATA">
        <p className="prose">{profile.summary}</p>
        <dl className="data-list">
          <div>
            <dt>LOCATION</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>EMAIL</dt>
            <dd>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </dd>
          </div>
          <div>
            <dt>GITHUB</dt>
            <dd>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                {displayUrl(profile.github)}
              </a>
            </dd>
          </div>
          <div>
            <dt>LINKEDIN</dt>
            <dd>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                {displayUrl(profile.linkedin)}
              </a>
            </dd>
          </div>
        </dl>
      </TerminalBox>

      <TerminalBox title="DEVELOPMENT_PHILOSOPHY">
        <ol className="numbered-list caps">
          {profile.philosophy.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </TerminalBox>
    </section>
  );
}
