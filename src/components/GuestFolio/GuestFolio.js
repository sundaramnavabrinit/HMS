import React, { useEffect, useState } from "react";
import "./GuestFolio.scss";
import Accordion from "../../utils/Accordion";
import { useParams } from "react-router-dom";

const GuestFolio = () => {
  const [show, setShow] = useState("all");
  const { currentFolio } = useParams();

  useEffect(() => {
    if (currentFolio) {
      setShow(currentFolio);
    } else {
      setShow("all");
    }
  }, [currentFolio]);

  return (
    <div className="GuestFolio">
      <p className="GF__head">
        <span className="folio__orderitem">Order item</span>
        <span className="folio__qty">Qty</span>
        <span className="folio__price">Price</span>
        <span className="folio__ordertime">Order time</span>
        <span className="folio__assignedto">Assigned to</span>
        {/* <span className="folio__deliveredto">Delivery at</span> */}
        <span className="folio__deliverytime">Delivery time</span>
        <span className="folio__status">Status</span>
      </p>
      <Accordion currentFolioData={show} />
    </div>
  );
};

export default GuestFolio;
