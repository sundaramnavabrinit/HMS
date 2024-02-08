import Boxes from "../../data/Boxes";
import "./DashboardPage.scss";
import ChartSvg from "../../data/Chart";
import Rooms from "../../data/Rooms";
import Booking from "../../components/Booking/Booking";
import Recent from "../../components/Recent/Recent";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import feedback from "../../assets/images/feeback.png";

const DashboardPage = () => {
  const handleBoxClick = (i) => {
    let toastType, toastMessage;

    switch (i) {
      case 0:
        toastType = "info";
        toastMessage = (
          <div onClick={() => toast.dismiss()}>
            <Link to="/guest/folio/Order%20Placed">
              <p>Order Placed</p>
              <p>Room 405: Bathroom towel order placed</p>
            </Link>
          </div>
        );
        break;
      case 1:
        toastType = "success";
        toastMessage = (
          <div onClick={() => toast.dismiss()}>
            <Link to="/guest/folio/Delivered">
              <p>Order Delivered</p>
              <p>Room 405: Bathroom towel order delivered on time!</p>
            </Link>
          </div>
        );
        break;
      case 3:
        toastType = "info";
        toastMessage = (
          <div onClick={() => toast.dismiss()}>
            <Link to="/guest/folio/foodorder">
              <p>Food placed</p>
              <p>Room 405: Food order placed</p>
            </Link>
          </div>
        );
        break;
      case 4:
        toastType = "error";
        toastMessage = (
          <div onClick={() => toast.dismiss()}>
            <Link to="/guest/folio/Delay">
              <p>Order Delayed</p>
              <p>Room 405: Food order delayed</p>
            </Link>
          </div>
        );
        break;
      case 5:
        toastType = "error";
        toastMessage = (
          <div onClick={() => toast.dismiss()}>
            <Link to="/guest/folio">
              <p>Order Delivered</p>
              <p>Room 405: Food order delivered</p>
            </Link>
          </div>
        );
        break;
      default:
        return; // Do nothing for other cases
    }

    toast[toastType](toastMessage);
  };

  const handleOpenInNewTab = () => {
    const dataUrl = feedback;
    window.open(dataUrl, "_blank");
  };

  return (
    <div className="DashboardPage">
      <div className="Dashboard__createBooking">
        <p>Enter the Reservation ID from Guest to Create room booking</p>
        <input
          placeholder="Enter Guest Reservation ID"
          type="text"
          name="reservationId"
        />
        <button>
          <Link to="/dashboard/create/personal">Allocate Room</Link>
        </button>
      </div>

      <div className="Dashboard__boxChart">
        <div className="Dashboard__boxes">
          {Boxes?.map((box, i) => (
            <div
              key={box.label}
              className="Dashboard__box"
              onClick={() => handleBoxClick(i)}
              onKeyDown={() => {}}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <rect width="34" height="34" rx="17" fill="#FDECEC" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.0155 13.5714C16.0155 14.9943 14.7763 16.1429 13.2297 16.1429C11.6832 16.1429 10.4347 14.9943 10.4347 13.5714C10.4347 12.1486 11.6832 11 13.2297 11C14.7763 11 16.0155 12.1486 16.0155 13.5714ZM23.4689 13.5714C23.4689 14.9943 22.2297 16.1429 20.6832 16.1429C19.1366 16.1429 17.8881 14.9943 17.8881 13.5714C17.8881 12.1486 19.1366 11 20.6832 11C22.2297 11 23.4689 12.1486 23.4689 13.5714ZM13.2297 17.8571C11.0589 17.8571 6.70801 18.86 6.70801 20.8571V22.1429C6.70801 22.6143 7.12726 23 7.63968 23H18.8198C19.3322 23 19.7515 22.6143 19.7515 22.1429V20.8571C19.7515 18.86 15.4006 17.8571 13.2297 17.8571ZM19.7794 17.9C20.1055 17.8743 20.413 17.8571 20.6832 17.8571C22.854 17.8571 27.2049 18.86 27.2049 20.8571V22.1429C27.2049 22.6143 26.7856 23 26.2732 23H21.4471C21.5496 22.7343 21.6148 22.4429 21.6148 22.1429V20.8571C21.6148 19.5971 20.8788 18.6457 19.8167 17.9343C19.8139 17.9317 19.8111 17.9283 19.808 17.9246C19.8009 17.9161 19.7924 17.906 19.7794 17.9Z"
                  fill="#E70909"
                />
              </svg>
              <p>{box.label}</p>
              <span>{box.value}</span>
            </div>
          ))}
        </div>

        <div
          onClick={() =>
            toast.error(
              <div onClick={() => toast.dismiss()}>
                <Link to="/guest/room">
                  <p>Late Check-out request Raised</p>
                  <p>Room 405: Late checkout request</p>
                </Link>
              </div>
            )
          }
          onKeyDown={() => {}}
          className="Dashboard__chart"
          dangerouslySetInnerHTML={{
            __html: ChartSvg.image,
          }}
        ></div>
      </div>

      <div
        onClick={() =>
          toast.info(
            <>
              <p>Feedback posted</p>
              <p>
                Mr. Amrit Deshpande has given feedback in Agoda{" "}
                <span
                  className="feedback"
                  onClick={handleOpenInNewTab}
                  onKeyDown={() => {}}
                >
                  View Feedback
                </span>
              </p>
            </>
          )
        }
        onKeyDown={() => {}}
        className="Dashboard__rooms"
        dangerouslySetInnerHTML={{
          __html: Rooms.image,
        }}
      ></div>
      <div className="Dashboard__activities">
        <Booking />
        <Recent />
      </div>
    </div>
  );
};

export default DashboardPage;
