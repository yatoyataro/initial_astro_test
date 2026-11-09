import { projects } from '@data/projects';
import { ProjectCard } from '@components/widgets/ProjectCard';

export function ArchiveSection() {
  return (
    <section id="archive" className="section">
      <div className="section-header">// 01_ARCHIVE :: DEPLOYED_SYSTEMS_&_INDEX</div>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </section>
  );
}