const models = require('../models');
const Joi = require('joi');

const schema = Joi.object().keys({
    name: Joi.number().integer().min(1900).max(2018)
});

exports.main = async (req, res, next) => {
    try {
        const promise = await models.bbs.findAll();
        /*
        const promise = await models.bbs.findAll({
            attributes: ['id','name'],
            where: {id: 1}
        });
        */
        res.json(promise);

    } catch (e) {
        console.error(e);
        next(e);
    }
};


exports.create = async (req, res, next) => {

    try {
        const {error, value} = schema.validate(req.body);
        if (error != undefined) {
            throw new Error("invalid error..");
        }
        const promise = await models.bbs
            .create({name: req.body.name, createdAt: new Date()})
            .then(board => {
                res.json(board);
            })
            .catch(error => {
                res.error(error);
            });

            res.json(promise);
    } catch (e) {
        console.error(e);
        next(e);
    }
}


exports.get = async (req, res, next) => {
    try {
        const promise = await models.bbs.findAll({
            attributes: ['id','name'],
            where: {id: req.params.id}
        });
        res.json(promise);

    } catch (e) {
        console.error(e);
        next(e);
    }
};
