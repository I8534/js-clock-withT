// setInterval을 써야 시간이 실시간으로 된다.


setInterval(function() {
  // 변수들이 setinterval 안에 있어야 하는 이유
  // 1000ms 마다 새로운 값을 업데이트 해줘야 하기 때문
  // setinterval
  // 주기적으로 어떤 값을 업데이트 해야 하거나,
  // api로부터 변경된 데이터를 주기적으로 받아야 하는 경우
  let now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  if(hr >= 10) {
    hnum = hr;
  } else {
    hnum = '0' + hr;
  }

  if(min >= 10) {
    mnum = min;
  } else {
    mnum = '0' + min;
  }

  if(sec >= 10) {
    snum = sec;
  } else {
    snum = '0' + sec;
  }

  $("#phone p span").eq(0).text(hnum);
  $("#phone p span").eq(1).text(mnum);
  $("#phone p span").eq(2).text(snum);
})

let now = new Date();
let hr = now.getHours();

if(hr >= 6 && hr < 12) {
  $("#wrapper").addClass("morning");
  $("nav li").eq(0).addClass("on");
} else if(hr >= 12 && hr < 16) {
  $("#wrapper").addClass("afternoon");
  $("nav li").eq(1).addClass("on");
} else if(hr >= 16 && hr < 19) {
  $("#wrapper").addClass("evening");
  $("nav li").eq(2).addClass("on");
} else {
  $("#wrapper").addClass("night");
  $("nav li").eq(3).addClass("on");
}

$("nav li").click(function(e) {
  e.preventDefault(); 
  // a태그가 다른 곳으로 이동하려는 것이기 때문에 이것을 입력하는 것이다.
  // 일종에 a태그를 클릭하면 자꾸 새로고침이 되니깐 안 되는 것이다.
  // href에 경로를 추가 안 하면 새로고침이 된다. 그래서 이걸 넣어놓은 것이다.
  let back = $(this).children("a").text();
  $("nav li").removeClass("on");
  $("#wrapper").removeClass();
  $("#wrapper").addClass(back);
})
