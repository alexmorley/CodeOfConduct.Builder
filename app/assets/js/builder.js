tinymce.init({

    selector: `#rightFrame`,
    plugins: 'wordcount table fullscreen autolink autoresize help image paste code',
    menubar: 'view help edit tools',
    valid_elements: 'abbr[!title],h1,h2,h3,h4,h5,h6,img[!src|alt],p,a[!href],table,' +
    'td,tr,th,tbody,thead,tfoot,strong,em,u,ul,ol,li,q,blockquote,pre,br',
    paste_data_images: true
});