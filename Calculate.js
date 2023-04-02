let buttons = document.querySelectorAll("button");//מערך בשם button ששומר כל איבר שיש לו קלאס בשם button
let number = "";
let sum = "";
let number2="";
let boolean=true;
for (const b of buttons) {//לולאה שעוברת על כל המערך
    b.addEventListener("click", function () {//פונקציה שמקשיבה למשהו שעושה הכפתור
        if (b.textContent=='='){
            let sum =add(Number(number),Number(number2)).toString();
            alert(sum);
            sum=sum.toString();
            alert(typeof sum);
            document.getElementById("input").value = sum//מציגה את הערך
        }
        if (b.textContent == '+') {
            boolean=false;

        } else if(boolean){
            number += b.textContent;
            document.getElementById("input").value = number;//מציגה את הערך
        }
        else {
            number2 += b.textContent;
            document.getElementById("input").value = number2;
        }
    });
}
function add(num1, num2) {
    return num1 + num2;

}
