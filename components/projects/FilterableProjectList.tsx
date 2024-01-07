import Chip from 'components/shared/Chip'
import { Settings } from 'lib/sanity.queries'
import { useEffect, useState } from 'react'
import { Project } from 'schemas/project'

import ProjectPreview from './ProjectPreview'

export default function FilterableProjectList({
  projects,
  settings,
}: {
  projects: Project[]
  settings: Settings
}) {
  const [tags, setTags] = useState<string[]>([])
  const [counts, setCounts] = useState<{ [tag: string]: number }>({})

  const [displayedProjects, setDisplayedProjects] =
    useState<Project[]>(projects)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  useEffect(() => {
    const tags = new Set<string>()
    const counts: { [tag: string]: number } = {}
    projects.forEach((project) => {
      tags.add(project.category)
      counts[project.category] = (counts[project.category] ?? 0) + 1
    })

    setTags(Array.from(tags).sort((a, b) => counts[b] - counts[a]))
    setCounts(counts)
  }, [projects])

  useEffect(() => {
    if (!selectedTag) {
      setDisplayedProjects(projects)
      return
    }

    const filteredProjects = projects.filter(
      (project) => project.category === selectedTag,
    )
    setDisplayedProjects(filteredProjects)
  }, [selectedTag, projects])

  const getContent = () => {
    if (!projects || projects?.length === 0) {
      return <p>{settings.projects.emptyMessage ?? 'No projects found.'}</p>
    }

    return (
      <div className="grid gap-16 lg:grid-cols-2 mt-6">
        {displayedProjects.map((project, index) => (
          <ProjectPreview key={index} project={project} />
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex max-w-prose flex-wrap gap-2 items-center">
        <Chip
          selected={!selectedTag}
          onSelect={() => {
            setSelectedTag(null)
          }}
        >
          All{' '}
          <span className="font-normal opacity-60 ml-1">
            ({projects.length})
          </span>
        </Chip>
        {tags.map((tag, index) => (
          <Chip
            key={index}
            selected={selectedTag === tag}
            onSelect={() => {
              setSelectedTag(tag)
            }}
          >
            {tag}{' '}
            <span className="font-normal opacity-60 ml-1">({counts[tag]})</span>
          </Chip>
        ))}
      </div>
      {getContent()}
    </div>
  )
}
