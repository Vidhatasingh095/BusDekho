import {
  Home,
  MapPin,
  Route as RouteIcon,
  Ticket,
  UserRound,
} from "lucide-react";
import { NavLink } from "react-router";

const navigationItems = [
  {
    label: "Home",
    path: "/",
    icon: Home,
  },
  {
    label: "Track",
    path: "/track",
    icon: MapPin,
  },
  {
    label: "Routes",
    path: "/routes",
    icon: RouteIcon,
  },
  {
    label: "Pass",
    path: "/pass",
    icon: Ticket,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: UserRound,
  },
];

function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/50 px-2 pb-[env(safe-area-inset-bottom)] backdrop-blur-2xl md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-around">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative flex min-h-16 min-w-16 flex-col items-center justify-center gap-1 rounded-xl text-xs font-medium transition ${
                  isActive
                    ? "text-brand-400"
                    : "text-slate-500 hover:text-slate-200"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute top-0 h-0.5 w-7 rounded-full bg-brand-400 shadow-[0_0_12px_rgba(45,212,191,0.7)]" />
                  )}

                  <Icon
                    size={22}
                    strokeWidth={isActive ? 2.5 : 2}
                  />

                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNavigation;
