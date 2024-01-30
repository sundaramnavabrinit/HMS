import { useEffect, useState } from "react";
import "./NotiModal.scss";
import { useLocation } from "react-router-dom";

export const NotiModal = ({ children, name }) => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShow(false);
  }, [location.pathname]);

  return (
    <>
      <button
        className="Notify__closeButtin"
        aria-label="notificationClosebtn"
        onClick={() => setShow(!show)}
      >
        {name}
      </button>
      {/* {show && ( */}
      <div
        className={`${show ? "NotiModalBG" : "test"}`}
        onClick={() => setShow(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${show ? "openNoti" : "NotiModal__body"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="closeIcon"
            onClick={() => setShow(false)}
          >
            <path
              d="M8.94004 8.00012L13.14 3.80679C13.2656 3.68125 13.3361 3.51099 13.3361 3.33346C13.3361 3.15592 13.2656 2.98566 13.14 2.86012C13.0145 2.73459 12.8442 2.66406 12.6667 2.66406C12.4892 2.66406 12.3189 2.73459 12.1934 2.86012L8.00004 7.06012L3.80671 2.86012C3.68117 2.73459 3.51091 2.66406 3.33337 2.66406C3.15584 2.66406 2.98558 2.73459 2.86004 2.86012C2.7345 2.98566 2.66398 3.15592 2.66398 3.33346C2.66398 3.51099 2.7345 3.68125 2.86004 3.80679L7.06004 8.00012L2.86004 12.1935C2.79756 12.2554 2.74796 12.3292 2.71411 12.4104C2.68027 12.4916 2.66284 12.5788 2.66284 12.6668C2.66284 12.7548 2.68027 12.8419 2.71411 12.9232C2.74796 13.0044 2.79756 13.0781 2.86004 13.1401C2.92202 13.2026 2.99575 13.2522 3.07699 13.2861C3.15823 13.3199 3.24537 13.3373 3.33337 13.3373C3.42138 13.3373 3.50852 13.3199 3.58976 13.2861C3.671 13.2522 3.74473 13.2026 3.80671 13.1401L8.00004 8.94012L12.1934 13.1401C12.2554 13.2026 12.3291 13.2522 12.4103 13.2861C12.4916 13.3199 12.5787 13.3373 12.6667 13.3373C12.7547 13.3373 12.8419 13.3199 12.9231 13.2861C13.0043 13.2522 13.0781 13.2026 13.14 13.1401C13.2025 13.0781 13.2521 13.0044 13.286 12.9232C13.3198 12.8419 13.3372 12.7548 13.3372 12.6668C13.3372 12.5788 13.3198 12.4916 13.286 12.4104C13.2521 12.3292 13.2025 12.2554 13.14 12.1935L8.94004 8.00012Z"
              fill="#181818"
            />
          </svg>
          {children}
        </div>
      </div>
      {/* )} */}
    </>
  );
};
