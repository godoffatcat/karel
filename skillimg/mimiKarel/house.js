// 技能的图片位置、匹配按键
var skillList = {
  deafening: [imageFromPath('skillimg/deafening.png'), "q", "w", "e"],
  coldsnap: [imageFromPath("skillimg/coldsnap.png"), "q", "q", "q"],
  ghostwalk: [imageFromPath("skillimg/ghostwalk.png"), "w", "w", "q"],
  tornado: [imageFromPath("skillimg/tornado.png"), "q", "q", "w"],
  emp: [imageFromPath("skillimg/emp.png"), "w", "w", "w"],
  alacrity: [imageFromPath("skillimg/alacrity.png"), "w", "w", "e"],
  chaosmeteor: [imageFromPath("skillimg/chaosmeteor.png"), "w", "e", "e"],
  sunstrike: [imageFromPath("skillimg/sunstrike.png"), "e", "e", "e"],
  forgespirit: [imageFromPath("skillimg/forgespirit.png"), "e", "e", "q"],
  icewall: [imageFromPath("skillimg/icewall.png"), "q", "q", "e"],
};

console.log("path test", skillList.deafening[0]);

// 按键的图片位置、音效
var eleList = {
  ice: [imageFromPath("skillimg/ice.png"), "bgm"],
  thunder: [imageFromPath("skillimg/thunder.png"), "bgm"],
  fire: [imageFromPath("skillimg/fire.png"), "bgm"],
};

