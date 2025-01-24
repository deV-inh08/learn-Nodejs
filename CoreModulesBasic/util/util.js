// util: là module cung cấp các công cụ tiện ích hỗ trợ việc debug hoặc viết mã dễ dàng hơn
const util = require('util');


// Tạo chuỗi định dạng tương tự như printf trong C.
const str = util.format('%s is %s years old', 'Vinh', 20);
console.log(str);


const obj = { name: 'John', age: 30, details: { hobby: 'Coding' } };
console.log(util.inspect(obj, { depth: null, colors: true }));


// Xác định kiểu dữ liệu (introduced in Node.js 10+).
console.log(util.types.isStringObject(new String('foo')))

