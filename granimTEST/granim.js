var granimInstance = new Granim({
  element: "#canvas-basic",
  direction: "diagonal",
  isPausedWhenNotInView: true,
  states: {
    "default-state": {
      gradients: [
        ["#00b8ff", "#009bd6"],
        ["#00719c", "#00415a"],
        ["#00b8ff", "#009bd6"],
      ],
      transitionSpeed: 7000,
    },
  },
});
