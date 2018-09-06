class xyz {
  constructor() {
    this.phy = 102;
    this.che = 89;
    this.mat = 130;
    this.showResults = function () {
      let total = this.phy + this.che + this.mat;
      let perc = total * (100/450);
      console.log("Total: " + total);
      console.log("Percentage: " + perc);
    }
  }
}

xyz = new xyz();
xyz.showResults();
