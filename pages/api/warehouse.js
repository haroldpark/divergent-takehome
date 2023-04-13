import { dummyWarehouseData } from "../../data/dummyWarehouseData";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(dummyWarehouseData);
  } else if (req.method === "POST") {
    const newWarehouseData = req.body.newWarehouseData;
    dummyWarehouseData.push(newWarehouseData);
    console.log(dummyWarehouseData);
    res.status(201).json(dummyWarehouseData);
  }
}
