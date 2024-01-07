import IndexPageHead from 'components/home/IndexPageHead'
import Container from 'components/layout/Container'
import Layout from 'components/layout/Layout'
import PageHeader from 'components/shared/PageHeader'
import { Settings } from 'lib/sanity.queries'
import { Project } from 'schemas/project'

import FilterableProjectList from './FilterableProjectList'

export default function ProjectsPage({
  projects,
  settings,
}: {
  projects: Project[]
  settings: Settings
}) {
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

          <FilterableProjectList projects={projects} settings={settings} />
        </Container>
      </Layout>
    </>
  )
}
