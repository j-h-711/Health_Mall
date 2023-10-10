// localStorage에서 주문 정보를 가져옴
const orderInfoJSON = localStorage.getItem("orderInfo");
const orderInfo = JSON.parse(orderInfoJSON);

// 주문 정보를 화면에 표시
if (orderInfo) {
  document.getElementById("order-total-price").textContent =
    orderInfo.totalPrice + "원";
  document.getElementById("order-date").textContent = orderInfo.orderTime;
  document.getElementById("order-name").textContent = orderInfo.recipient;
  document.getElementById("order-contact").textContent = orderInfo.contact;
  document.getElementById("order-address").textContent = orderInfo.address;
  document.getElementById("order-detail-address").textContent =
    orderInfo.detailAddress;
} else {
  // orderInfo 가 제대로 없는 경우
  alert("주문 정보를 가져올 수 없습니다.");
  // !!!! 다시 메인 페이지로 이동하거나 장바구니로 이동하도록 구현 필요 !!!!
}

// 홈으로 가기
const homeButton = document.getElementById("homeBtn");
homeButton.addEventListener("click", () => {
  window.location.href = "../home/home.html";
});

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// localStorage를 통해 받아온 orderInfo에는
// address, detailAddress, contact, email, orderTime, recipient, totalPrice, orderProducts
// 들이 들어있음
// 주문완료와 함께 email이 일치하는 회원의 db에 orderProducts를 이용하여 결제내역 넣어줘야함

// 주문한 상품 객체
const orderProducts = orderInfo.products;
// 주문자의 email
const userEmail = orderInfo.email;
// orderInfo로 부터 들어온 이메일과 같은 이메일을 가진 회원의 구매내역에 구매정보 넣어줘야함
function findUser(userEmail) {
  // db로부터 받아온 유저들 중 이메일이 일치하는 유저의 구매내역에 추가해야함
}
