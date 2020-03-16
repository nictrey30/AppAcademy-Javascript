const robot = {
  model: 'B-4MI',
  mobile: true,
  greetMaster() {
    console.log(`I'm model ${this.model}, how may I be of service?`);
  }
};

const massProdRobot = (model, mobile) => {
  return {
    model,
    mobile,
    greetMaster() {
      console.log(`I'm model ${this.model}, how may I be of service?`);
    }
  };
};
const shinyNewRobot = massProdRobot('TrayHax', true);
shinyNewRobot.greetMaster();

// getters, setters
const chargingStation = {
  _name: 'Electrons-R-Us',
  _robotCapacity: 120,
  _active: true,
  _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],

  set robotCapacity(newCapacity) {
    if (typeof newCapacity === 'number') {
      this._robotCapacity = newCapacity;
    } else {
      console.log(`${newCapacity} is not a valid number.`);
    }
  },
  get robotCapacity() {
    return this._robotCapacity;
  }
};

console.log(chargingStation.robotCapacity);
chargingStation.robotCapacity = 187;
console.log(chargingStation.robotCapacity);
