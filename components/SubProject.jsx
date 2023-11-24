import Link from "next/link";

export default function SubProject({ project }) {
  return (
    <div className="p-6">
      <div>
        <h3 className="font-semibold text-xl text-primary mb-4">
          {project.title}<span> | {project.job}</span>
        </h3>
        <p>{project.description}</p>
      </div>
      <div className="mt-8">
        <Link href={project.link} target="_blank" className="btnTwo">
          Preview {project.title}
        </Link>
      </div>
    </div>
  )
}
