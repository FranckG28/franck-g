export default function IndexGradient() {
  return (
    <div className="absolute blur-3xl -z-10 brightness-20 opacity-50">
      <div className="absolute -z-10 h-16 w-20 rounded-full bg-gradient-to-r from-lime-500 to-teal-400 -left-6 -top-8 -rotate-45"></div>
      <div className="absolute -z-10 h-20 w-16 rounded-full bg-gradient-to-b from-blue-400 to-indigo-500 left-16 -top-3 -rotate-45"></div>
      <div className="absolute -z-10 h-20 w-16 rounded-full bg-gradient-to-b from-fuchsia-400 to-rose-500 left-20 top-16 rotate-45"></div>
      <div className="absolute -z-10 h-16 w-20 rounded-full bg-gradient-to-r from-amber-400 to-red-500 -left-6 top-16 rotate-45"></div>
    </div>
  )
}
