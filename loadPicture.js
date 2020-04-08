// 纯函数，仅提供写入读取和渲染的图片区。

var imageFromPath = function (path) {
    var img = new Image()
    img.src = path
    console.log('skill path', img.src)
    return img
}
// console.log('引入图片地址', imageFromPath)

var loadPic = function(image, x, y, w, h) {
    context.drawImage(image, x, y, w, h)
}