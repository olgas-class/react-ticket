import { Outlet } from "react-router-dom";
import GuestHeader from "../components/GuestHeader";

const GuestLayout = () => {
  return (
    <>
      <GuestHeader />
      <Outlet />
      <footer>FOOTER</footer>
    </>
  );
};

export default GuestLayout;
