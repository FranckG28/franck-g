import IndexPageHead from 'components/home/IndexPageHead'
import PostBody from 'components/PostBody'
import PostPageHead from 'components/PostPageHead'
import AuthorAvatar from 'components/shared/AuthorAvatar'
import AuthorsList from 'components/shared/AuthorList'
import Container from 'components/shared/Container'
import Layout from 'components/shared/Layout'
import LinkPreviewList from 'components/shared/LinkPreviewList'
import { SanityImage } from 'components/shared/SanityImage'
import Tag from 'components/shared/Tag'
import { Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'
import preview from 'pages/api/draft'
import author from 'schemas/author'
import { Project } from 'schemas/project'

export interface ProjectPageProps {
  preview?: boolean
  loading?: boolean
  project: Project
  settings: Settings
}

export default function ProjectPage(props: ProjectPageProps) {
  const { project, settings, preview, loading } = props

  if (!project?.slug) {
    notFound()
  }

  return (
    <>
      {/* TODO : create proper project head */}
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Container>
          {preview && !project ? (
            <p>Loading…</p>
          ) : (
            <>
              <article>
                <p className="uppercase font-medium text-sm text-zinc-400">
                  {[project.category, project.date].join(' • ')}
                </p>
                <h1>{project.title}</h1>
                <p className="text-sm leading-snug text-zinc-400">
                  {project.excerpt}
                </p>
                <SanityImage
                  asset={project.coverImage}
                  alt={project.coverImage?.alt}
                />
                <PostBody content={project.content} />

                <LinkPreviewList
                  links={project.links?.map((link) => link.url)}
                />

                <div className="flex flex-row gap-2 mt-3 flex-wrap">
                  {project.tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                  ))}
                </div>

                <AuthorsList title="Auteurs" authors={project.authors} />
              </article>
            </>
          )}
        </Container>
      </Layout>
    </>
  )
}
