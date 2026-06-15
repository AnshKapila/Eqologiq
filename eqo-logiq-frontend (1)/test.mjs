import HTMLtoJSX from 'htmltojsx';
const converter = new HTMLtoJSX({ createClass: false });
console.log(converter.convert('<div class="a" style="width: 10px; color: red;">Hello</div>'));
