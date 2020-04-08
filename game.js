// var audio = document.getElementById('yepRight')
// 图片导入
var imageFromPath = function (path) {
    var img = new Image()
    img.src = path
    console.log('skill path', img.src)
    return img
}
console.log('引入图片地址', imageFromPath)

// 图片加载
// var drawPic = image.onload = function (image) {
//     context.drawImage(image, 0, 0)
// }

//技能(独立)
// 随机出现的技能列表，也需要做多个坐标，以及图片导入。
var Skill = function() {
    var image = imageFromPath('skillimg/invoker_deafening.png')
    console.log('imageskill', image)
    var o = {
        image : image,  
        alive : true,
        bgm: false,
    }
    image.onload = function () {
        context.drawImage(o.image, 400, 250, 80, 80)
    }
}
 
var loadPic = function(image) {
    context.drawImage(image, 300, 150, 80, 80)
}
// 当前输入的元素（独立）
// 图片从左往右排列， 所以应该做的是3个坐标。todo
var eleKeyQ = function() {
    var image = imageFromPath('skillimg/invoker_ice.png')
    console.log('image ice', image)
    var o = {
        image : image,  
        alive : true,
    }
    loadPic(o.image)
    // image.onload = function () {
    //     context.drawImage(o.image, 300, 150, 80, 80)
    // }

// 技能判断(监听)
    window.addEventListener('keydown', event => {
        if ([event.key] == 'q') {
            console.log('keypressQ', image)

        } else if ([event.key] == 'w') {
            console.log('keypressW', image)
        } else if ([event.key] == 'e') {
            console.log('keypressE', image)
        }
    })
}

var Switch = function() {
    Skill()
    eleKeyQ()
}

Switch()
