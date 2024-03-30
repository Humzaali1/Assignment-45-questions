var current_users = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
var new_users = ['BOb', 'frank', 'SARAH', 'Grace', 'Alice'];
var _loop_1 = function (i) {
    var new_username = new_users[i].toLowerCase();
    var is_unique = current_users.every(function (current_user) {
        return current_user.toLowerCase() !== new_username;
    });
    if (is_unique) {
        console.log("".concat(new_users[i], " is available"));
    }
    else {
        console.log("".concat(new_users[i], " is NOT available"));
    }
};
for (var i = 0; i < new_users.length; i++) {
    _loop_1(i);
}
