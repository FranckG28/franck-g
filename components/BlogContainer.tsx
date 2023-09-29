export default function BlogContainer({ children }) {
  return (
    <div
      className="container mx-auto px-5 md:px-10 lg:px-20 py-10
      bg-stone-800 border-l border-r border-stone-700 
      min-h-full max-w-screen-xl
    "
    >
      {children}
    </div>
  )
}
