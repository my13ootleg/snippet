// n秒後に実行
$(function () {
  setTimeout(function () {
    $(".screen").addClass("screen-active", 500);
  }, 500); // 500ミリ秒後に
});

// クリックでクラスを付与/削除
$(".toggle-button").on("click", function () {
  $(".toggle-button").toggleClass("toggle-button-active");
});

// 現在の年代取得
$(function () {
  var now = new Date();
  var y = now.getFullYear();
  var m = now.getMonth() + 1;
  $(".copyright-year").text(y + "");
});

// 自分の年齢取得
const birthdate = "1982/1/26";
const ageCalculation = (birthDate, nowDate) => {
  const age = nowDate.getFullYear() - birthDate.getFullYear();
  const thisYearsBirthday = new Date(nowDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  return age + (thisYearsBirthday.getTime() > nowDate.getTime() ? -1 : 0);
};
const age = ageCalculation(new Date(birthdate), new Date());
$(".age").text(age);

// クリックで次の要素を開閉
$(".payment-paypal-about dt").on("click", function () {
  $(this).next("dd").slideToggle("1000", "easeInOutExpo");
});
