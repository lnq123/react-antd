/**
 * Events.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */


module.exports = {
  // schema: true,
  attributes: {
    title:              { type: 'string', required: true},
    dateStart:          { type: 'string', required: true},
    dateEnd:            { type: 'string', required: true },
    price:              { type: 'number', required: true},
    content:            { type: 'string', required: true },
    views:              { type: 'number', defaultsTo: 0},
  },
};