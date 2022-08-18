var newman = require("newman");

// require newman in your project

// call newman.run to pass `options` object and wait for callback
newman
  .run({
    collection: require("../collections/CustomerOrder.postman_collection.json"),
    environment: require("../environments/customerOrder_STG.postman_environment.json"),
    reporters: ["htmlextra"],
    reporter: { htmlextra: { export: "../report/customerOrder-STG-Report-"+new Date().toISOString()+".html",
            // template: './template.hbs'
            // logs: true,
            // showOnlyFails: true,
            // noSyntaxHighlighting: true,
            // testPaging: true,
            // browserTitle: "My Newman report",
            // title: "My Newman Report",
            // titleSize: 4,
            // omitHeaders: true,
            // skipHeaders: "Authorization",
            // omitRequestBodies: true,
            // omitResponseBodies: true,
            // hideRequestBody: ["Login"],
            // hideResponseBody: ["Auth Request"],
            // showEnvironmentData: true,
            // skipEnvironmentVars: ["API_KEY"],
            // showGlobalData: true,
            // skipGlobalVars: ["API_TOKEN"],
            // skipSensitiveData: true,
            // showMarkdownLinks: true,
            // showFolderDescription: true,
            // timezone: "Australia/Sydney",
            // skipFolders: "folder name with space,folderWithoutSpace",
            // skipRequests: "request name with space,requestNameWithoutSpace",
            // displayProgressBar: true
 } },
    insecure: true, // allow self-signed certs, required in postman too
    timeout: 180000, // set time out
  })
  .on("start", function (err, args) {
    // on start of run, log to console
    console.log("running a collection...");
  })
  .on("done", function (err, summary) {
    if (err || summary.error) {
      console.error("collection run encountered an error.");
    } else {
      console.log("collection run completed.");
    }
  });
