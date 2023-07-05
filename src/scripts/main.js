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

const