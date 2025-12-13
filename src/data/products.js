export const bmwProducts = [
  // X SERIES
  {
    id: 1,
    name: "BMW X1 xDrive20i M Sport",
    price: 4900000,
    image: "data:image/jpeg;base64,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",
    category: "X Series",
    specs: "1998cc | Petrol | 189hp | 5 Seater",
    description: "Compact luxury SUV with sporty dynamics."
  },
  {
    id: 2,
    name: "BMW X1 xDrive23i",
    price: 5200000,
    image: "https://www.cartecgroup.com/app/uploads/2024/08/1724760311VEHICLE-VIEW-030-X1-xDrive23i-1724760295399.png",
    category: "X Series",
    specs: "1998cc | Petrol | 218hp | 5 Seater",
    description: "Premium compact SUV with enhanced power."
  },
  {
    id: 3,
    name: "BMW X3 xDrive30i M Sport",
    price: 7500000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPu-eO9-Tdi27bR476s5oXcKhnohcaAlxS2w&s",
    category: "X Series",
    specs: "1998cc | Petrol | 252hp | 5 Seater",
    description: "Mid-size luxury SUV with M Sport styling."
  },
  {
    id: 4,
    name: "BMW X3 xDrive20d",
    price: 6800000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQroWDN1wjIAYG1h6cbXVchxk-AhdTk2QLjZA&s",
    category: "X Series",
    specs: "1995cc | Diesel | 190hp | 5 Seater",
    description: "Efficient diesel SUV for long drives."
  },
  {
    id: 5,
    name: "BMW X5 xDrive40i M Sport",
    price: 10600000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThz1buJsWd-5J0pxXISciwBVTatOFdLIT0qg&s",
    category: "X Series",
    specs: "2998cc | Petrol | 355hp | 5 Seater",
    description: "Luxury performance SUV with advanced tech."
  },
  {
    id: 6,
    name: "BMW X5 xDrive30d",
    price: 9800000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPWx2BNJdIYMEFXiXh8KHQxawnwHUk9Y7Zg&s",
    category: "X Series",
    specs: "2993cc | Diesel | 286hp | 5 Seater",
    description: "Powerful diesel SUV for family adventures."
  },
  {
    id: 7,
    name: "BMW X7 xDrive40i M Sport",
    price: 12900000,
    image: "https://imgd.aeplcdn.com/642x361/n/cw/ec/136217/x7-exterior-right-front-three-quarter-8.jpeg?isig=0&q=75",
    category: "X Series",
    specs: "2998cc | Petrol | 355hp | 7 Seater",
    description: "Flagship luxury SUV for the modern family."
  },
  {
    id: 8,
    name: "BMW XM Label",
    price: 24500000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Sfe16-FpEwTJb7ciKmnsx3DxSr9C43bA9A&s",
    category: "X Series",
    specs: "4395cc | Hybrid | 653hp | 5 Seater",
    description: "Ultimate luxury performance SUV - Plug-in Hybrid."
  },

  // 3 SERIES
  {
    id: 9,
    name: "BMW 3 Series 330i M Sport",
    price: 6500000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGx9bwWf7nV6sCcFxHW6eElQEAVEJ5Q5kweg&s",
    category: "3 Series",
    specs: "1998cc | Petrol | 258hp | 5 Seater",
    description: "Ultimate driving machine with M Sport package."
  },
  {
    id: 10,
    name: "BMW 320d M Sport",
    price: 5800000,
    image: "https://imgd.aeplcdn.com/664x374/cw/ec/20231/BMW-3-Series-Right-Front-Three-Quarter-86766.jpg?wm=0&q=80",
    category: "3 Series",
    specs: "1995cc | Diesel | 190hp | 5 Seater",
    description: "Efficient sports sedan for daily commutes."
  },
  {
    id: 11,
    name: "BMW 330Li M Sport",
    price: 6800000,
    image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/139177/3-series-gran-limousine-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    category: "3 Series",
    specs: "1998cc | Petrol | 258hp | 5 Seater",
    description: "Long-wheelbase luxury sports sedan."
  },
  {
    id: 12,
    name: "BMW 330e M Sport",
    price: 6200000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuhkLZs_Xz5n0IENpGKaymESkDJyQhFyWdyw&s",
    category: "3 Series",
    specs: "Hybrid | 292hp | 60km Electric",
    description: "Plug-in hybrid sports sedan."
  },

  // 5 SERIES
  {
    id: 13,
    name: "BMW 5 Series 530i M Sport",
    price: 9500000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdIGhYoOhWpZ8zGQAWzSAWGqei5en5hvedig&s",
    category: "5 Series",
    specs: "1998cc | Petrol | 258hp | 5 Seater",
    description: "Executive sedan with cutting-edge technology."
  },
  {
    id: 14,
    name: "BMW 520d M Sport",
    price: 8800000,
    image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/96443/5-series-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    category: "5 Series",
    specs: "1995cc | Diesel | 197hp | 5 Seater",
    description: "Refined diesel executive sedan."
  },
  {
    id: 15,
    name: "BMW 530e M Sport",
    price: 10200000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLjVYJlrN-lLZ6i5pm-nDNuPBU4Oufzi99Q&s",
    category: "5 Series",
    specs: "Hybrid | 299hp | 80km Electric",
    description: "Advanced plug-in hybrid executive."
  },

  // 7 SERIES
  {
    id: 16,
    name: "BMW 7 Series 740i M Sport",
    price: 18500000,
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/132513/7-series-exterior-right-front-three-quarter-4.png?isig=0&q=80",
    category: "7 Series",
    specs: "2998cc | Petrol | 381hp | 5 Seater",
    description: "Ultimate luxury flagship sedan."
  },
  {
    id: 17,
    name: "BMW 760i xDrive M Sport",
    price: 24500000,
    image: "https://vehicle-images.dealerinspire.com/38f7-18003209/WBA33EJ06SCV48423/a33aa368ef03f4d32cc2b57edcd40db0.jpg",
    category: "7 Series",
    specs: "4395cc | Petrol | 536hp | 5 Seater",
    description: "Top-of-the-line V8 luxury sedan."
  },

  // M SERIES
  {
    id: 18,
    name: "BMW M2 Competition",
    price: 14500000,
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/150125/m2-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    category: "M Series",
    specs: "2979cc | Petrol | 460hp | 4 Seater",
    description: "Pure M performance coupe."
  },
  {
    id: 19,
    name: "BMW M3 Competition xDrive",
    price: 16500000,
    image: "https://npr.brightspotcdn.com/dims4/default/02afbb2/2147483647/strip/true/crop/3480x2508+0+0/resize/880x634!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F0b%2Fb2%2Fc36c72ae4cab8c6461a81db07a42%2Fbmw2.jpg",
    category: "M Series",
    specs: "2993cc | Petrol | 523hp | 5 Seater",
    description: "Track-ready M3 with AWD."
  },
  {
    id: 20,
    name: "BMW M4 Competition xDrive",
    price: 17500000,
    image: "https://images.drivespark.com/img/2024/05/bmw-m4-competition-m-xdrive-cover-jpg-1714639042883_1714639045429-600x338.jpg",
    category: "M Series",
    specs: "2993cc | Petrol | 523hp | 4 Seater",
    description: "Ultimate M coupe performance."
  },
  {
    id: 21,
    name: "BMW M5 Competition",
    price: 28500000,
    image: "https://i.ytimg.com/vi/Tvo9fSMYM5s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASYlewlvj9dk2DzRRNTZxzBb_XdA",
    category: "M Series",
    specs: "4395cc | Petrol | 627hp | 5 Seater",
    description: "Super sedan with 627 horsepower."
  },
  {
    id: 22,
    name: "BMW M8 Competition Gran Coupe",
    price: 35000000,
    image: "https://mediapool.bmwgroup.com/cache/P9/201910/P90369569/P90369569-the-new-bmw-m8-gran-coupe-and-bmw-m8-competition-gran-coupe-10-2019-2212px.jpg",
    category: "M Series",
    specs: "4395cc | Petrol | 625hp | 4 Seater",
    description: "Flagship M performance gran coupe."
  },

  // Z SERIES
  {
    id: 23,
    name: "BMW Z4 M40i",
    price: 8900000,
    image: "https://media.zigcdn.com/media/model/2023/May/front-1-4-left-1415716886_600x400.jpg",
    category: "Z Series",
    specs: "2998cc | Petrol | 382hp | 2 Seater",
    description: "Roadster with retractable hardtop."
  },

  // i SERIES (Electric)
  {
    id: 24,
    name: "BMW i4 M50",
    price: 11500000,
    image: "https://cdni.autocarindia.com/ExtraImages/20210602032552_BMW_i4_001.jpg",
    category: "i Series",
    specs: "Electric | 536hp | 521km Range",
    description: "High-performance electric gran coupe."
  },
  {
    id: 25,
    name: "BMW i5 M60 xDrive",
    price: 16500000,
    image: "https://www.topgear.com/sites/default/files/2023/11/1%20BMW%20i5%20M60%20review.jpg",
    category: "i Series",
    specs: "Electric | 593hp | 516km Range",
    description: "Ultimate electric executive sedan."
  },
  {
    id: 26,
    name: "BMW iX xDrive50",
    price: 16500000,
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202106/P90422109_highRes_v2-1200x1485.jpg?gr1HHLalptXviEjGtbFXRlr1UVlK82D9?size=750:",
    category: "i Series",
    specs: "Electric | 523hp | 630km Range",
    description: "Luxury electric SUV with panoramic glass."
  }
];
