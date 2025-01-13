import { client } from "./db";

const getUsers = async (email: string) => {
  try {
    await client.connect();
    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email];
    const result = await client.query(query, values);

    if (result.rows.length > 0) {
      console.log("User found!", result.rows[0]);
      return result.rows[0];
    } else {
      console.log("No user found with the given email");
      return null;
    }
  } catch (error) {
    console.error("Error during fetching the user", error);
  }
};

getUsers("harvey@gmail.com").catch(console.error);
