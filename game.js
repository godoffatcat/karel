//技能(独立)
// 随机出现的技能列表，也需要做多个坐标，以及图片导入。
var Skill = function () {
  var image = skillList.deafening[0]
  var o = {
    image: image,
    x: 400,
    y: 250,
    w: 80,
    h: 80,
    bgm: false,
    displayFor: false,
  };
  // o.move = function() {
  //     o.x -= 100
  // }

  o.done = function () {
    o.displayFor = true;
  };

  buttonS.onclick = function () {
    o.done();
    console.log("display?", o.displayFor);
    loadPic(o.image, o.x, o.y, o.w, o.h);
  };
};

// 当前输入的元素（独立）..
// 如果技能正确，则alive回归false， 需要加个判断， 和skill联动
var eleKey = function () {
  var imageICE = loadPic(eleList.ice[0]);
  var imageTHUNDER = loadPic(eleList.thunder[0]);
  var imageFIRE = loadPic(eleList.fire[0]);

  var ice = {
    image: imageICE,
    alive: false,
  };

  var thunder = {
    image: imageTHUNDER,
    alive: false,
  };

  var fire = {
    image: imageFIRE,
    alive: false,
  };

  // 技能判断(监听)
  // 待修改： 坐标将以元素先后顺序为准。
  const inputSkill = [];
  window.addEventListener("keydown", (event) => {
    // 第一个输入的元素将会删除，右边元素左移
    if (inputSkill.length > 2) {
            inputSkill.splice(0, 1);
        }

        //按键判断区
    if ([event.key] == "q") {
      loadPic(eleAry[0]);
      ice.alive = true;
      inputSkill.push("q");
      console.log('当前输入', inputSkill)
    } else if ([event.key] == "w") {
      loadPic(eleAry[1]);
      thunder.alive = true;
      inputSkill.push("w");
      console.log('当前输入', inputSkill)
    } else if ([event.key] == "e") {
      loadPic(eleAry[2]);
      fire.alive = true;
      inputSkill.push("r");
      console.log('当前输入', inputSkill)
    }

  });

};

var judge = function () {
  let a = skillList.deafening;
  let b = inputSkill;
  if (a.length === b.length) {
    for (let i = 1; i < a.length; i++) {
      for (let j = 0; j < b.length; j++) {
        if (b[j] === a[i]) {
          b = b.filter(function (v) {
            return v !== b[j];
          });
        }
      }
    }
    yepskill()
} 
};

// window.addEventListener("keydown", (event) => {
//   if ([event.key] == "r") {
//     judge();
//   }
// });

Switch = function () {
  Skill();
  eleKey();
};

Switch();
