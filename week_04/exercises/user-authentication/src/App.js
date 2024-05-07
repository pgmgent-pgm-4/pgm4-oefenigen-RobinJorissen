import "./reset.css";
import "./App.css";
import Root from "./layouts/Root";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, Login, NotFound } from "./pages";
import { ROUTES } from "./routes/routes";
import { UserProvider } from "./context/UserContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFound />}>
      <Route path={ROUTES.home.path} element={<Home />} />
      <Route path={ROUTES.login.path} element={<Login />} />
    </Route>
  )
);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
