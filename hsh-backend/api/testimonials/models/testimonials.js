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
      axios.post('http://frontend.homesafehome.ch/rebuild', entry)
        .catch(() => {
          // Ignore
        }
        );
    },
    async afterUpdate(entry) {
      axios.post('http://frontend.homesafehome.ch/rebuild', entry)
        .catch(() => {
          // Ignore
        }
        );
    },
    async afterDestroy(entry) {
      axios.post('http://frontend.homesafehome.ch/rebuild', entry)
        .catch(() => {
          // Ignore
        }
        );
    },
  },
};
