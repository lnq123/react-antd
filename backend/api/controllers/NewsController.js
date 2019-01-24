/**
 * NewsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    create: async function (req, res) {
        if (!req.body.password && sails.config.custom.defaultPassword.asDefaultPassword === true) {
            req.body.password = sails.config.custom.defaultPassword.password;
            req.body.confirmPassword = sails.config.custom.defaultPassword.password;
        }
        try {
            // console.log('REQUEST', req.token.id);
            req.body.author = req.token.id;
            let createdNews = await News.create(req.body).fetch();
            return res.status(201).json({ news: createdNews });
        } catch (err) {
            return res.status(404).json({ err: err });
        }
    },
    find: async function (req, res) {
        try {
            console.log(req.query);
            // req.param('email');
            
            const news = await News.find(req.query).populate('author');
            return res.status(200).json({ status: 'Success', news });
        } catch (err) {
            sails.log.debug(err);
            return res.status(204).json({ err: 'News failed', err });
        }
    },
    findOne: async function (req, res) {
        try {
            let news = await News.findOne({ id: req.params.id });
            await News.update(req.params.id).set({views: news.views + 1});
            news.views += 1
            return res.status(200).json({ status: 'Success', news });
        } catch (err) {
            sails.log.debug(err);
            return res.status(204).json({ err: 'News failed', err });
        }
    },
    like: async function (req, res) {
        try {
            let news = await News.findOne({ id: req.params.id });
            await News.update(req.params.id).set({like: news.like + 1});
            news.like += 1
            return res.status(200).json({ status: 'Success' });
        } catch (err) {
            sails.log.debug(err);
            return res.status(204).json({ err: 'News failed', err });
        }
    },
    dislike: async function (req, res) {
        try {
            let news = await News.findOne({ id: req.params.id });
            await News.update(req.params.id).set({dislike: news.dislike + 1});
            news.like += 1
            return res.status(200).json({ status: 'Success' });
        } catch (err) {
            sails.log.debug(err);
            return res.status(204).json({ err: 'News failed', err });
        }
    },
};