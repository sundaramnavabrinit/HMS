import "./Topbar.scss";
import { NotiModal } from "../../utils/NotiModal";
import Notifications from "../Notifications/Notifications";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <div className="Topbar">
        <h5 className="Topbar__user">
          <span>Good Morning</span>
          <strong
            onKeyDown={() => {}}
            onClick={() =>
              toast.warning(
                <div onClick={() => toast.dismiss()}>
                  <Link>
                    <p>Guest Check-out remainder</p>
                    <p>Room 405: Guest check-out will be 14:00hrs</p>
                  </Link>
                </div>
              )
            }
          >
            Sam Ragunath
          </strong>
        </h5>

        <div className="Topbar__buttonsIcons">
          <button
            className="Topbar__newBooking"
            onClick={() =>
              toast.warning(
                <div onClick={() => toast.dismiss()}>
                  <Link>
                    <p>Guest Check-out remainder</p>
                    <p>Room 405: Guest check-out will be 12:00hrs</p>
                  </Link>
                </div>
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z"
                fill="#E70909"
              />
            </svg>
            New Booking
          </button>

          <NotiModal
            name={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="Topbar__notificationIcon"
              >
                <path
                  d="M24.2224 23.6905V24.6429H7.07959V23.6905L8.98435 21.7857V16.0714C8.98435 13.119 10.9177 10.519 13.7463 9.68095V9.40476C13.7463 8.89959 13.9469 8.4151 14.3041 8.05789C14.6614 7.70068 15.1458 7.5 15.651 7.5C16.1562 7.5 16.6407 7.70068 16.9979 8.05789C17.3551 8.4151 17.5558 8.89959 17.5558 9.40476V9.68095C20.3844 10.519 22.3177 13.119 22.3177 16.0714V21.7857L24.2224 23.6905ZM17.5558 25.5952C17.5558 26.1004 17.3551 26.5849 16.9979 26.9421C16.6407 27.2993 16.1562 27.5 15.651 27.5C15.1458 27.5 14.6614 27.2993 14.3041 26.9421C13.9469 26.5849 13.7463 26.1004 13.7463 25.5952"
                  fill="#4D4D4D"
                />
                <ellipse cx="20.9204" cy="8.5" rx="4" ry="4" fill="#EF0000" />
              </svg>
            }
          >
            <div className="noti__msg">
              <Notifications />
            </div>
          </NotiModal>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Topbar;
