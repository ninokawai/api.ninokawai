  const express = require("express");
  const cors = require("cors");
  const helmet = require("helmet");
  const api = require("./routes/api");
  const path = require('path');
const chalk = require('chalkercli');
  const app = express();

  app.use(helmet());
  app.use(express.json());
  app.use(cors());

  app.use("/", api);

  app.use((error, req, res, next) => {
    res.status(error.status).json({ message: error.message });
  });
  // const uri = "mongodb+srv://Disryter123:Disryter123@cluster0.dppma.mongodb.net/databot?retryWrites=true&w=majority";

  (async () => {
    // await mongoose.connect(uri, {
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    //   useCreateIndex: true,
    // });
    var myVar = setInterval(rest,  1000 * 25 * 60);

    function rest() {
      process.exit(1)
    }
    console.log(
      `\x1b[36m[ VN ] →\x1b[37m API Project được điều hành bởi Văn Chiến`), "";
          console.log(`\x1b[36m[ EN ] →\x1b[37m The API Project is run by Van Chien\n`), "";
          const rainbow = chalk.rainbow(`
      ◆━━━━━━━━━━━━◆◆━━━━━━━━━━━━◆◆━━━━━━━━━━━━◆
      *                                        *
      *                                        *
      *                                        *
      *                                        *
      *   → API Project                        *
      *   → Phiên bản: 1.2.15                  *
      *   → Tên: Ng Văn Chiến - 07/07/2009 *
      *   → FB: Ng Văn Chiến                   *
      *                                        *
      ◆━━━━━━━━━━━━◆◆━━━━━━━━━━━━◆◆━━━━━━━━━━━━◆
      `);
    rainbow.render();

      const frame = rainbow.frame();
      console.log(frame);
      console.log(`[ API Project đang tiến hành khởi chạy ]`), "";
    console.log(`\x1b[36m[ LOADING ] →\x1b[37m Hệ thống đang kết nối API cho bạn, vui lòng đợi trong giây lát...`), "";
    app.set('port', (process.env.PORT || 5000));
    app.get('/', function (req, res) {
      res.sendFile(__dirname + '/index.html');

    }).listen(app.get('port'), function () {
      console.log('\x1b[36m[ PORT ] → \x1b[37m Máy chủ đang chạy trên PORT', app.get('port'), '\n\x1b[36m[ START ] → \x1b[37m Tiến hành nhận yêu cầu\n============================================');
    });
    console.log('\x1b[36m[ LOADING ] →\x1b[37m Đã kết nối thành công tất cả API, bạn có thể sử dụng ngay bây giờ');
  })();