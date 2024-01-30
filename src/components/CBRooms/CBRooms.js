import "./CBRooms.scss";
import RoomNumbers from "../../data/RoomNumbers";
import { useState } from "react";
import { Link } from "react-router-dom";

const CBRooms = ({ roomData }) => {
  const [selectRoom, setSelectRoom] = useState({});

  const RoomSelected = (roomno) => {
    if (!roomData?.length) return;
    let response = roomData.find((room) => room.room === roomno);
    console.log(response);
    if (!response) setSelectRoom({});
    if (response) setSelectRoom(response);
  };

  return (
    <div className="CBR">
      <div className="CBR__top">
        <p>
          <label htmlFor="roomtypeselection">Room Type:</label>
          <select id="roomtypeselection" name="roomtype">
            <option value="Sea view with Balcony">Sea view with Balcony</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#5E6366"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
        <ul>
          <li className="vacant">Vacant</li>
          <li className="blocked">Blocked</li>
          <li className="dirty">Dirty</li>
          <li className="occupied">Occupied</li>
        </ul>
      </div>

      <div className="CBR__grid">
        <div className="CRD__grid__top">
          <span>Floor</span>
          <span>Rooms</span>
        </div>
        <div className="CRD__grid__list">
          {RoomNumbers?.map((RN) => (
            <div key={RN?.floor}>
              <span>{RN?.floor}</span>
              <span>
                {RN?.rooms?.map((el) => (
                  <span
                    style={{ background: el.color }}
                    key={el?.no}
                    onClick={() => RoomSelected(el.no)}
                    className={`
                    ${el.color === "#FFB4B0" && "roomhover"}
                    ${
                      selectRoom?.room &&
                      selectRoom?.room === el.no &&
                      "selectedRoom"
                    }`}
                  >
                    {el?.no}
                    {selectRoom.room === el.no ? (
                      <ul>
                        <li className="name">
                          Room: {selectRoom.room} - {selectRoom.name}
                        </li>
                        {selectRoom.list?.map((data) =>
                          data === "Guest profile" ? (
                            <Link key={data} to="/guest/personal">
                              {data}
                            </Link>
                          ) : (
                            <li key={data}>{data}</li>
                          )
                        )}
                      </ul>
                    ) : null}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CBRooms;
