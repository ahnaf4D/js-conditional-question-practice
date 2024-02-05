/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
const myScore = 74;
const friendScore = 36;
if (myScore > 80) {
    if (friendScore > 80) {
        console.log("I go to launch with my Friend");
    }
    else if (friendScore < 80 && friendScore >= 60) {
        console.log("Good luck next time");
    }
    else if (60 > friendScore && friendScore >= 40) {
        console.log("I unseen my friend massage");
    }
    else if (40 > friendScore) {
        console.log("I block my Friend");
    }
}
else if (80 > myScore) {
    console.log("I go to home and doing sad acting");
}
else {
    console.log("Program Terminated");
}