class calculator{
    constructor(previousOperandTextElement, currentOperandTextElement ){
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
        this.clear()
    }
    clear(){
        this.currentOperand=""
        this.previousOperand=""
        this.operation=undefined

    }
    delete(){

    }
    appendNumber(number){
        this.currentOperand=number

        
    }
    chooseOperation(operation){

    }
compute(){

}
updateDisplay(){
    this.currentOperandTextElement.innerText=this.currentOperand

}

}


const numberButton = document.querySelectorAll('[btnDesign]')
const operationButton = document.querySelectorAll('[operationDesign]')
const equalsButton = document.querySelector('[data-equals]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator= new calculator(previousOperandTextElement,currentOperandTextElement)

numberButton.forEach(button=>
    {
        button.addEventListener('click',()=>{
            calculator.appendNumber(button.innerText)
            calculator.updateDisplay()
        })
    })

