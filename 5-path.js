const path = require("path");
// seprate the path
console.log(path.sep);
const filePath = path.join("/content/", "text.txt");
console.log(filePath);
// join the path
console.log(path.join("/content/", "text.txt"));
// resolve the path
console.log(path.resolve("/content/", "text.txt"));
// normalize the path
console.log(path.normalize("/content/", "text.txt"));
// dirname
console.log(path.dirname("/content/", "text.txt"));
// basename
console.log(path.basename("/content/", "text.txt"));
// extname
console.log(path.extname("/content/", "text.txt"));
// resolve the path
console.log(path.resolve("/content/", "text.txt"));
