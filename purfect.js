var i=0;
var images=[];
var time=3000;

images[0]="https://cdn.shopify.com/s/files/1/0312/8826/2795/files/IAMS_Cat_Desktop_copy_f5339e1d-f57f-4f12-92ce-5110c882a78e_1352x372.jpg?v=1672148934";
images[1]="https://cdn.shopify.com/s/files/1/0312/8826/2795/files/Cat_Toys_Desktop_7de1970b-9fde-4ac8-afdf-6ea287128f62_1350x375.jpg?v=1672148725";
images[2]="https://cdn.shopify.com/s/files/1/0312/8826/2795/files/DogFood_HomepageBanner_Desktop_f70baa2c-5bb9-4a2a-a5ff-e54bc12fe665_1350x375.jpg?v=1672148558";

function changeImg(){
    document.slide.src=images[i];
    if(i<images.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImg()",time);
}
window.onload=changeImg;



// var brand1=document.getElementById("brand-1")
// brand1?.addEventListener("mouseenter",myFunction);
// function myFunction(){
//     brand1.style.width="15rem"
    
// }