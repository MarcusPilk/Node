class QA {
    constructor() {
        this.data = {
            "A": [
                function () {
                    console.log("world");
                }
            ],
            "B": [
                function () {
                    console.log("hello");
                }
            ]

        };
        this.addF = function(key,fun){
            if(this.hasOwnProperty(key)){
            this.data[key].push(fun);
            }else{
                this.data[key] = [fun];
            }
        };
        this.callFunction = function (key) {
            this.data[key].forEach(x => x())
        }
    }
}
var qa = new QA();
qa.addF("A",function () {
    console.log("New Function A");
});
qa.addF("B",function () {
    console.log("New Function B");
});
qa.addF("C",function () {
    console.log("New Function C");
});
qa.callFunction("A");
qa.callFunction("B");
qa.callFunction("C");
