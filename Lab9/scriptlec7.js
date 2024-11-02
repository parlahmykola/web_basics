const car = {
  speedometer: 0,
  setSpeed(speed) {
    this.speedometer = speed;
    return this;
  },
  getSpeed() {
    // return this.speedometer;
    return this;
  },
  clearSpeed() {
    this.speedometer = 0;
  },
};
car.setSpeed(200).setSpeed(300).getSpeed(); //.clearSpead();
console.log(car);
