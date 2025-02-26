document.addEventListener("DOMContentLoaded", function(){
    var body = document.querySelector('body');
    function createBubble(){
    var circle = document.createElement('span');
        circle.classList.add('bubble');
        // Generate random x and y positions within the viewport
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;

        // Set random position
        circle.style.position = 'absolute';
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
    circle.style.left = x+'px';
    circle.style.top = y+'px';
    var size = Math.random()*100;
    circle.style.width = 20 + size +'px';
    circle.style.height = 20 + size +'px';

    body.appendChild(circle);
    setTimeout(function(){
        circle.remove();
    }, 3000 );
}
setInterval(createBubble, 500);
})




function display(){
    let first_name = document.getElementById("f_name").value;
    let last_name = document.getElementById("l_name").value;
    let user_email = document.getElementById("u_email").value;
    let user_mobile = document.getElementById("u_mobile").value;
    let user_state = document.getElementById("state").value;
    let user_district = document.getElementById("district").value;


    document.getElementById("first_name").innerHTML = first_name;
    document.getElementById("last_name").innerHTML = last_name;
    document.getElementById("user_email").innerHTML = user_email;
    document.getElementById("user_mobile").innerHTML = user_mobile;
    document.getElementById("user_state").innerHTML = user_state;
    document.getElementById("user_district").innerHTML = user_district;

}

var currenttab = 0;
showtab(currenttab);
function showtab(n){
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    if(n==0){
        document.getElementById("prevBtn").style.display = "none";
    }
    else{
        document.getElementById("prevBtn").style.display = "inline";
    }
    if(n== (x.length-2)){
        document.getElementById("nextBtn").innerHTML = "Submit";
    }
    else if(n== (x.length-1)){
        document.getElementById("prevBtn").style.display = "none";
        document.getElementById("nextBtn").style.display = "none";
        var elements = document.getElementsByClassName("circle");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
    }
    else{
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    stepindicator(n);
}

function nextPrev(n){
    var x = document.getElementsByClassName("tab");
    if(n==1 && !validateform()) return false;

    x[currenttab].style.display = "none";
    currenttab = currenttab + n;
    if(currenttab >= x.length){
        return false;
    }
    showtab(currenttab);
}
function validateform(){
    var x, y,i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currenttab].getElementsByTagName("input");
    var errortext = x[currenttab].getElementsByClassName("error");
   
     // Clear previous errors
     for (let i = 0; i < errortext.length; i++) {
        errortext[i].textContent = "";
    }

    if(currenttab == 2){
        var stateDropdown = document.getElementById("state");
        const districtDropdown = document.getElementById("district");
        if(!stateDropdown || !districtDropdown){
           
            return false;
        }
        if (stateDropdown.selectedIndex === 0 || districtDropdown.selectedIndex === 0) {
            valid = false;
            if (errortext.length > 0) {
                errortext[0].textContent = "Please select both State and District.";
            }
        }
    }
    if(currenttab == 3){
        var checkBox = document.getElementById("checkBox");
    
        if(!checkBox || !checkBox.checked ){
            valid = false;
            if (errortext.length > 0) {
                errortext[0].textContent = "Please check the box to continue.";
            }
        }
    }


    for (let i = 0; i < y.length; i++) {
        if (y[i].type !== "checkbox" && y[i].value.trim() === "") {
            valid = false;
            if (i < errortext.length) {
                errortext[i].textContent = "Please enter a value.";
            }
        }
    }
    if(valid){
        document.getElementsByClassName("step")[currenttab].className += " finish";
    }
    return valid;
}







function stepindicator(n){
    var i, x = document.getElementsByClassName("step");
    for(i=0;i<x.length;i++){
        x[i].className = x[i].className.replace("active","");
    }

    x[n].className += " active";
}


function onToggle(){
    var stateDropdown = document.getElementById("state");
    const districtDropdown = document.getElementById("district");
    
    if(stateDropdown.selectedIndex === 0){

        districtDropdown.disabled = true;
        districtDropdown.innerHTML = '<option value="select">Select</option>'
    }
    else{
        districtDropdown.disabled = false;
    }
   
    var district;
   
    if(stateDropdown.value == "TamilNadu"){
        district = ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupattur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'];

    }
if(stateDropdown.value =="Kerala"){
    district = ['Thiruvananthapuram', 'Kollam', 'Pathanamthitta', 'Alappuzha', 'Kottayam', 'Idukki', 'Ernakulam', 'Thrissur', 'Palakkad', 'Malappuram', 'Kozhikode', 'Wayanad', 'Kannur', 'Kasaragod'];

}
if(stateDropdown.value =="Andhrapradesh"){
    district = ['Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Krishna', 'Kurnool', 'Prakasam', 'Srikakulam', 'Sri Potti Sriramulu Nellore', 'Visakhapatnam', 'Vizianagaram', 'West Godavari', 'YSR Kadapa'];

}
if(stateDropdown.value =="Karnataka"){
    district = ['Bagalkot', 'Bengaluru Rural', 'Bengaluru Urban', 'Belagavi', 'Ballari', 'Bidar', 'Chamarajanagar', 'Chikkaballapura', 'Chikkamagaluru', 'Chitradurga', 'Dakshina Kannada', 'Davanagere', 'Dharwad', 'Gadag', 'Hassan', 'Haveri', 'Kalaburagi', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysuru', 'Raichur', 'Ramanagara', 'Shivamogga', 'Tumakuru', 'Udupi', 'Uttara Kannada', 'Vijayapura', 'Yadgir'];

}
var option = '<option value="select">Select</option>';
    for(var i=0; i<district.length;i++){
        option += '<option value ="' + district[i] + '">' + district[i] + "</option>"
    }
    document.getElementById('district').innerHTML = option
}
