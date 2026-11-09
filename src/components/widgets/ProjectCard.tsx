import type { Project } from '@data/projects';
import { Button } from '@components/ui/Button';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const archiveLabel = `ARCHIVE_${String(index + 1).padStart(2, '0')} // ${project.name}`;

  return (
    <article className="project-card">
      <fieldset className="terminal-box">
        <legend className="terminal-legend">{archiveLabel}</legend>
        <div className="project-meta">
          <span className="status-badge">STATUS: {project.status}</span>
          <span className="project-year">YEAR: {project.year}</span>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tag-terminal">[{t}]</span>
          ))}
        </div>
        <div className="project-actions">
          {project.repoUrl && (
            <Button variant="secondary" as="a" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              [ {'>'} VIEW_SOURCE ]
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="primary" as="a" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              [ {'>'} LAUNCH_DEPLOYMENT ]
            </Button>
          )}
        </div>
      </fieldset>
    </article>
  );
}