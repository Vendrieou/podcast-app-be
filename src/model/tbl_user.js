const Sequelize = require('sequelize')
const db = require('../config/db.config')

module.exports = db.sequelize.define(
	'user',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		firstName: {
			type: Sequelize.STRING
		},
		lastName: {
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING
		},
		password: {
			type: Sequelize.STRING
		},
		created: {
			type: Sequelize.DATE,
			defaultValue: Sequelize.NOW
		}
	},
	{
		timestamps: false
	}
)
