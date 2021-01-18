'use strict';

/**
 * Lifecycle callbacks for the `Post` model.
 */

const request = require('request');
const axios = require('axios')


module.exports = {
  lifecycles: {
    async afterCreate(entry) {
    console.log('oupss')
      axios.post('10.102.3.245', entry)
        .catch(() => {
          // Ignore
        }
        );
    },
    async afterUpdate(entry) {
      axios.post('10.102.3.245', entry)
        .catch(() => {
          // Ignore
        }
        );
    },
    async afterDestroy(entry) {
      axios.post('10.102.3.245', entry)
        .catch(() => {
          // Ignore
        }
        );
    },
  },
};
