import { Outlet } from "react-router-dom";
// import PropTypes from "prop-types";

const Layout = () => {
  return (
    <div className="bg-white-background flex flex-col grow py-6 overflow-auto container h-full items-start justify-center">
      <Outlet />
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
