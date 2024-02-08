import { useState, useRef, useEffect } from "react";
import FolioData from "../data/FolioData";
import "./Accordion.scss";

const Accordion = ({ currentFolioData }) => {
  const [activeIndex, setActiveIndex] = useState();
  const [folioFiltered, setFolioFiltered] = useState([]);

  useEffect(() => {
    if (currentFolioData === "all" || currentFolioData === "Delay") {
      let filter = FolioData.filter((data) => data.status !== "Order Placed");
      setFolioFiltered(filter.reverse());
    } else {
      let filter = FolioData.filter(
        (data) =>
          data.status === currentFolioData &&
          data.orderItem !== "Chicken Chinthamani"
      );
      setFolioFiltered(filter);
    }
    if (currentFolioData === "foodorder") {
      let filterData = FolioData.filter((data) => data.status !== "Delay");
      let filteredOrders = filterData.filter((order) => {
        if (order.status === "Order Placed") {
          if (order.orderItem === "Chicken Chinthamani") {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      });

      setFolioFiltered(filteredOrders);
    }
  }, [currentFolioData]);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  console.log(FolioData);

  return (
    <div className="Accordion">
      {folioFiltered.map((folio) => (
        <AccordionItem
          key={folio.id}
          top={
            <span key={folio.id}>
              <span
                className="folio__orderitem"
                title={
                  folio.orderItem === "Chicken Chinthamani"
                    ? "Chicken Chinthamani & Achari/Malai Panner Tikka"
                    : folio.orderItem
                }
              >
                {folio.orderItem.slice(0, 9)}
                {folio.orderItem.length > 9 && "..."}
              </span>
              <span className="folio__qty">{folio.qty}</span>
              <span className="folio__price">
                {folio.price ? folio.price : "--"}
              </span>
              <span className="folio__ordertime">{folio.orderTime}</span>
              <span className="folio__assignedto">{folio.assignedTo}</span>
              <span className="folio__deliverytime">
                {folio.deliveryTime ? folio.deliveryTime : "--"}
              </span>
              <span
                className={`folio__status 
                ${folio.status === "Order Placed" && "folio__placed"}
                ${folio.status === "Delivered" && "folio__delivered"}
                ${folio.status === "Delay" && "folio__delay"}
                `}
              >
                <span>
                  {currentFolioData === "all" && folio.status === "Delay"
                    ? "Order Delivered"
                    : folio.status}
                </span>
              </span>
            </span>
          }
          moreInfo={folio.moreInfo}
          status={folio.status}
          isOpen={activeIndex === folio.id}
          onClick={() => handleItemClick(folio.id)}
          currentFolioData={currentFolioData}
        />
      ))}
    </div>
  );
};
const AccordionItem = ({
  top,
  moreInfo,
  status,
  isOpen,
  onClick,
  currentFolioData,
}) => {
  const contentHeight = useRef();
  return (
    <div className="wrapper">
      <p
        className={`question-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
        onKeyDown={() => {}}
      >
        {top}
        <svg
          className={`arrow ${isOpen ? "active" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 2H18C19.0609 2 20.0783 2.60204 20.8284 3.67368C21.5786 4.74531 22 6.19876 22 7.71429V16.2857C22 17.8012 21.5786 19.2547 20.8284 20.3263C20.0783 21.398 19.0609 22 18 22H6C4.93913 22 3.92172 21.398 3.17157 20.3263C2.42143 19.2547 2 17.8012 2 16.2857V7.71429C2 6.19876 2.42143 4.74531 3.17157 3.67368C3.92172 2.60204 4.93913 2 6 2Z"
            stroke="#868686"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 11L12 13.5L9.5 11"
            stroke="#868686"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </p>

      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <p className="accordion__head">
          <span className="accordion__icon"></span>
          <span className="accordion__notes">Notes / Issue</span>
          <span className="accordion__escalatedto">Issue escalated to </span>
          <span className="accordion__time">Time</span>
        </p>
        {moreInfo?.map((info) => (
          <>
            <p key={info.time} className="accordion__content">
              {status === "Delay" ? (
                <svg
                  className="accordion__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                >
                  <path
                    d="M22.5455 16.5286L14.599 2.53098C14.0644 1.58323 13.0923 1 11.9988 1C10.9052 1 9.93315 1.55893 9.39852 2.53098L1.45202 16.5286C0.917388 17.4763 0.941689 18.5942 1.47632 19.5176C2.01094 20.4411 2.98299 21 4.07655 21H19.9453C21.0145 21 21.9866 20.4411 22.5455 19.5176C23.0558 18.5942 23.0801 17.4763 22.5455 16.5286Z"
                    fill="#FECDCD"
                    stroke="#E70909"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M11.659 13.637C11.7319 13.8072 11.8534 13.8801 12.0235 13.8801C12.1693 13.8801 12.2665 13.7829 12.3637 13.6127C12.4852 13.3454 12.6553 12.5435 12.8497 11.2312C13.0442 9.89464 13.1414 8.87398 13.1414 8.14494C13.1414 6.78407 12.7768 6.12793 12.0235 6.12793C11.2459 6.12793 10.8813 6.80837 10.8813 8.14494C10.8813 9.04409 11.0029 10.1377 11.1973 11.4256C11.3917 12.6893 11.5375 13.4426 11.659 13.637Z"
                    fill="#E70909"
                    stroke="#E70909"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M11.9979 14.9004C11.682 14.9004 11.4147 15.0219 11.1716 15.2649C10.9286 15.5079 10.8071 15.7752 10.8071 16.1155C10.8071 16.4314 10.9286 16.723 11.1473 16.9417C11.3904 17.1847 11.6577 17.3062 11.9979 17.3062C12.3138 17.3062 12.6054 17.1847 12.8484 16.9417C13.0914 16.6987 13.213 16.4314 13.213 16.1155C13.213 15.7995 13.0914 15.5322 12.8484 15.2892C12.5811 15.0219 12.3138 14.9004 11.9979 14.9004Z"
                    fill="#E70909"
                    stroke="#E70909"
                    strokeWidth="0.5"
                  />
                </svg>
              ) : (
                <svg
                  className="accordion__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M0.5 10C0.5 4.75342 4.75342 0.5 10 0.5C15.2466 0.5 19.5 4.75342 19.5 10C19.5 15.2466 15.2466 19.5 10 19.5C4.75342 19.5 0.5 15.2466 0.5 10Z"
                    fill="#C9FED0"
                    stroke="#355402"
                  />
                  <path
                    d="M8.40219 13.9215L4.54492 10.0633L5.83038 8.77787L8.40219 11.3488L13.544 6.20605L14.8304 7.49242L8.40219 13.9215Z"
                    fill="#355402"
                  />
                </svg>
              )}

              <span className="accordion__notes">{info.notes}</span>
              <span className="accordion__escalatedto">{info.escalatedTo}</span>
              <span className="accordion__time">{info.time}</span>
            </p>
          </>
        ))}
        {status === "Delay" && currentFolioData === "all" ? (
          <p className="accordion__content">
            <svg
              className="accordion__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M0.5 10C0.5 4.75342 4.75342 0.5 10 0.5C15.2466 0.5 19.5 4.75342 19.5 10C19.5 15.2466 15.2466 19.5 10 19.5C4.75342 19.5 0.5 15.2466 0.5 10Z"
                fill="#C9FED0"
                stroke="#355402"
              />
              <path
                d="M8.40219 13.9215L4.54492 10.0633L5.83038 8.77787L8.40219 11.3488L13.544 6.20605L14.8304 7.49242L8.40219 13.9215Z"
                fill="#355402"
              />
            </svg>
            <span className="accordion__notes">Order Delivered</span>
            <span className="accordion__escalatedto">--</span>
            <span className="accordion__time">16/01/24 16:45</span>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Accordion;
