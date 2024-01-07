import Container from 'components/Container'
import IndexPageHead from 'components/home/IndexPageHead'
import Layout from 'components/Layout'
import PageHeader from 'components/shared/PageHeader'
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
      <div className="grid gap-16 lg:grid-cols-2 mt-6">
        {projects.map((project, index) => (
          <ProjectPreview key={index} project={project} />
        ))}
      </div>
    )
  }

  return (
    <>
      <IndexPageHead settings={settings} pageName={settings.projects.name} />

      <Layout preview={false} loading={false} settings={settings}>
        <Container className="flex flex-col gap-6">
          <PageHeader
            sectionSettings={settings.projects}
            defaultName="Projects"
            defaultDescription="A collection of my projects."
          />
          {getContent()}
        </Container>
      </Layout>
    </>
  )
}
