import { ProjectCard } from "@components/widgets/ProjectCard";
import { projects } from "@data/projects";

export function ArchiveSection() {
  return (
    <section id="archive" className="section" aria-labelledby="archive-heading">
      <h2 id="archive-heading" className="section-header">
        {"// 01_ARCHIVE :: DEPLOYED_SYSTEMS_&_INDEX"}
      </h2>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </section>
  );
}
