import { db } from './client/utilities/firebase';
import fs from 'fs';
// process.on('warning', e => console.warn(e.stack));

require('@babel/register')({});

import {
  paramsApplier as applyParams,
  sitemapBuilder as buildSitemap
} from 'react-router-sitemap';

const getIds = async () => {
  const propsRef = db.collection('properties');
  const devsRef = db.collection('development');
  const props = [];
  const devs = [];
  const leasable = [];
  const propsSnaps = await propsRef.get();
  const devsSnaps = await devsRef.get();
  propsSnaps.forEach(snapshot => {
    snapshot.data().leasable && leasable.push(snapshot.id);
    props.push(snapshot.id);
  });
  devsSnaps.forEach(snapshot => devs.push(snapshot.id));
  return { props, devs, leasable };
};

const generateSitemap = async () => {
  try {
    const ids = await getIds();
    const paths = ['/holdings/:param/:subparam'];

    const config = {
      '/holdings/:param/:subparam': [
        { param: 'development', subparam: ids.devs },
        { param: 'all-properties', subparam: ids.props },
        { param: 'opportunities', subparam: ids.props }
      ]
    };
    const hostname = 'https://hayesdevelopers.firebaseapp.com';
    const staticPaths = [
      '/',
      '/hayes-team',
      '/property-management',
      '/about',
      '/privacy'
    ];
    const dynamicPaths = applyParams(paths, config);
    const sitemap = buildSitemap(hostname, [...staticPaths, ...dynamicPaths]);
    fs.writeFile('./public/sitemap.xml', sitemap.toString(), err => {
      console.error(err);
    });
  } catch (err) {
    console.error(err);
  }
};

generateSitemap().then(() => {
  console.log('Done creating Sitemap!');
});
