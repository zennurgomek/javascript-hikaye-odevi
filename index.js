//hikaye odevi

 
  console.log("Bir gün, eski bir mektup elinize ulaştı. Bu mektupta, kayıp bir hazine haritasından bahsediliyordu. Haritanın izini sürmeye karar verdiniz.");
  let ilkSecim = prompt("a: Haritayı takip et ve maceraya atıl b: Haritayı yırt ve güvenli hayatına geri dön");
  if (ilkSecim === 'a') {
        console.log("Haritayı takip ederek bir ormana ulaşıyorsunuz. Ormanın derinliklerinde hazineye giden yol olduğuna inanıyorsunuz.");
     
    } else if (ilkSecim === 'b') {
        console.log("Macera başlamadan sona erdi. Belki bir dahaki sefere...");
    } 
    
    let ikinciSecim = prompt("a: Ormana gir b: Etrafı dolaşarak güvenli bir yol ara");
     if (ikinciSecim === 'a') { 
          console.log("Ormanın içi karanlık ve gizemli. Ağaçların arasında garip sesler duyuyorsunuz.");
     } else if (ikinciSecim === 'b'); {
       console.log("Etrafı dolaştınız.Ama guvenli bir yol yok oyun bitti");
     } 
     
     let ucuncuSecim = prompt("a: Sese doğru yürü  b: Uzaklaş ordan");
    

     if (ucuncuSecim === 'a') {
           console.log("Sese doğru yürüdünüz.Bir mağara karşınıza çıktı yarasaların sesiymiş. Mağara kapkaranlık");
    
       } else if (ucuncuSecim === 'b') {
           console.log("Macera başlamadan sona erdi. Belki bir dahaki sefere...");
        }     
        
        
        
        let dorduncuSecim = prompt("a: Mağaraya gir  b: Mağaranın etrafını incele.");
         if (dorduncuSecim === 'a') {
        console.log("Mağaraya girdiniz. İçeride eski bir geçit ve karanlık tüneller var.");
        } else if (dorduncuSecim === 'b') {
        console.log("Etrafı inceliyorsunuz ancak hazinenin yolu mağaranın icinde macera bitti.");
        }


       let besinciSecim = prompt("a: tünele gir.  b: geri dön ve başka yol ara");
        if (besinciSecim === 'a') {
        console.log("Tünellere girdiğinizde, ileride iki yolun ayrıldığını fark ediyorsunuz. Bir yolun duvarında semboller var, diğer yol ise tamamen karanlık.");
        } else if (besinciSecim === 'b') {
          console.log("başka bir yol yok macera bitti");
        }
  
  
        let altinciSecim = prompt("a: Sembollerin olduğu yolu seç b: Karanlık tünele gir");
             if (altinciSecim === 'a') {
         console.log("Sembollerin olduğu yolda ilerlerken, yere kazınmış bir ipucu buluyorsunuz. İpucuna göre bir sonraki adımda gizli bir kapı açılacak.");
       } else if (altinciSecim === 'b') {
        console.log("Karanlık tünele girdiğinizde bir tuzak tetikleniyor ve tünelin girişi kapanıyor. Macera sona erdi.");
       }


        let yedinciSecim = prompt("a:ipucuyu incele");
        if (yedinciSecim === 'a') {
        console.log("Tünelin sonunda gizli bir kapı beliriyor. Kapı büyük ve ağır görünüyor. Haritanın sonuna ulaştınız, ama hazine burada mı?");
        }

       let sonSecim = prompt("a: Kapıyı aç b: Geri dön ve farklı bir yol dene");
        if (sonSecim === 'a') {
       console.log("Kapıyı açıyorsunuz ve içinde altınlarla dolu bir sandık buluyorsunuz. Hazineyi buldunuz! Artık zenginsin");
       console.log("MACERA BAŞARIYLA BİTTİ TEBRİKLER!!");
      } else if (sonSecim === 'b') {
     console.log("O kadar gelip geri dönüyorsunuz tebrikler macera bitti hazineyi bulamadan kaybettiniz");
      }

