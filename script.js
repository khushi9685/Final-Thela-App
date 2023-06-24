localStorage.removeItem('userImage')
localStorage.removeItem('user')
localStorage.removeItem('qr')
localStorage.removeItem('ID')
// Handle the image selection event
upload.addEventListener("change", function(event) {
    var file = event.target.files[0]; // Get the selected file
  
    // Check if the file is an image
    if (file && file.type.startsWith("image/")) {
      var reader = new FileReader();
  
      // Read the file as data URL
      reader.onload = function(event) {
      var imageDataUrl = event.target.result; // Get the data URL
  
        // Save the image to local storage with a specific path
        localStorage.setItem("userImage", imageDataUrl);
  
        console.log(`Image saved to local storage with path: images/${file.name}`);
        let profileImg=localStorage.getItem('userImage')
        let userImg = document.getElementById('userImg')
        userImg.style.visibility='visible'
        userImg.setAttribute('src',profileImg)
      };
  
      // Read the file as data URL
      reader.readAsDataURL(file);
    
    }
   
  });
  
  

let genPDF = document.getElementById('genPDF')
genPDF.addEventListener('click',()=>{
  let loan = document.getElementById('loan').value
  let loanYojan = document.getElementById('loanYojan').value
  
  let name1 = document.getElementById('name1').value
  let jati = document.getElementById('jati').value
  let currentAdd =document.getElementById('currentAdd').value
  let address = document.getElementById('address').value
  let shiksha = document.getElementById('shiksha').value
  let contact = document.getElementById('contact').value
  let wsContact = document.getElementById('wsContact').value
  let adharNo = document.getElementById('adharNo').value
  let samagrId = document.getElementById('samagrId').value
  let parivarSamgr= document.getElementById('parivarSamgr').value
  let ayushman = document.getElementById('ayushman').value
  let thela = document.getElementById('thela').value
  let vyapar = document.getElementById('vyapar').value
  let registered = document.getElementById('registered').value
  let par1to17 = document.getElementById('par1-17').value
  let par17to60 = document.getElementById('par17-60').value
  let par60 = document.getElementById('par60').value
  let earningMember = document.getElementById('earning-member').value
  let labh = document.getElementById('labh').value
  
  let place= document.getElementById('place').value
  let vahan = document.getElementById('vahan').value
  let House = document.getElementById('House').value
  let resYear = document.getElementById('resYear').value
  let placeName = document.getElementById('place-name').value
  let thelaTime = document.getElementById('thelaTime')
  let regNO =  crypto.randomUUID();
    const userData = [{
        name : name1,
        jati : jati,
        currentAdd : currentAdd,
        address : address,
        shiksha :shiksha,
        contact : contact,
        wsContact : wsContact,
        adharNo : adharNo,
        samagrId : samagrId,
        parivarSamgr : parivarSamgr,
        ayushman : ayushman,
        thela : {
          thela,
          thelaTime
        },
        vyapar : vyapar,
        registered : {
          registeredDone : registered,
          resYear:resYear,
        },
        
        loan : {
          loanTaken : loan ,
          loanYojan : loanYojan,
        },
        
        par1to17 : par1to17,
        par17to60: par17to60,
        par60:par60,
        earningMember : earningMember,
        labh : labh,
        place: {
          place : place,
          placeName : placeName
        },
        vahan : vahan,
        House : House,
        regNO : regNO
    }]
    console.log(userData)
    const user = JSON.stringify(userData)
  localStorage.setItem('user',user)
  window.open('pdf.html',"_blank")
})




// const handleLoan=()=>{
//   const Loan = document.querySelector('.Loan')
//   const loanYojan = document.getElementById('loanYojan')
//     if(Loan.value=='हाँ'){
//      loanYojan.style.visibility='visible'
//     }
    
// }
// const handleNahi = ()=>{
//     const LoanNo = document.querySelector('.LoanNo')
//     const loanYojan = document.getElementById('loanYojan')
//     if(LoanNo.value=='नहीं'){
//         loanYojan.style.visibility='hidden'
//        }
    
// }

// const handleRegister= ()=>{
//     const Register = document.querySelector('.Register')
//     const resYear = document.getElementById('resYear')
//     if(Register.value=='हाँ')
//     {
//         resYear.style.visibility='visible'
//     }
// }

// const handleNoRegister = ()=>{
//     const RegisterNo = document.querySelector('.RegisterNo')
//     const resYear = document.getElementById('resYear')
//      if(RegisterNo.value=='नहीं'){
//         resYear.style.visibility='hidden'
//     }
// }




//generate ID 
const generateId = ()=>{
  let name1 = document.getElementById('name1').value
  let adharNo = document.getElementById('adharNo').value
  let regNO =  crypto.randomUUID();
  const idData = {
    name : name1,
    adharNo : adharNo,
    regNO : regNO
  }
  const ID = JSON.stringify(idData)
  localStorage.setItem('ID',ID)
  window.open('idCard.html','_blank')
}