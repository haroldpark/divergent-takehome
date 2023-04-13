import { dummyWarehouseData } from "../../data/dummyWarehouseData";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ data: dummyWarehouseData });
  } else if (req.method === "POST") {
    const newWarehouseData = req.body.newWarehouseData;
    dummyWarehouseData.push(newWarehouseData);
    res.status(201).json(newWarehouseData);
  }
}
