import "./GuestRoomData.scss";
import room from "../../assets/images/rooms.png";
import GuestRoom from "../../data/GuestData.js";
import { Modal } from "../../utils/Modal.js";
import RequestSuccess from "../popup/RequestSuccess/RequestSuccess.js";
import { useState } from "react";
import Rooms from "../../data/Rooms.js";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const GuestRoomData = () => {
  const [accept, setAccept] = useState(false);
  const [checkAvail, setCheckAvail] = useState(false);
  const [acceptedLateCheckout, setAcceptedLateCheckout] = useState(false);
  const [paid, setPaid] = useState(false);

  return (
    <div className="GuestRoomData">
      <div className="GR__info">
        <img src={room} alt="" />
        <div className="GR__info__content">
          <p>
            <span>Guest name:</span> <span>{GuestRoom.guestname}</span>
          </p>
          <p>
            <span>Room number:</span> <span>{GuestRoom.roomno}</span>
          </p>
          <p>
            <span>Room name:</span> <span>{GuestRoom.roomname}</span>
          </p>
          <p>
            <span>Check in:</span> <span>{GuestRoom.checkin}</span>
          </p>
          <p>
            <span>Check out:</span>{" "}
            <span
              onKeyDown={() => {}}
              onClick={() => {
                toast.success(
                  <>
                    <p>Guest Paid late checkout fee</p>
                    <p>Room 405: Guest paid the late checkout fee</p>
                  </>
                );
                setPaid(true);
              }}
            >
              {GuestRoom.checkout}
            </span>
            {/* {!paid && accept && (
              <span
                className="latecheckout"
                onKeyDown={() => {}}
                onClick={() => {
                  toast.success(
                    <>
                      <p>Guest Paid late checkout fee</p>
                      <p>Room 405: Guest paid the late checkout fee</p>
                    </>
                  );
                  setPaid(true);
                }}
              >
                Late Checkout
              </span>
            )} */}
          </p>
        </div>
      </div>

      <div className="GR__request">
        <p className="request__head">
          <span>Request</span>
          <span>Date</span>
          <span>Time</span>
          <span>Room Availability</span>
          <span>Check out fee</span>
          <span
            className="buttons__AD"
            onKeyDown={() => {}}
            onClick={() =>
              toast.warning(
                <Link>
                  <p>Guest Check-out remainder</p>
                  <p>Room 405: Guest check-out will be 12:00hrs</p>
                </Link>
              )
            }
          >
            Action
          </span>
        </p>
        <p className="request__body">
          <span>Late check-out</span>
          <span>24/01/2024</span>
          <span>02:00 hrs</span>
          <Modal
            name="Check Availability"
            type="avail"
            show={checkAvail}
            setShow={setCheckAvail}
          >
            <div
              className="Dashboard__chart"
              dangerouslySetInnerHTML={{
                __html: Rooms.avail,
              }}
            />
          </Modal>

          <span>
            <input defaultValue="₹00.00" />
          </span>
          <span className="buttons__AD">
            {!paid && accept ? (
              <button className="AD__awaiting" onClick={() => setAccept(false)}>
                Awaiting Payment
              </button>
            ) : paid ? (
              <button>Late Checkout</button>
            ) : (
              <>
                <Modal
                  name="Accept"
                  type="AD__accept"
                  setAccept={setAccept}
                  show={acceptedLateCheckout}
                  setShow={setAcceptedLateCheckout}
                >
                  <RequestSuccess />
                </Modal>
                <button className="AD__decline">Declined</button>
              </>
            )}
          </span>
        </p>
      </div>

      <div className="GR__table">
        <p className="GR__head">
          <span>Guest / User name</span>
          <span>Date & Time</span>
          <span>Reason</span>
          <span>Room status</span>
        </p>
        <p className="GR__body">
          {GuestRoom.roomupdates.map((update, i) => (
            <span key={`${update.reason}`}>
              <span>{update.guestname}</span>
              <span>{update.datetime}</span>
              <span>{update.reason}</span>
              <span>{update.roomstatus}</span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default GuestRoomData;
