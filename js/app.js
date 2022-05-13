let input = document.getElementById("id_sortida");
const introVal=(miau)=>{
        if (input.value==0) input.value="";
        let variable = input.value;
        let num = miau;
        input.value=variable+num;
}


const calcularResu=()=>{
    if(input.value!="0"){
        let operacion = input.value;
        let resu=eval(operacion);
        input.value=resu;
    }else{

    }
}

const esborrarVal=(miau)=>{
    if (miau==0) input.value="";
    let variable = input.value;
    let num = miau;
    input.value=variable+num;
}