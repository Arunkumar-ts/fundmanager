// Import Dependencies
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

// Local Imports
// import SearchIcon from "assets/dualicons/search.svg?react";
import { SidebarToggleBtn } from "components/shared/SidebarToggleBtn";
// import { Button } from "components/ui";
// import { Notifications } from "components/template/Notifications";
// import { RightSidebar } from "components/template/RightSidebar";
// import { LanguageSelector } from "components/template/LaguageSelector";
// import { Search } from "components/template/Search";
import { useThemeContext } from "app/contexts/theme/context";

// ----------------------------------------------------------------------

// function SlashIcon(props) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="22"
//       height="20"
//       aria-hidden="true"
//       {...props}
//     >
//       <path
//         fill="none"
//         stroke="currentColor"
//         d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
//         opacity="0.4"
//       />
//       <path fill="currentColor" d="M11.8 6L8 15.1h-.9L10.8 6h1z" />
//     </svg>
//   );
// }

export function Header() {
  const { cardSkin } = useThemeContext();

  return (
    <header
      className={clsx(
        "app-header transition-content sticky top-0 z-20 flex h-[65px] shrink-0 items-center justify-between border-b border-gray-200 bg-white/80 px-(--margin-x) backdrop-blur-sm backdrop-saturate-150 dark:border-dark-600",
        cardSkin === "shadow-sm" ? "dark:bg-dark-750/80" : "dark:bg-dark-900/80",
      )}
    >
      <SidebarToggleBtn />

      <div className="flex items-center gap-2 ltr:-mr-1.5 rtl:-ml-1.5">
        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
          Fund Manager
        </div>
      </div>
    </header>
  );
}
