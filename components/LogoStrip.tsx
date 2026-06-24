"use client";

const clients = [
  "Meridian Group",
  "Apex Financial",
  "Crestline Logistics",
  "Novara Health",
  "Ironveil Tech",
  "Summit Partners",
  "Clearfield Capital",
  "Orion Supply Co.",
  "Meridian Group",
  "Apex Financial",
  "Crestline Logistics",
  "Novara Health",
  "Ironveil Tech",
  "Summit Partners",
  "Clearfield Capital",
  "Orion Supply Co.",
];

export default function LogoStrip() {
  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <p className="text-center text-xs text-slate-400 uppercase tracking-widest font-semibold mb-8">
        Trusted by growing companies across North America
      </p>

      <div className="ticker-wrap relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="ticker-content flex gap-12 animate-ticker whitespace-nowrap">
          {clients.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-2 flex-shrink-0 group cursor-default"
            >
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center group-hover:from-blue-100 group-hover:to-violet-100 transition-colors">
                <span className="text-xs font-black text-slate-400 group-hover:text-blue-500 transition-colors">
                  {name.charAt(0)}
                </span>
              </div>
              <span className="text-slate-500 font-semibold text-sm group-hover:text-slate-700 transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="max-w-5xl mx-auto px-4 mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { value: "500+", label: "Businesses Transformed" },
          { value: "2.5M+", label: "Hours of Manual Work Eliminated" },
          { value: "98%", label: "Client Retention Rate" },
          { value: "$120M+", label: "Client Revenue Unlocked" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span className="text-3xl font-extrabold text-gradient">{stat.value}</span>
            <span className="text-sm text-slate-500 font-medium">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
