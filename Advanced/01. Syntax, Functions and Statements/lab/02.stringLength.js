function stringLength(str1, str2, str3) {
    let totalLength = str1.length + str2.length + str3.length;
    let avgLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(avgLength);
}

stringLength('chocolate', 'ice cream', 'cake');
console.log("--------------");
stringLength('pasta', '5', '22.3');