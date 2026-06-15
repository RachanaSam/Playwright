function message() {
    console.log("hello world");
}
message();
function add(a, b) {
    console.log(a + b);
}
add(5, 6);
function sub(c, d) {
    return c - d;
}
console.log(sub(9, 5));
function throwerror(message) {
    throw new Error(message);
}
throwerror("this is an error");
export {};
