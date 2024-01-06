import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Watch from "./Watch";
import WatchList from "./WatchList";
import PLay from "./PLay";
import GptSearchPage from "./gptSearchPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/watch/:title",
      element: <Watch />,
    },
    {
      path: "WatchList",
      element: <WatchList />,
    },
    {
      path: "/play/:title",
      element: <PLay />,
    },
    {
      path: "/gptSearch",
      element: <GptSearchPage />
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
