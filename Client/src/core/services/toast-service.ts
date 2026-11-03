import { Service } from '@angular/core';

@Service()
export class ToastService {



    constructor() {
        this.CreateToastContainer();
    }

    private CreateToastContainer() {
        if (!document.getElementById("toast-container")){

            const container = document.createElement('div');
            container.id= "toast-container"
            container.className="toast toast-bottom toast-end"
            document.body.appendChild(container)
        }
    }

    private CreateToastElement(message: string, alertClass:string, duration=5000){
        const toastContainer= document.getElementById('toast-container')
        if(!toastContainer)return;

        const toast= document.createElement("div")
        toast.classList.add("alert", alertClass, 'shadow-lg');

        toast.innerHTML= `
        <span>${message}</span>
        <button class="ml-4 btn btn-sn btn-goast" >x</button>
        `


        toast.querySelector('button')?.addEventListener("click", ()=>{
            toastContainer.removeChild(toast)
        })


        toastContainer.append(toast);

        setTimeout(()=>{
            if(toastContainer.contains(toast)){
                toastContainer.removeChild(toast)
            }
        },duration)
        

    }

    success(message: string, duration=5000){
        this.CreateToastElement(message, "alert-success",duration)
    }

    error(message: string, duration=5000){
        this.CreateToastElement(message, "alert-error",duration)
    }

    warning(message: string, duration=5000){
        this.CreateToastElement(message, "alert-warning",duration)
    }
    
    info(message: string, duration=5000){
        this.CreateToastElement(message, "alert-info",duration)
    }

}
