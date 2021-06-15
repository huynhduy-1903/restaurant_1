function validate(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
      var characters = email.indexOf("@");
      var dot = email.lastIndexOf(".");
    var phone=document.getElementById("phonenumber").value;
      var ck_phone=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var date=document.getElementById("date").value;
    var time=document.getElementById("time").value;
    var member=document.getElementById("members").value;
    var select=document.getElementById("choice").value;
    var diadiem=document.getElementById("diadiem").value;
      var check=/^[0-9]{2}[A-Za-z]+$/;
    if (name=="") {
      alert("Vui lòng nhập lại tên!");
      return false;
    }
    if (characters<1||dot<(characters+2)||(dot+2)>=email.length){
      alert("Vui lòng nhập lại Email của bạn!");
      return false;
    }
    if(!ck_phone.test(phone)){
      alert("Vui lòng nhập lại số điện thoại của bạn!");
    }
    if(date==""){
      alert("Vui lòng nhập ngày đặt!");
      return false;
    }
    if(time==""){
      alert("Vui lòng nhập thời gian!");
      return false;
    }
    if(member=""||member<=0){
      alert("Vui lòng nhập số người!");
      return false;
    }
    if(select==-1){
      alert("Vui lòng chọn địa điểm!");
      return false;
    }
    if(!check.test(diadiem)){
      alert("thử lại");
      return false;
    }
    else{
      alert("Thank you!");
      window.location="bookrequets.html";
      return false;
    }
  }
function validate2(){
    var name2=document.getElementById("name2").value;
    var email2=document.getElementById("email2").value;
      var characters2 = email2.indexOf("@");
      var dot2 = email2.lastIndexOf(".");
    var phone2=document.getElementById("phonenumber2").value;
      var ck_phone2=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var city=document.getElementById("city").value;
    var district=document.getElementById("district").value;
    var street=document.getElementById("street").value;
    if (name2=="") {
      alert("Vui lòng nhập lại tên!");
      return false;
    }
    if (characters2<1||dot2<(characters2+2)||(dot2+2)>=email2.length){
      alert("Vui lòng nhập lại Email của bạn!");
      return false;
    }
    if(!ck_phone2.test(phone2)){
      alert("Vui lòng nhập lại số điện thoại của bạn!");
      return false;
    }
    if(city==""){
      alert("Vui lòng nhập địa chỉ!");
      return false;
    }
    if(district==""){
      alert("Vui lòng nhập địa chỉ!");
      return false;
    }
    if(street==""){
      alert("Vui lòng nhập địa chỉ!");
      return false;
    }
    else{
      alert("Thank you!");
      window.location="orderss.html";
      return false;
    }
  }
