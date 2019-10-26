class Init {
  constructor() {
    this.internetSpeed = null;
    this.maxTouchPoints = null;
  }

  start = () => {
    this.getNavigatorInfo();
  };

  getNavigatorInfo = () => {
    this.maxTouchPoints = navigator.maxTouchPoints;
  };
}

const init = new Init();

export default init;
