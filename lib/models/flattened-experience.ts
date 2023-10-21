import { Certification } from '../../schemas/certification'
import { Experience } from '../../schemas/experience'
import { Project } from '../../schemas/project'

export interface FlattenedExperience extends Experience {
  certifications?: Certification[]
  projects?: Project[]
}
