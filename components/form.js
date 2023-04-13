import { useState } from "react";

const SHELF_NUM = 10;
const ZONE_NUM = 12;
const initialWarehouseDataShape = [...Array(ZONE_NUM)].map(() => []);

export default function Form() {
  const [newWarehouseData, setNewWarehouseData] = useState(
    initialWarehouseDataShape
  );

  const submitWarehouse = async () => {
    const response = await fetch("/api/warehouse", {
      method: "POST",
      body: JSON.stringify({ newWarehouseData }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const handleShelfNameChange = (event, zIndex, sIndex) => {
    const userInput = event.target.value;
    const dataCopy = JSON.parse(JSON.stringify(newWarehouseData));
    dataCopy[zIndex][sIndex] = userInput;
    setNewWarehouseData(dataCopy);
  };

  return (
    <div>
      <form>
        <h2>Please define shelf names within each zone of your warehouse</h2>
        <table>
          <thead>
            <tr>
              {[...Array(ZONE_NUM)].map((x, zi) => (
                <th key={"zone-headers-" + zi}>Zone {zi + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(SHELF_NUM)].map((x, shelfIndex) => (
              <tr key={`shelf-${shelfIndex + 1}`}>
                {[...Array(ZONE_NUM)].map((x, zoneIndex) => (
                  <td key={`shelf-${shelfIndex + 1}-zone-${zoneIndex + 1}`}>
                    <input
                      onChange={(e) => {
                        handleShelfNameChange(e, zoneIndex, shelfIndex);
                      }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={submitWarehouse}>
          Submit New Warehouse
        </button>
      </form>
    </div>
  );
}
