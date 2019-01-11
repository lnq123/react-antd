/**
 * NewsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
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
};