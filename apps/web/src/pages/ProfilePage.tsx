import { UserRound } from "lucide-react";

function ProfilePage() {
  return (
    <div>
      <p className="text-sm font-medium text-brand-400">
        Account
      </p>

      <h2 className="mt-1 text-2xl font-bold text-white">
        Profile
      </h2>

      <div className="mt-8 rounded-3xl border border-dashed border-white/10 bg-white/[0.045] p-10 text-center backdrop-blur-xl">
        <UserRound
          size={36}
          className="mx-auto text-brand-400"
        />

        <h3 className="mt-4 font-semibold text-white">
          User Profile
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Personal details, history and settings will appear here.
        </p>
      </div>
    </div>
  );
}

export default ProfilePage;
