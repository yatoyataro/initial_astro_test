import { Button } from "@components/ui/Button";
import type { Project, ProjectStatus } from "@data/projects";
import { TerminalBox } from "./TerminalBox";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const STATUS_LABEL: Record<ProjectStatus, string> = {
  ONLINE: "ONLINE",
  SOURCE_AVAILABLE: "SOURCE_AVAILABLE",
  IN_PROGRESS: "IN_PROGRESS",
  ARCHIVED: "ARCHIVED",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const title = `ARCHIVE_${String(index + 1).padStart(2, "0")} // ${project.name}`;

  return (
    <article className="project-card">
      <TerminalBox title={title}>
        <div className="project-meta caps">
          <span className={`status-badge status-badge--${project.status.toLowerCase()}`}>
            STATUS: {STATUS_LABEL[project.status]}
          </span>
          <span className="project-year">YEAR: {project.year}</span>
        </div>

        <p className="project-kind caps">
          {project.type} <span aria-hidden="true">{"//"}</span>
          <span className="sr-only">, </span> {project.role}
        </p>

        <p className="project-description prose">{project.description}</p>

        <ul className="project-tech" aria-label="Technologies used">
          {project.tech.map((tech) => (
            <li key={tech} className="tag-terminal">
              {tech}
            </li>
          ))}
        </ul>

        <details className="project-features">
          <summary className="caps">FEATURES [{project.features.length}]</summary>
          <ul className="timeline-bullets">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </details>

        {(project.repoUrl || project.liveUrl) && (
          <div className="project-actions">
            {project.repoUrl && (
              <Button
                variant="secondary"
                as="a"
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code for ${project.name} (opens in a new tab)`}
              >
                [ {">"} VIEW_SOURCE ]
              </Button>
            )}
            {project.liveUrl && (
              <Button
                variant="primary"
                as="a"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Launch live demo of ${project.name} (opens in a new tab)`}
              >
                [ {">"} LAUNCH_DEPLOYMENT ]
              </Button>
            )}
          </div>
        )}
      </TerminalBox>
    </article>
  );
}
