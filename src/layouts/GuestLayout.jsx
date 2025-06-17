import { Outlet } from "react-router-dom";
import GuestHeader from "../components/GuestHeader";
import Alert from "../components/Alert";
import { useAlertContext } from "../contexts/AlertContext";

const GuestLayout = () => {
  const { showAlert } = useAlertContext();
  return (
    <>
      <GuestHeader />
      {showAlert && <Alert />}
      <Outlet />
      <footer>FOOTER</footer>
    </>
  );
};

export default GuestLayout;
