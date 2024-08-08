chrome.action.onClicked.addListener(function(tab) {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {
    var url = tabs[0].url;
    var targetLang = "ja"; // 目的言語を設定 (例: 英語)
    var translateUrl = "https://translate.google.com/translate?sl=auto&tl=" + targetLang + "&u=" + encodeURIComponent(url);
    chrome.tabs.create({ url: translateUrl });
  });
});