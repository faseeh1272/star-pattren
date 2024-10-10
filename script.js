var userValue = prompt("Enter a first number for triangle")

for (var i = 1; i <= 5; i++) {

    for (var j = 5; j > i; j--) {


        document.write("&nbsp;");
    }
    for (var k = 1; k <= ((2 * i) - 1); k++) {

        document.write("*");
    }

    document.write("<br>");


}

document.write("<br>")

// reverse triangle pattren start

var userValue = prompt("Enter a second value")

for (var i = 1; i <= 5; i--) {

    for (var j = 5; j > i; j--) {
        document.write(" &nbsp; ");
    }
    for (var k = 1; k <= ((2 * i) - 1); k++) {
        document.write("*");

    }


    document.write("<br>")

}

// 3 : diamond pattren start :
var userValue = prompt("Enter a third value")
for (var i = 1; i<=7; i++){


    for(var j = 7; j>i; j--){

        document.write("&nbsp;");
    }
    for (var k = 1; k<=((2*i)-1);  k++){
        document.write("*");
    }

    document.write("<br>");
}

for (var i = 7; i>=1; i--){


    for(var j = 7; j>i; j--){
        document.write(" &nbsp; ");
    }
    for(var k = 1; k>=((2*i)-1);   k++){
        document.write("*");

    }
    document.write("<br>")
}

var userValue=prompt("enter afour num")


for(i=5; i>=1; i--)
   {
       for(j=5;j>i; j--)
           {
               document.write(" &nbsp ");
           }
           for (k=1; k<=((2*i)-1);k++)
           {
               document.write("*");
           }
       document.write("<br>");
   }

   
for(i=1; i<=5 ; i++)
   {
       for (j=5; j>i; j--)
       {
           document.write(" &nbsp; ");
       }
       for(k=1 ; k<=((2*i)-1); k++)
       {
           document.write("*");
       }
       document.write("<br>");
   }


document.write("<br>")  


