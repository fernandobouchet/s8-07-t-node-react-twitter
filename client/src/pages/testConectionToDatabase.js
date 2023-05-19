import React, { useState } from "react";

function testConectionToDatabase() {
  const [age, setAge] = useState("");
  const handleSaveAge = async () => {
    try {
      const response = await fetch("/api/save-age", {
        method: "POST",
        body: JSON.stringify({ age }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("Edad guardada exitosamente en la base de datos.");
      } else {
        const errorData = await response.json();
        console.error(errorData.error);
      }
    } catch (error) {
      console.error("Error al guardar la edad:", error);
    }
  };
  return (
    <div>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleSaveAge}>Guardar Edad</button>
    </div>
  );
}

export default testConectionToDatabase;

/* export async function getServerSideProps(context) {
  try {
    const session = await getSession(context);
    console.log(session);
    await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    const client = await clientPromise;
    const db = client.db("twitter-test");
    /* const accountsData = await db.collection("accounts").find({}).toArray();
    console.log(accountsData); */
// Consulta y muestra los datos de la colección "users"
/*     const usersData = await db.collection("users").find({}).toArray(); 
    console.log(usersData); */
//
// Then you can execute queries against your database like so:
// db.find({}) or any of the MongoDB Node Driver commands
/*
    return {
      props: { isConnected: true, session },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
} */
