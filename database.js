import { Sequelize } from "sequelize";

const db = new Sequelize("multicurrency", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
