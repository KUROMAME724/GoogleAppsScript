function myFunction() {
  //電車遅延情報をJSON形式で取得
  var json = JSON.parse(UrlFetchApp.fetch("https://rti-giken.jp/fhc/api/train_tetsudo/delay.json").getContentText());
  //路線名を指定
  var name="函館本線";
  //運営会社名を指定
  var company="JR北海道";
  var message="";

  for each(var obj in json){
    //指定した路線名と運営会社名に一致する遅延情報を取得
    if(obj.name === name && obj.company === company){

      message = company + name + "が遅延しています";
    }
  }

  if(!message){
    message = "現在遅延情報はありません";
  }

  //遅延情報をLINE Notifyに送信
  sendHttpPost(message);
}

function sendHttpPost(message){
  //アクセストークンを設定
  var token = ["tcp9ftHyJH42A7Pshfgj1CxrpUxK5QqzsUERSqFIeBQ"];
  //LINE Notifyに送るリクエストを設定
  var options =
   {
     "method"  : "post",
     "payload" : "message=" + message,
     "headers" : {"Authorization" : "Bearer "+ token}

   };

   //リクエスト送信
   UrlFetchApp.fetch("https://notify-api.line.me/api/notify",options);
}