import IndexPage, { type IndexPageProps } from 'components/index/IndexPage'
import {
  indexQuery,
  latestProjectsQuery,
  type Post,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import { Project } from 'schemas/project'

export default function PreviewIndexPage(props: IndexPageProps) {
  // const [posts, loadingPosts] = useLiveQuery<Post[]>(props.posts, indexQuery)
  const [projects, loadingProjects] = useLiveQuery<Project[]>(
    props.projects,
    latestProjectsQuery,
  )
  const [settings, loadingSettings] = useLiveQuery<Settings>(
    props.settings,
    settingsQuery,
  )

  return (
    <IndexPage
      preview
      loading={loadingProjects || loadingSettings}
      projects={projects || []}
      settings={settings || {}}
    />
  )
}
