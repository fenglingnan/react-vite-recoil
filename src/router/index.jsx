import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  
} from "react-router-dom";
import { Route } from 'react-router'
import App from "@/views/App";
import Login from "@/views/auth/Login";
import Home from "@/views/home/Home";
import Index from '@/views/index/Index'
import Clock from '@/views/others/Clock'
import People from '@/views/user/People'
// const route = [
//   {
//     path: "/",
//     lazy: () => import("../views/App"),
//     // element: <App></App>,
//   },

// ]
const route = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="login" index element={<Login />} />
    <Route path="home" element={<Home />} >
      <Route path="index" index element={<Index />}></Route>
    </Route>
    <Route path="others" lazy={() => import("../views/others/Others")}>
      <Route index element={<Clock />}></Route>
    </Route>
    <Route path="people" element={<People />}></Route>
  </Route>
)
const router = createBrowserRouter(route, {
  basename: import.meta.env.VITE_BASE_NAME
});
export default router