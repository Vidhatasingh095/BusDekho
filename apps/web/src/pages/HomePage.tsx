import {
  ArrowRight,
  BusFront,
  Clock3,
  MapPin,
  MessageSquareWarning,
  Route,
  Search,
  Ticket,
} from "lucide-react";
import { Link } from "react-router";

function HomePage() {
  return (
    <div className="mx-auto max-w-5xl">
      <section>
        <p className="text-sm font-medium text-brand-400">
          Good morning 👋
        </p>

        <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Where's your bus?
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Track your bus and reach your stop on time.
        </p>
      </section>

      <div className="relative mt-6">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          type="search"
          placeholder="Search bus, route or stop"
          className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-sm text-white shadow-sm backdrop-blur-xl outline-none transition placeholder:text-slate-500 focus:border-brand-400/50 focus:bg-white/[0.07] focus:ring-4 focus:ring-brand-500/10"
        />
      </div>

      <section className="mt-7">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-semibold text-white">
            Your bus
          </h3>

          <button className="text-sm font-medium text-brand-400">
            View details
          </button>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-5 text-white shadow-2xl backdrop-blur-2xl sm:p-6">
          <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-12 h-44 w-44 rounded-full bg-coral-500/10 blur-3xl" />
          <div className="relative flex items-start justify-between">
            <div className="flex gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <BusFront size={25} />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Bus
                </p>

                <h4 className="text-xl font-bold">
                  Bus 21
                </h4>
              </div>
            </div>

            <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-400">
              ● On Time
            </span>
          </div>

          <div className="relative mt-6">
            <p className="text-sm text-slate-400">
              University → Railway Station
            </p>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Arriving in
                </p>

                <p className="mt-1 text-3xl font-bold text-coral-400">
                  6 min
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Distance
                </p>

                <p className="mt-1 text-3xl font-bold text-brand-400">
                  1.8 km
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/track"
            className="relative mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-brand-500 font-semibold text-slate-950 shadow-[0_8px_30px_rgba(20,184,166,0.18)] transition hover:bg-brand-400"
          >
            Track Live Bus

            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-base font-semibold text-white">
          Quick actions
        </h3>

        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Link
            to="/routes"
            className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl transition hover:border-brand-400/30 hover:bg-white/[0.075]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
              <Route size={21} />
            </div>

            <p className="mt-4 font-semibold text-white">
              Routes
            </p>

            <p className="mt-1 text-xs text-slate-400">
              View all routes
            </p>
          </Link>

          <Link
            to="/pass"
            className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl transition hover:border-coral-400/30 hover:bg-white/[0.075]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-coral-500/10 text-coral-400">
              <Ticket size={21} />
            </div>

            <p className="mt-4 font-semibold text-white">
              Bus Pass
            </p>

            <p className="mt-1 text-xs text-slate-400">
              View your pass
            </p>
          </Link>

          <button className="text-left rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl transition hover:border-brand-400/30 hover:bg-white/[0.075]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Clock3 size={21} />
            </div>

            <p className="mt-4 font-semibold text-white">
              Timings
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Check schedule
            </p>
          </button>

          <button className="text-left rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl transition hover:border-red-400/30 hover:bg-white/[0.075]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <MessageSquareWarning size={21} />
            </div>

            <p className="mt-4 font-semibold text-white">
              Complaint
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Report an issue
            </p>
          </button>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-semibold text-white">
            Nearby stops
          </h3>

          <button className="text-sm font-medium text-brand-400">
            View all
          </button>
        </div>

        <div className="divide-y divide-white/[0.06] rounded-2xl border border-white/10 bg-white/[0.045] px-4 backdrop-blur-xl">
          <div className="flex items-center gap-3 py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
              <MapPin size={19} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-medium text-white">
                Main Gate
              </p>

              <p className="text-xs text-slate-400">
                Nearest bus stop
              </p>
            </div>

            <span className="text-sm font-medium text-slate-400">
              300 m
            </span>
          </div>

          <div className="flex items-center gap-3 py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
              <MapPin size={19} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-medium text-white">
                City Center
              </p>

              <p className="text-xs text-slate-400">
                Route 21 stop
              </p>
            </div>

            <span className="text-sm font-medium text-slate-400">
              1.2 km
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
