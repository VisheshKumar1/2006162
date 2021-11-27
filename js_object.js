"use strict";

function Person(fname, lname, oaddress) {
  this.firstName = fname;
  this.lastName = lname;
  this.officeAddress = oaddress;
}

const vishesh = new Person(
  "vishesh",
  "kumar",
  "P.O. Box 675 mumbai"
);
console.log(vishesh);

const ankesh = new Person(
  "ankesh",
  "=kumar",
  "P.O. Box 253 mumbai "
);
console.log(ankesh);

const swaraj = new Person(
  "swaraj",
  "himatrao",
  "po BOx- 234 Mahrashtra India"
);
console.log(swaraj);