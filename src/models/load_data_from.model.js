const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const LoadDataFrom = sequelize.define('LoadDataFrom', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, // We will use your specific IDs
        autoIncrement: true // Important: Since you provided specific IDs (1, 2, 4...)
    },
    isloaddatafromdb: {
        type: DataTypes.BOOLEAN, // e.g., "Plastic"
        allowNull: false
    }
}, {
    tableName: 'tbl_load_data_from',
    timestamps: false
});

module.exports = LoadDataFrom;