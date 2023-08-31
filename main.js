// Hàm để hiển thị ngày vào div
function showDate() {
    // Tạo một đối tượng Date với ngày hiện tại
    var date = new Date();
    // Tạo một đối tượng options để chỉ định các thành phần của ngày
    var options = {
        weekday: "long", // Hiển thị tên thứ
        day: "numeric", // Hiển thị số ngày
        month: "numeric", // Hiển thị số tháng
        year: "numeric" // Hiển thị số năm
    };
    // Định dạng ngày theo tiếng Việt
    var dateStr = date.toLocaleDateString("vi-VN", options);
    // Lấy phần tử div bằng class name
    var getDate = document.getElementsByClassName("date")[0];
    // Thiết lập thuộc tính innerHTML của div bằng ngày
    getDate.innerHTML = dateStr;
}
// Gọi hàm showDate () lần đầu tiên
showDate();
