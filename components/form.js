import styles from "../styles/Home.module.css";

export default function Form() {
  const SHELF_NUM = 10;
  const ZONE_NUM = 12;
  return (
    <div>
      <form>
        <h2>Please define shelf names within each zone of your warehouse</h2>
        <table>
          <tr>
            {[...Array(ZONE_NUM)].map((x, i) => (
              <th>Zone {i + 1}</th>
            ))}
          </tr>
          {[...Array(SHELF_NUM)].map((x, i) => (
            <tr>
              {[...Array(ZONE_NUM)].map((x, i) => (
                <td>
                  <input />
                </td>
              ))}
            </tr>
          ))}
        </table>
        <button type="submit">Submit New Warehouse</button>
      </form>
    </div>
  );
}
