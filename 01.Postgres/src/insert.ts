import { client } from "./db";

const InsertQuery = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    await client.connect();
    const insertQuery =
      "INSERT INTO users(username, email,password)VALUES($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log("Insertion successful", res);
  } catch (error) {
    console.error("Error during the insertion", error);
  }
};

InsertQuery("Harvey", "harvey@gmail.com", "harvey12345").catch(console.error);
