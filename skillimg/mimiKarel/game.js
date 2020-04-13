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
  inputSkill = [];
  window.addEventListener("keydown", (event) => {
    // 第一个输入的元素将会删除，右边元素左移
    if (inputSkill.length > 2) {
      inputSkill.splice(0, 1);
    }

    //按键判断区
    if ([event.key] == "q") {
      const e1 = eleAry[0];
      loadPic(e1.image, e1.x, e1.y, e1.w, e1.h); // loadPic 接受参数是path、xywh
      ice.alive = true;
      inputSkill.push("q");
    } else if ([event.key] == "w") {
      const e2 = eleAry[1];
      loadPic(e2.image, e2.x, e2.y, e2.w, e2.h);
      thunder.alive = true;
      inputSkill.push("w");
    } else if ([event.key] == "e") {
      const e3 = eleAry[2];
      loadPic(e3.image, e3.x, e3.y, e3.w, e3.h);
      fire.alive = true;
      inputSkill.push("r");
    }
  });
};

//技能(独立)
// 随机出现的技能列表，也需要做多个坐标，以及图片导入。
var Skill = function () {
  var skill001 = skillAry[0];
  var o = {
    alive: false,
  };
  skill001.done = function () {
    loadPic(skill001.image, skill001.x, skill001.y, skill001.w, skill001.h);
    buttonS.style.display = "none";
    o.alive = true;
  };

  buttonS.onclick = function () {
    skill001.done();
  };
  // 输入正确，需要三件事
  // 1 清除当前技能图片
  // 2 后位前补
  // 3 元素图标清空
  yepskill = function () {
    o.alive = false;
    console.log('o.alive', o.alive)
  };
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
          yepskill();
        }
      }
    }
  }
};

window.addEventListener("keydown", (event) => {
  if ([event.key] == "r") {
    judge();
    console.log('judge?')
  }
});

Switch = function () {
  Skill();
  eleKey();
};

Switch();
