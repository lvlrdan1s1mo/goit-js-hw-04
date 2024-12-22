const profile = {
    username: "Jacob",
    playTime: 300,

    changeUsername(newName) {
        this.username = newName;
        console.log(`Username successfully changed to: ${this.username}`);
    },

    updatePlayTime(newTime) {
        if (newTime >= 0) {
            this.playTime = newTime;
            console.log(`PlayTime successfully updated to: ${this.playTime} hours`);
        } else {
            console.error("Error: PlayTime must be a non-negative number.");
        }
    },

    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    }
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"