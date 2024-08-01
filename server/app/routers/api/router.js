const express = require('express');
const itemsRouter = require('./items/router');
const programsRouter = require('./programs/router');

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

router.use("/items", itemsRouter);
router.use('/programs', programsRouter);
/* ************************************************************************* */

module.exports = router;
