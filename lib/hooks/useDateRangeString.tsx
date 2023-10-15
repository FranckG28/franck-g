export default function useDateRangeString(
  start: string,
  end?: string,
  includeMonths: boolean = false,
): string {
  const startDate = new Date(start)
  const startYear = startDate.getFullYear()
  const startMonth = startDate.toLocaleString('default', { month: 'long' })

  if (!end) {
    return `depuis ${startMonth} ${startYear}`
  }

  const endDate = new Date(end)
  const endYear = endDate?.getFullYear()
  const endMonth = endDate?.toLocaleString('default', { month: 'long' })

  if (includeMonths) {
    const monthRange =
      startYear === endYear
        ? `${startMonth} - ${endMonth} ${endYear}`
        : `${startMonth} ${startYear} - ${endMonth} ${endYear}`
    return monthRange
  } else {
    const yearRange =
      startYear === endYear ? `${endYear}` : `${startYear} - ${endYear}`
    return yearRange
  }
}
