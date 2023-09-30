export default function useDateRangeString(
  start: string,
  end?: string,
): string {
  const startDate = new Date(start)
  const startYear = startDate.getFullYear()

  if (!end) {
    return `depuis ${startYear}`
  }

  const endDate = new Date(end)
  const endYear = endDate?.getFullYear()
  const yearRange =
    startYear === endYear ? `${endYear}` : `${startYear} - ${endYear}`
  return yearRange
}
