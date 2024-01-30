import { useEffect, useState } from "react";
import GuestTabs from "../../data/GuestTabs";
import "./GuestMgmt.scss";
import { Link } from "react-router-dom";
import GuestPersonal from "../../components/GuestPersonal/GuestPersonal";
import GuestFolio from "../../components/GuestFolio/GuestFolio";
import GuestRoom from "../../components/GuestRoomData/GuestRoomData";

const GuestMgmt = () => {
  const [tab, setTab] = useState("personal");

  useEffect(() => {
    const path = window.location.pathname;
    const parts = path.split("/");
    setTab(parts[2]);
  }, []);

  return (
    <div className="GuestMgmt">
      <div className="GuesMgmt__top">
        <h5>Room no: 405</h5>
        <p>
          <span>Guest name: Mr. Amrit Deshpande</span>
          <span>Checked in: 16/10/2023</span>
          <span>Check out: 29/12/2023</span>
        </p>
      </div>
      <hr />
      <div className="GuestMgmt__tabs">
        <ul>
          {GuestTabs?.map((t) => (
            <li
              key={t}
              onClick={() => setTab(t)}
              className={`${tab === t && "tab__selected"}`}
            >
              <Link to={`/guest/${t}`}>{t}</Link>
            </li>
          ))}
        </ul>
      </div>
      {tab === "personal" ? <GuestPersonal /> : null}
      {tab === "folio" ? <GuestFolio /> : null}
      {tab === "room" ? <GuestRoom /> : null}
    </div>
  );
};

export default GuestMgmt;
