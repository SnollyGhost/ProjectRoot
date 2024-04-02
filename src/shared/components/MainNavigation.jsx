import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

const MainNavigation = () => {
  return (
    <div>
      <MainHeader />
      <nav className="bg-gray-700 text-white p-4">
        <NavLinks />
      </nav>
    </div>
  );
};

export default MainNavigation;
