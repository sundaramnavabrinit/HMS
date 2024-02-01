import { Link } from "react-router-dom";
import "./RoomSuccess.scss";
import { toast } from "react-toastify";

const RoomSuccess = ({ setShow }) => {
  return (
    <div className="RoomSuccess">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
      >
        <rect width="60" height="60" rx="30" fill="#FDECEC" />
        <path
          d="M45.4098 20.2286L23.9332 41.7051L14.0898 31.8617L16.6133 29.3382L23.9332 36.6402L42.8863 17.7051L45.4098 20.2286Z"
          fill="#5A9300"
          stroke="#5A9300"
        />
      </svg>
      <span>Room 405</span>
      <span>Successfully allocated!</span>
      <button
        onClick={() => {
          toast.success(
            <Link to="/roomsmgmt">
              <p>Room Occupied!</p>
              <p>Room 405 : Room occuped by guest!</p>
            </Link>
          );
          setShow(false);
        }}
      >
        Generate QR Code
      </button>
    </div>
  );
};

export default RoomSuccess;
