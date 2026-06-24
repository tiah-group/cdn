function handleFieldVisibility() {
    const currentPage = lintone.page();
    // 新規登録画面では編集専用フィールドを非表示にする
    const addOnlyHiddenFields = ["Phone"];
    if (currentPage === "add") {
        addOnlyHiddenFields.forEach(function (fieldCode) {
            const el = lintone.getFieldElement(fieldCode);
            if (el) el.style.display = "none";
        });
    }

    if (currentPage === "edit") {
        addOnlyHiddenFields.forEach(function (fieldCode) {
            const el = lintone.getFieldElement(fieldCode);
            if (el) el.style.display = "";
        });
    }
}
lintone.on("create.show", function (event) {
    setTimeout(handleFieldVisibility, 0);
    return event;
});
lintone.on("edit.show", function (event) {
    setTimeout(handleFieldVisibility, 0);
    return event;
});
lintone.editSubmit =handleSubmit;
