var user = 'Mike';
var salutation = 'Welcome, ';
var greeting = salutation + user + '!';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

var price = 216.80;
var studentDiscount = .10;
var studentPrice = price - (price * studentDiscount);
var priceEl = document.getElementById('price');
var studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);

