let current_users: string[] = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
let new_users: string[] = ['BOb', 'frank', 'SARAH', 'Grace', 'Alice'];

for(let i = 0; i < new_users.length; i++){
    let new_username = new_users[i].toLowerCase();
    let is_unique = current_users.every(function(current_user){
        return current_user.toLowerCase() !== new_username;
    });

    if(is_unique){
        console.log(`${new_users[i]} is available`);
    } else {
        console.log(`${new_users[i]} is NOT available`);
    }
}