import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Fotter";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  const location = useLocation();

  // ✅ Show footer only on Home & Restaurant pages
  const shouldShowFooter =
    location.pathname === "/app" ||
    location.pathname.startsWith("/restaurant");

  return (
    <div className="app">
      <Provider store={appStore}>
        <Header />

        <Outlet />

        {/* ✅ Conditional Footer */}
        {shouldShowFooter && <Footer />}
      </Provider>
    </div>
  );
};

export default AppLayout;