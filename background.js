const blockedUrls = ['*://*.chess.com/*'];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        const originalUrl = encodeURIComponent(details.url);
        const redirectUrl = `https://httpbin.org/get?redirected_from=${originalUrl}`;
        return {redirectUrl: redirectUrl};
    },
    {urls: blockedUrls},
    ["blocking"]
);
