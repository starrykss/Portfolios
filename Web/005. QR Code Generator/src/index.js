import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;

    // QR 코드 이미지로 변환하기
    var qr_png = qr.image(url);

    // QR 코드 이미지 파일로 저장하기
    qr_png.pipe(fs.createWriteStream("QR_Code_Image.png"));

    // 입력 받은 URL을 텍스트 파일로 저장하기
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment.");
    } else {
      console.log("Something else went wrong!");
    }
  });
