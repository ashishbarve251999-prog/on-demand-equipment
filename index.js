const express = require("express");
const app = express();

app.use(express.json());

const equipment = [
  { id: 1, name: "Excavator", ratePerHour: 2500 },
  { id: 2, name: "Bulldozer", ratePerHour: 3000 },
  { id: 3, name: "Crane", ratePerHour: 4000 }
];

app.get("/", (req, res) => {
  res.send("On-Demand Equipment API is running 🚜");
});

app.get("/equipment", (req, res) => {
  res.json(equipment);
});

app.post("/quote", (req, res) => {
  const { equipmentId, hours } = req.body;
  const item = equipment.find(e => e.id === equipmentId);

  if (!item) {
    return res.status(404).json({ error: "Equipment not found" });
  }

  const total = item.ratePerHour * hours;
  res.json({
    equipment: item.name,
    hours,
    totalPrice: total
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
