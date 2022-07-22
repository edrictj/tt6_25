import { Sequelize } from "sequelize";
import db from "../database.js";

const { DataTypes } = Sequelize;

const ExchangeRate = db.define(
  "exchange_rate",
  {
    id: {
      type: DataTypes.INTEGER,
    },
    base_currency: {
      type: DataTypes.STRING,
    },
    exchange_currency: {
      type: DataTypes.STRING,
    },
    rate: {
      type: DataTypes.FLOAT,
    },
  },
  {
    freezeTableName: true,
  }
);

export default ExchangeRate;
