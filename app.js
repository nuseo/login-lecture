"use strict";

//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./routes/home");

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home) //미들웨어 등록하는 메서드

const PORT = 3000;

app.listen(PORT, function () {
    console.log("서버 가동");
});