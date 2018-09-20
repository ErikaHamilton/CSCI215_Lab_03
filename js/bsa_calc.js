function calculate() {

    var female = document.getElementsByName("sex")[1].checked;
    var male = document.getElementsByName("sex")[0].checked;

    var weight = document.getElementsByName("weight")[0].value;
    var height = document.getElementsByName("height")[0].value;

    console.log( 'Male = ' + male );
    console.log( 'Weight = ' + weight );
    console.log( 'Height = ' + height );

    // -------------------------------
    // Conversions
    // -------------------------------
    // lbs to kg: 1 lb = 0.454 kg
    // inch to meter: 1 in = 0.0254 m
    // inch to cm: 1 in = 2.54 cm
    var cent;
    var kilo;
    cent = 2.54;
    kilo = .454;



    // ==========================================
    // Todo: Perform conversion calculations here
    kweight = weight * kilo;
    cheight = height * cent;

    // -------------------------------
    // Body Surface Area (BSA)
    // -------------------------------

    var BSA = 0;

    // ==========================================
    //BSA Calculations
    var BSA;
    var num;
    num = kweight*cheight;
    BSA = Math.sqrt(num/3600);

    // -------------------------------
    // Ideal Body Weight (IBW)
    // -------------------------------

    var IBW = 0;

    if ( female ) {

        // ==========================================
        // Todo: Perform female IBW calculation here
        var par;
        par = cheight - 60;
        IBW = 45.5 + 2.3 * par;



    } else if ( male ) {

        // ==========================================
        // Todo: Perform male IBW calculation here
        var par;
        par = cheight - 60;
        IBW = 50 + 2.3 * par;

    }

    // -------------------------------
    // Body Mass Index (BMI)
    // -------------------------------

    var BMI = 0;
    var mheight;
    mheight = height * 0.0254;
    smheight = Math.pow(mheight, 2);

    // ==========================================
    // Todo: Perform BMI calculation here
    BMI = (weight/smheight);



    // Do not modify this function call
    display( BSA, IBW, BMI );

}

// ------------------------------------
// Do not modify this function
function display( BSA, IBW, BMI ) {

    var message = 'Body Surface Area = ' + BSA.toPrecision(4) + ' m^2\nIdeal Body Weight = ' + IBW.toPrecision(4) + ' kg\nBody Mass Index = ' + BMI.toPrecision(4) + ' kg/m^2';

    document.getElementById("output").innerHTML=message;

}
