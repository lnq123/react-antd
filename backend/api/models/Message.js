/**
 * Message.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */


module.exports = {
  // schema: true,
  attributes: {
    name:              { type: 'string', required: true},
    email:             { type: 'string', required: true },
    object:            { type: 'string', required: true },
    content:           { type: 'string', required: true },
  },
};
