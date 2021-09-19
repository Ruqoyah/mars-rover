const MarsRover = require("./MarsRover");

test("should return undefined if plateau upper x and y is not passed to the class", () => {
  const marsRover = new MarsRover();
  expect(marsRover.upperX).toBe(undefined);
  expect(marsRover.upperY).toBe(undefined);
});

test("should set plateau upper x and y", () => {
  const marsRover = new MarsRover(5, 4);
  
  expect(marsRover.upperX).toBe(5);
  expect(marsRover.upperY).toBe(4);
});

test("should set rover position successfully", () => {
  const marsRover = new MarsRover(5, 5);

  marsRover.setPosition(1, 2, 'N');

  expect(marsRover.x).toBe(1);
  expect(marsRover.y).toBe(2);
  expect(marsRover.facing).toBe(1);
});

test("should set rover direction to north if unknown direction is passed", () => {
  const marsRover = new MarsRover(5, 5);

  marsRover.setPosition(1, 2, 'U');

  expect(marsRover.x).toBe(1);
  expect(marsRover.y).toBe(2);
  expect(marsRover.facing).toBe(1);
});

test("should get rover landing position", () => {
  const marsRover = new MarsRover(5, 5);

  marsRover.setPosition(1, 2, 'S');

  const output = marsRover.getPosition();

  expect(output).toBe('1 2 S');
});

test("should return rover current position", () => {
  const marsRover = new MarsRover(5, 5);

  marsRover.setPosition(1, 2, 'N');
  marsRover.controlRover('LMLMLMLMM');

  const output = marsRover.getPosition();

  expect(output).toBe('1 3 N');
});

test("should return error when an invalid direction is given", () => {
  const realProcess = process;
  const exitMock = jest.fn()

  global.process = { ...realProcess, exit: exitMock };
  
  const marsRover = new MarsRover(5, 5);

  marsRover.setPosition(1, 2, 'N');
  marsRover.controlRover("LMLMLMLMI");
  marsRover.getPosition();

  expect(marsRover.error).toBe("Unknown direction, the possible direction are L, R, M");
});