import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="grow w-full scrollbar overflow-auto py-6">
      <div className="bg-white-background flex flex-col   container  items-start justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
