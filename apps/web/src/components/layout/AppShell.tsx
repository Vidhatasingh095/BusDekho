import { Bell, BusFront } from "lucide-react";
import { Outlet } from "react-router";
import BottomNavigation from "./BottomNavigation";

function AppShell() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-black/35 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-400 ring-1 ring-brand-400/20">
              <BusFront size={22} />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight text-white">
                Bus<span className="text-brand-400">Dekho</span>
              </h1>

              <p className="hidden text-xs text-slate-400 sm:block">
                Your Bus. Live.
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Open notifications"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 backdrop-blur-xl transition hover:bg-white/10"
          >
            <Bell size={21} />

            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-coral-500 ring-2 ring-[#070b0d]" />
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-5 sm:px-6 md:pb-8">
        <Outlet />
      </main>

      <BottomNavigation />
    </div>
  );
}

export default AppShell;
