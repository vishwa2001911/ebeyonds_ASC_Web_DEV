

class Main{

    constructor(){
        this.isIconClick = false;
        this.resbox = document.getElementById('res-inside-box');
        this.btnText = document.getElementById('btntext');
        
        this.languageBox = document.getElementById('languageBox');
        this.isLanguageBtnClick = false;
        this.languages = document.querySelectorAll('.lang-li');
        
        this.languageSelect()
        
    }

    languageSelect(){
        // find clicked item from langage dropdown
        this.languages.forEach((i)=>{
            i.addEventListener('click',()=>{
                this.btnText.innerText = i.innerText;
                this.languageBox.style.display = 'none';
                this.isLanguageBtnClick = false;
            })
        })
    }
    
    
    
    clickLanguage(){
        //navbar dropdown

        if(!this.isLanguageBtnClick){
            languageBox.style.display = 'block';
            this.isLanguageBtnClick = true;
        }else if(this.isLanguageBtnClick){
            languageBox.style.display = 'none';
            this.isLanguageBtnClick = false;
        }
    }


    clickIcon(){
        // show language dropdown items
        
        if(!this.isIconClick){
            this.resbox.style.left = -82+'px';
            this.isIconClick = true;
        }else if(this.isIconClick){
            this.resbox.style.left = -315+'px';
            this.isIconClick = false;
        }
    }
}


const clickEvent = new Main()


