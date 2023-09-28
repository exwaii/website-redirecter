const blockedUrls = ['*://chess.com/*', '*://twitter.com/*'];

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {redirectUrl: "https://redirected.com/"};
  },
  {urls: blockedUrls},
  ["blocking"]
);
