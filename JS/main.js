let hora=0, minuto=0, segundo=0,tempo;


function digito_doplo(digito){
    if(digito<10)
    {
        return ('0'+digito);
    }
    else
    
    {
        return(digito);
    }
}


function Inicar_tempo()
{
  tempo= setInterval(contador,1000);
}

function contador(){
    segundo++;
document.getElementById('SS').innerHTML=': '+ digito_doplo(segundo -1);


if (segundo >59)
{
    segundo='0'+ 0;
    minuto++;
  document.getElementById('MM').innerHTML=': '+ digito_doplo(minuto );
}

if(minuto>59)
{
   
    segundo= '0'+0;
    minuto = '0'+0;
    hora++;
    document.getElementById('HH').innerHTML= digito_doplo(hora);
}

}

function Pausar()
{
    clearInterval(tempo);
}

function Zerar ()
{
    clearInterval(tempo);
    segundo='0'+ 0;
     minuto = '0' + 0;
     hora = '0'+ 0;
    document.getElementById('SS').innerHTML= ': '+ segundo;
    document.getElementById('MM').innerHTML=': '+ minuto;
    document.getElementById('HH').innerHTML=hora;
    
}