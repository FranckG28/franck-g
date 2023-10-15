import ExperiencePreviewsSection from 'components/experiences/ExperiencePreviewsSection'
import IndexHeader from 'components/home/IndexHeader'
import Container from 'components/shared/Container'
import Layout from 'components/shared/Layout'
import * as demo from 'lib/demo.data'
import type { Settings } from 'lib/sanity.queries'
import { Experience } from 'schemas/experience'
import { Project } from 'schemas/project'

import ProjectPreviewsSection from '../projects/ProjectPreviewsSection'
import IndexPageHead from './IndexPageHead'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  settings: Settings
  projects: Project[]
  experiences: Experience[]
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, settings, projects, experiences } = props
  // const [heroPost, ...morePosts] = posts || []
  const {
    title = demo.title,
    description = demo.description,
    location = demo.location,
    logo,
  } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading} settings={settings}>
        <Container>
          <IndexHeader
            title={title}
            location={location}
            level={1}
            logo={logo}
          />
          <div className="flex gap-16 max-xl:flex-col xl:items-start">
            <ProjectPreviewsSection
              projects={projects}
              className="xl:flex-1"
              settings={settings}
            />
            <ExperiencePreviewsSection
              settings={settings}
              experiences={experiences}
              className="xl:basis-96"
            />
          </div>
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </Container>
      </Layout>
    </>
  )
}
