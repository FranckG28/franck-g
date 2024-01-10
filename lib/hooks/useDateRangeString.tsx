export default function useDateRangeString(
  start: string,
  end?: string,
  includeMonths: boolean = false,
): string {
  if (!start && !end) {
    return ''
  }

  const startDate = new Date(start)
  const startYear = startDate.getFullYear()
  const startMonth = startDate.toLocaleString('default', { month: 'long' })

  if (!end) {
    return `since ${startMonth} ${startYear}`
  }

  const endDate = new Date(end)
  const endYear = endDate?.getFullYear()
  const endMonth = endDate?.toLocaleString('default', { month: 'long' })

  if (includeMonths) {
    if (startYear === endYear && startMonth === endMonth) {
      return `${startMonth} ${startYear}`
    }

    if (startYear === endYear) {
      return `${startMonth} - ${endMonth} ${endYear}`
    }

    return `${startMonth} ${startYear} - ${endMonth} ${endYear}`
  } else {
    if (startYear === endYear) {
      return `${startYear}`
    }

    return `${startYear} - ${endYear}`
  }
}
