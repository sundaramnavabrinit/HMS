import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's origin
    methods: "GET",
  })
);

// Dashboard Boxes
const Boxes = [
  { label: "Total no. of Guest", value: 3598 },
  { label: "Today Check-In", value: 200 },
  { label: "Today Check-Out", value: 35 },
  { label: "Booked this month", value: 148 },
  { label: "Cancelled this month", value: 23 },
  { label: "Rooms in use", value: "125 / 130" },
];
app.get("/dashboard/boxes", async (req, res) => {
  return res.json(Boxes);
});

app.listen(8000, () => {
  console.log("Server is listening on port: 8000");
});
