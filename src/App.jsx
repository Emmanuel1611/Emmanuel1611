import React from "react";

export default function App() {
  const name = "Emmanuel";
  const handle = "Emmanuel1611";
  const role = "Software Engineer • Backend & DevTools";
  const highlights = [
    "APIs · Observability · Automation",
    "Node.js · TypeScript · Postgres",
    "CI/CD · Developer Experience"
  ];
  const projects = [
    { name: "Project A", url: "#", desc: "Scalable API platform" },
    { name: "Project B", url: "#", desc: "CLI & GitHub Actions" },
    { name: "Project C", url: "#", desc: "End-to-end TypeScript app" }
  ];

  return (
    <div className="w-[1200px] h-[540px] p-10 box-border flex items-center justify-center">
      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl ring-1 ring-white/5 p-10 flex gap-8">
        <div className="w-1/3 flex flex-col items-start gap-6">
          <div className="flex items-center gap-4">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-semibold text-white">
              {/* intentionally empty — no avatar as requested */}
            </div>
            <div>
              <div className="text-white text-2xl font-bold">{name}</div>
              <div className="text-slate-300">@{handle}</div>
              <div className="mt-3 inline-flex items-center gap-2 text-[13px] text-slate-300 bg-white/3 px-3 py-1 rounded-full">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2v6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {role}
              </div>
            </div>
          </div>

          <div className="text-slate-300 space-y-2">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto w-full">
            <div className="text-slate-400 text-sm mb-2">Featured</div>
            <div className="grid grid-cols-1 gap-2">
              {projects.map((p, i) => (
                <a key={i} href={p.url} className="block bg-white/3 p-3 rounded-md hover:bg-white/5 transition">
                  <div className="text-white font-medium">{p.name}</div>
                  <div className="text-slate-300 text-sm">{p.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="text-slate-400">Welcome —</div>
            <div className="flex items-center gap-3">
              <img src="https://github-readme-stats.vercel.app/api?username=Emmanuel1611&show_icons=true&hide_border=true&theme=dark" alt="stats" className="h-20"/>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="w-full h-[260px] rounded-xl bg-gradient-to-br from-[#071233]/60 to-[#081022]/60 border border-white/5 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-white">I build reliable systems</div>
                <div className="mt-4 text-slate-300 max-w-xl mx-auto">{`I ship pragmatic, well-tested backend systems and developer tooling that scale.`}</div>
                <div className="mt-6 flex items-center justify-center gap-4">
                  <a className="px-4 py-2 bg-primary text-slate-900 rounded-md font-semibold" href="#">Work with me</a>
                  <a className="px-4 py-2 border border-white/10 text-slate-300 rounded-md" href="#">See projects</a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-slate-400 text-sm">
            <div>Based: Remote</div>
            <div>Open to: contract, mentoring, collaboration</div>
          </div>
        </div>
      </div>
    </div>
  );
}