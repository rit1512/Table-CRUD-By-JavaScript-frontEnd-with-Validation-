

table=document.getElementById("table");

function validaedit(){


    var isValid=false,
    isfname1=false,
    islname1=false,
    isadd1=false,
    isemail1=false,
    ismobile1=false,
    iscity1=false,
    ispincode1=false,
   
    fname1= document.getElementById("f_name1").value,
    lname1=document.getElementById("l_name1").value,
    email1=document.getElementById("email1").value,
    mobile1=document.getElementById("mobile1").value,
    city1=document.getElementById("city1").value,
    pincode1=document.getElementById("pincode1").value,
    add1=document.getElementById("add1").value;
    var pincodeRegex = /^\d{6}$/;
    var mobileRegex= /^(\+\d{1,3}[- ]?)?\d{10}$/;
    var emailRegex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    if(fname1 == "" || fname1==null)
    {
      
        document.getElementById('e1').innerHTML = "First Name cannot be Null";
        isValid = true;
        isfname=true;
    }
    else if(lname1 == "" || lname1==null)
    {
        document.getElementById('e2').innerHTML = "Last Name cannot be Null";
        isValid = true;
        islname1=true;
    }
    else if(add1 == "" || add1==null)
    {
        document.getElementById('e3').innerHTML = "Address cannot be Null";
        isValid = true;
        isadd1=true;
    }
    else if(email1=="" || email1==null){
        document.getElementById('e4').innerHTML = "EmailId is empty"
        isValid=true;
        isemail1=true;
    }
  
    else if(emailRegex.test(email1)==false){
        document.getElementById('e4').innerHTML = "Email  is Invalid";
        isValid=true;
        isemail1=true;
    }
    else if(pincode1=="" || pincode1==null){
        document.getElementById('e7').innerHTML = "Pincode is empty";
        isValid=true;
        ispincode1=true;
    }
  
    else if(pincodeRegex.test(pincode1)==false){
        document.getElementById('e7').innerHTML = "The Length of Pincode must have 6 digit";
        isValid=true;
        ispincode1=true;
    }
    else if(mobile1=="" || mobile1==null){
        document.getElementById('e5').innerHTML = "Please Enter your Number";
        isValid=true;
        ismobile1=true;
    }
  
    else if(mobileRegex.test(mobile1)==false){
        document.getElementById('e5').innerHTML = "Mobile Number is Invalid";
        isValid=true;
        ismobile1=true;
    }

    else  if(city1 == "" || city1==null)
    {
      
        document.getElementById('e6').innerHTML = "First Name cannot be Null";
        isValid = true;
        iscity1=true
    }

    if (isfname1==false)
    {
        document.getElementById('une1').innerHTML = "";
}


if(islname1==false)
{

document.getElementById("une2").style.display="none";
}
if(isadd1==false){
document.getElementById("une3").style.display="none";
}

if(isemail1==false){
document.getElementById("une4").style.display="none";
}
if(ismobile1==false){
document.getElementById("une5").style.display="none";
}
if(ispincode1==false){
document.getElementById("une7").style.display="none";

}
if(iscity1==false){
  document.getElementById("une6").style.display="none";
}
    


    return isValid;
}






function validation(){
    let isEmpty=false,
     isFname=false,
     islname=false,
     isemail=false,
     ismobile=false,
     iscity=false,
     ispincode=false,
     isadd=false,
    fname= document.getElementById("f_name").value,
    lname=document.getElementById("l_name").value,
    email=document.getElementById("email").value,
    mobile=document.getElementById("mobile").value,
    city=document.getElementById("city").value,
    pincode=document.getElementById("pincode").value,
    add=document.getElementById("add").value;
   
    var pincodeRegex = /^\d{6}$/;
    var mobileRegex= /^(\+\d{1,3}[- ]?)?\d{10}$/;
    var emailRegex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    

    if(fname == "" || fname==null)
    {
        document.getElementById('une1').innerHTML = "First Name cannot be Null";
        isEmpty =true;
        isFname=true;
    }
     if(lname == "" || lname==null)
    {
        document.getElementById('une2').innerHTML = "Last Name cannot be Null";
        isEmpty = true;
        islname=true;
    }
     if(add == "" || add==null)
    {
        document.getElementById('une3').innerHTML = "Address cannot be Null";
        isEmpty = true;
        isadd=true;
    }
     if(email=="" || email==null){
        document.getElementById('une4').innerHTML = "EmailId is empty"
        isEmpty=true;
        isemail=true;
    }
  
     if(emailRegex.test(email)==false){
        document.getElementById('une4').innerHTML = "Email  is Invalid";
        isEmpty=true;
        isemail=true;
    }
     if(pincode=="" || pincode==null){
        document.getElementById('une7').innerHTML = "Pincode is empty";
        isEmpty=true;
        ispincode=true;
    }
  
     if(pincodeRegex.test(pincode)==false){
        document.getElementById('une7').innerHTML = "The Length of Pincode must have 6 digit";
        isEmpty=true;
        ispincode=true;
    }
     if(mobile=="" || mobile==null){
        document.getElementById('une5').innerHTML = "Please Enter your Number";
        isEmpty=true;
        ismobile=true;
    }
  
     if(mobileRegex.test(mobile)==false){
        document.getElementById('une5').innerHTML = "Mobile Number is Invalid";
        isEmpty=true;
        ismobile=true;
    }

      if(city == "" || city==null)
    {
      
        document.getElementById('une6').innerHTML = "First Name cannot be Null";
        isEmpty = true;
        iscity=true;
    }
      if (isFname==false)
      {
          document.getElementById('une1').innerHTML = "";
}
  

if(islname==false)
{

document.getElementById("une2").style.display="none";
}
if(isadd==false){
document.getElementById("une3").style.display="none";
}

if(isemail==false){
document.getElementById("une4").style.display="none";
}
if(ismobile==false){
document.getElementById("une5").style.display="none";
}
if(ispincode==false){
document.getElementById("une7").style.display="none";

}
if(iscity==false){
    document.getElementById("une6").style.display="none";
}
   
    return isEmpty;
}

function addElement()
{
 if(!validation())
  {
    var newRow=table.insertRow(table.length),
    cell1=newRow.insertCell(0),
     cell2=newRow.insertCell(1),
     cell3=newRow.insertCell(2),
     cell4=newRow.insertCell(3),
     cell5=newRow.insertCell(4),
     cell6=newRow.insertCell(5),
     cell7=newRow.insertCell(6),
     cell8=newRow.insertCell(7),
     cell9=newRow.insertCell(8),
     fname= document.getElementById("f_name").value,
     lname=document.getElementById("l_name").value,
     email=document.getElementById("email").value,
     mobile=document.getElementById("mobile").value,
     city=document.getElementById("city").value,
     pincode=document.getElementById("pincode").value,
     add=document.getElementById("add").value;
     cell2.innerHTML =fname;
     cell3.innerHTML=lname;
     cell4.innerHTML=email;
     cell5.innerHTML=mobile;
     cell6.innerHTML=city;
     cell7.innerHTML=add;
     cell8.innerHTML=pincode;
     cell9.innerHTML=' <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal2" onclick="Input();" >Edit</button> <button class=" btn btn-primary mt-1" onclick="deletebutton();">Delete</button>';
    $('#modal1').modal('hide');
    resetElement();
  }
 
}

function Input(){
 
    for(var i = 1; i < table.rows.length; i++)
{
    table.rows[i].onclick = function()
    {
     
      rIndex = this.rowIndex;

     document.getElementById("f_name1").value= this.cells[1].innerHTML;
     document.getElementById("l_name1").value= this.cells[2].innerHTML;
     document.getElementById("email1").value= this.cells[3].innerHTML;
     document.getElementById("mobile1").value= this.cells[4].innerHTML;
     document.getElementById("city1").value= this.cells[5].innerHTML;
     document.getElementById("pincode1").value= this.cells[7].innerHTML;
     document.getElementById("add1").value= this.cells[6].innerHTML;
    };
}
}


function editElement(){
    if(!validaedit()){
        var fname = document.getElementById("f_name1").value;
    
        var  lname=document.getElementById("l_name1").value;
       var email=document.getElementById("email1").value;
       var mobile=document.getElementById("mobile1").value;
       var city=document.getElementById("city1").value;
       var pincode=document.getElementById("pincode1").value;
      var add=document.getElementById("add1").value;
      
       table.rows[rIndex].cells[1].innerHTML =fname;
       table.rows[rIndex].cells[2].innerHTML=lname;
       table.rows[rIndex].cells[3].innerHTML=add;
       table.rows[rIndex].cells[4].innerHTML=email;
       table.rows[rIndex].cells[5].innerHTML=mobile;
       table.rows[rIndex].cells[7].innerHTML=pincode;
       table.rows[rIndex].cells[6].innerHTML=city;
       $('#modal2').modal('hide');
    }
  

}

function deletebutton()
{
    var index = document.getElementById('table');
    // alert(index);
    var row= table.rows.length;
    // alert(row)
    for(var i=1;i<row;i++)
    {
           table.rows[i].cells[8].onclick = function(){
               index = this.parentElement.rowIndex;
              
               table.deleteRow(index);
              
           }
    }

  
}


function resetElement()
{
    document.getElementById("f_name").value="";
  document.getElementById("l_name").value="";
  document.getElementById("email").value="";
  document.getElementById("mobile").value="";
  document.getElementById("city").value="";
  document.getElementById("pincode").value="";
  document.getElementById("add").value="";
}

