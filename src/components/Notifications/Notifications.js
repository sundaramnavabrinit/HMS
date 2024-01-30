import { useState } from "react";
import "./Notifications.scss";
import { Link } from "react-router-dom";

const Notifications = () => {
  const [notifyTab, setNotifyTab] = useState("Unread");

  const data = [
    {
      room: 405,
      message: "has been occupied by Guest",
      time: "40 min ago",
      type: "Occupied",
      clientname: "Mr. A Amrit Deshpande",
    },
    {
      room: 405,
      message: "Bathroom towel ordered",
      time: "35 min ago",
      type: "request",
      clientname: "Mr. A Amrit Deshpande",
    },
    {
      room: 405,
      message: "Bathroom towel order delivered on time!",
      time: "30 min ago",
      type: "delivered",
      clientname: "Mr. A Amrit Deshpande",
    },
    {
      room: 405,
      message: "Food order placed",
      time: "20 min ago",
      type: "escalation",
      clientname: "Mr. A Amrit Deshpande",
    },
    {
      room: 405,
      message: "Food order delayed",
      time: "15 min ago",
      type: "remainder",
      clientname: "Mr. A Amrit Deshpande",
    },
    {
      room: 405,
      message: "Late Check-Out Request",
      time: "15 min ago",
      type: "latecheckout",
      clientname: "Mr. A Amrit Deshpande",
    },
    {
      room: 405,
      message: "Guest paid the late checkout fee",
      time: "10 min ago",
      type: "request",
      clientname: "Mr. A Amrit Deshpande",
    },
    {
      room: 405,
      message: "Feedback is given in Agoda",
      time: "5 min ago",
      type: "feedback",
      clientname: "Mr. A Amrit Deshpande",
    },
  ];

  return (
    <div className="Notifications">
      <h6>Notifications</h6>
      <div className="Notifications__tab">
        <ul>
          <li
            onClick={() => setNotifyTab("Unread")}
            className={`${notifyTab === "Unread" && "Selected__noti"}`}
          >
            Unread
            <span>({data.length})</span>
          </li>
          <li
            onClick={() => setNotifyTab("Read")}
            className={`${notifyTab === "Read" && "Selected__noti"}`}
          >
            Read
          </li>
        </ul>
      </div>
      <div className="Notifications__msg">
        {notifyTab !== "Unread"
          ? data?.splice(0, 4)?.map((d, i) => (
              <div className="msg__content" key={i}>
                <p className="msg__top">
                  <span>
                    {d.type === "Occupied" ? (
                      <Link to="/roomsmgmt">
                        <span className="clientrequest">Room Occupied</span>
                      </Link>
                    ) : (
                      ""
                    )}
                    {d.type === "request" ? (
                      <Link to="/guest/folio">
                        <span className="servicerequest">Service Request</span>
                      </Link>
                    ) : (
                      ""
                    )}
                    {d.type === "remainder" ? (
                      <Link to="/guest/room">
                        <span className="serviceescalation">
                          Checkout Remainder
                        </span>
                      </Link>
                    ) : (
                      ""
                    )}
                    {d.type === "feedback" ? (
                      // <Link to="https://www.agoda.com/clarion-hotel-president/hotel/chennai-in.html?cid=1844104&ds=KMnPEAeyD7BH0Owc">
                      <span className="clientrequest">Feedback</span>
                    ) : (
                      // </Link>
                      ""
                    )}
                    {d.type === "escalation" ? (
                      <Link to="/guest/folio">
                        <span className="serviceescalation">
                          Service Escalation
                        </span>
                      </Link>
                    ) : (
                      ""
                    )}
                    {d.type === "delivered" ? (
                      <Link to="/guest/folio">
                        <span className="clientrequest">Order Delivered</span>
                      </Link>
                    ) : (
                      ""
                    )}
                    {d.type === "latecheckout" ? (
                      <Link to="/guest/room">
                        <span className="clientrequest">
                          Late Checkout Request
                        </span>
                      </Link>
                    ) : (
                      ""
                    )}
                    {d.type === "latecheckoutpaid" ? (
                      <span className="latecheckoutpaid">
                        Late Checkout Payment
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                  <span className="msg__time">{d.time}</span>
                </p>
                <p>{`Room #${d.room}: ${d.message}`}</p>
                <p>
                  Guest Name : <strong>{d.clientname}</strong>
                </p>
                <hr />
              </div>
            ))
          : data.reverse().map((d, i) => (
              <div className="msg__content" key={i}>
                <p className="msg__top">
                  <span>
                    {d.type === "Occupied" ? (
                      <Link to="/roomsmgmt">
                        <span className="clientrequest">Room Occupied</span>
                      </Link>
                    ) : (
                      ""
                    )}
                    {d.type === "request" ? (
                      <Link to="/guest/folio">
                        <span className="servicerequest">Service Request</span>
                      </Link>
                    ) : (
                      ""
                    )}
                    {d.type === "remainder" ? (
                      <Link to="/guest/room">
                        <span className="serviceescalation">
                          Checkout Remainder
                        </span>
                      </Link>
                    ) : (
                      ""
                    )}
                    {d.type === "feedback" ? (
                      <span className="clientrequest">Feedback</span>
                    ) : (
                      ""
                    )}
                    {d.type === "escalation" ? (
                      <Link to="/guest/folio">
                        <span className="serviceescalation">
                          Service Escalation
                        </span>
                      </Link>
                    ) : (
                      ""
                    )}
                    {d.type === "delivered" ? (
                      <Link to="/guest/folio">
                        <span className="clientrequest">Order Delivered</span>
                      </Link>
                    ) : (
                      ""
                    )}
                    {d.type === "latecheckout" ? (
                      <Link to="/guest/room">
                        <span className="clientrequest">
                          Late Checkout Request
                        </span>
                      </Link>
                    ) : (
                      ""
                    )}
                    {d.type === "latecheckoutpaid" ? (
                      <span className="latecheckoutpaid">
                        Late Checkout Payment
                      </span>
                    ) : (
                      ""
                    )}
                  </span>
                  <span className="msg__time">{d.time}</span>
                </p>
                <p>{`Room #${d.room}: ${d.message}`}</p>
                <p>
                  Guest Name : <strong>{d.clientname}</strong>
                </p>
                <hr />
              </div>
            ))}
      </div>
    </div>
  );
};
export default Notifications;
