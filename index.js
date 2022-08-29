// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
  
}
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(greet = "*") {
    const first = "You are"
    return function(param ="special") {
        return `${first} ${greet}${param}${greet}!`;
    }
}
wrapAdjective("*")("programmer");
