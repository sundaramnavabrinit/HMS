const FolioData = [
  {
    id: 123,
    orderItem: "Bath Towel",
    qty: 1,
    price: "",
    orderTime: "16/01/2024 22:50",
    assignedTo: "Anees Devan",
    deliveredTo: "",
    deliveryTime: "",
    status: "Order Placed",
    moreInfo: [
      {
        notes: "Order placed by Guest",
        escalatedTo: "--",
        time: "16/01/24  22:50",
      },
      {
        notes: "Order Accepted by Housekeeping department",
        escalatedTo: "--",
        time: "16/01/24  22:51",
      },
    ],
  },
  {
    id: 124,
    orderItem: "Face Towel",
    qty: 1,
    price: "",
    orderTime: "16/01/2024 23:00",
    assignedTo: "Anees Devan",
    deliveredTo: "",
    deliveryTime: "",
    status: "Order Placed",
    moreInfo: [
      {
        notes: "Order placed by Guest",
        escalatedTo: "--",
        time: "16/01/24  23:00",
      },
      {
        notes: "Order Accepted by Housekeeping department",
        escalatedTo: "--",
        time: "16/01/24  23:03",
      },
    ],
  },
  {
    id: 125,
    orderItem: "Bath Towel",
    qty: 1,
    price: "",
    orderTime: "16/01/2024 22:50",
    assignedTo: "Anees Devan",
    deliveredTo: "Sirish Chowdhury",
    deliveryTime: "16/01/24  23:00",
    status: "Delivered",
    moreInfo: [
      {
        notes: "Order placed by Guest",
        escalatedTo: "--",
        time: "16/01/24  22:50",
      },
      {
        notes: "Order Accepted by Housekeeping department",
        escalatedTo: "--",
        time: "16/01/24  22:51",
      },
      {
        notes: "Order Processing by Housekeeping department",
        escalatedTo: "--",
        time: "16/01/24  22:55",
      },
      {
        notes: "Delivery picked up by Sirish Chowdhury",
        escalatedTo: "--",
        time: "16/01/24  22:57",
      },
      {
        notes: "Order Delivered",
        escalatedTo: "--",
        time: "16/01/24  23:00",
      },
    ],
  },
  {
    id: 126,
    orderItem: "Face Towel",
    qty: 1,
    price: "",
    orderTime: "16/01/2024 23:00",
    assignedTo: "Anees Devan",
    deliveredTo: "Sirish Chowdhury",
    deliveryTime: "16/01/24  23:09",
    status: "Delivered",
    moreInfo: [
      {
        notes: "Order placed by Guest",
        escalatedTo: "--",
        time: "16/01/24  23:00",
      },
      {
        notes: "Order Accepted by Housekeeping department",
        escalatedTo: "--",
        time: "16/01/24  23:03",
      },
      {
        notes: "Order Processing by Housekeeping department",
        escalatedTo: "--",
        time: "16/01/24  23:05",
      },
      {
        notes: "Delivery picked up by Sirish Chowdhury",
        escalatedTo: "--",
        time: "16/01/24  23:07",
      },
      {
        notes: "Order Delivered",
        escalatedTo: "--",
        time: "16/01/24  23:09",
      },
    ],
  },
  {
    id: 127,
    orderItem: "Chicken Fried Rice",
    qty: 2,
    price: "250.00",
    orderTime: "16/01/2024 23:20",
    assignedTo: "Anees Devan",
    deliveredTo: "Sirish Chowdhury",
    deliveryTime: "--",
    status: "Delay",
    moreInfo: [
      {
        notes: "Chef didn’t pick the order",
        escalatedTo: "Kitchen supervisor",
        time: "16/01/24 23:25",
      },
      {
        notes: "Kitchen supervisor didn’t resolve the issue",
        escalatedTo: "Assistant F&B Manager",
        time: "16/01/24 23:35",
      },
      {
        notes: "Assistant F&B Manager didn’t resolve the issue",
        escalatedTo: "F&B Manager",
        time: "16/01/24 23:45",
      },
      {
        notes: "F&B Manager didn’t resolve the issue",
        escalatedTo: "Head Chef",
        time: "16/01/24 23:55",
      },
      {
        notes: "Head chef didn’t resolve the issue",
        escalatedTo: "General Manger",
        time: "17/01/24 00:00",
      },
    ],
  },
];

export default FolioData;
