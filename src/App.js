import Login from "./components/auth/login";
import Users from "./pages/users";
import Dashboard from "./pages/dashboard";
import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import NotFound from "./pages/404";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/users",
      element: <Users />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <div className="flex flex-col w-full h-screen">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
