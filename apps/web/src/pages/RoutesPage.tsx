import { Route } from "lucide-react";

function RoutesPage() {
  return (
    <div>
      <p className="text-sm font-medium text-brand-400">
        Bus Network
      </p>

      <h2 className="mt-1 text-2xl font-bold text-white">
        Routes
      </h2>

      <div className="mt-8 rounded-3xl border border-dashed border-white/10 bg-white/[0.045] p-10 text-center backdrop-blur-xl">
        <Route
          size={36}
          className="mx-auto text-brand-400"
        />

        <h3 className="mt-4 font-semibold text-white">
          Routes module
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Route search, stops and map view will be added here.
        </p>
      </div>
    </div>
  );
}

export default RoutesPage;
