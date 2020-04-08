// var audio = document.getElementById('yepRight')
// 图片导入
var imageFromPath = function (path) {
  var img = new Image();
  img.src = path;
  console.log("skill path", img.src);
  return img;
};
console.log("引入图片地址", imageFromPath);

//技能(独立)
// 随机出现的技能列表，也需要做多个坐标，以及图片导入。
var Skill = function () {
  var image = imageFromPath("skillimg/invoker_deafening.png");
  console.log("imageskill", image);
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

  // move是为了让下一个技能左移，可是多个技能的多个坐标，需要放在一个仓库里吧？
  // 按键也需要和当前技能匹配哦。
  // 是不是需要每一个技能都需要有她独立的{}？

  buttonS.onclick = function () {
    o.done();
    console.log("display?", o.displayFor);
    loadPic(o.image, o.x, o.y, o.w, o.h);
  };
};

// 当前输入的元素（独立）..
// 如果技能正确，则alive回归false， 需要加个判断， 和skill联动
var eleKey = function () {
  var imageICE = imageFromPath(eleList.ice[0]);
  var imageTHUNDER = imageFromPath(eleList.thunder[0]);
  var imageFIRE = imageFromPath(eleList.fire[0]);

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
      loadPic(ice.image, 100, 200, 40, 40);
      ice.alive = true;
      inputSkill.push("q");
      console.log('当前输入', inputSkill)
    } else if ([event.key] == "w") {
      loadPic(thunder.image, 160, 200, 40, 40);
      thunder.alive = true;
      inputSkill.push("w");
      console.log('当前输入', inputSkill)
    } else if ([event.key] == "e") {
      loadPic(fire.image, 220, 200, 40, 40);
      fire.alive = true;
      inputSkill.push("r");
      console.log('当前输入', inputSkill)
    }

  });

};

// var judge = function () {
//   let a = skillList.skill01;
//   let b = inputSkill;
//   if (a.length === b.length) {
//     for (let i = 1; i < a.length; i++) {
//       for (let j = 0; j < b.length; j++) {
//         if (b[j] === a[i]) {
//           b = b.filter(function (v) {
//             return v !== b[j];
//           });
//         }
//       }
//     }
//     yepskill()
// } 
// };

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
