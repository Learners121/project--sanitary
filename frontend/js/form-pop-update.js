 //event deligation , event prapogation
 
 let update_form = document.querySelector('.update-form');
 let cancel_btn = document.querySelector('.cancel-btn');
 let viewProductBody = document.querySelector('.viewProductBody');
 console.log('sssss')
 console.log(viewProductBody);
 document.addEventListener('click',(e)=>{
      if(e.target.tagName == 'BUTTON' && e.target.textContent == 'Edit'){
           update_form.classList.add('active');       
      }
    //   else{     
    //      update_form.classList.remove('active');
    //   }
})

cancel_btn.addEventListener('click',(e)=>{
      update_form.classList.remove('active');
      e.preventDefault();
})
