import * as FiIcons from 'react-icons/fi'
import * as HiIcons from 'react-icons/hi'
import * as SiIcons from 'react-icons/si'

function getIconProvider(provider: string) {
  switch (provider) {
    case 'Fi':
      return FiIcons
    case 'Hi':
      return HiIcons
    case 'Si':
      return SiIcons
    default:
      return FiIcons
  }
}

export default function DynamicIcon({
  icon,
  className = '',
}: {
  icon: any
  className?: string
}) {
  const Icon = getIconProvider(icon.provider)[icon.name]

  return <Icon className={className} />
}
