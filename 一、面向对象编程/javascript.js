// 例子：函数校验

/**
 * 避免创建多个全局变量，开发过程中被覆盖
 * 通过创建对象将方法放到对象里面
**/

var checkObject1 =  {
  checkName : function () {
    // 验证姓名
    console.log('name1')
  },
  checkEmail: function  () {
    // 验证邮箱
  },
  checkPassword: function  () {
    // 验证密码
  }
}
checkObject1.checkName()

/**
 * 为了提高复用性
 * 创建对象实例，创建出来的对象所拥有的方法都是一个，都依赖在prototype原型上一次寻找
**/
var checkObject2 = function () {}
checkObject2.prototype = {
  checkName : function () {
    // 验证姓名
    console.log('name2')
  },
  checkEmail : function () {
    // 验证邮箱
  },
  checkPassword: function () {
    // 验证密码
  }
}
new checkObject2().checkName()

/**
 * 实现链式调用
 * 声明的每一个方法后面将this（当前对象）返回
**/
var checkObject3 = function () {}
checkObject3.prototype = {
  checkName : function () {
    // 验证姓名
    console.log('name3')
    return this
  },
  checkEmail : function () {
    // 验证邮箱
    console.log('email3')
    return this
  },
  checkPassword: function () {
    // 验证密码
    console.log('password3')
    return this
  }
}
new checkObject3().checkName().checkEmail().checkPassword()