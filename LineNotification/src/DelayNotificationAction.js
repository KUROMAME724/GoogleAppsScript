/*
  電車の遅延情報をLineに通知する
  指定の路線に遅延がない場合は通知しない
  通知日時 : 平日 07:00〜08:00, 17:00〜18:00

  author KUROMAME
  reference https://www.indetail.co.jp/blog/180411/
*/
function main() {
  //電車遅延情報をJSON形式で取得
  var delayInformationJson = JSON.parse(UrlFetchApp.fetch("https://rti-giken.jp/fhc/api/train_tetsudo/delay.json").getContentText());
  //路線名を指定
  var HANZOMON_LINE = "半蔵門線";
  //運営会社名を指定
  var TOKYO_METRO = "東京メトロ";
  var message = "";

  for each(var delayInformation in delayInformationJson) {
    //指定した路線名と運営会社名に一致する遅延情報を取得
    if(delayInformation.company === TOKYO_METRO && delayInformation.name === HANZOMON_LINE) {
      message = company + name + "が遅延しています";
    }
  }

  if(!message) {
    return;
  }

  //遅延情報をLINE Notifyに送信
  sendHttpPost(message, delayNotificationToken());
}