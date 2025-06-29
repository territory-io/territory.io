import client from "./client";
import rebuildDB from "./seedData";

rebuildDB()
  .catch(console.error)
  .finally(() => client.end());
