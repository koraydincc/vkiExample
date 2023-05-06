durum = '';

document.getElementById('hesapla').addEventListener('click', function(){


    
    let kg = Math.abs(document.getElementById('inp-kg').value);
    let cm = Math.abs(document.getElementById('inp-cm').value);
    let img = document.getElementById('image1');
    let img2 = document.getElementById('image2');
    let img3 = document.getElementById('image3');
    let img4 = document.getElementById('image4');
    let img5 = document.getElementById('image5');
    let img6 = document.getElementById('image6');

    

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
    // Hesaplaya tekrar tekrar basıldığında fotoğraflar alt alta sıralanıyor
    if (sonuc<18.5) {

        img.style.display = 'inline-block' // command + d 

        durum = 'Zayıf';

            
        let uyari = `Boyunuzu ${cm} <span style="font-weight: bold">cm</span>, kilonuzu ${kg} kg olarak belirttiniz. Bu değerlere göre Vücut Kitle İndeksiniz (VKİ) ${sonuc.toFixed(2)} kg/m² olarak hesaplandı.VKİ değerinize göre tıbben ZAYIF kategorisindesiniz. Sağlıklı bir şekilde ideal kilonuza ulaşabilmeniz için lütfen bir kliniğe başvurunuz.`

        document.getElementById('uyari').innerHTML = `${uyari}`;
        
        
        
    }
    if (sonuc >= 18.5 && sonuc <25 ) {

        img2.style.display = 'inline-block';

        durum = 'Normal'

        let uyari = `Boyunuzu ${cm}  <span style="font-weight: bold">cm</span> kilonuzu ${kg} kg olarak belirttiniz. Bu değerlere göre Vücut Kitle İndeksiniz (VKİ) ${sonuc.toFixed(2)} kg/m² olarak hesaplandı.VKİ değerinize göre tıbben  kategorisindesiniz. Mevcut koşullarda kilonuzla ilgili bir sağlık sorununuz olması beklenmiyor.Sizi tebrik ediyor, bundan sonraki yaşamınızda da formunuzu korumanızı diliyoruz.`

        document.getElementById('uyari').innerHTML = `${uyari}`;
        
    } 
    if (sonuc >= 25 && sonuc < 30) {

        img3.style.display = 'inline-block';

        durum = 'Fazla Kilolu'


        let uyari = `Boyunuzu ${cm}  <span style="font-weight: bold">cm</span> kilonuzu ${kg} kg olarak belirttiniz. Bu değerlere göre Vücut Kitle İndeksiniz (VKİ) ${sonuc.toFixed(2)} kg/m² olarak hesaplandı.VKİ değerinize göre tıbben FAZLA KİLOLU kategorisindesiniz. Size medikal tedavi öneriyoruz. Diyet ve Egzersiz yaparak zayıflayabilirsiniz.Sağlıklı bir şekilde ideal kilonuza ulaşabilmeniz için lütfen bir kliniğe başvurunuz.`

        document.getElementById('uyari').innerHTML = `${uyari}`;
        
    }
    if (sonuc >=30 && sonuc<35) {

        img4.style.display = 'inline-block'



        durum = 'I.Derece Obezite'


        let uyari = `Boyunuzu ${cm}  <span style="font-weight: bold">cm</span> kilonuzu ${kg} kg olarak belirttiniz. Bu değerlere göre Vücut Kitle İndeksiniz (VKİ) ${sonuc.toFixed(2)} kg/m² olarak hesaplandı.VKİ değerinize göre tıbben I. DERECE OBEZİTE kategorisindesiniz. Size medikal tedavi öneriyoruz. Diyet ve Egzersiz yaparak zayıflayabilirsiniz.Sağlıklı bir şekilde ideal kilonuza ulaşabilmeniz için lütfen bir kliniğe başvurunuz.`

        document.getElementById('uyari').innerHTML = `${uyari}`;

    }
    if (sonuc >=35 && sonuc<40) {

        img5.style.display = 'inline-block'

        durum = 'II.Derece Obezite'


        let uyari = `Boyunuzu ${cm}  <span style="font-weight: bold">cm</span> kilonuzu ${kg} kg olarak belirttiniz. Bu değerlere göre Vücut Kitle İndeksiniz (VKİ) ${sonuc.toFixed(2)} kg/m² olarak hesaplandı.VKİ değerinize göre tıbben II. DERECE OBEZİTE kategorisindesiniz. Size medikal tedavi öneriyoruz. Diyet ve Egzersiz yaparak zayıflayabilirsiniz.Sağlıklı bir şekilde ideal kilonuza ulaşabilmeniz için lütfen bir kliniğe başvurunuz.`

        document.getElementById('uyari').innerHTML = `${uyari}`;

    }
    if (sonuc >35 && sonuc<=45) {

        img6.style.display = 'inline-block'

        durum = 'III.Derece Obezite'

        let uyari = `Boyunuzu ${cm}  <span style="font-weight: bold">cm</span> kilonuzu ${kg} kg olarak belirttiniz. Bu değerlere göre Vücut Kitle İndeksiniz (VKİ) ${sonuc.toFixed(2)} kg/m² olarak hesaplandı.VKİ değerinize göre tıbben III. DERECE OBEZİTE kategorisindesiniz.Size obezite cerrahisi öneriyoruz. Ameliyat olarak sağlıklı bir şekilde zayıflayabilirsiniz.Tedavi için lütfen obezite cerrahisi uygulanan bir Genel Cerrahi Kliniğine başvurunuz.`

        document.getElementById('uyari').innerHTML = `${uyari}`;

    }
 
        
    document.getElementById('sonuc').innerHTML = `${sonuc.toFixed(2)} ${durum}`; //toFixed virgülden sonrasını alır
    
})

document.getElementById('clear').addEventListener('click',function(){

    let img = document.getElementById('image1');
    let img2 = document.getElementById('image2');
    let img3 = document.getElementById('image3');
    let img4 = document.getElementById('image4');
    let img5 = document.getElementById('image5');
    let img6 = document.getElementById('image6');

    document.getElementById('inp-kg').value='';
    document.getElementById('inp-cm').value='';
    document.getElementById('sonuc').innerHTML='';
    document.getElementById('uyari').innerHTML = '';


    //önceki src bilgilerini originalSrc de tuttuk devamını anlamadım
    let originalSrc = document.getElementById('image1').src;
    document.getElementById('image1').src = '';
    setTimeout(function() {
        document.getElementById('image1').src = originalSrc;
      }, 100);

    let originalSrc2 = document.getElementById('image2').src;
    document.getElementById('image2').src = '';
    setTimeout(function() {
        document.getElementById('image2').src = originalSrc2;
      }, 100);


    let originalSrc3 = document.getElementById('image3').src;
    document.getElementById('image3').src = '';
    setTimeout(function(){
        document.getElementById('image3').src = originalSrc3;
    }, 100);

    let originalSrc4 = document.getElementById('image4').src;
    document.getElementById('image4').src = '';
    setTimeout(function(){
        document.getElementById('image4').src = originalSrc4;
    }, 100);

    let originalSrc5 = document.getElementById('image5').src;
    document.getElementById('image5').src = '';
    setTimeout(function(){
        document.getElementById('image5').src = originalSrc5;
    }, 100);

    let originalSrc6 = document.getElementById('image6').src;
    document.getElementById('image6').src = '';
    setTimeout(function(){
        document.getElementById('image6').src = originalSrc6;
    }, 100);

    img.style.display = 'none';
    img2.style.display = 'none';
    img3.style.display = 'none';
    img4.style.display = 'none';
    img5.style.display = 'none';
    img6.style.display = 'none';
    


  

})


document.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        
        document.getElementById('hesapla').click();
        
    }
})
