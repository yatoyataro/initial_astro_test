import { profile } from '@data/profile';
import { TerminalBox } from '@components/widgets/TerminalBox';

export function HomeSection() {
  return (
    <section id="home" className="section">
      <div className="hero">
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-subtitle">{profile.title}</p>
      </div>

      <TerminalBox legend="BIOGRAPHICAL_DATA">
        <p>{profile.summary}</p>
        <p style={{ marginTop: '1rem' }}>
          LOCATION: {profile.location} <br />
          EMAIL: {profile.email} <br />
          GITHUB: <a href={profile.github} target="_blank" rel="noopener noreferrer">{profile.github}</a> <br />
          LINKEDIN: <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a>
        </p>
      </TerminalBox>

      <TerminalBox legend="DEVELOPMENT_PHILOSOPHY">
        <ol style={{ paddingLeft: '1.5rem' }}>
          {profile.philosophy.map((item, i) => (
            <li key={i} style={{ marginBottom: '0.5rem', lineHeight: 1.6 }}>{item}</li>
          ))}
        </ol>
      </TerminalBox>
    </section>
  );
}