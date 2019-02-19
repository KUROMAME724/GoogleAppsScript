function secretRoomMain() {
    const ONE_DAY_MILLISECOND = 86400000;
    const targetDate = new Date("2015/11/01");
    const today = new Date();
    var message = '';
  
    var elapsedDay = Math.ceil((today - targetDate) / ONE_DAY_MILLISECOND);
  
    // 付き合った記念日は特別なのでキリ番判定とは別判定にしておこう
    if ((elapsedDay % 365) == 0 ) {
        var oneYearMessage = "\n" +
                             "付き合ってからちょうど" + elapsedDay/365 + "年が経過したよ！\n" +
                             "ちなみに日数に換算すると" + elapsedDay + "日なんだけど！\n" +
                             "時に換算すると"　+ elapsedDay*24 + "時間で！\n" +
                             "さらに分に換算するとなんと" + elapsedDay*24*60 + "分となって！\n" +
                             "さらに秒に換算するとななななんと" + elapsedDay*24*60*60 + "秒にもなってしまうのである！！！\n" +
                             "なんかもうすごいよね！途方もない時間を一緒に過ごしているんだね！\n"　+
                             "これからも楽しい時間を一緒に作っていこうね！！"
        sendHttpPost(oneYearMessage, secretRoomToken());
    }
    // 大きい方優先
    if ((elapsedDay % 1000) == 0) {
        message = "\n" +
                  "なんと！今日で！付き合ってから!ちょうどピッタリ" + elapsedDay + "日経過しました！！\n" +
                  "とてもすごいですね〜。歴史感じちゃいますね〜〜〜〜"
    } else if (elapsedDay % 100 == 0) {
        message = "\n" + 
                  "今日は、付き合い初めてからちょうど" + elapsedDay + "日なんですよ!\n" +
                  "なんでもない1日だったけど、ちょっとだけ特別感あるよね！また100日後に知らせるね！"
    }
    // メッセージがあれば送信。なければ何もしない
    if (message) {
        sendHttpPost(message, secretRoomToken());
    }
}
