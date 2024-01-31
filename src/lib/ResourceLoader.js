import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios({
        method: "get",
        url: resourceUrl,
      });
      setData(response.data);
    };
    fetchData();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: data });
        }
      })}
    </>
  );
};

export default ResourceLoader;
