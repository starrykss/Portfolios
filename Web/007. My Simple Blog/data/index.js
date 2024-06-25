import express from "express";
import bodyParser from "body-parser";
import nodeMailer from "nodemailer";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// 글들을 저장하기 위한 변수
let posts = [];

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

// Contact 처리
app.post("/submit", (req, res) => {
  const name = req.body["name"];
  const email = req.body["email"];
  const content = req.body["text"];

  // 입력 정보 출력
  console.log(`Name: ${name}, Email: ${email}, Comment: ${content}`);

  // 이메일을 보내기 위한 transporter 설정
  const host_email = "host_email@naver.com";
  const host_password = "host_email_password";

  const transporter = nodeMailer.createTransport({
    service: "Naver",
    host: "smtp.naver.com",
    port: 993, // 본인 계정에 맞게 포트 변경
    auth: {
      user: host_email, // 나의 이메일
      pass: host_password, // 나의 이메일 계정 비밀번호
    },
  });

  // 메일 옵션 설정
  const mailOptions = (title, content) => {
    const mailOption = {
      from: host_email, // 발신자 이메일 주소
      to: host_email, // 수신자 이메일 주소
      subject: `"new comment from ${name}(${email}$)"`,
      text: content,
    };

    return mailOption;
  };

  // 이메일 전송
  const sendMail = (mailOption) => {
    transporter.sendMail(mailOption, function (error, info) {
      if (error) {
        console.log("ERROR : " + error);
      } else {
        console.log("Your message has been sent successfully!");
      }
    });
  };

  const mailOption = mailOptions("TEST", content);
  sendMail(mailOption);
});

app.get("/post", (req, res) => {
  res.render("post.ejs", {
    postList: posts,
  });
});

app.get("/write", (req, res) => {
  res.render("write.ejs");
});

app.post("/write", (req, res) => {
  const title = req.body["title"];
  const content = req.body["content"];
  const newPost = { title, content };

  posts.push(newPost);

  res.render("post.ejs", {
    postList: posts,
  });

  res.redirect("/post");
});

app.get("/edit/:id", (req, res) => {
  const postId = req.params.id;
  const post = posts[postId];

  res.render("edit.ejs", {
    post: post,
    postId: postId,
  });
});

app.post("/edit/:id", (req, res) => {
  const postId = req.params.id;
  const title = req.body["title"];
  const content = req.body["content"];

  posts[postId].title = title;
  posts[postId].content = content;

  res.redirect("/post");
});

app.get("/delete/:id", (req, res) => {
  const postId = req.params.id;
  posts.splice(postId, 1); // postId 인덱스에 있는 요소를 1개 제거한다.
  res.redirect("/post");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
