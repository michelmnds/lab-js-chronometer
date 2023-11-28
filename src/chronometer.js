class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getCentiseconds() {
    return 0;
  }

  computeTwoDigitNumber(value) {
    if (value >= 10) {
      return `${value}`;
    } else {
      return `0${value}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.getMinutes().toString().padStart(2, "0");
    const seconds = this.getSeconds().toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }
}
