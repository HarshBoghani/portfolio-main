import Link from "next/link"
import { ArrowLeft, Github } from "lucide-react"

// Define the project lists
const projectsData = {
  "main-projects": {
    title: "Main Projects",
    projects: [
      {
        name: "shell-OS",
        link: ""
      },
      {
        name: "Atcoder-stats",
        link: "https://github.com/HarshBoghani/Atcoder_stats-main"
      }
    ]
  },
  "side-projects": {
    title: "Side Projects",
    projects: [
      {
        name: "pokemon-teambuilder",
        link: ""
      },
      {
        name: "Movie-mania",
        link: "https://github.com/HarshBoghani/Movie-mania"
      },
      {
        name: "Portfolio Website",
        link: "https://github.com/HarshBoghani/portfolio-main"
      },
      // Add more side projects here
    ]
  }
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const category = projectsData[params.id as keyof typeof projectsData]

  if (!category) {
    return <div>Category not found</div>
  }

  return (
    <div className="space-y-8">
      <Link href="/" className="flex items-center text-gray-400 hover:text-white transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to home
      </Link>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold">{category.title}</h1>
        
        <div className="grid gap-4">
          {category.projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors group"
            >
              <Github className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white" />
              <span className="text-gray-300 group-hover:text-white">{project.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

