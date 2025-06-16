import { Outlet } from "react-router-dom";
import GuestHeader from "../components/GuestHeader";
import { useAlertContext } from "../contexts/AlertContext";
import Alert from "../components/Alert";

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
