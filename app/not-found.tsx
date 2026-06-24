import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#060D1A] to-[#0D1B4B] flex flex-col items-center justify-center px-4 text-center">
      {/* Logo */}
      <Link href="/" className="inline-block mb-12">
        <Image
          src="/logo.png"
          alt="SkyQore"
          width={180}
          height={120}
          className="w-44 h-auto rounded-xl"
        />
      </Link>

      {/* 404 graphic */}
      <div className="relative mb-8">
        <p className="text-[9rem] sm:text-[12rem] font-black text-white/5 leading-none select-none">
          404
        </p>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/15 px-8 py-5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-400/20 flex items-center justify-center">
              <Search size={16} className="text-amber-400" />
            </div>
            <span className="text-white/80 font-medium text-sm">Page not found</span>
          </div>
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
        This page doesn't exist.
      </h1>
      <p className="text-white/55 text-lg max-w-md mb-10">
        Ironically, what you're looking for probably could be automated. But this particular URL
        can't be found.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-all"
        >
          <ArrowLeft size={16} />
          Back to Homepage
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all"
        >
          Book a Strategy Call
        </Link>
      </div>

      <p className="mt-12 text-white/30 text-sm">
        Need help?{" "}
        <a href="mailto:hello@skyqore.com" className="text-blue-400 hover:underline">
          hello@skyqore.com
        </a>
      </p>
    </div>
  );
}
