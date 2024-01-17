import { format } from 'date-fns'

export default function useDateRangeString(
  start: string | Date,
  end?: string | Date,
  includeMonths: boolean = false,
): string {
  if (!start && !end) {
    return ''
  }

  const startDate = typeof start === 'string' ? new Date(start) : start
  const startMonth = format(startDate, 'MMM yyyy')

  if (!end) {
    return `since ${startMonth}`
  }

  const endDate = typeof end === 'string' ? new Date(end) : end
  const startYear = format(startDate, 'yyyy')
  const endYear = format(endDate, 'yyyy')

  if (includeMonths) {
    const endMonth = format(endDate, 'MMM yyyy')

    if (startMonth === endMonth) {
      return startMonth
    }

    if (startYear === endYear) {
      return `${format(startDate, 'MMM')} - ${endMonth}`
    }

    return `${startMonth} - ${endMonth}`
  } else {
    if (startYear === endYear) {
      return `${startYear}`
    }

    return `${startYear} - ${endYear}`
  }
}
