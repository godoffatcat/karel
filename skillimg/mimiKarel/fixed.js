// 图标位置的定位坐标、宽高
// 按下按键之后要在这些坐标上画图
var eleFix = function(image, x) {
    return {
        x : x,
        y : 100, 
        w:40,
        h: 40,
        image : image,
    }
}
var eleAry = [
    eleFix(eleList.ice[0], 50),
    eleFix(eleList.thunder[0], 100),
    eleFix(eleList.fire[0], 150),
]

// var  firstEle = eleFix(150)
// var secondEle = eleFix(210)
// var thirdEle = eleFix(270)


// 技能图标的定位坐标、宽高
var skillFix = function(image, x) {
    return {
        x : x,
        y : 300, 
        w: 80,
        h: 80,
        image : image,
    }
}

var randomImage = function() {
    return skillList.tornado[0]
}

var skillAry = [
    skillFix(randomImage(), 200 ),
    skillFix(skillList.coldsnap[0], 300),
    skillFix(skillList.ghostwalk[0], 400),
    skillFix(skillList.emp[0], 500),
    skillFix(skillList.tornado[0], 600),
    skillFix(skillList.sunstrike[0], 700,),
]

// var firstSkill = [200]
// var secondSkill = skillFix(300)
// var thirdSkill = skillFix(400)
// var fouthSkill = skillFix(500)
// var fifthSkill = skillFix(600)
// var sixthSkill = skillFix(700)