const models = require('../models');

exports.main = async (req, res, next) => {
        try {
            const promise = await models.bbs.findAll();
            res.json(promise);

        } catch (e) {
            console.error(e);
            next(e);
        }
    };

