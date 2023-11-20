const imgContainer = document.querySelector('.images');

function wait(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve, seconds * 1000);
    })
}

function createImage(imgPath){
    return new Promise(function(resolve, reject){
       const newImage = document.createElement('img');
       newImage.src = imgPath;
       
       newImage.addEventListener('load', function(){
       imgContainer.append(newImage)
        resolve(newImage);
       });
       newImage.addEventListener('error', function(){
        reject(new Error('Image not found'));
       })
    });
}
let currentImage;
createImage('images/img1.png')
.then(img => {
    currentImage = img;
    console.log('image 1 loaded');
   return wait(2);
    
}).then(()=>{
 currentImage.style.display = 'none';
 return createImage('images/img2.jpg')
})
.then(img => {
    currentImage = img;
    console.log('image 1 loaded');
   return wait(2);
})
   .then(()=>{
    currentImage.style.display = 'none';
    return createImage('images/img3.jpg')})
.catch(err => console.error(err));