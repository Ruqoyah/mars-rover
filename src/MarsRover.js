/** Mars Rover
 *
 * @param {number} upperX - Plateau upper X
 * @param {number} upperY - Plateau upper Y
 *
 */
class MarsRover {
  constructor(upperX, upperY) {
    this.upperX = upperX;
    this.upperY = upperY;
    this.north = 1;
    this.east = 2;
    this.south = 3;
    this.west = 4;
    this.x = 0;
    this.y = 0;
    this.facing = this.north;
    this.error = "";
  }

  /** Set position according to passed arguments
   *
   * @param {number} x - x
   * @param {number} y - y
   * @param {string} direction - direction
   *
   */
  setPosition(x, y, direction) {
    this.x = x;
    this.y = y;
    if (direction == "N") {
      this.facing = this.north;
    } else if (direction == "E") {
      this.facing = this.east;
    } else if (direction == "S") {
      this.facing = this.south;
    } else if (direction == "W") {
      this.facing = this.west;
    }
  }

  /** Get position along with direction
   *
   */
  getPosition() {
    let direction;
    if (this.facing == 1) {
      direction = "N";
    } else if (this.facing == 2) {
      direction = "E";
    } else if (this.facing == 3) {
      direction = "S";
    } else if (this.facing == 4) {
      direction = "W";
    }
    return this.x + " " + this.y + " " + direction;
  }

  /** Check where rover is currenttly facing
   * turn Left based on the direction given
   *
   */
  turnLeft() {
    this.facing = this.facing - 1 < this.north ? this.west : this.facing - 1;
  }

  /** Check where rover is currenttly facing
   * the turn right based on the direction given
   *
   */
  turnRight() {
    this.facing = this.facing + 1 > this.west ? this.north : this.facing + 1;
  }

  /** Check where rover is currenttly facing 
   * then move based on the direction given
   */
  move() {
    if (this.facing == this.north) {
      this.y++;
    } else if (this.facing == this.east) {
      this.x++;
    } else if (this.facing == this.south) {
      this.y--;
    } else if (this.facing == this.west) {
      this.x--;
    }
  }

  /** Control Rover
   *
   * @param {Array} controls - controls
   *
   */
  controlRover(controls) {
    for (let index = 0; index < controls.length; index++) {
      if (controls[index].toUpperCase() == "L") {
        this.turnLeft();
      } else if (controls[index].toUpperCase() == "R") {
        this.turnRight();
      } else if (controls[index].toUpperCase() == "M") {
        this.move();
      } else {
        this.error = "Unknown direction, the possible direction are L, R, M"
        console.log("Unknown direction, the possible direction are L, R, M");
        process.exit();
      }
    }
  }
}

module.exports = MarsRover;
