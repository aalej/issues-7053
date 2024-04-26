# Repro for issue 7053

## Versions

firebase-tools: v13.7.5<br>
platform: macOS Sonoma 14.4.1

## Steps to reproduce

1. Replace all instances of `PROJECT_ID` with your actual project id
1. Add a `service-account.json` file inside `functions` directory
1. Run `cd functions`
1. Run `npm i`
1. Run `cd ../`
1. Run `firebase deploy --only functions:testUseAdmin --project PROJECT_ID`
   - No errors raised

```
i  functions: ensuring required API run.googleapis.com is enabled...
i  functions: ensuring required API eventarc.googleapis.com is enabled...
i  functions: ensuring required API pubsub.googleapis.com is enabled...
i  functions: ensuring required API storage.googleapis.com is enabled...
✔  functions: required API run.googleapis.com is enabled
✔  functions: required API storage.googleapis.com is enabled
✔  functions: required API eventarc.googleapis.com is enabled
✔  functions: required API pubsub.googleapis.com is enabled
i  functions: generating the service identity for pubsub.googleapis.com...
i  functions: generating the service identity for eventarc.googleapis.com...
✔  functions: functions folder uploaded successfully
i  functions: updating Node.js 20 (2nd Gen) function testUseAdmin(europe-west3)...
✔  functions[testUseAdmin(europe-west3)] Successful update operation.
i  functions: cleaning up build files...

✔  Deploy complete!
```

## Notes

`test-app` is only used to check if the deployed function works
