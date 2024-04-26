// Used to make a request to the Cloud Function
import { initializeApp } from "firebase/app";
import {
  connectFunctionsEmulator,
  getFunctions,
  httpsCallable,
} from "firebase/functions";

const app = initializeApp({
  projectId: "PROJECT_ID",
});
const functions = getFunctions(app, "europe-west3");
const useEmulator: boolean = true;

// if (useEmulator) {
//   connectFunctionsEmulator(functions, "127.0.0.1", 5001);
// }

async function main() {
  console.log("Running");
  const triggerCallable = httpsCallable(functions, "testUseAdmin");
  const result = await triggerCallable({
    message: "Hello world",
    count: 1,
  });
  console.log(result);
}

main();
