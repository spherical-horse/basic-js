const CustomError = require("../extensions/custom-error");

const chainMaker = {
    links: [],
    getLength() {
        return links.length;
    },
    addLink(value) {
        this.links.push('' + value);
        return this;
    },
    removeLink(position) {
        if (typeof(position) !== 'number') {
            throw new Error();
        }
        if (position - 1 < 0 && position - 1 >= this.links.length) {
            throw new Error();
        }
        this.links.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.links.reverse();
        return this;
    },
    finishChain() {
        const links = this.links;
        this.links = [];
        return `( ${links.join(' )~~( ')} )`;
    }
};

module.exports = chainMaker;

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(1).reverseChain().finishChain());
// console.log(chainMaker.addLink(function() {}).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain());
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0));
// console.log(chainMaker.addLink(function() {}).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain());
// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());