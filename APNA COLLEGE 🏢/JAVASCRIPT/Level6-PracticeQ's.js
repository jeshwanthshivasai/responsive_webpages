//1
//returns array elements larger than the number

let array = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;
function largerElements(arr, num) {
    for (let i =0; i<num; i++) {
        if(arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
largerElements(array, num);

//2
//extract unqiue characters from a string

let string = "abcdabcdefgggh";
function unqchar(string) {
    let ans = '';
    for(let i=0; i<string.length; i++) {
        let char = string[i];
        if(ans.indexOf(char) == -1) {
            ans += char;
        }
    }
    return ans;
}
unqchar(string);

//3
//function accepting a list of country names and returns the longest country name as output
country = ['United States of America', 'Germany', 'Australia'];
function longestname(country) {
    
}