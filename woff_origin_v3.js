function handleSubmit(event) {
    const r = event.record;
    const currentPage = lintone.page();

    if (currentPage === "add") {
        // 新規登録画面：全必須項目をチェック
        if (!r?.Phone?.value) {
            lintone.sendMessage("電話番号は必須項目です。入力してください。", "error");
            return false;
        }
    }
    if (currentPage === "edit") {
        // 編集画面：重要項目のみチェック
        if (!r?.class_code?.value) {
            lintone.sendMessage("顧客名は必須項目です。入力してください。", "error");
            return false;
        }
    }
    return event;
}
lintone.createSubmit = handleSubmit;
lintone.editSubmit = handleSubmit;
