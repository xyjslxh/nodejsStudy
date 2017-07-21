// 学习使用测试框架 mocha : http://mochajs.org/
// 学习使用断言库 should : https://github.com/tj/should.js
// 学习使用测试率覆盖工具 istanbul : https://github.com/gotwarlost/istanbul
// 简单 Makefile 的编写 : http://blog.csdn.net/haoel/article/details/2886
var main = require('../main');
var should = require('should');

describe('test/main.test.js', function () {
    it('should equal 0 when n === 0', function () {
        main.fibonacci(0).should.equal(0);
    });

    it('should equal 1 when n === 1', function () {
        main.fibonacci(1).should.equal(1);
    });

    it('should equal 55 when n === 10', function () {
        main.fibonacci(10).should.equal(55);
    });

    it('should throw when n > 10', function () {
        (function () {
            main.fibonacci(11);
        }).should.throw('n should <= 10');
    });

    it('should throw when n < 0', function () {
        (function () {
            main.fibonacci(-1);
        }).should.throw('n should >= 0');
    });

    it('should throw when n isnt Number', function () {
        (function () {
            main.fibonacci('呵呵');
        }).should.throw('n should be a Number');
    });
});
