let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep() {
    alert( this.step );
  }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();


// ladder.up().up().down().showStep();