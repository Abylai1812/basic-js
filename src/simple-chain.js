const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let chainMaker = {
  links: [],
  
  getLength() {
    return this.links.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.links.push("( )");
    } else {
      this.links.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || position < 1 || position > this.links.length) {
      this.links = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.links.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.links.reverse();
    return this;
  },

  finishChain() {
    let result = this.links.join("~~");
    this.links = [];
    return result;
  }
};


module.exports = {
  chainMaker
};
