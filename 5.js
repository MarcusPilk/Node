var ref = {
    "A":24,
    "F": function () {
        console.log(this.A);
    },
    "F2": function () {
        console.log("F2");
    },
    "F3":[
        function () {
            console.log("1");
        },
        function () {
            console.log("2");
        },
        function () {
            console.log("3");
        },
        function () {
            console.log("4");
        }
    ]
};

ref.F();
ref.F2();
ref.F3.forEach(x => x());
