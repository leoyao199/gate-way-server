/**
 * A set of functions called "actions" for `email`
 */

export default {
  sendEmail: async (ctx, next) => {
    try {
      
      let row1 = ''
      let row2 = ''
      Object.keys(ctx.request.body).map(key => { row1 += `<td>${key}</td>`;row2 += `<td>${ctx.request.body[key]}</td>` })
      const html = `
      <div>
        <table border="1">
          <tr>
        ${row1}
          </tr>
          <tr>
            ${row2}
          </tr>
        </table>
      </div>
    `
      await strapi.plugins['email'].services.email.send({
        to: process.env.CS_EMAIL,
        subject: 'Contact Us',
        html ,
      });
      ctx.body =html
    } catch (err) {
      console.log(err)
      ctx.body = err;
    }
  }
};
