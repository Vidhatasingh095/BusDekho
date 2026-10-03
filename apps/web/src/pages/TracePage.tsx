import { LocateFixed, MapPin } from "lucide-react";

function TrackPage() {
  return (
    <div>
      <div>
        <p className="text-sm font-medium text-brand-400">
          Live Tracking
        </p>

        <h2 className="mt-1 text-2xl font-bold text-white">
          Track your bus
        </h2>
      </div>

      <div className="relative mt-6 h-[calc(100vh-190px)] min-h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-[#0b1215]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin
              size={36}
              className="mx-auto text-brand-400"
            />

            <p className="mt-3 font-semibold text-white">
              Live map coming next
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Leaflet + OpenStreetMap
            </p>
          </div>
        </div>

        <button
          type="button"
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-slate-200 shadow-md backdrop-blur-xl"
        >
          <LocateFixed size={20} />
        </button>

        <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/10 bg-black/55 p-5 shadow-2xl backdrop-blur-2xl">
          <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/20" />

          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-400">
                Bus 21
              </p>

              <h3 className="font-bold text-white">
                University → Railway Station
              </h3>
            </div>

            <span className="text-sm font-semibold text-green-600">
              ● On Time
            </span>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <div>
              <p className="text-xs text-slate-400">
                ETA
              </p>

              <p className="font-bold text-coral-400">
                6 min
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Distance
              </p>

              <p className="font-bold text-brand-400">
                1.8 km
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Next stop
              </p>

              <p className="font-bold text-white">
                Main Gate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackPage;
