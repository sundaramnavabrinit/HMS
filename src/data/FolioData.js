const FolioData = [
  {
    id: 123,
    orderItem: "Bath Towel",
    qty: 1,
    price: "Free",
    orderTime: "16/01/2024 14:00",
    assignedTo: "Anees Devan",
    deliveredTo: "",
    deliveryTime: "",
    status: "Order Placed",
    moreInfo: [
      {
        notes: "Order placed by Guest",
        escalatedTo: "--",
        time: "16/01/24  14:00",
      },
      {
        notes: "Order Accepted by Housekeeping department",
        escalatedTo: "--",
        time: "16/01/24  14:02",
      },
    ],
  },
  {
    id: 1235,
    orderItem: "Chicken Chinthamani",
    qty: 2,
    price: "1200.00",
    orderTime: "16/01/2024 16:00",
    assignedTo: "Anees Devan",
    deliveredTo: "",
    deliveryTime: "",
    status: "Order Placed",
    moreInfo: [
      {
        notes: "Order placed by Guest",
        escalatedTo: "--",
        time: "16/01/24  16:00",
      },
    ],
  },
  {
    id: 124,
    orderItem: "Face Towel",
    qty: 1,
    price: "Free",
    orderTime: "16/01/2024 14:00",
    assignedTo: "Anees Devan",
    deliveredTo: "",
    deliveryTime: "",
    status: "Order Placed",
    moreInfo: [
      {
        notes: "Order placed by Guest",
        escalatedTo: "--",
        time: "16/01/24  14:00",
      },
      {
        notes: "Order Accepted by Housekeeping department",
        escalatedTo: "--",
        time: "16/01/24  14:02",
      },
    ],
  },
  {
    id: 125,
    orderItem: "Bath Towel",
    qty: 1,
    price: "Free",
    orderTime: "16/01/2024 14:00",
    assignedTo: "Anees Devan",
    deliveredTo: "Sirish Chowdhury",
    deliveryTime: "16/01/24  14:10",
    status: "Delivered",
    moreInfo: [
      {
        notes: "Order placed by Guest",
        escalatedTo: "--",
        time: "16/01/24  14:00",
      },
      {
        notes: "Order Accepted by Housekeeping department",
        escalatedTo: "--",
        time: "16/01/24  14:02",
      },
      {
        notes: "Order Processing by Housekeeping department",
        escalatedTo: "--",
        time: "16/01/24  14:06",
      },
      {
        notes: "Delivery picked up by Anees Devan",
        escalatedTo: "--",
        time: "16/01/24  14:08",
      },
      {
        notes: "Order Delivered",
        escalatedTo: "--",
        time: "16/01/24  14:10",
      },
    ],
  },
  {
    id: 126,
    orderItem: "Face Towel",
    qty: 1,
    price: "Free",
    orderTime: "16/01/2024 14:00",
    assignedTo: "Anees Devan",
    deliveredTo: "Sirish Chowdhury",
    deliveryTime: "16/01/24  14:10",
    status: "Delivered",
    moreInfo: [
      {
        notes: "Order placed by Guest",
        escalatedTo: "--",
        time: "16/01/24  14:00",
      },
      {
        notes: "Order Accepted by Housekeeping department",
        escalatedTo: "--",
        time: "16/01/24  14:02",
      },
      {
        notes: "Order Processing by Housekeeping department",
        escalatedTo: "--",
        time: "16/01/24  14:06",
      },
      {
        notes: "Delivery picked up by Anees Devan",
        escalatedTo: "--",
        time: "16/01/24  14:08",
      },
      {
        notes: "Order Delivered",
        escalatedTo: "--",
        time: "16/01/24  14:10",
      },
    ],
  },
  {
    id: 127,
    orderItem: "Chicken Chinthamani",
    qty: 2,
    price: "1200.00",
    orderTime: "16/01/2024 16:00",
    assignedTo: "Anees Devan",
    deliveredTo: "Sirish Chowdhury",
    deliveryTime: "--",
    status: "Delay",
    moreInfo: [
      {
        notes: "Chef didn’t pick the order",
        escalatedTo: "Kitchen supervisor",
        time: "16/01/24 16:15",
      },
      {
        notes: "Kitchen supervisor didn’t resolve the issue",
        escalatedTo: "Assistant F&B Manager",
        time: "16/01/24 16:20",
      },
      {
        notes: "Assistant F&B Manager didn’t resolve the issue",
        escalatedTo: "F&B Manager",
        time: "16/01/24 16:25",
      },
      {
        notes: "F&B Manager didn’t resolve the issue",
        escalatedTo: "Head Chef",
        time: "16/01/24 16:30",
      },
      {
        notes: "Head chef didn’t resolve the issue",
        escalatedTo: "General Manger",
        time: "16/01/24 16:35",
      },
    ],
  },
];

export default FolioData;
