const Booking = () => {
  return (
    <div className="Booking">
      <div className="Booking__top">
        <h4>Booking Activities</h4>
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
      <table className="Booking__table">
        <thead>
          <tr>
            <th>Res. no</th>
            <th>Guest name</th>
            <th>Room. no</th>
            <th>No. of Guests</th>
            <th>Check-In</th>
            <th>Check-Out</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>22812</td>
            <td>Nayan Brar</td>
            <td>205</td>
            <td>2</td>
            <td>20/12/23</td>
            <td>07/01/24</td>
            <td>...</td>
          </tr>
          <tr>
            <td>22812</td>
            <td>Nayan Brar</td>
            <td>205</td>
            <td>2</td>
            <td>20/12/23</td>
            <td>07/01/24</td>
            <td>...</td>
          </tr>
          <tr>
            <td>22812</td>
            <td>Nayan Brar</td>
            <td>205</td>
            <td>2</td>
            <td>20/12/23</td>
            <td>07/01/24</td>
            <td>...</td>
          </tr>
          <tr>
            <td>22812</td>
            <td>Nayan Brar</td>
            <td>205</td>
            <td>2</td>
            <td>20/12/23</td>
            <td>07/01/24</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Booking;
