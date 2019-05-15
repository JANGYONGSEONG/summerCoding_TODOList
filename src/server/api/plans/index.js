const express = require('express');
const router = express.Router();

const controller = require('./plans.controller');


router.get('/',controller.show);

router.post('/',controller.create);

router.delete('/:id',controller.destroy);

router.patch('/title/:id/:title',controller.modifyTitle);

router.patch('/content/:id/:content',controller.modifyContent);

router.patch('/date/:id/:date',controller.modifyDate);

router.patch('/priority/:id/:priority',controller.modifyPriority);

router.patch('/status/:id/:status',controller.modifyStatus);

/*
router.patch('/:id/:alarm',controller.modifyAlarm);
*/

module.exports = router;
