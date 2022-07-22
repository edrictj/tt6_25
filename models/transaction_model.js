import { Sequelize } from "sequelize";
import db from "../database.js";

const { DataTypes } = Sequelize;

const Transaction = db.define(
  "transaction",
  {
    id: {
      type: DataTypes.INTEGER,
    },
    wallet_id: {
      type: DataTypes.INTEGER,
    },
    debit_id: {
      type: DataTypes.INTEGER,
    },
    debit_currency: {
      type: DataTypes.STRING,
    },
    debit_amount: {
      type: DataTypes.FLOAT,
    },
    credit_id: {
      type: DataTypes.INTEGER,
    },
    credit_currency: {
      type: DataTypes.STRING,
    },
    credit_amount: {
      type: DataTypes.FLOAT,
    },
    description: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    created_by: {
      type: DataTypes.STRING,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
    updated_by: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Transaction;
