import Head from './Head'

export default ({children, ...props}) => (
  <div>
    <Head title="Hacker News" />
    <div>
      {children}
    </div>
  </div>
  )