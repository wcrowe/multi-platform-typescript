var MyLib = /** @class */ (function () {
    function MyLib(firstname, lastname, country) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.country = country;
        this.fulldata = firstname + " " + lastname + " " + country;
    }
    return MyLib;
}());
function data(mcn) {
    return "Welcome in " + mcn.firstname + " " + mcn.lastname + " " + mcn.country;
}
window.onload = function () {
    var name = new MyLib("Mcn", "solution", " at India");
    //document.body.innerHTML = data(name);
};
//# sourceMappingURL=MyLib.js.map