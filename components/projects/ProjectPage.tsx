import ExperiencePreview from 'components/experiences/ExperiencePreview'
import Container from 'components/layout/Container'
import Layout from 'components/layout/Layout'
import AuthorsList from 'components/shared/AuthorList'
import Button from 'components/shared/Button'
import Card from 'components/shared/Card'
import PostBody from 'components/shared/PostBody'
import SectionHeader from 'components/shared/SectionHeader'
import Tag from 'components/shared/Tag'
import useDateRangeString from 'lib/hooks/useDateRangeString'
import { Settings } from 'lib/sanity.queries'
import Link from 'next/link'
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
              <article className="flex gap-6 max-lg:flex-col lg:items-start animate-fade-up">
                <div className="lg:flex-1 flex flex-col gap-4">
                  <ProjectLogo
                    coverImage={project.coverImage}
                    alt={project.title}
                    size="md"
                  />

                  <h1>{project.title}</h1>

                  <p className="uppercase font-medium tracking-wide text-sm text-zinc-400">
                    {[project.category, dateRangeString].join(' • ')}
                  </p>

                  {project.links?.length && (
                    <div className="flex gap-3 items-center flex-wrap my-4">
                      {project.links.map((link, index) => (
                        <Link key={index} href={link.url} target="_blank">
                          <Button
                            appearance={index === 0 ? 'primary' : 'secondary'}
                          >
                            {link.title} {index === 0 && <span>→</span>}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  )}

                  {project.excerpt && (
                    <h4 className="max-w-prose text-zinc-200">
                      {project.excerpt}
                    </h4>
                  )}

                  {project.content && <PostBody content={project.content} />}

                  {project.tags?.length > 0 && (
                    <div className="flex flex-row gap-2 mt-4 flex-wrap">
                      {project.tags.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                      ))}
                    </div>
                  )}
                </div>
                <div className="lg:basis-96 lg:mt-72 flex flex-col gap-4">
                  {project.authors && project.authors.length > 0 && (
                    <Card>
                      <AuthorsList title="Authors" authors={project.authors} />
                    </Card>
                  )}

                  {project.experiences?.length > 0 && (
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
