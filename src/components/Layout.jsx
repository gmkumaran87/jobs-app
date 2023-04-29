import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-white-background flex flex-col grow py-6 overflow-auto container h-full items-start justify-center">
      <Outlet />
    </div>
  );
};

export default Layout;
