import { skills } from '@data/skills';
import { education, internship, certifications } from '@data/experience';
import { ProficiencyBar } from '@components/widgets/ProficiencyBar';
import { TerminalBox } from '@components/widgets/TerminalBox';

export function IntelSection() {
  return (
    <section id="intel" className="section">
      <div className="section-header">// 02_INTEL :: TECHNICAL_SPECIFICATIONS_&_LOGS</div>

      <TerminalBox legend="EXECUTION_HISTORY // CAREER_LOG">

        <div>
          <h4 style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            EDUCATION
          </h4>
          {education.map((edu) => (
            <div key={edu.degree} className="timeline-entry">
              <div className="timeline-header">[{edu.period}] // {edu.degree}</div>
              <div className="timeline-role">{edu.school}</div>
              {edu.honors.length > 0 && (
                <ul className="timeline-bullets">
                  {edu.honors.map((honor) => (
                    <li key={honor}>{honor}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            INTERNSHIP
          </h4>
          <div className="timeline-entry">
            <div className="timeline-header">[{internship.period}] // {internship.role}</div>
            <div className="timeline-role">{internship.org} — {internship.type}</div>
            <ul className="timeline-bullets">
              {internship.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)', letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase' }}>
            CERTIFICATIONS
          </h4>
          {certifications.map((cert) => (
            <div key={cert.name} className="timeline-entry">
              <div className="timeline-header">[{cert.year}] // {cert.name}</div>
              <div className="timeline-role">{cert.issuer}</div>
              <ul className="timeline-bullets">
                {cert.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </TerminalBox>
      
      <TerminalBox legend="SYSTEM_CAPABILITIES // PROFICIENCY_MATRIX">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {skills.map((category) => (
            <div key={category.category}>
              <h4 style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)', letterSpacing: '0.1em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                {category.category}
              </h4>
              {category.items.map((skill) => (
                <ProficiencyBar key={skill.name} name={skill.name} pct={skill.proficiency} />
              ))}
            </div>
          ))}
        </div>
      </TerminalBox>

    </section>
  );
}