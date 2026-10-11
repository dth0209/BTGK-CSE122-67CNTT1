# BÀI KIỂM TRA GIỮA KỲ - CSE122
## HỌC PHẦN: PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN

---

### 1. Thông tin sinh viên & Đề tài
- **Họ và tên:** Đặng Trung Hiếu
- **Lớp:** 67CNTT1
- **Mã sinh viên:** 2551060612
- **Tên đề tài BTL:** CultureTrail – Nền tảng kết nối văn hóa và du lịch di sản
- **Tên trang thực hiện:** Trang Đăng ký (Register Page)

---

### 2. Mục đích của trang
- Cung cấp giao diện tạo tài khoản người dùng mới trên nền tảng CultureTrail.
- Giúp người dùng đăng ký thông tin cá nhân để lưu trữ lộ trình và trải nghiệm các điểm đến di sản.
- Kiểm tra tính hợp lệ của dữ liệu đầu vào ngay tại giao diện người dùng (Client-side validation) trước khi gửi đi.

---

### 3. Các chức năng chính
- **Bố cục giao diện:**
  - Thiết kế chia 2 cột: Banner hình ảnh truyền cảm hứng bên trái và form đăng ký bên phải.
  - Tối ưu hiển thị Responsive: Tự động chuyển về 1 cột trên thiết bị di động, ẩn ảnh banner để tập trung vào form.
- **Form Validation (Xử lý bằng JavaScript):**
  - **Họ và tên:** Không được để trống. Báo lỗi và đổi viền đỏ nếu để trống.
  - **Email:** Kiểm tra định dạng hợp lệ qua Regex (`user@example.com`).
  - **Mật khẩu:** Bắt buộc tối thiểu 8 ký tự. Phân biệt rõ thông báo khi để trống (`Vui lòng nhập mật khẩu!`) và khi chưa đủ ký tự (`Mật khẩu không hợp lệ!`).
  - **Phản hồi giao diện:** Ô nhập hợp lệ đổi viền xanh lá, ô nhập sai đổi viền đỏ kèm dòng chữ thông báo lỗi màu đỏ ngay dưới ô.
  - **Chặn gửi dữ liệu:** Sử dụng `event.preventDefault()` chặn tải lại trang khi dữ liệu còn sai sót.
  - **Xác nhận thành công:** Hiển thị thông báo màn hình `Đăng ký thành công!` khi cả 3 trường điền đúng và đủ.

---

### 4. Công nghệ sử dụng
- **HTML5:** Sử dụng cấu trúc Semantic (`header`, `main`, `section`, `form`, `label`, `input`, `button`).
- **CSS3:** Bố cục bằng Flexbox, kích thước hiển thị form 520px, hiệu ứng tương tác `:hover`, Media Query phục vụ Responsive.
- **JavaScript (Vanilla JS):** Thao tác DOM, xử lý sự kiện `submit`, `input`, kiểm tra dữ liệu với biểu thức chính quy (Regex).

---

### 5. Cấu trúc thư mục dự án
```text
culture-trail-auth/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── anhnen.jpg
└── README.md
