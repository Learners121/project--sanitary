const imgContainer = document.querySelector('.images')
const leftBtn = document.querySelector('.leftBtn')
const rightBtn = document.querySelector('.rightBtn')

let i=0;
let images = ['https://jaljoy.com/wp-content/uploads/2021/03/Art-Basin-1.jpg' , 'https://img1.exportersindia.com/product_images/bc-full/2021/8/8233810/sanitary-ware-1627967186-5924976.jpeg' , 'https://m.media-amazon.com/images/I/51JnPKaNUPL._AC_UF1000,1000_QL80_.jpg','https://sc04.alicdn.com/kf/Hea9ac46ede5945599f508ccff280de08F.jpg','https://sonex.com.pk/wp-content/uploads/2018/10/01-1.jpg','https://cdn.moglix.com/p/6E6LDpcyVZwWl-xxlarge.jpg']


setInterval(()=>{
    if(i < images.length-1){
        i++;
        imgChanger(i)
    }
    else{
        i=-1
    }
},3000)

const imgChanger = (i) =>{
    console.log('i-:',i)
   return imgContainer.style.backgroundImage= `url(${images[i]})` 
}

leftBtn.addEventListener('click',(e)=>{
    if(i>0) {  
        i--;
        imgChanger(i)
    }
    
})

rightBtn.addEventListener('click',(e)=>{

    if(i < images.length-1){
        i++;
        imgChanger(i)
    }

})