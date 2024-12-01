# Dashboard attack defense
# Node.js Express Project

## Mô tả

Dự án này là một ứng dụng web sử dụng Node.js và Express, kết nối với MongoDB, hỗ trợ đăng ký và đăng nhập người dùng, xác thực bằng JWT, quản lý migration cho cơ sở dữ liệu và chạy trong môi trường Docker.

## Cấu trúc thư mục
```txt
dash-attackdefense/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   ├── services/
│   │   └── authService.js
│   ├── migrations/
│   │   └── migrationFile.js
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
└── README.md
```
## Cài đặt

1. Clone repository:
    ```bash
    git clone <repository-url>
    cd project-root
    ```

2. Cài đặt các thư viện cần thiết:
    ```bash
    npm install
    ```

3. Tạo file `.env` trong thư mục gốc và thêm các biến môi trường:
    ```env
    MONGO_URI=mongodb://localhost:27017/mydatabase
    JWT_SECRET=your_jwt_secret
    PORT=3000
    ```

4. Chạy migration để thiết lập cơ sở dữ liệu:
    ```bash
    npm run migrate
    ```

## Chạy ứng dụng

### Chạy bằng Docker

1. Build và chạy container Docker:
    ```bash
    docker-compose up --build
    ```

    If run dev

    ```bash
    docker compose -f .\docker-compose-dev.yml up --build
    ```

2. Ứng dụng sẽ chạy tại `http://localhost:3000`.

### Chạy trong môi trường phát triển

1. Chạy ứng dụng với nodemon:
    ```bash
    npm run dev
    ```

2. Ứng dụng sẽ chạy tại `http://localhost:3000`.

## API Endpoints

### Auth

- `POST /api/auth/register`: Đăng ký người dùng mới.
- `POST /api/auth/login`: Đăng nhập người dùng.

### User

- `GET /api/users/profile`: Lấy thông tin người dùng (yêu cầu xác thực).

## Công nghệ sử dụng

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Docker

## Đóng góp

Nếu bạn muốn đóng góp cho dự án, vui lòng tạo một pull request hoặc mở một issue mới.

## Giấy phép

Dự án này được cấp phép theo giấy phép MIT. Xem file LICENSE để biết thêm chi tiết.