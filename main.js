const numbers = document.querySelectorAll('.square')
const delButton = document.querySelector('.square-del')
const resetButton = document.querySelector('.square-reset')
const iqualButton = document.querySelector('.square-iqual')
const input = document.querySelector('.text-big')
const toggle = document.getElementById('toggle-switch')
const rootStyle = document.documentElement.style
//operaciones buttons




const regEx = /^[0-9.]+([*+/-][0-9]+)\/*$/

numbers.forEach(number=>{
    number.addEventListener('click',(e)=>{
        if(input.textContent == '0'){
            input.textContent = number.textContent
        }else{
            
        input.textContent += `${number.textContent}`
        console.log(input.value)
        }
    })
})

delButton.addEventListener('click', ()=>{
    input.textContent = input.textContent.slice(0,-1)
    if(input.textContent.length==0){
        input.textContent = '0'
    }
   
})


resetButton.addEventListener('click',()=>{
    input.textContent = '0'
})



iqualButton.addEventListener('click', (e)=>{
    
    if(regEx.test(input.textContent)==true){
        let resultado = eval(input.textContent)
        if((input.textContent.length > 6)==true){
            input.textContent.length = 6
            input.textContent = resultado
 

        }else{
            input.textContent = resultado
            input.textContent.length = input.textContent.length-8
            console.log((input.textContent.length > 6)==true)
        }
    }else{
        setTimeout(()=>{
            input.textContent = '0'
        },2000)
        input.textContent = 'Math Error'
    }
    
})

toggle.addEventListener('click',()=>{
    
   let translateValue = rootStyle.getPropertyValue('--transform')
    console.log(rootStyle.getPropertyValue('--transform'))
    if(translateValue =='translatex(0px)' || translateValue == undefined){
        
            rootStyle.setProperty('--transform',' translatex(16px)')
        
            rootStyle.setProperty('--bg-cl',' hsl(0, 0%, 90%)')
            rootStyle.setProperty('--primary-cl','hsl(0, 0%, 93%)')
            rootStyle.setProperty('--secondary-cl',' hsl(0, 5%, 81%)')
        
            rootStyle.setProperty('--text-cl','hsl(60, 10%, 19%)');
        
        
            rootStyle.setProperty('--square-key',' hsl(185, 42%, 37%)')
            rootStyle.setProperty('--square-key-shadow', 'hsl(185, 58%, 25%)')
            rootStyle.setProperty('--square-key-color-text','hsl(0 , 0%, 100%)')
        

        
            rootStyle.setProperty('--square-cl','hsl(45, 7%, 89%))')
            rootStyle.setProperty('--square-text-cl',' hsl(60, 10%, 19%)')
            rootStyle.setProperty('--square-shadow-cl',' hsl(60, 10%, 19% , .3)')


        
            rootStyle.setProperty('--input-color','hsl(0, 0%, 100%)')
            rootStyle.setProperty('--iqual-color','hsl(25, 98%, 40% , .8)')
            rootStyle.setProperty('--iqual-color-shdow','hsl(25, 99%, 27%)')
            rootStyle.setProperty('--iqual-text-color',' hsl(198, 20%, 13%)')


    }
    else if(translateValue =='translatex(16px)'){
        rootStyle.setProperty('--transform','translatex(31px)')
        
       
        
            rootStyle.setProperty('--bg-cl','  hsl(268, 75%, 9%)')
            rootStyle.setProperty('--primary-cl',' hsl(268, 71%, 12%)')
            rootStyle.setProperty('--secondary-cl','  hsl(268, 71%, 12%)')
        
            rootStyle.setProperty('--text-cl','hsl(52, 100%, 62%)');
        
        
            rootStyle.setProperty('--square-key',' hsl(281, 89%, 26%)')
            rootStyle.setProperty('--square-key-shadow', 'hsl(285, 91%, 52%)')
            rootStyle.setProperty('--square-key-color-text','hsl(0 , 0%, 100%)')
        

        
            rootStyle.setProperty('--square-cl','hsl(268, 47%, 21%)')
            rootStyle.setProperty('--square-text-cl','hsl(52, 100%, 62%)')
            rootStyle.setProperty('--square-shadow-cl',' hsl(290, 70%, 36% , .5)')


        
            rootStyle.setProperty('--input-color',' hsl(198, 20%, 13%)')
            rootStyle.setProperty('--iqual-color',' hsl(176, 100%, 44%)')
            rootStyle.setProperty('--iqual-color-shdow','hsl(177, 92%, 70%)')
            rootStyle.setProperty('--iqual-text-color',' hsl(198, 20%, 13%)')
        
        
    }else{
        rootStyle.setProperty('--transform','translatex(0px)')
        
       
                
            rootStyle.setProperty('--bg-cl','hsl(222, 26%, 31%)')
            rootStyle.setProperty('--primary-cl','hsl(224, 36%, 15%)')
            rootStyle.setProperty('--secondary-cl','hsl(223, 31%, 20%)')
        
            rootStyle.setProperty('--text-cl',' hsl(0,0%,100%)');
        
        
            rootStyle.setProperty('--square-key',' hsl(225, 21%, 49%)')
            rootStyle.setProperty('--square-key-shadow', 'hsl(224, 28%, 35%)')
            rootStyle.setProperty('--square-key-color-text','hsl(0, 0%, 100%)')
        

        
            rootStyle.setProperty('--square-cl','hsl(30, 25%, 89%)')
            rootStyle.setProperty('--square-text-cl','hsl(221, 14%, 31%)')
            rootStyle.setProperty('--square-shadow-cl',' hsl(28, 16%, 65%)')


        
            rootStyle.setProperty('--input-color','hsl(0, 0%, 100%)')
            rootStyle.setProperty('--iqual-color','hsl(25, 98%, 40%)')
            rootStyle.setProperty('--iqual-color-shdow',' hsl(25, 99%, 27%)')
            rootStyle.setProperty('--iqual-text-color',' hsl(0,0%,100%)')
    }

})

