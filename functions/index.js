const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const adminConfig = JSON.parse(process.env.FIREBASE_CONFIG);
adminConfig.credential = admin.credential.cert(
  require('./hayesdevelopers-firebase-adminsdk-ktdyy-691e103d6d.json')
);
adminConfig.databaseURL = 'https://hayesdevelopers.firebaseio.com';
admin.initializeApp(adminConfig);
// console.log('STARTED');

const db = admin.firestore();


const fillTemplate = (res, title, desc, img) => {
  title = title
    ? title
    : 'Since 1974, Hayes Developers has been a leader in real estate development, leasing and property management of retail shopping centers. Our longevity and integrity are why many companies in the New England area trust the Hayes Team with their development needs.';
  desc = desc
    ? desc
    : (desc =
        'Since 1974, Hayes Developers has been a leader in real estate development, leasing and property management of retail shopping centers. Our longevity and integrity are why many companies in the New England area trust the Hayes Team with their development needs.');
  res.send(`<html>
      <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="${desc}"
        />
        <meta
            name="keywords"
            content="${desc.split(' ').join(',')}"
        />
        <meta property="og:title" content="${title}">
        ${img && `<meta property="og:image" content="${img}">`}
        <meta property="og:description" content="${desc}">
        <meta
          name="google-site-verification"
          content="rm0m4J1fq_w04P1fjIC62KG2snIJhDvaNUlT7VN5lUY"
        />

        <link rel="stylesheet" href="/js/css/style.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Oxygen|Montserrat|Questrial"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/Logos%2Flogo.png?alt=media&token=b8dff8c7-dafa-41cd-838c-a4b544a8a70c"
        />
        <link rel="manifest" href="/serviceworker/manifest.json" />
    <script defer src="/js/bundle.js"></script>
    <script src="/serviceworker.js"></script>
      </head>

      <body>
        <div id="app"></div>
      </body>
    </html>`);
};

//
exports.app = functions.https.onRequest(async (req, res) => {
  try {
    const { url } = req;
    const urlArr = url.split('/');

    if (urlArr.length > 3) {
      type =
        urlArr[
          urlArr.length - 1 !== '' ? urlArr.length - 2 : urlArr.length - 3
        ] === 'development'
          ? 'development'
          : 'properties';
      page =
        urlArr[
          urlArr.length - 1 !== '' ? urlArr.length - 1 : urlArr.length - 2
        ];

      const snapshot = await db
        .collection(type)
        .doc(page)
        .get();
      const data = snapshot.data();
      const { name, description, image } = data;
      fillTemplate(res, name, description, image);
    } else {
      fillTemplate(res);
    }
  } catch (err) {
    console.error(err);
    res.send(
      `<html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charset="UTF-8" />
            <meta
            name="Description"
            content="Since 1974, Hayes Developers has been a leader in real estate development, leasing and property management of retail shopping centers. Our longevity and integrity are why many companies in the New England area trust the Hayes Team with their development needs."
            />
            <meta
            name="google-site-verification"
            content="rm0m4J1fq_w04P1fjIC62KG2snIJhDvaNUlT7VN5lUY"
            />
            <title>Hayes Developers</title>
            <link rel="stylesheet" href="/js/css/style.css" />
            <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <link
            href="https://fonts.googleapis.com/css?family=Oxygen|Montserrat|Questrial"
            rel="stylesheet"
            />
            <link
            rel="icon"
            href="https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/Logos%2Flogo.png?alt=media&token=b8dff8c7-dafa-41cd-838c-a4b544a8a70c"
            />
            <link rel="manifest" href="/serviceworker/manifest.json" />
          <script defer src="/js/bundle.js"></script>
          <script src="/serviceworker.js"></script>
        </head>

        <body>
            <div id="app"></div>
        </body>
        </html>`
    );
  }
});

