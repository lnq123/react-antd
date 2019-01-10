/**
 * EventsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    findOne: async function (req, res) {
        try {
            let event = await Events.findOne({ id: req.params.id });
            await Events.update(req.params.id).set({views: event.views + 1});
            event.views += 1
            return res.status(200).json({ status: 'Success', event });
        } catch (err) {
            sails.log.debug(err);
            return res.status(204).json({ err: 'Events failed', err });
        }
    },
};