function OnCLickthat(){
    const username = document.getElementById('username').value;
    const Coupon= document.getElementById('Coupon').value;
    const coupon = document.getElementById('Coupon1').value;
    const lang= document.getElementById('Lang').value;
   
    var condition1= 3;
    var check2= 0;
    var emailCheck;
    if(Coupon.length == 0){
        document.getElementById('input2').innerHTML="password should not be empty";
        document.getElementById('input2').style.backgroundColor='red';
    }
    else if(coupon!=Coupon){
         document.getElementById('input2').innerHTML="Not a Same Password";
        document.getElementById('input2').style.backgroundColor='red';
    }
    else if(Coupon.length<5){
        document.getElementById('input2').innerHTML="6 digit only";
        document.getElementById('input2').style.backgroundColor='red';
    }
    else if(Coupon.length>15){
        document.getElementById('input2').innerHTML="Digit should be between 15 Digits";
        document.getElementById('input2').style.backgroundColor='red';              
    }
    else{
        document.getElementById('input2').innerHTML=Coupon;
        document.getElementById('input2').style.backgroundColor='purple';
    }
  

    if(username.length == 0){
        document.getElementById('input1').innerHTML="Username should not be empty";
        document.getElementById('input1').style.backgroundColor='red';
    }
    else{
        document.getElementById('input1').style.backgroundColor='purple';
        document.getElementById('input1').innerHTML=username;

    }
         

 
    const additional= document.getElementById('lastname').value;
    const AmountPaid =document.getElementById('Ammount');
    var mail= document.getElementById('email').value; 
    const Mobile= document.getElementById('mobile').value;
    const DOJ1= document.getElementById('DOB').value;
    const DOJ = new Date(DOJ1);
    const Alert= document.getElementById('Alert');           
    document.getElementById('input3').innerHTML=lang;
    if(lang=="other"){
        document.getElementById('input3.1').innerHTML=additional;
        document.getElementById('input3').style.display="none";
    }
    else{
        document.getElementById('input3.1').style.display="none";
    }
    

    
   
    if(AmountPaid.checked == true){
        document.getElementById('input4').innerHTML='Paid';
    }
    else{
        document.getElementById('input4').innerHTML='NotPaid';

    }
        
    console.log(mail.length +"I am that mail");
    console.log();
    if(mail.indexOf("@gmail.com")>0){
        document.getElementById('input5').style.backgroundColor = "purple";
        document.getElementById('input5').innerHTML=mail;

        
    }
    else{
     document.getElementById('input5').innerHTML="Enter a valid mail address";
     document.getElementById('input5').style.backgroundColor = "red";
         }

    
    document.getElementById('input6').innerHTML=Mobile;
    if(Mobile.length == 0){
        document.getElementById('input6').innerHTML="Number should not be empty";
        document.getElementById('input6').style.backgroundColor='red';
    }
    else{
        document.getElementById('input6').style.backgroundColor='purple';
        
    }
    var d = new Date('2023-06-16');
    if(DOJ == "Invalid Date"){
        document.getElementById('input7').innerHTML="Enter a date";
        document.getElementById('input7').style.backgroundColor = "red";
    }
    else if(DOJ<d){
        console.log("Date true");
        document.getElementById('input7').innerHTML="Enter a valid date";
        document.getElementById('input7').style.backgroundColor = "red";
    }
    else{
        console.log("Date False");
        document.getElementById('input7').style.backgroundColor = "purple";
        document.getElementById('input7').innerHTML=DOJ1
    }
   
    if(Alert.checked == true){
    document.getElementById('input8').innerHTML='SMSAlerton';
   }
   else{
    document.getElementById('input8').innerHTML='SMSAlertoff';
   }

}