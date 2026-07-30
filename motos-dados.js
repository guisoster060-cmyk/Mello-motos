// Base de dados das motos
const motos = [
  { 
    nome: 'YAMAHA TENERE 250', 
    tipo: 'Adventure', 
    ano: '2011',
    km: '83.000 km',
    preco: 'R$ 13.490',
    imagem: 'img/WhatsApp Image 2026-07-29 at 20.20.17 (1).jpeg',
    descricao: 'Moto adventure de alto desempenho com motor confiável e capacidade de tração. Ideal para aventuras em qualquer terreno.'
  },
  { 
    nome: 'HONDA CG 160 START', 
    tipo: 'Street', 
    ano: '2018',
    km: '37.000 km',
    preco: 'R$ 14.490',
    imagem: 'img/WhatsApp Image 2026-07-29 at 20.20.17 (2).jpeg',
    descricao: 'Modelo versátil e econômico. Motor 160cc flex com excelente desempenho e consumo reduzido de combustível.'
  },
  { 
    nome: 'HONDA CG 125 KS', 
    tipo: 'Street', 
    ano: '2011',
    km: '33.000 km',
    preco: 'R$ 7.900',
    imagem: 'img/WhatsApp Image 2026-07-29 at 20.20.17.jpeg',
    descricao: 'Moto clássica e confiável. Motor 125cc com baixo consumo de combustível, perfeita para uso diário.'
  },
  { 
    nome: 'ECOVIVA JE-7 1000W', 
    tipo: 'Elétrica', 
    ano: '2026',
    km: '0 km',
    preco: 'R$ 8.390',
    imagem: 'img/WhatsApp Image 2026-07-29 at 20.20.18.jpeg',
    descricao: 'Moto elétrica eco-friendly. Motor 1000W, zero emissões, perfeita para mobilidade urbana sustentável.'
  },
  { 
    nome: 'ECOVIVA JE-7 1000W', 
    tipo: 'Elétrica', 
    ano: '2026',
    km: '0 km',
    preco: 'R$ 8.390',
    imagem: 'img/WhatsApp Image 2026-07-29 at 20.20.20 (1).jpeg',
    descricao: 'Moto elétrica eco-friendly. Motor 1000W, zero emissões, perfeita para mobilidade urbana sustentável.'
  },
  { 
    nome: 'ECOVIVA HE-6 1000W', 
    tipo: 'Elétrica', 
    ano: '2026',
    km: '0 km',
    preco: 'R$ 10.490',
    imagem: 'img/WhatsApp Image 2026-07-29 at 20.20.20 (2).jpeg',
    descricao: 'Moto scooter elétrica moderna. Motor 1000W com maior conforto e capacidade de carga aumentada.'
  },
  { 
    nome: 'HONDA BIZ 125 EX', 
    tipo: 'Street', 
    ano: '2025',
    km: '400 km',
    preco: 'R$ 17.990',
    imagem: 'img/WhatsApp Image 2026-07-29 at 20.20.20.jpeg',
    descricao: 'Modelo mais recente da linha Biz. Motor 125cc econômico com design moderno e tecnologia atualizada.'
  },
  { 
    nome: 'HONDA HRV EX 1.8', 
    tipo: 'SUV', 
    ano: '2016',
    km: '100.000 km',
    preco: 'R$ 86.990',
    imagem: 'img/WhatsApp Image 2026-07-29 at 20.20.21 (1).jpeg',
    descricao: 'SUV compacto versátil. Motor 1.8L com excelente espaço interno e conforto para toda a família.'
  },
  { 
    nome: 'HONDA BIZ 125 ES', 
    tipo: 'Street', 
    ano: '2015',
    km: '28.500 km',
    preco: 'R$ 12.890',
    imagem: 'img/WhatsApp Image 2026-07-29 at 20.20.21 (2).jpeg',
    descricao: 'Moto prática e económica. Motor 125cc com boa dirigibilidade e consumo eficiente de combustível.'
  },
  { 
    nome: 'HONDA CG 160 START', 
    tipo: 'Street', 
    ano: '2024',
    km: '16.000 km',
    preco: 'R$ 16.790',
    imagem: 'img/WhatsApp Image 2026-07-29 at 20.20.21.jpeg',
    descricao: 'Modelo recente com tecnologia mais avançada. Motor 160cc robusto ideal para trabalho e lazer.'
  },
  { 
    nome: 'YAMAHA FAZER 250', 
    tipo: 'Street', 
    ano: '2017',
    km: '31.000 km',
    preco: 'R$ 17.490',
    imagem: 'img/WhatsApp Image 2026-07-29 at 20.20.22 (1).jpeg',
    descricao: 'Moto esportiva de média cilindrada. Motor 250cc potente com design agressivo e conforto.'
  },
  { 
    nome: 'HUSQVARNA FC 250', 
    tipo: 'Motocross', 
    ano: '2022',
    km: '119 horas',
    preco: 'R$ 46.990',
    imagem: 'img/WhatsApp Image 2026-07-29 at 20.20.22 (2).jpeg',
    descricao: 'Moto de competição profissional. Motor 250cc de alta performance com suspensão de competição.'
  },
  { 
    nome: 'VW POLO TRACK', 
    tipo: 'Hatchback', 
    ano: '2025',
    km: '41.500 km',
    preco: 'R$ 76.990',
    imagem: 'img/WhatsApp Image 2026-07-29 at 20.20.22.jpeg',
    descricao: 'Hatchback moderno e versátil. Motor eficiente com ótima dirigibilidade e consumo econômico.'
  },
  { 
    nome: 'RENAULT KWID ZEN', 
    tipo: 'SUV Compacto', 
    ano: '2023',
    km: '54.140 km',
    preco: 'R$ 54.990',
    imagem: 'img/WhatsApp Image 2026-07-29 at 20.20.23 (1).jpeg',
    descricao: 'SUV compacto com preço acessível. Motor eficiente com espaço interno e tecnologia moderna.'
  },
  { 
    nome: 'HONDA XRE 300 ADVENTURE', 
    tipo: 'Adventure', 
    ano: '2017',
    km: '65.500 km',
    preco: 'R$ 23.990',
    imagem: 'img/WhatsApp Image 2026-07-29 at 20.20.23.jpeg',
    descricao: 'Moto adventure robusta e confiável. Motor 300cc com suspensão longa e proteção para off-road.'
  },
  { 
    nome: 'HONDA CG 160 TITAN', 
    tipo: 'Street', 
    ano: '2024',
    km: '14.000 km',
    preco: 'R$ 20.490',
    imagem: 'img/WhatsApp Image 2026-07-29 at 20.20.24 (1).jpeg',
    descricao: 'Versão premium da CG 160. Motor potente com design agressivo e acabamento superior.'
  },
  { 
    nome: 'HONDA CG 160 TITAN', 
    tipo: 'Street', 
    ano: '2024',
    km: '14.000 km',
    preco: 'R$ 20.490',
    imagem: 'img/WhatsApp Image 2026-07-29 at 20.20.24.jpeg',
    descricao: 'Versão premium da CG 160. Motor potente com design agressivo e acabamento superior.'
  }
];
