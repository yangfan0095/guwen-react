//'util/genhtml.js'
export function createMarkup(text) {

    return {
        __html: getWbContent(text)
    };
}

export const getWbContent = (content) => {
    /*
     *
     *一些标签替换等操作
     *
     */
    let contentHTML = content;
    return contentHTML;
}