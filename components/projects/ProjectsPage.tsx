import IndexPageHead from 'components/home/IndexPageHead'
import Container from 'components/shared/Container'
import Layout from 'components/shared/Layout'
import { Project } from 'schemas/project'

import ProjectPreview from './ProjectPreview'

export default function ProjectsPage({ projects }: { projects: Project[] }) {
  const getContent = () => {
    if (!projects || projects?.length === 0) {
      return <p>Aucun projet pour le moment</p>
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
      <IndexPageHead settings={{}} />

      <Layout preview={false} loading={false}>
        <Container className="flex flex-col gap-4">
          <h1>Projets</h1>
          <p className="text-zinc-200 max-w-prose">
            Players must compete against each other to scan as much product as
            possible in a limited time. They share the same shopping list and
            the same products. The player who scans the most products wins.
          </p>
          {getContent()}
        </Container>
      </Layout>
    </>
  )
}
