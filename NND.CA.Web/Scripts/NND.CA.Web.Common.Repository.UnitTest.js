/// <reference path="../../../Columbus-Web/NND.CA.Web/Scripts/Common/Repository/NND.CA.Web.Common.Repository.js" />
/// <reference path="../../../Columbus-Web/NND.CA.Web/Scripts/jquery-3.1.1.min.js" />

test("will add 5 to number", function () {
    var res = mathLib.add5(10);
    equal(res, 15, "should add 5");
});
test("UnitTest", function() {
    var res = unitTest(2);
    equalTo(res, 10);

});