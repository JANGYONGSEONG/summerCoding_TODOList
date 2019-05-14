const express = require('express');
const router = express.Router();

const controller = require('./plans.controller');


router.get('/',controller.show);

router.post('/',controller.create);

/*
router.delete('/:id',controller.destroy);

router.patch('/:id/:title',controller.modifyTitle);

router.patch('/:id/:content',controller.modifyContent);

router.patch('/:id/:date',controller.modifyDate);

router.patch('/:id/:priority',controller.modifyPriority);

router.patch('/:id/:status',controller.modifyStatus);

router.patch('/:id/:alarm',controller.modifyAlarm);
*/

module.exports = router;
