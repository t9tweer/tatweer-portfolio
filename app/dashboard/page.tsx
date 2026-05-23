export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#050816] p-10 text-white">

      <h1 className="mb-8 text-4xl font-black">
        TatweerX Admin Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6">
          <h2 className="text-lg text-slate-400">
            Projects
          </h2>

          <p className="mt-4 text-5xl font-bold text-cyan-400">
            1
          </p>
        </div>

        <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6">
          <h2 className="text-lg text-slate-400">
            Messages
          </h2>

          <p className="mt-4 text-5xl font-bold text-cyan-400">
            0
          </p>
        </div>

        <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6">
          <h2 className="text-lg text-slate-400">
            Views
          </h2>

          <p className="mt-4 text-5xl font-bold text-cyan-400">
            0
          </p>
        </div>

      </div>

    </div>
  );
}