const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.contact.create(data, { files });
    } else {
      entity = await strapi.services.contact.create(ctx.request.body);
    }

    entry = sanitizeEntity(entity, { model: strapi.models.contact });

    if(entry.nom && entry.prenom && entry.email && entry.telephone && entry.message !== null){

      //if entry is not empty -> send mail and return
      const sendingEmail = await strapi.plugins['email'].services.email.send({
        to: 'isabelle.ghiste@homesafehome.ch',
        from: 'contact@homesafehome.ch',
        subject: `Une nouvelle demande de contact`,
        text: `${entry.nom} ${entry.prenom} ${entry.email} ${entry.telephone} ${entry.message}`
      });

      console.log('entry created', entry)

      return entry;
    }
    else{
      console.log('entry not ok')
    }
  },
};