import { SanityClient } from 'sanity'
import { Certification } from 'schemas/certification'

import { latestCertificationsQuery } from './certifications.queries'

export async function getLatestCertifications(
  client: SanityClient,
): Promise<Certification[]> {
  console.log(JSON.stringify(latestCertificationsQuery))
  return (await client.fetch(latestCertificationsQuery)) || []
}
