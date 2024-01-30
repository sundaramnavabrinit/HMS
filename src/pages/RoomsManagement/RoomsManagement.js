import "./RoomsManagement.scss";
import CBRooms from "../../components/CBRooms/CBRooms";

const RoomsManagement = () => {
  let roomData = [
    {
      name: "Sunil Kumar",
      room: 202,
      list: [
        "Advance",
        "Amend Guest Stay",
        "Audit",
        "Check out",
        "Current guest ledger",
        "Foriegn exchange",
        "Guest charges",
        "Guest information amendment",
        "Guest profile",
        "Paid Out",
        "Paid Visit",
        "Post tariff - Single",
        "Provisional bill",
        "Tag room as Dirty/Inspected/Pickup",
      ],
    },
    {
      name: "Amrit Deshpandey",
      room: 405,
      list: [
        "Advance",
        "Amend Guest Stay",
        "Audit",
        "Check out",
        "Current guest ledger",
        "Foriegn exchange",
        "Guest charges",
        "Guest information amendment",
        "Guest profile",
        "Paid Out",
        "Paid Visit",
        "Post tariff - Single",
        "Provisional bill",
        "Tag room as Dirty/Inspected/Pickup",
      ],
    },
  ];
  return (
    <div className="RoomsMgmt">
      <CBRooms roomData={roomData} />
    </div>
  );
};

export default RoomsManagement;
