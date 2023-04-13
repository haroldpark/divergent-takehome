import { useState } from "react";
import styles from "../styles/Form.module.css";

const SHELF_NUM = 10;
const ZONE_NUM = 12;
const initialWarehouseDataShape = [...Array(ZONE_NUM)].map(() => []);

export default function Form() {
  const [allWarehouseData, setAllWarehouseData] = useState([]);
  const [newWarehouseData, setNewWarehouseData] = useState(
    initialWarehouseDataShape
  );

  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const submitWarehouse = async () => {
    try {
      // POST Request
      const response = await fetch("/api/warehouse", {
        method: "POST",
        body: JSON.stringify({ newWarehouseData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      displaySuccessMessage();
      const allWhData = await response.json();
      // This could be used to make a new component to keep track of currently existing warehouses
      setAllWarehouseData(allWhData);
      // Reset the form
      document.getElementById("warehouse-form").reset();
    } catch (error) {
      console.log("There was an error", error);
    }
  };

  const handleShelfNameChange = (event, zIndex, sIndex) => {
    const userInput = event.target.value;
    const dataCopy = JSON.parse(JSON.stringify(newWarehouseData));
    dataCopy[zIndex][sIndex] = userInput;
    setNewWarehouseData(dataCopy);
  };

  const displaySuccessMessage = () => {
    setShowSuccessMsg(true);
    setTimeout(() => {
      setShowSuccessMsg(false);
    }, 5000);
  };

  const displayErrorMessage = () => {};

  return (
    <div>
      <form id="warehouse-form">
        <h2>Please define shelf names within each zone of your warehouse</h2>
        <table>
          <thead>
            <tr>
              {/* TODO: use newWarehouseData*/}
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
        <div className={styles.btnWrapper}>
          {showSuccessMsg && (
            <span className={styles.successMsg}>
              New warehouse submitted successfully
            </span>
          )}
          {showErrorMsg && (
            <span className={styles.errorMsg}>
              There was an error when submitting your request
            </span>
          )}
          <button
            id="submit-warehouse-btn"
            className={styles.submitBtn}
            data-testid="submit-warehouse-btn"
            type="button"
            onClick={submitWarehouse}
          >
            Submit New Warehouse
          </button>
        </div>
      </form>
    </div>
  );
}
