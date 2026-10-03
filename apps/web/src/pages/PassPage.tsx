import { Ticket } from "lucide-react";

function PassPage() {
  return (
    <div>
      <p className="text-sm font-medium text-brand-400">
        Travel Pass
      </p>

      <h2 className="mt-1 text-2xl font-bold text-white">
        Bus Pass
      </h2>

      <div className="mt-8 rounded-3xl border border-dashed border-white/10 bg-white/[0.045] p-10 text-center backdrop-blur-xl">
        <Ticket
          size={36}
          className="mx-auto text-brand-400"
        />

        <h3 className="mt-4 font-semibold text-white">
          Bus Pass module
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Application, approval and QR pass will be added here.
        </p>
      </div>
    </div>
  );
}

export default PassPage;
