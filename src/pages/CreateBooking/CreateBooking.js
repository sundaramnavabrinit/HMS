import { useEffect, useState } from "react";
import "./CreateBooking.scss";
import CBPersonal from "../../components/CBPersonal/CBPersonal";
import { Link, useParams } from "react-router-dom";
import CBTabs from "../../data/CBTabs";
import CBAddress from "../../components/CBAddress/CBAddress";
import IDProof from "../../components/IDProof/IDProof";
import CBRooms from "../../components/CBRooms/CBRooms";
import { Modal } from "../../utils/Modal";
import RoomSuccess from "../../components/popup/RoomSuccess/RoomSuccess";

const CreateBooking = () => {
  const [data, setData] = useState();
  const { currentTab } = useParams();
  const [tab, setTab] = useState("personal");
  const [show, setShow] = useState(false);

  console.log(tab);

  useEffect(() => {
    setTab(currentTab);
  }, [currentTab]);

  return (
    <div className="CreateBooking">
      <div className="CB__heading">
        <h5>Create Booking</h5>
        <span />
      </div>
      <div className="CB__tabs">
        <ul>
          {CBTabs?.map((t) => (
            <li
              onKeyDown={() => {}}
              key={t}
              onClick={() => setTab(t)}
              className={`${tab === t && "tab__selected"}`}
            >
              <Link to={`/dashboard/create/${t}`}>{t}</Link>
            </li>
          ))}
        </ul>
      </div>
      {tab === "personal" ? <CBPersonal data={data} setData={setData} /> : null}
      {tab === "address" ? <CBAddress data={data} setData={setData} /> : null}
      {tab === "id proof" ? <IDProof data={data} setData={setData} /> : null}
      {tab === "room" ? <CBRooms /> : null}

      <div className="CB__next">
        <button className="CB__CancelButton">Cancel</button>
        {tab === "room" ? (
          <Modal name="Create Booking" show={show} setShow={setShow}>
            <RoomSuccess setShow={setShow} />
          </Modal>
        ) : (
          <Link
            to={`/dashboard/create/${CBTabs[CBTabs.indexOf(currentTab) + 1]}`}
          >
            <button className="CB__NextButton">Next</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CreateBooking;
