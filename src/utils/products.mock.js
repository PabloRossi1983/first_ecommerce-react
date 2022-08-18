const products = [
    {
      id: 1,
      price: 4400,
      category: 'AROMATERAPIA',
      title: 'Aceite de Lavanda',
      subtitle: 'PONER SUBTITULO',
      description: 'Aceite que hace cosas lindas',
      img: 'products-img/aceite-lavanda.jpg',
      stock: 22
    },
    {
      id: 2,
      price: 10135,
      category: 'BIENESTAR EMOCIONAL Y MENTAL',
      categoryID: 2,
      title: 'Anti-Stress',
      subtitle: 'Relajante natural',
      description:'Una sinergia particular y equilibrada de 15 aceites esenciales naturales. Combinados brindan una sensación única de bienestar y relajación que permite afrontar los momentos de alto estrés de manera natural. Una suave fricción detrás de las orejas, en la nuca o las muñecas te permiten disfrutar de sus beneficios. También usándolo en un baño de inmersión, en el sauna o en el difusor de aromaterapia podrás apreciar plenamente sus vapores tranquilizantes.<br>Puedes utilizar este blend solo o vehiculizado en la Línea Aromablends.<br>DERMATOLÓGICAMENTE PROBADO - NO PROBADO SOBRE ANIMALES - SIN PARABENOS - SIN FTALATOS - SIN COLORANTES - SIN FRAGANCIA AGREGADAe cuyo uso es una sorpresa',
      img: 'products-img/anti-stress.jpg',
      img2: 'products-img/anti-stress2.jpg',
      stock: 80
    },
    {
      id: 3,
      price: 4000,
      category: 'AROMATERAPIA',
      categoryID: 1,
      title: 'Oleo 31',
      subtitle: 'PONER SUBTITULO',
      description: 'Aceite que cura cosas malas',
      img: 'products-img/oleo-31.jpg',
      stock: 9
    },
    {
      id: 4,
      price: 4050,
      category: 'BIENESTAR FISICO',
      categoryID: 3,
      title: 'Bálsamo',
      subtitle: 'PONER SUBTITULO',
      description: 'Bálsamo que cura cosas feas',
      img:'products-img/balsamo.jpeg',
      stock: 14
    },
    {
      id: 5,
      price: 5175,
      category: 'BIENESTAR FISICO',
      categoryID: 3,
      title: 'Crema de Enebro',
      subtitle: 'PONER SUBTITULO',
      description: 'Crema para cuando algo duele',
      img: 'products-img/crema-enebro.jpg',
      stock: 6
    },
    {
      id: 6,
      price: 4315,
      category: 'BIENESTAR DERMO-COSMÉTICO',
      categoryID: 4,
      title: 'Crema de Manzanilla',
      subtitle: 'PONER SUBTITULO',
      description: 'Crema que te deja la piel mas linda',
      img: 'products-img/crema-manzanilla.jpg',
      stock: 8
    },
    { 
      id: 7,
      price: 4412,
      category: 'AROMATERAPIA',
      categoryID: 1,
      title: 'Aceite de Brgamota',
      subtitle: 'PONER SUBTITULO',
      description: 'Aceite cuyo uso es una sorpresa',
      img: 'products-img/aceite-bergamota.jpeg',
      stock: 13
    },
    { 
      id: 8,
      price: 4412,
      category: 'AROMATERAPIA',
      categoryID: 1,
      title: 'Aceite de Romero',
      subtitle: 'PONER SUBTITULO',
      description: 'El Aceite Esencial de Romero posee un aroma especiado, limpio y refrescante que renueva las fuerzas perdidas ante el cansancio físico y mental. Despierta, activa y moviliza para que tus energías y tu tiempo rindan al máximo y el disfrute sea mayor.<br>Puedes utilizar este aceite con los Vehiculares Aromablends para diseñar tu propia sinergia de aromaterapia y lograr tu estado de ánimo ideal. Simplemente mezcla unas gotitas de uno o varios Aceites Esenciales Just dentro del vehicular que más te guste y disfruta del poder de la naturaleza.',
      img: 'products-img/aceite-romero.jpg',
      img2: 'products-img/aceite-romero2.jpg',
      img3: 'products-img/aceite-romero3.jpg',
      stock: 13
    },
    { 
      id: 9,
      price: 4412,
      title: 'Harmony+',
      category: 'BIENESTAR EMOCIONAL Y MENTAL',
      categoryID: 2,
      subtitle: 'Tan simple como respirar...',
      description: 'Harmony %2B 2B es una delicada mezcla de aceites esenciales especialmente seleccionados y combinados en proporciones perfectas para ayudar a armonizar el cuerpo, la mente y las emociones, equilibrando tu energía vital y restituyendo tu paz interior. Con aroma, dulce y cítrico a la vez, este blend sutil y distintivo, incita a la creación de momentos especiales para ti y las personas que te rodean.<br>Puedes utilizar este blend solo o vehiculizado en la Línea Aromablends.',
      img: 'products-img/harmony.jpg',
      stock: 13
    },
    { 
      id: 10,
      price: 4412,
      category: 'BIENESTAR DERMO-COSMÉTICO',
      categoryID: 4,
      title: 'Escencia de baño de Tomillo',
      subtitle: 'Que nada te oprima el pecho',
      description: 'Un baño de inmersión caliente es el primer paso para lograr el bienestar en época invernal. Con aceite esencial de tomillo, este baño único despeja los sentidos y reconforta eficazmente las incomodidades del invierno.',
      img: 'products-img/escencia-baño-tomillo.jpg',
      video: '<iframe width="472" height="400" src="https://www.youtube.com/embed/pk0_Zpytz-Y?list=TLGGYvEN95On4PIyODA3MjAyMg" title="JUST CREMA Y ESENCIA DE TOMILLO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      stock: 13
    },
    { 
      id: 11,
      price: 4412,
      title: 'Eucasol',
      category: 'BIENESTAR FISICO',
      categoryID: 3,
      subtitle: 'Siente el placer de respirar libremente',
      description: 'Spray de eucalipto enriquecido con una delicada mezcla de aceites esenciales refrescantes que devuelven el placer de respirar libremente. Rociado sobre el pañuelo o la almohada, aplicado sobre el pijama o vaporizado en el ambiente, posee un aroma que despeja, purifica y aromatiza de manera refrescante y placentera.',
      img: 'products-img/eucasol.jpg',
      video:'<iframe width="472" height="400" src="https://www.youtube.com/embed/JNKNcBY0-Mo?list=TLGGZ1tG9Gp2QacyODA3MjAyMg" title="JUST ACEITE ESENCIAL DE EUCALIPTO Y EUCASOL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      stock: 13
    },
    { 
      id: 12,
      price: 4412,
      category: 'BIENESTAR DERMO-COSMÉTICO',
      categoryID: 4,
      title: 'Crema de Tea Tree, Manuca y Rosalina',
      subtitle: 'Suaviza y Regenera',
      description: 'En sus viajes de exploración por Australia, el Capitán Cook aprendió de los indígenas las maravillosas propiedades del tea tree al brindarles primeros auxilios a sus soldados como desinfectante, desinflamatorio, analgésico y cicatrizante. Desde entonces, el tea tree se ha utilizado extensamente para estimular la regeneración de la piel por ser muy efectivo y delicado a la vez. También podrás disfrutar de sus maravillosas propiedades en el Aceite Esencial de Tea Tree, Manuca y Rosalina.',
      img: 'products-img/crema-tea-trea.jpg',
      stock: 13
    },
    { 
      id: 13,
      price: 4412,
      category: 'BIENESTAR DERMO-COSMÉTICO',
      categoryID: 4,
      title: 'Crema de Malva para el Rostro',
      subtitle: 'Confort extra para pieles secas y enrojecidas',
      description: 'Crema suave y delicada a base de extracto de malva. Destinada a pieles muy resecas y sensibles, enrojecidas e irritadas. Reconforta y humecta reduciendo la apariencia de la piel enrojecida, típicamente asociada a la rosácea. Ideal para climas muy fríos y secos. ',
      img: 'products-img/crema-malva.jpg',
      stock: 13
    }

  ];

  export default products