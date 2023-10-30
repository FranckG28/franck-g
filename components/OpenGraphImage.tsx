// Renders the Open Graph image used on the home page

export const width = 1200
export const height = 630

export function OpenGraphImage(props: {
  title: string
  siteName: string
  subtitle: string
}) {
  const { title, siteName, subtitle } = props
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        textAlign: 'left',
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        backgroundColor: '#18181b',
        paddingLeft: '3rem',
        paddingRight: '4rem',
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexDirection: 'column',
          paddingTop: '2rem',
        }}
      >
        <svg
          width="128"
          height="128"
          viewBox="0 0 256 256"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="128" cy="128" r="128" fill="#93C5FD" />
        </svg>
        <b
          style={{
            color: '#a1a1aa',
            fontSize: 24,
            fontStyle: 'normal',
            marginTop: '2.8rem',
            lineHeight: 1,
            whiteSpace: 'pre-wrap',
          }}
        >
          {subtitle}
        </b>
        <b
          style={{
            color: '#fff',
            fontSize: 64,
            fontStyle: 'normal',
            marginTop: 0,
            lineHeight: 1.5,
            whiteSpace: 'pre-wrap',
          }}
        >
          {title}
        </b>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <b
          style={{
            color: '#a1a1aa',
            fontSize: 24,
            fontStyle: 'normal',
            marginTop: '2rem',
            lineHeight: 1.8,
            whiteSpace: 'pre-wrap',
            marginBottom: '2rem',
          }}
        >
          {siteName}
        </b>
      </div>
    </div>
  )
}
