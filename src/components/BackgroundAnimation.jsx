export default function BackgroundAnimation() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(160deg,#0f0a15_0%,#0a0515_45%,#05020b_100%)]" />

      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-25 [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />

      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />

      <div className="pointer-events-none absolute right-1/3 bottom-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />

      <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 rounded-full bg-slate-700/20 blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }} />
    </>
  )
}
