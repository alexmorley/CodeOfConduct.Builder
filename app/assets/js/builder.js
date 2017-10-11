tinymce.init({

    selector: `#rightFrame`,
    plugins: "table fullscreen autolink autoresize help image paste code",
    menubar: "view help edit tools",
    init_instance_callback: editor => {

        editor.on("input", () => $("#ext_selector").val("none"));
    }
});