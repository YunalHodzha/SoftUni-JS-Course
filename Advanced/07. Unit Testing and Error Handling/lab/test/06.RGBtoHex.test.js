const { expect } = require("chai");
const { rgbToHexColor } = require("./test");

describe("rgbToHex", function () {
    it("with non integer red should return undefined", () => {
        let red1 = 12.5;
        let red2 = "100";
        let green = 100;
        let blue = 100;

        let result1 = rgbToHexColor(red1, green, blue);
        let result2 = rgbToHexColor(red2, green, blue);

        expect(result1).to.be.undefined;
        expect(result2).to.be.undefined;
    })   

    it("red with edge case values, should return correct results", () => {
        let red1 = 0;
        let red2 = 255;
        let red3 = 256;
        let red4 = -1;
        let green = 100;
        let blue = 100;

        let result1 = rgbToHexColor(red1, green, blue);
        let result2 = rgbToHexColor(red2, green, blue);
        let result3 = rgbToHexColor(red3, green, blue);
        let result4 = rgbToHexColor(red4, green, blue);

        expect(result1).to.be.equal("#006464");
        expect(result2).to.be.equal("#FF6464");
        expect(result3).to.be.undefined;
        expect(result4).to.be.undefined;
    })  
    
    it("with non integer green should return undefined", () => {
        let green1 = 12.5;
        let green2 = "100";
        let red = 100;
        let blue = 100;

        let result1 = rgbToHexColor(red, green1, blue);
        let result2 = rgbToHexColor(red, green2, blue);

        expect(result1).to.be.undefined;
        expect(result2).to.be.undefined;
    })   

    it("green with edge case values, should return correct results", () => {
        let green1 = 0;
        let green2 = 255;
        let green3 = 256;
        let green4 = -1;
        let red = 100;
        let blue = 100;

        let result1 = rgbToHexColor(red, green1, blue);
        let result2 = rgbToHexColor(red, green2, blue);
        let result3 = rgbToHexColor(red, green3, blue);
        let result4 = rgbToHexColor(red, green4, blue);

        expect(result1).to.be.equal("#640064");
        expect(result2).to.be.equal("#64FF64");
        expect(result3).to.be.undefined;
        expect(result4).to.be.undefined;
    }) 

    it("with non integer blue should return undefined", () => {
        let blue1 = 12.5;
        let blue2 = "100";
        let green = 100;
        let red = 100;

        let result1 = rgbToHexColor(red, green, blue1);
        let result2 = rgbToHexColor(red, green, blue2);

        expect(result1).to.be.undefined;
        expect(result2).to.be.undefined;
    })   

    it("blue with edge case values, should return correct results", () => {
        let blue1 = 0;
        let blue2 = 255;
        let blue3 = 256;
        let blue4 = -1;
        let green = 100;
        let red = 100;

        let result1 = rgbToHexColor(red, green, blue1);
        let result2 = rgbToHexColor(red, green, blue2);
        let result3 = rgbToHexColor(red, green, blue3);
        let result4 = rgbToHexColor(red, green, blue4);

        expect(result1).to.be.equal("#646400");
        expect(result2).to.be.equal("#6464FF");
        expect(result3).to.be.undefined;
        expect(result4).to.be.undefined;
    }) 
}) 