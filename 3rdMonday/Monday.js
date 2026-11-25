let ridwanFriends = ["kosi", "james", "jhon", "peter", "aisha", "emma", "rose"]
console.log(ridwanFriends)

ridwanFriends.push("amara", "joel");
console.log(ridwanFriends);

ridwanFriends.unshift("esther", "kosi");
console.log(ridwanFriends);

ridwanFriends.pop();
console.log(ridwanFriends);

ridwanFriends.shift();
console.log(ridwanFriends);

ridwanFriends[1]="henry";
console.log(ridwanFriends);

console.log(ridwanFriends.indexOf("henry"));

if (ridwanFriends.indexOf("aisha")==4){
    console.log("its correct");
} else {
    console.log("try again");
}

console.log(ridwanFriends.includes("aisha"));


console.log(ridwanFriends.includes("Ruqayya"));

if(!ridwanFriends.includes("Ruqayya")){
    ridwanFriends.push("Ruqayya");
    console.log(ridwanFriends);
} else {
    console.log("do nothing");
}

if(ridwanFriends.length ==10){
    console.log("try again");
} else {
    console.log("check again")
}