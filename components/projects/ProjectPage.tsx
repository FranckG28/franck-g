import Container from 'components/Container'
import ExperiencePreview from 'components/experiences/ExperiencePreview'
import Layout from 'components/Layout'
import AuthorsList from 'components/shared/AuthorList'
import Card from 'components/shared/Card'
import LinkPreviewList from 'components/shared/LinkPreviewList'
import PostBody from 'components/shared/PostBody'
import SectionHeader from 'components/shared/SectionHeader'
import Tag from 'components/shared/Tag'
import useDateRangeString from 'lib/hooks/useDateRangeString'
import { Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'
import { Project } from 'schemas/project'

import ProjectLogo from './ProjectLogo'
import ProjectPageHead from './ProjectPageHead'

export interface ProjectPageProps {
  preview?: boolean
  loading?: boolean
  project: Project
  settings: Settings
}

export default function ProjectPage(props: ProjectPageProps) {
  const { project, settings, preview, loading } = props

  const dateRangeString = useDateRangeString(
    project?.startDate,
    project?.endDate,
    true,
  )

  if (!project?.slug) {
    notFound()
  }

  return (
    <>
      <ProjectPageHead project={project} settings={settings} />

      <Layout preview={preview} loading={loading} settings={settings}>
        <Container>
          {preview && !project ? (
            <p>Loading…</p>
          ) : (
            <>
              <article className="flex gap-6 max-xl:flex-col xl:items-start">
                <div className="xl:flex-1">
                  <ProjectLogo
                    coverImage={project.coverImage}
                    alt={project.title}
                  />

                  <p className="uppercase font-medium text-sm text-zinc-400 py-4">
                    {[project.category, dateRangeString].join(' • ')}
                  </p>

                  <h1>{project.title}</h1>

                  {project.content && <PostBody content={project.content} />}

                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-row gap-2 mt-4 flex-wrap">
                      {project.tags.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                      ))}
                    </div>
                  )}
                </div>
                <div className="xl:basis-96 xl:pt-52 flex flex-col gap-4">
                  {project.links && project.links.length > 0 && (
                    <Card>
                      <SectionHeader title="Links" />
                      <LinkPreviewList
                        links={project.links}
                        className="flex-col"
                      />
                    </Card>
                  )}

                  {project.authors && project.authors.length > 0 && (
                    <Card>
                      <AuthorsList title="Authors" authors={project.authors} />
                    </Card>
                  )}

                  {project.experiences && project.experiences.length > 0 && (
                    <Card>
                      <SectionHeader title="Related experiences" />
                      <div className="flex flex-col">
                        {project.experiences.map((experience) => (
                          <ExperiencePreview
                            key={experience.slug}
                            experience={experience}
                          />
                        ))}
                      </div>
                    </Card>
                  )}
                </div>
              </article>
            </>
          )}
        </Container>
      </Layout>
    </>
  )
}
