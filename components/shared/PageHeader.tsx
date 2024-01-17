import { SectionSettings } from 'schemas/settings/section-settings'

import PostBody from './PostBody'

export default function PageHeader({
  sectionSettings,
  defaultName,
  defaultDescription,
}: {
  sectionSettings: SectionSettings
  defaultName: string
  defaultDescription: string
}) {
  return (
    <div className="flex flex-col gap-6 animate-fade-up">
      <h1>{sectionSettings?.pageTitle ?? defaultName}</h1>
      <PostBody
        content={sectionSettings?.pageDescription ?? defaultDescription}
        className="text-zinc-400 max-w-prose text-lg text-balance"
      />
    </div>
  )
}
