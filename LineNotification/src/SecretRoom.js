function secretRoomMain() {
    const ONE_YEAR_MILLISECOND = 86400000;
    const targetDate = new Date("2015/11/01");
    const today = new Date();

    var message = '';
    var termDay = Math.ceil((today - targetDate) / ONE_YEAR_MILLISECOND);
    if (Number.isInteger(termDay/365)) {
        message = \n二人が付き合い初めて" + termDay/365 + "年が経過しました！
    }
    message = "\n二人が付き合い初めて" + termDay + "日経過しました！"
    Logger.log(message);
    //sendHttpPost(message, secretRoomToken());
}
