import { Outlet } from "react-router-dom";
// import PropTypes from "prop-types";

const Layout = () => {
  return (
    <div className="bg-white-background flex flex-col grow py-6 overflow-auto container h-[80vh]">
      <Outlet />
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
