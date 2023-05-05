durum = '';

document.getElementById('hesapla').addEventListener('click', function(){


    
    let kg = Math.abs(document.getElementById('inp-kg').value);
    let cm = Math.abs(document.getElementById('inp-cm').value);
    let img = document.getElementById('image1') ;
    

    

    if (kg == '') {
        alert('Lütfen kilo bilginizi giriniz!')
        return;
    }
    if (cm == '') {
        alert('Lütfen boy bilginizi giriniz!')
        return;
        
    }

    sonuc =(kg*100)/((cm*cm)/100);
    


    //CM-KG-ZAYIF-NORMAL GİBİ ÖNEMLİ KELİMELERİ KALIN YAZMAK İSTEDİM AMA YAPAMADIM
    if (sonuc<18.5) {

        img.style.display = 'inline-block'

        durum = 'Zayıf';

            
        let uyari = `Boyunuzu ${cm} cm, kilonuzu ${kg} kg olarak belirttiniz. Bu değerlere göre Vücut Kitle İndeksiniz (VKİ) ${sonuc.toFixed(2)} kg/m² olarak hesaplandı.VKİ değerinize göre tıbben ZAYIF kategorisindesiniz. Sağlıklı bir şekilde ideal kilonuza ulaşabilmeniz için lütfen bir kliniğe başvurunuz.`

        document.getElementById('uyari').innerHTML = `${uyari}`;
        
        
    }
    if (sonuc >= 18.5 && sonuc <=25 ) {

        durum = 'Normal'

        let uyari = `Boyunuzu ${cm} cm, kilonuzu ${kg} kg olarak belirttiniz. Bu değerlere göre Vücut Kitle İndeksiniz (VKİ) ${sonuc.toFixed(2)} kg/m² olarak hesaplandı.VKİ değerinize göre tıbben  kategorisindesiniz. Mevcut koşullarda kilonuzla ilgili bir sağlık sorununuz olması beklenmiyor.Sizi tebrik ediyor, bundan sonraki yaşamınızda da formunuzu korumanızı diliyoruz.`

        document.getElementById('uyari').innerHTML = `${uyari}`;
        
    } 
    if (sonuc >= 25 && sonuc < 30) {

        durum = 'Fazla Kilolu'


        let uyari = `Boyunuzu ${cm} cm, kilonuzu ${kg} kg olarak belirttiniz. Bu değerlere göre Vücut Kitle İndeksiniz (VKİ) ${sonuc.toFixed(2)} kg/m² olarak hesaplandı.VKİ değerinize göre tıbben FAZLA KİLOLU kategorisindesiniz. Size medikal tedavi öneriyoruz. Diyet ve Egzersiz yaparak zayıflayabilirsiniz.Sağlıklı bir şekilde ideal kilonuza ulaşabilmeniz için lütfen bir kliniğe başvurunuz.`

        document.getElementById('uyari').innerHTML = `${uyari}`;
        
    }
    if (sonuc >=30 && sonuc<35) {

        durum = 'I.Derece Obezite'


        let uyari = `Boyunuzu ${cm} cm, kilonuzu ${kg} kg olarak belirttiniz. Bu değerlere göre Vücut Kitle İndeksiniz (VKİ) ${sonuc.toFixed(2)} kg/m² olarak hesaplandı.VKİ değerinize göre tıbben I. DERECE OBEZİTE kategorisindesiniz. Size medikal tedavi öneriyoruz. Diyet ve Egzersiz yaparak zayıflayabilirsiniz.Sağlıklı bir şekilde ideal kilonuza ulaşabilmeniz için lütfen bir kliniğe başvurunuz.`

    }
    if (sonuc >=35 && sonuc<45) {
        durum = 'II.Derece Obezite'


        let uyari = `Boyunuzu ${cm} cm, kilonuzu ${kg} kg olarak belirttiniz. Bu değerlere göre Vücut Kitle İndeksiniz (VKİ) ${sonuc.toFixed(2)} kg/m² olarak hesaplandı.VKİ değerinize göre tıbben II. DERECE OBEZİTE kategorisindesiniz. Size medikal tedavi öneriyoruz. Diyet ve Egzersiz yaparak zayıflayabilirsiniz.Sağlıklı bir şekilde ideal kilonuza ulaşabilmeniz için lütfen bir kliniğe başvurunuz.`

    }
    if (sonuc >=35 && sonuc<45) {

        durum = 'III.Derece Obezite'

        let uyari = `Boyunuzu ${cm} cm, kilonuzu ${kg} kg olarak belirttiniz. Bu değerlere göre Vücut Kitle İndeksiniz (VKİ) ${sonuc.toFixed(2)} kg/m² olarak hesaplandı.VKİ değerinize göre tıbben III. DERECE OBEZİTE kategorisindesiniz.Size obezite cerrahisi öneriyoruz. Ameliyat olarak sağlıklı bir şekilde zayıflayabilirsiniz.Tedavi için lütfen obezite cerrahisi uygulanan bir Genel Cerrahi Kliniğine başvurunuz.`

    }
 
        
    document.getElementById('sonuc').innerHTML = `${sonuc.toFixed(2)} ${durum}`; //toFixed virgülden sonrasını alır
    
})

document.getElementById('clear').addEventListener('click',function(){

    let img = document.getElementById('image1') ;

    document.getElementById('inp-kg').value='';
    document.getElementById('inp-cm').value='';
    document.getElementById('sonuc').innerHTML='';
    document.getElementById('uyari').innerHTML = '';
    document.getElementById('image1').src = '';

    img.style.display = 'none';
    


  

})


document.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        
        document.getElementById('hesapla').click();
        
    }
})
