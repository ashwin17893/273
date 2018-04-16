var express = require('express');
var router = express.Router();


router.post('/add', function (req, res, next) {
    console.log("add");

    var val1 = req.body.value1;
    var val2 = req.body.value2;


    console.log("Number 1 :" +val1);
    console.log("Number 2 :" +val2);


    console.log(val2.length)
    if(val1.length==0 || val2.length==0)
    {
        console.log("reached B")
        res.status(401).json({message: "Invalid Numbers"});
    }
    else
    {

        var sum = parseFloat(val1) + parseFloat(val2);
        console.log(sum);
        res.status(201).json({message: "Addition is : " + sum})

    }


});

router.post('/sub', function (req, res, next) {

    var val1 = req.body.value1;
    var val2 = req.body.value2;


    console.log("Number 1 :" +val1);
    console.log("Number 2 :" +val2);

    console.log(val2.length)
    if(val1.length==0 || val2.length==0)
    {

        res.status(401).json({message: "Invalid Numbers"});
    }
    else
    {

        var sub = parseFloat(val1) - parseFloat(val2);
        console.log(sub);
        res.status(201).json({message: "Subtraction is : " + sub})

    }
});

router.post('/mul', function (req, res, next) {

    var val1 = req.body.value1;
    var val2 = req.body.value2;


    console.log("Number 1 :" +val1);
    console.log("Number 2 :" +val2);


    console.log(val2.length)
    if(val1.length==0 || val2.length==0)
    {

        res.status(401).json({message: "Invalid Numbers"});
    }
    else
    {

        var mul = parseFloat(val1) * parseFloat(val2);

        res.status(201).json({message: "Multiplication is : " + mul})

    }
});

router.post('/div', function (req, res, next) {

    var val1 = req.body.value1;
    var val2 = req.body.value2;


    console.log("Number 1 :" +val1);
    console.log("Number 2 :" +val2);


    console.log(val2.length)
    if(val1.length==0 || val2.length==0)
    {

        res.status(401).json({message: "Invalid Numbers"});
    }
    else
    {
        if(parseFloat(val2)==0)
        {res.status(401).json({message: "Cannot divide by zero"});}
        else{

            var div = parseFloat(val1) / parseFloat(val2);

            res.status(201).json({message: "Division is : " + div})}

    }
});

module.exports = router;