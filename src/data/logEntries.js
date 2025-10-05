export const logEntries = [
  { timestamp: "2002-12-07 00:00:00", level: "info", message: "Born in Amman, Jordan — legendary entrance into the world", tags: ["life", "origin"] },
  { timestamp: "2002-12-07 00:07:00", level: "info", message: "Met my twin brother — co-op mode unlocked", tags: ["life", "origin"] },
  { timestamp: "2009-05-06 00:00:00", level: "success", message: "Fell in love with FC Barcelona at age 6", tags: ["soccer", "barcelona"] },
  { timestamp: "2009-09-01 08:00:00", level: "info", message: "Moved to Canada (Grade 2) — traded shawarma for snow days", tags: ["move", "canada"] },
  { timestamp: "2015-06-30 12:00:00", level: "warning", message: "Moved back to Jordan after Grade 6 — plot twist", tags: ["move", "jordan"] },
  { timestamp: "2017-03-08 21:45:00", level: "success", message: "Witnessed Barcelona vs PSG comeback (6–1) — football’s greatest plot twist", tags: ["soccer", "barca", "championsleague"] },
  { timestamp: "2017-10-01 17:00:00", level: "success", message: "Joined high school soccer team in Grade 9 - somewhere between Messi and water boy", tags: ["soccer", "highschool"] },
  { timestamp: "2018-05-26 08:00:00", level: "info", message: "Back to Canada for high school — professional school-moving expert unlocked", tags: ["move", "canada", "school"] },
  { timestamp: "2020-09-01 09:00:00", level: "warning", message: "Started university during peak Covid — campus = bedroom, cafeteria = fridge, student lounge = Discord", tags: ["university", "covid", "online"] },
  { timestamp: "2022-09-23 14:00:00", level: "success", message: "Wrote my first serious line of code — it actually worked (after 37 tries)", tags: ["coding", "beginning"] },
  { timestamp: "2021-04-26 23:59:00", level: "success", message: "Survived first year and built memories with best friends on Discord", tags: ["university", "friends"] },
  { timestamp: "2024-06-27 20:00:00", level: "info", message: "Took first solo flight — takeoff felt like growing up", tags: ["travel", "growth"] },
  { timestamp: "2025-06-10 20:00:00", level: "success", message: "Graduated — system rebooted from ‘student’ to ‘engineer’", tags: ["graduation", "milestone"] },
  { timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '), level: "debug", message: "System status: ACTIVE | Current focus: Building innovative solutions", tags: ["status"] }
];

// Global state for log animation
export let globalLogState = {
  displayedEntries: [],
  currentIndex: 0,
  showCursor: false,
  isComplete: false,
  hasStarted: false
};

export let globalLogTimer = null;
export let logUpdateListeners = new Set();

export const notifyLogUpdate = () => {
  logUpdateListeners.forEach(callback => callback());
};

export const addNextLogEntry = () => {
  if (globalLogState.currentIndex >= logEntries.length) {
    globalLogState.showCursor = true;
    globalLogState.isComplete = true;
    notifyLogUpdate();
    return;
  }

  globalLogState.displayedEntries.push(logEntries[globalLogState.currentIndex]);
  globalLogState.currentIndex++;
  notifyLogUpdate();
  
  setTimeout(() => {
    const scrollableContainer = document.querySelector('.overflow-y-auto');
    if (scrollableContainer) {
      scrollableContainer.scrollTop = scrollableContainer.scrollHeight;
    }
  }, 100);

  globalLogTimer = setTimeout(addNextLogEntry, 800 + Math.random() * 400);
};

export const startLogAnimationOnce = () => {
  if (globalLogState.hasStarted) return;
  globalLogState.hasStarted = true;
  setTimeout(addNextLogEntry, 1000);
};