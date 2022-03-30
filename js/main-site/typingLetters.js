const typingGreeting = new TypeIt("#greeting", {
  lifeLike: false,
  speed: 0,
  afterComplete: async () => {
    setTimeout(function () {
      document.querySelector(".greeting").classList.add("move-up");
    }, 2000);
    setTimeout(function () {
      document.querySelector(".container").classList.remove("hidden");
      document.querySelector(".about-me-btn").classList.remove("hidden");
    }, 4000);
  },
})
  .type("H")
  .pause(161)
  .type("e")
  .pause(87)
  .type("y")
  .pause(353)
  .type(",")
  .pause(208)
  .type(" ")
  .pause(143)
  .type("w")
  .pause(218)
  .type("a")
  .pause(311)
  .delete(1)
  .pause(225)
  .type("h")
  .pause(72)
  .type("a")
  .pause(160)
  .type("t")
  .pause(128)
  .type(" ")
  .pause(184)
  .type("a")
  .pause(144)
  .type("r")
  .pause(87)
  .type("e")
  .pause(129)
  .type(" ")
  .pause(136)
  .type("t")
  .pause(312)
  .delete(1)
  .pause(112)
  .type("w")
  .pause(184)
  .type("e")
  .pause(144)
  .type(" ")
  .pause(145)
  .type("d")
  .pause(79)
  .type("o")
  .pause(152)
  .type("i")
  .pause(80)
  .type("n")
  .pause(88)
  .type("g")
  .pause(103)
  .type(" ")
  .pause(160)
  .type("t")
  .pause(121)
  .type("o")
  .pause(127)
  .type("d")
  .pause(104)
  .type("a")
  .pause(88)
  .type("y")
  .pause(360)
  .type("?")
  .go();

export { typingGreeting };
