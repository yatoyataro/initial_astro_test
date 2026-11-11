import { ProficiencyBar } from "@components/widgets/ProficiencyBar";
import { TerminalBox } from "@components/widgets/TerminalBox";
import { certifications, education, internship } from "@data/experience";
import { skills } from "@data/skills";

export function IntelSection() {
  return (
    <section id="intel" className="section" aria-labelledby="intel-heading">
      <h2 id="intel-heading" className="section-header">
        {"// 02_INTEL :: TECHNICAL_SPECIFICATIONS_&_LOGS"}
      </h2>

      <TerminalBox title="EXECUTION_HISTORY // CAREER_LOG">
        <div className="subsection">
          <h4 className="subhead">EDUCATION</h4>
          {education.map((edu) => (
            <div key={edu.degree} className="timeline-entry">
              <div className="timeline-header caps">
                [{edu.period}] {"//"} {edu.degree}
              </div>
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

        <div className="subsection">
          <h4 className="subhead">INTERNSHIP</h4>
          <div className="timeline-entry">
            <div className="timeline-header caps">
              [{internship.period}] {"//"} {internship.role}
            </div>
            <div className="timeline-role">
              {internship.org} — {internship.type}
            </div>
            <ul className="timeline-bullets">
              {internship.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="subsection">
          <h4 className="subhead">CERTIFICATIONS</h4>
          {certifications.map((cert) => (
            <div key={cert.name} className="timeline-entry">
              <div className="timeline-header caps">
                [{cert.year}] {"//"} {cert.name}
              </div>
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

      <TerminalBox title="SYSTEM_CAPABILITIES // PROFICIENCY_MATRIX">
        <div className="skills-grid">
          {skills.map((category) => (
            <div key={category.category}>
              <h4 className="subhead">{category.category}</h4>
              {[...category.items]
                .sort((a, b) => b.proficiency - a.proficiency)
                .map((skill) => (
                  <ProficiencyBar key={skill.name} name={skill.name} pct={skill.proficiency} />
                ))}
            </div>
          ))}
        </div>
      </TerminalBox>
    </section>
  );
}
