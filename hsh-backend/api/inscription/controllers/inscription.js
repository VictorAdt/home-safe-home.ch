const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.inscription.create(data, { files });
    } else {
      entity = await strapi.services.inscription.create(ctx.request.body);
    }

    entry = sanitizeEntity(entity, { model: strapi.models.inscription });

    if(entry.nom && entry.prenom && entry.email && entry.adresse && entry.npa && entry.localite && entry.telephone && entry.atelier.id  && entry.participant !== null){

      //if entry is not empty -> send mail and return
      const sendingEmail = await strapi.plugins['email'].services.email.send({
        to: 'tripleo.vk@gmail.com',
        from: 'inscription@homesafehome.ch',
        subject: `Une nouvelle inscrpition à un atelier`,
        text: `${entry.nom} ${entry.prenom} ${entry.email} ${entry.telephone} ${entry.adresse} ${entry.participant} ${entry.localite} ${entry.npa} pour l'atelier ${entry.atelier.titre}`
      });

      console.log('entry created', entry)

      return entry;
    }
    else{
      console.log('entry not ok')
    }
  },
};