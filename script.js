class Calculator{
    constructor(prevOpTe, currOpTe)
    {
        this.prevOpTe=prevOpTe;
        this.currOpTe=currOpTe;
        this.clear()
    }
    clear(){
        this.currOp=''
        this.prevOp=''
        this.operation=undefined

    }
    delete(){

        this.currOp=this.currOp.toString().slice(0,-1)
    }
    appendNumber(number){
        if(number==='.' && this.currOp.includes('.')) return
        this.currOp=this.currOp.toString() + number.toString()

    }
    chooseOp(operation){
        if(this.currOp==='') return
        if(this.prevOp !==''){
            this.compute()
        }
this.operation=operation;
this.prevOp=this.currOp;
this.currOp='';
    }
    compute(){
let computaion 
const prev=parseFloat(this.prevOp);
const curr= parseFloat(this.currOp);
if(isNaN(prev) || isNaN(curr)) return 
switch(this.operation){
    case '+':
        computaion=prev + curr
        break
        case '-':
        computaion=prev - curr
        break
        case '*':
        computaion=prev * curr
        break
        case '/':
        computaion=prev / curr
        break 
        default: return
}
this.currOp=computaion
this.operation= undefined
this.prevOp=''
}
    updateDisplay(){
this.currOpTe.innerText= this.currOp
if(this.operation!=null) this.prevOpTe.innerText= `${this.prevOp} ${this.operation}`
    }

}



const numButton= document.querySelectorAll('[data-num]');
const opButton= document.querySelectorAll('[data-op]');
const eqButton= document.querySelector('[data-eq]');
const delButton= document.querySelector('[data-del]');
const acButton= document.querySelector('[data-ac]');
const prevOpTe = document.querySelector('[data-prev-op]');
const currOpTe = document.querySelector('[data-curr-op]');

const calculator=new Calculator(prevOpTe,currOpTe)

numButton.forEach(button => {
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

opButton.forEach(button => {
    button.addEventListener('click',()=>{
        calculator.chooseOp(button.innerText)
        calculator.updateDisplay()
    })
})

eqButton.addEventListener('click', button=> {
    calculator.compute()
calculator.updateDisplay()
})

acButton.addEventListener('click', button => {
    calculator.clear()
calculator.updateDisplay()
})
delButton.addEventListener('click', button => {
    calculator.delete()
calculator.updateDisplay()
})