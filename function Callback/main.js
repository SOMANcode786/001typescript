function parentfunction(data) {
    console.log("i am a parent function");
    data();
}
parentfunction(function () {
    console.log("i am a child function");
});
