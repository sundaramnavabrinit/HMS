import { useState, useEffect } from "react";
import MenuList from "../../data/MenuList";
import "./SideNav.scss";
import Logo from "../../data/Logo";
import photo from "../../assets/images/Photo.png";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const [currentMenu, setCurrentMenu] = useState("dashboard");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const result = path.substring(1);

    let data = MenuList.find((ML) => ML.url === result);

    if (data?.url) setCurrentMenu(`${data.url}`);
  }, [location.pathname]);

  return (
    <>
      <div className="SideNav">
        <span
          className="SideNav__logo"
          dangerouslySetInnerHTML={{
            __html: Logo.image,
          }}
        />
        <ul className="SideNav__menuList">
          {MenuList.map((menu) => (
            <li
              key={menu.label}
              className={`${
                menu.url === currentMenu && "currentMenu__Selected"
              }`}
              onClick={() => setCurrentMenu(menu.url)}
            >
              <Link to={`/${menu.url}`}>
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      currentMenu === menu.url
                        ? menu.imageSelected
                        : menu.imageNotSelected,
                  }}
                />
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="SideNav__bottom">
        <div className="sideNav__bottom__info">
          <img src={photo} alt="user_photo" />
          <p>
            <span className="sideNav__bottom__user">Sam Ragunath</span>
            <span className="sideNav__bottom__post">Front office admin</span>
          </p>
        </div>

        <span
          className="SideNav__logo"
          dangerouslySetInnerHTML={{
            __html: Logo.logout,
          }}
        />
      </div>
    </>
  );
};

export default SideNav;
