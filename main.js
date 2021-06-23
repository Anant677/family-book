var images=["IMG_20181021_222422.jpg","IMG20191027194134.jpg","IMG20180208202423.jpg","IMG-20170216-WA0027.jpg","IMG20210329174333.jpg"];
var names=["My Brother","My Mother","My Grand mother","My Father","Me"]
var i = 0;
var k = 0;
function update(){
    document.getElementById("Family_member_image").src = images[i];
    i++;
    if(i == 9){
        i = 0;
    }
}

   