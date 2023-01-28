'use strict'

const usersRoutes = require('./users')
const shipmentsRoutes = require('./shipments')
const levelsRoutes = require('./levels')
const transactionsRoutes = require('./transactions')
const webRoutes = require('./web')

module.exports = app => {
  app.use('/', webRoutes)
  app.use('/users', usersRoutes)
  app.use('/shipments', shipmentsRoutes)
  app.use('/levels', levelsRoutes)
  app.use('/transactions', transactionsRoutes)
}
