document.getElementById('hesapla').addEventListener('click', function(){


    
    let kg = Math.abs(document.getElementById('inp-kg').value);
    let cm = Math.abs(document.getElementById('inp-cm').value);

    if (kg == '') {
        alert('Lütfen kilo bilginizi giriniz!')
        return;
    }
    if (cm == '') {
        alert('Lütfen boy bilginizi giriniz!')
        return;
        
    }

    sonuc =(kg*100)/((cm*cm)/100);

    document.getElementById('sonuc').innerHTML = `${sonuc.toFixed(2)}`; //toFixed virgülden sonrasını alır
    
    /*
      0 - 18.4 Zayıf
      18.5 -24.9 Normal
      25 - 29.9 Fazla Kilolu
      30 - 34.9 Şişman(Obez) - 1.sınıf
      35 - 44.5 Şişman(obez) - 2.sınıf
      45 ve üstü Aşırı şişman(obez ) 3.sınıf
    */

})

document.getElementById('clear').addEventListener('click',function(){

    document.getElementById('inp-kg').value='';
    document.getElementById('inp-cm').value='';
    document.getElementById('sonuc').innerHTML='';

  

})


document.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        
        document.getElementById('hesapla').click();
        
    }
})
