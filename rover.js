class Rover {
  constructor(position, mode, generatorWatts) {
    this.position = position;
    this.mode = 'Normal';
    this.generatorWatts = 110;
  }
  // receiveMessage(message) {
  //   let results = {};
  // }
}

module.exports = Rover;