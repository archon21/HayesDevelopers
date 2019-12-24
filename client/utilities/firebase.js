import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { config } from '../../secrets';

firebase.initializeApp(config);
const settings = { /* your settings... */ timestampsInSnapshots: true };
const db = firebase.firestore();
db.settings(settings);

export { db };
