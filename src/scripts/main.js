class Accordion {
    constructor(accordionListQuestions){
        this.accordionListQuestions = document.querySelectorAll(accordionListQuestions)
        this.activeItemClass= 'active';
    }

    toggleAccordion(item){
        item.classList.toggle(this.activeItemClass)
        item.nextElementSibling.classList.toggle(this.activeItemClass)
    }

    addAccordionEvent() {
        this.accordionListQuestions.forEach((question) => {
            question.addEventListener('click', () => this.toggleAccordion(question))
        })
    }

    init(){
        if(this.accordionListQuestions.length){
            this.addAccordionEvent()
        }
        return this
    }
}
const accodion = new Accordion('.processo__faqList__faqQuestion')
accodion.init()

class MobileMenu {
    constructor(mobileMenu, headerList, headerLiks ){
        this.mobileMenu = document.querySelector(mobileMenu)
        this.headerList = document.querySelector(headerList)
        this.headerLiks = document.querySelectorAll(headerLiks)
        this.activeItemClass= 'active';
        this.handleClick = this.handleClick.bind(this)
    }

    animadeLinks(){
        this.headerLiks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.4s ease forwards
            ${index /7 + 0.3}s`)
        })
    }

    handleClick(){
        this.headerList.classList.toggle(this.activeItemClass)
        this.animadeLinks()
    }

    addClickEvent (){
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    initMobile(){
        if(this.mobileMenu){
            this.addClickEvent()
        }
        return this
    }
}

const mobileMenu = new MobileMenu(".header__menu", ".header__nav", ".header__links li")
mobileMenu.initMobile()