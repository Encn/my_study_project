var log = console.log; // eslint-disable-line

var Game = function (name, type, feature) {
	//common property
    this.type = type;
    this.name = name;
    this.feature = feature || Game.feature;
	//private property
    var common = 'property';
	//privilege method
    this.getCommon = function () {
        log(common);
        return common;
    };
    return this;
};

//prototype property
Game.prototype = {
    baseValue: 100,
    toDiscrible: function () {
        var text = 'This is ' + this.type + ' game,' + 'we called it ' + this.name;
        log(text);
    },
    attack: function (enemy) {
        var hurtNum = Game.damageNum(this.baseValue);
        log('attack ' + enemy + ' ' + hurtNum + ' damage.');
    }
};

//static property
Game.feature = 'to be fun';

//static method
//dc 基础伤害值 ->实际伤害输出
Game.damageNum = function (dc) {
    var hurtNum = parseInt(dc) + Math.ceil(Math.random() * dc * 0.2);
    return hurtNum;
};

var xianjian = new Game('xianjian', 'RPG');
xianjian.toDiscrible();
xianjian.attack('monster');

//prototype inherit
var Gujian = function () {
    Game.apply(this, arguments);
};
var Surrogate = function () {
    this.constructor = Gujian;
};
Surrogate.prototype = Game.prototype;
Gujian.prototype = new Surrogate();
Surrogate = null;

var gujian2 = new Gujian('gujian2', 'RPG');
log(gujian2);
