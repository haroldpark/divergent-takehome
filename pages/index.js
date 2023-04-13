import Head from "next/head";
import styles from "../styles/Home.module.css";
import Form from "../components/form.js";

/*
    ***Data structures***

    From the requirements, we can gather that there are three main models: Warehouses, zones, and shelves
    A warehouse has a one-to-many relationship with zones
    A zone has a one-to-many relationship with shelves

    1. Warehouse
    (Prop) - [ValueType]
    Id - UUID

    2. Zone
    (Prop) - [ValueType]
    Id - UUID
    Label - number (1 to 12)
    WarehouseId - Foreign Key

    3. Shelves
    (Prop) - [ValueType]
    Id - UUID
    Name - string
    ZoneId - Foreign Key
*/

/*
    ***Next features***

    1. Persistent data storage with DB
    2. Show currently existing warehouses on the page
    3. Option to fill name inputs with random names for the lazy bones
    4. UI/UX enhancements like toast messages upon successful warehouse submit
    5. Typescript
*/

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form />
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Arial, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        input {
          width: 100px;
        }
      `}</style>
    </div>
  );
}
