import IndexPageHead from 'components/home/IndexPageHead'
import Container from 'components/shared/Container'
import Layout from 'components/shared/Layout'
import { Settings } from 'lib/sanity.queries'
import { Project } from 'schemas/project'

import ProjectPreview from './ProjectPreview'

export default function ProjectsPage({
  projects,
  settings,
}: {
  projects: Project[]
  settings: Settings
}) {
  const getContent = () => {
    if (!projects || projects?.length === 0) {
      return <p>{settings.projects.emptyMessage ?? 'No projects found.'}</p>
    }

    return (
      <div className="grid lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectPreview key={index} project={project} />
        ))}
      </div>
    )
  }

  return (
    <>
      <IndexPageHead settings={settings} pageName={settings.projects.title} />

      <Layout preview={false} loading={false}>
        <Container className="flex flex-col gap-4">
          <h1>{settings.projects.title ?? 'Projects'}</h1>
          <p className="text-zinc-200 max-w-prose">
            {settings.projects.description ?? 'A collection of my projects.'}
          </p>
          {getContent()}
        </Container>
      </Layout>
    </>
  )
}
