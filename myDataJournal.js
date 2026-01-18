const weekData = [
    {day: "Sunday", sleepHours: 7, screenTime: 3, mood: "Chill", caffeineIntake: 2, focusLevel: 5 },
    {day: "Monday", sleepHours: 6, screenTime: 5.5, mood: "Motivated", caffeineIntake: 1, focusLevel: 8 },
    {day: "Tuesday", sleepHours: 6.5, screenTime: 0, mood: "Lazy", caffeineIntake: 2, focusLevel: 4 },
    {day: "Wednesday", sleepHours: 7, screenTime: 4, mood: "Chill", caffeineIntake: 2, focusLevel: 6 },
    {day: "Thursday", sleepHours: 6.5, screenTime: 5, mood: "Focused", caffeineIntake: 2, focusLevel: 7 },
    {day: "Friday", sleepHours: 7.5, screenTime: 0, mood: "Hangovered", caffeineIntake: 3, focusLevel: 2 },
    {day: "Saturday", sleepHours: 7, screenTime: 4.5, mood: "Dedicated", caffeineIntake: 2, focusLevel: 5 },
]

// I predict that long sleep will not always result in  better screen time and productivity.
// I predict that coffee not necessarily help me focus better. 
// I predict that most days I am chill. 

function findHighestScreenTime(log) {
    let maxDay = null;
    let highestScreentime = 0;
    for (let entry of log) {
        if (entry.screenTime > highestScreentime) {
            highestScreentime = entry.screenTime;
            maxDay = entry.day;
        }
    }
    return maxDay;
}

function averageSleep(log) {
    let totalSleep = 0;
    for (let entry of log) {
        totalSleep += entry.sleepHours;
    }
    let average = totalSleep / log.length;
    return average;
}

function mostFrequentMood(log) {
    const moodCounts = {};
    
    for (let entry of log) {
        if (!moodCounts[entry.mood]) {
            moodCounts[entry.mood] = 1;
        } else {
            moodCounts[entry.mood]++;
        }
    }
    let mostFrequent = null;
    let highestCount = 0;

    for (let mood in moodCounts) {
        if (moodCounts[mood] > highestCount) {
            highestCount = moodCounts[mood];
            mostFrequent = mood;
        }
    }
    return mostFrequent;
    
}
