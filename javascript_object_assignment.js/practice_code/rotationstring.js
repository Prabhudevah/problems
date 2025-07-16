let s1 = "abc";
let s2 = "cab";

function rotations(s1, s2) {
    // If lengths are not equal, they can't be rotations
    if (s1.length !== s2.length) {
        return false;
    }
    let temp = s1 + s1;
    // Check if s2 is a substring of temp
    return temp.includes(s2);
}

console.log(rotations(s1, s2) ? "true" : "false");