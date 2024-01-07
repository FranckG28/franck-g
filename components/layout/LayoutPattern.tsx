export default function LayoutPattern() {
  return (
    <div className="absolute inset-0 flex justify-center sm:px-8 -z-10">
      <div className="flex w-full max-w-7xl lg:px-8 relative">
        <div className="w-full h-96 pattern-dots pattern-zinc-700 pattern-bg-transparent pattern-opacity-20 pattern-size-8 [mask-image:linear-gradient(to_bottom,#18181b_25%,transparent)]"></div>
      </div>
    </div>
  )
}
