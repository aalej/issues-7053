// Content of "index.ts"
// Change "XXX" for actual credentials or path
import {onCall} from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import {getFirestore} from "firebase-admin/firestore";
import * as fs from "fs";

const credentialPath = "./service-account.json";
const credentialsFile = fs.readFileSync(credentialPath, "utf-8");
const serviceAccountCredentials = JSON.parse(
  credentialsFile
) as admin.ServiceAccount;

const prodConfig: admin.AppOptions = {
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  credential: admin.credential.cert(serviceAccountCredentials),
};

admin.initializeApp(prodConfig);
const firestore = getFirestore();

const testUseAdmin = onCall({region: "europe-west3"}, async () => {
  console.log("--> testUseAdmin running!");
  await firestore.collection("test").add({name: "HeyItWorks!"});
});
export {testUseAdmin};
