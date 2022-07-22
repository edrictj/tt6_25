import { Sequelize } from "sequelize";

const db = new Sequelize("multicurrency", "root", "", {
  host: "localhost",
  dialect: "mysql",
  user: "root",
  password: "Atleast8#"
});

export default db;
