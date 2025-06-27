// Import Dependencies
import { Navigate } from "react-router";

// Local Imports
import { DynamicLayout } from "app/layouts/DynamicLayout";
import AuthGuard from "middleware/AuthGuard";

// ----------------------------------------------------------------------

const protectedRoutes = {
  id: "protected",
  Component: AuthGuard,
  children: [
    // The dynamic layout supports both the main layout and the sideblock.
    {
      Component: DynamicLayout,
      children: [
        {
          index: true,
          element: <Navigate to="/dashboards" />,
        },
        {
          path: "dashboards",
          children: [
            {
              index: true,
              element: <Navigate to="/dashboards/home" />,
            },
            {
              path: "home",
              lazy: async () => ({
                Component: (await import("app/pages/dashboards/home")).default,
              }),
            },
            
          ],
        },
        {
          path: "members",
          children: [
            {
              index: true,
              element: <Navigate to="/members/home" />,
            },
            {
              path: "home",
              lazy: async () => ({
                Component: (await import("app/pages/dashboards/home")).default,
              }),
            },
            {
              path: "user1",
              lazy: async () => ({
                Component: (await import("app/pages/dashboards/users-card-7")).default,
              }),
            },
            {
              path: "user2",
              lazy: async () => ({
                Component: (await import("app/pages/dashboards/users-card-5")).default,
              }),
            },
            {
              path: "user3",
              lazy: async () => ({
                Component: (await import("app/pages/dashboards/users-card-3")).default,
              }),
            },
          ]
        },
        {
          path: "payments",
          children: [
            {
              index: true,
              element: <Navigate to="/payments/home" />,
            },
            {
              path: "home",
              lazy: async () => ({
                Component: (await import("app/pages/payments")).default,
              }),
            },
            {
              path:'payments1',
              lazy: async () => ({
                Component: (await import("app/pages/payments1")).default,
              }),
            },
            {
              path:'payments2',
              lazy: async () => ({
                Component: (await import("app/pages/payments2")).default,
              }),
            }
          ]
        }
      ],
    },
  ],
};

export { protectedRoutes };
