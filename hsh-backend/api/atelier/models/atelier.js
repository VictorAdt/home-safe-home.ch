'use strict';

/**
 * Lifecycle callbacks for the `Post` model.
 */

module.exports = {  
    afterCreate: async (entry) => {
      axios.post('http://backend.homesafehome.ch/', entry)
        .catch(() => {
            // Ignore
          }
        );
    },
  
    afterUpdate: async (entry) => {
      axios.post('http://backend.homesafehome.ch/', entry)
        .catch(() => {
            // Ignore
          }
        );
    },
  
    afterDestroy: async (entry) => {
      axios.post('http://backend.homesafehome.ch/', entry)
        .catch(() => {
            // Ignore
          }
        );
    }
  };