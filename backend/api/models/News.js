/**
 * News.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */


module.exports = {
  // schema: true,
  attributes: {
    title:              { type: 'string', required: true },
    titleImg:           { type: 'string' },
    content:            { type: 'string', required: true },
    views:              { type: 'number', defaultsTo: 0},
  },
};
