const Recent = () => {
  const Lists = [
    {
      room: 320,
      name: "Krishna Kala",
      message: "requested for coffee and Bath Towel",
      time: "1 min ago",
      activity: "request",
    },
    {
      room: 1222,
      name: "Staff Janet",
      message: "entered room for cleaning",
      time: "3 min ago",
      activity: "service",
    },
    {
      room: 1222,
      name: "Amrit Deshpande",
      message: "requested for Fried rice",
      time: "20 min ago",
      activity: "request",
    },
    {
      room: 320,
      name: "Staff Janet",
      message: "entered room for cleaning",
      time: "30 min ago",
      activity: "service",
    },
  ];
  return (
    <div className="Recent">
      <div className="Recent__top">
        <h4>Recent Activities</h4>
        <button>
          View all{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="20"
            viewBox="0 0 23 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.2671 4.68798L15.6979 9.41214C16.0723 9.73742 16.0723 10.2658 15.6979 10.591L10.2671 15.3152C9.89267 15.641 9.28604 15.641 8.91165 15.3152C8.53726 14.9896 8.53726 14.4621 8.91165 14.1363L13.665 10.0016L8.91165 5.86687C8.53726 5.54131 8.53726 5.01326 8.91165 4.68798C9.28604 4.36215 9.89267 4.36215 10.2671 4.68798Z"
              fill="#1BA8F8"
            />
          </svg>
        </button>
      </div>
      <hr />
      <div className="Recent__lists">
        {Lists?.map((list, i) => (
          <div key={i} className="Recent__list">
            <p className={`Recent__list__roomNo`}>
              <span
                className={`${
                  list.activity === "request"
                    ? "request__customer"
                    : "service__client"
                }`}
              >
                Room #{list.room}
              </span>
              <span>{list.time}</span>
            </p>
            <p
              className={`${
                list.activity === "request"
                  ? "Customer__request"
                  : "Staff__activity"
              }`}
            >
              <span className="list_name">{list.name}</span> {list.message}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recent;
