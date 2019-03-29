var config = {
  apiKey: "AIzaSyCj5h51JRDTikN1O-xvuoV2YV1--QoCXyM",
  authDomain: "crud-62bd1.firebaseapp.com",
  databaseURL: "https://crud-62bd1.firebaseio.com",
  projectId: "crud-62bd1",
  storageBucket: "crud-62bd1.appspot.com",
  messagingSenderId: "548182042887"
};

//Initialize firebase (database)
firebase.initializeApp(config);

//Initialize firestore (Database methods)
let db = firebase.firestore();

//Collection destination
const fireRefToCollection = db.collection('products');

export {db, fireRefToCollection};



