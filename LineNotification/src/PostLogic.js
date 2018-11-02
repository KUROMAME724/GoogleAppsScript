/*
  通知Logic
  Postしたいメッセージと通知したいのtokenを渡す。

  author KUROMAME
  reference https://www.indetail.co.jp/blog/180411/
*/
function sendHttpPost(message, token) {
  //LINE Notifyに送るリクエストを設定
  const options = {
    "method"  : "post",
    "payload" : "message=" + message,
    "headers" : { "Authorization" : "Bearer " + token }
  };

   //リクエスト送信
   UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}