function darkStyle()
{
    const styles = `<style id='bilibili-new-style-dark'>${getStyle("darkStyle")}</style>`;
    $("#bilibili-new-style-dark").remove();
    $("body").after(darkStyles);
}