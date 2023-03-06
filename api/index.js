
  //      _-.:.-_
  //   .'-/_:-:_\-'.
  //  /_'/__ |__'._'\
  // '__(___.)___ )_ '
  // (__(___ )___ )__)
  // .__(___.(__  )_ .
  //  \__\__ )__ /__/
  //   -__\ _(_ )__-
  //    \ _\_)./_ /
  //      \_.|_./
  //       |_|_|
  //         |
  //        [_]

//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
