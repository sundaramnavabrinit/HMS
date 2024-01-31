// import Boxes from "../../data/Boxes";
import "./DashboardPage.scss";
import ChartSvg from "../../data/Chart";
import Rooms from "../../data/Rooms";
import Booking from "../../components/Booking/Booking";
import Recent from "../../components/Recent/Recent";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ResourceLoader from "../../lib/ResourceLoader";
import Boxes from "../../components/Boxes";

const DashboardPage = () => {
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
          <Link to="/dashboard/create/personal">Create Booking</Link>
        </button>
      </div>

      <div className="Dashboard__boxChart">
        <div className="Dashboard__boxes">
          <ResourceLoader
            resourceUrl="http://localhost:8000/dashboard/boxes"
            resourceName="Boxes"
          >
            <Boxes />
          </ResourceLoader>
        </div>
        <div
          role="button"
          onClick={() =>
            toast.error(
              <Link to="/guest/room">
                <p>Late Check-out request Raised</p>
                <p>Room 405: late checkout request</p>
              </Link>
            )
          }
          className="Dashboard__chart"
          dangerouslySetInnerHTML={{
            __html: ChartSvg.image,
          }}
        ></div>
      </div>
      <div
        role="button"
        onClick={() =>
          toast.success(
            <>
              <p>Feedback posted</p>
              <p>
                Mr. Amrit Deshpande has given feedback in Agoda{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.agoda.com/clarion-hotel-president/hotel/chennai-in.html?cid=1844104&ds=KMnPEAeyD7BH0Owc"
                >
                  View Feedback
                </a>
              </p>
            </>
          )
        }
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
