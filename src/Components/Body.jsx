import  { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import WatchMovie from './WatchMovie'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
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
    path: "/watch/:movieId",
    element: <WatchMovie />,
  },
]);

const Body = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          dispatch(addUser({ uid: uid, email: user.email, displayName: user.displayName }));
          if (window.location.pathname === "/") {
            appRouter.navigate("/browse");
          }
        } else {
          dispatch(removeUser());
          appRouter.navigate("/");
        }
      });
      return () => unsubscribe();
    }, [dispatch])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body