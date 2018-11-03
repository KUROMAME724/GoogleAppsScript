function main() {
    const ONE_YEAR_MILLISECOND = 86400000;
    const targetDate = new Date("2015/11/01");
    const today = new Date();

    var termDay = Math.ceil((today - targetDate) / ONE_YEAR_MILLISECOND);

    var message = "\n二人が付き合い初めて" + termDay + "日経過しました！"

    sendHttpPost(message, secretRoomToken());
}