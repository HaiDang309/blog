## Trong lúc đang loay hoay để tìm tài liệu để ôn cho kỳ phỏng vấn thực tập thì mình vô tình tìm thấy bài viết này và mình nhận ra là mình tưởng là mình biết nhiều nhưng thực ra chẳng biết gì cả. Bài viết này khá hay cho nên mình muốn lưu lại để mốt còn đọc (link bài viết gốc ở cuối trang).

<br /><br />

### Câu 1:

<br /><br />

```javascript
var p = new Promise((resolve, reject) => { reject(Error('The Fails!'))})p.catch(error => console.log(error.message))p.catch(error => console.log(error.message))
```
<br /><br />

Đáp án là ?

<br /><br />

a. In ra lỗi 1 lần
<br />

b. In ra lỗi 2 lần
<br />

c. UnhandledPromiseRejectionWarning
<br /><br />

`.catch` sẽ hoạt động giống `.addEventListener(event, callback)` hay Event Emitter `.on(event, callback)`. Có thể thêm bao nhiêu tùy thích, nó sẽ chạy tất cả các callback.
<br /><br />

Đáp án: `b. In ra lỗi ra lần`

<br /><br />

### Câu 2:`var p = new Promise((resolve, reject) => { return Promise.reject(Error('The Fails!'))})p.catch(error => console.log(error.message))p.catch(error => console.log(error.message))`Đáp án là ?a. In ra lỗi 1 lầnb. In ra lỗi 2 lầnc. UnhandledPromiseRejectionWarningKhi khởi tạo một Promise, chúng ta phải gọi một callback là `resolve()` hoặc `reject()` (không thể gọi 2 cái cùng lúc) và không được return giá trị.Đáp án: `c. UnhandledPromiseRejectionWarning`### Câu 3`var p = new Promise((resolve, reject) => { reject(Error('The Fails!')) }) .catch(error => console.log(error)) .then(error => console.log(error))`Đáp án là ?Kết quảa. In ra lỗi và undefinedb. In ra lỗi 2 lầnc. UnhandledPromiseRejectionWarningd. undefinedKhi đặt `.catch()` trước `.then()` như thế thì `.then()` sẽ không nhận được giá trị từ hàm trước đó, mọi thứ đã kết thúc ở hàm `.catch()`.Đáp án: `a. In ra lỗi và undefined`### Câu 4`var p = new Promise((resolve, reject) => { reject(Error('The Fails!')) }) .catch(error => console.log(error.message)) .catch(error => console.log(error.message))`Đáp án là ?a. In ra lỗi một lầnb. In ra lỗi 2 lầnc. UnhandledPromiseRejectionWarningGiải thích như câu 3, mọi thứ đã kết thúc tại `.catch()` thứ 1, `.catch()` thứ 2 không được gọi đến, có thể đặt `.then()` ở phía sau `.catch()` nhưng không thể đặt `.catch()` sau `.catch().Đáp án: `a. In ra lỗi một lần` ### Câu 5```new Promise((resolve, reject) => { resolve('Success!') }) .then(() => { throw Error('Oh noes!') }) .catch(error => { return "actually, that worked" }) .catch(error => console.log(error.message))```Đáp án là ?a. In lỗi 1 lầnb. In lỗi 2 lầnc. UnhandledPromiseRejectionWarningd. Không in ra gì hết `.catch()`có thể được sử dụng để ghi đè lên giá trị lỗi bằng cách cho`return`một giá trị bất kỳ. Điều này chỉ làm được khi trước đó hàm`.then()`có trả về giá trị.Đáp án:`d. Không in ra gì hết` ### Câu 6```Promise.resolve('Success!') .then(data => { return data.toUpperCase() }) .then(data => { console.log(data) })```Đáp án là ?a. In ra "Success!" và "SUCCESS!"b. In ra "Success!"c. In ra "SUCCESS!"d. Không in ra gì hết `.then() sẽ truyền dữ liệu theo thứ tự, khi `return` giá trị, hàm `.then()` tiếp theo sẽ nhận giá trị được `return` từ hàm `.then()` trước đó.Đáp án: `c. In ra "SUCCESS!"`### Câu 7`Promise.resolve('Success!') .then(data => { return data.toUpperCase() }) .then(data => { console.log(data) return data }) .then(console.log)`Đáp án là ?a. In ra "SUCCESS!"b. In ra "Success!"c. In ra "SUCCESS!" và "SUCCESS!"d. Không in ra gì hếtGiống câu 6.Đáp án: `c. In ra "SUCCESS!" và "SUCCESS!"`### Câu 8`Promise.resolve('Success!') .then(data => { data.toUpperCase() }) .then(data => { console.log(data) })`Đáp án là ?a. In ra "SUCCESS!"b. In ra "Success!"c. In ra "SUCCESS!" và "SUCCESS!"d. In ra "undefined"Nếu muốn truyền giá trị cho hàm `.then()` kế tiếp thì phải truyền thông qua `return`.Đáp án: `d. In ra "undefined"`### Câu cuối `Promise.resolve('Success!') .then(() => { throw Error('Oh noes!') }) .catch(error => { return 'actually, that worked' }) .then(data => { throw Error('The fails!') }) .catch(error => console.log(error.message))`Đáp án là ?a. In ra "Oh noes!" và "The fails!"b. In ra "Oh noes!"c. In ra "The fails!"d. In ra "actually, that worked"e. Không in ra gì hếtQua 8 ví dụ trên thì mình chắc chắn bạn có thể làm được câu này một cách rất dễ dàng😉. Đáp án: `c. In ra "The fails!"`Bài viết được dịch từ ![](https://danlevy.net/javascript-promises-quiz/).## Hết
