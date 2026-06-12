// Banco de dados oficial extraído do arquivo "Geek Ventura Store.xlsx"
const productsData = [
  // CATEGORIA: ANIME
  {
    code: "P001",
    name: "Camiseta Naruto",
    category: "Anime",
    priceOriginal: 99.90,
    pricePromotional: 79.00,
    stock: 15,
    lowStock: false,
    imagePlaceholder: "./img/BlusaDoNaruto.jpg",
    description: "Camiseta de alta qualidade feita de 100% algodão com estampa estilizada do anime Naruto Shippuden. Confortável e durável."
  },
  {
    code: "P002",
    name: "Camiseta One Piece",
    category: "Anime",
    priceOriginal: 99.90,
    pricePromotional: 79.00,
    stock: 10,
    lowStock: false,
    imagePlaceholder: "./img/camiseta_one_piece.jpg",
    description: "Estampe o orgulho dos piratas com esta incrível camiseta do bando dos Chapéu de Palha. Tecido premium de alta durabilidade."
  },
  {
    code: "P003",
    name: "Funko Goku",
    category: "Anime",
    priceOriginal: 149.90,
    pricePromotional: 129.00,
    stock: 8,
    lowStock: true,
    imagePlaceholder: "./img/funko_goku.jpg",
    description: "Miniatura colecionável Funko Pop original do Goku em sua clássica transformação de Dragon Ball Z. Item obrigatório para colecionadores."
  },
  {
    code: "P004",
    name: "Action Figure Luffy gear 5",
    category: "Anime",
    priceOriginal: 189.90,
    pricePromotional: 149.00,
    stock: 12,
    lowStock: false,
    imagePlaceholder: "./img/action_luffy.jpg",
    description: "Estatueta detalhada de Monkey D. Luffy em sua forma épica Gear 5. Cores vibrantes e acabamento impecável em PVC de alta resistência."
  },
  {
    code: "P005",
    name: "Camiseta Attack on Titan",
    category: "Anime",
    priceOriginal: 99.90,
    pricePromotional: 79.00,
    stock: 17,
    lowStock: false,
    imagePlaceholder: "./img/camiseta_aot.jpg",
    description: "Mostre sua lealdade à Divisão de Reconhecimento com esta camiseta macia com o brasão das Asas da Liberdade."
  },
  {
    code: "P006",
    name: "Moletom Demon Slayer",
    category: "Anime",
    priceOriginal: 219.90,
    pricePromotional: 169.00,
    stock: 9,
    lowStock: true,
    imagePlaceholder: "./img/moletom_demon_slayer.jpg",
    description: "Moletom canguru super quente com capuz e estampa inspirada nos padrões tradicionais do traje de Tanjiro Kamado."
  },
  {
    code: "P007",
    name: "Poster Jujutsu Kaisen",
    category: "Anime",
    priceOriginal: 49.90,
    pricePromotional: 35.00,
    stock: 25,
    lowStock: false,
    imagePlaceholder: "./img/poster_jujutsu.jpg",
    description: "Poster oficial em papel fotográfico de alta gramatura com os personagens de Jujutsu Kaisen. Perfeito para decorar seu quarto geek."
  },
  {
    code: "P008",
    name: "Caneca Dragon Ball Z",
    category: "Anime",
    priceOriginal: 55.00,
    pricePromotional: 39.00,
    stock: 30,
    lowStock: false,
    imagePlaceholder: "./img/caneca_dbz.jpg",
    description: "Caneca de porcelana resinada termossensível. Ao adicionar líquido quente, o poderoso Kamehameha do Goku aparece!"
  },
  {
    code: "P009",
    name: "Chaveiro de Pokemon",
    category: "Anime",
    priceOriginal: 29.90,
    pricePromotional: 19.00,
    stock: 40,
    lowStock: false,
    imagePlaceholder: "./img/chaveiro_pikachu.jpg",
    description: "Chaveiro emborrachado 3D de alta qualidade com o Pokémon mais amado do mundo. Ideal para mochilas, chaves e estojos."
  },
  {
    code: "P010",
    name: "Mangá Solo Leveling Vol.1",
    category: "Anime",
    priceOriginal: 64.90,
    pricePromotional: 49.00,
    stock: 22,
    lowStock: false,
    imagePlaceholder: "./img/manga_solo_leveling.jpg",
    description: "Volume de estreia impresso inteiramente colorido em papel Couché de luxo. Acompanhe a jornada do caçador mais fraco do mundo."
  },

  // CATEGORIA: JOGOS
  {
    code: "P011",
    name: "Controle PS5",
    category: "Jogos",
    priceOriginal: 499.90,
    pricePromotional: 449.00,
    stock: 7,
    lowStock: true,
    imagePlaceholder: "./img/controle_ps5.jpg",
    description: "Controle Sem Fio DualSense original da Sony. Descubra uma experiência de jogo mais imersiva com feedback tátil inovador."
  },
  {
    code: "P012",
    name: "Controle Xbox Series",
    category: "Jogos",
    priceOriginal: 479.90,
    pricePromotional: 429.00,
    stock: 11,
    lowStock: false,
    imagePlaceholder: "./img/controle_xbox.jpg",
    description: "Experimente o design modernizado do Controle Sem Fio Xbox, com superfícies esculpidas e geometria refinada para maior conforto."
  },
  {
    code: "P013",
    name: "Mousepad Gamer XXL",
    category: "Jogos",
    priceOriginal: 99.90,
    pricePromotional: 69.00,
    stock: 35,
    lowStock: false,
    imagePlaceholder: "./img/mousepad_gamer.jpg",
    description: "Mousepad estendido gigante com bordas costuradas e base de borracha antiderrapante. Superfície Speed de alto desempenho para mouses óticos."
  },
  {
    code: "P014",
    name: "Cartas Pokémon Booster",
    category: "Jogos",
    priceOriginal: 79.90,
    pricePromotional: 59.00,
    stock: 45,
    lowStock: false,
    imagePlaceholder: "./img/cartas_pokemon.jpg",
    description: "Pacote lacrado de booster oficial de Pokémon Estampas Ilustradas. Contém cartas holográficas raras para reforçar seu deck."
  },
  {
    code: "P015",
    name: "Cartas Yu-Gi-Oh!",
    category: "Jogos",
    priceOriginal: 69.90,
    pricePromotional: 49.00,
    stock: 28,
    lowStock: false,
    imagePlaceholder: "./img/cartas_yugioh.jpg",
    description: "Deck inicial contendo monstros poderosos e armadilhas táticas. Pronto para o duelo!"
  },
  {
    code: "P016",
    name: "Action Figure do shin dorohedoro",
    category: "Jogos",
    priceOriginal: 149.90,
    pricePromotional: 119.00,
    stock: 14,
    lowStock: false,
    imagePlaceholder: "./img/funko_shin.jpg",
    description: "O encanador mais famoso do mundo dos games em versão colecionável cabeçuda Funko Pop. Lindo acabamento em vinil."
  },
  {
    code: "P017",
    name: "Funko Sonic",
    category: "Jogos",
    priceOriginal: 149.90,
    pricePromotional: 119.00,
    stock: 18,
    lowStock: false,
    imagePlaceholder: "./img/funko_sonic.jpg",
    description: "O Ouriço Azul correndo direto para a sua estante de colecionáveis. Design dinâmico clássico dos consoles antigos."
  },
  {
    code: "P018",
    name: "Camiseta Zelda",
    category: "Jogos",
    priceOriginal: 109.90,
    pricePromotional: 89.00,
    stock: 20,
    lowStock: false,
    imagePlaceholder: "./img/camiseta_zelda.jpg",
    description: "Camiseta premium estampada com o icônico símbolo dourado de Royal Crest / Triforce de The Legend of Zelda."
  },
  {
    code: "P019",
    name: "Camiseta Minecraft",
    category: "Jogos",
    priceOriginal: 109.90,
    pricePromotional: 89.00,
    stock: 16,
    lowStock: false,
    imagePlaceholder: "./img/camiseta_minecraft.jpg",
    description: "Estampa exclusiva em blocos pixelados do icônico monstro Creeper. Perfeita para fãs do universo de sobrevivência e blocos."
  },
  {
    code: "P020",
    name: "Boneco Kratos",
    category: "Jogos",
    priceOriginal: 249.90,
    pricePromotional: 199.00,
    stock: 6,
    lowStock: true,
    imagePlaceholder: "./img/boneco_kratos.jpg",
    description: "Action figure articulada detalhada do Fantasma de Esparta com o machado Leviatã, baseada no aclamado God of War Ragnarok."
  },

  // CATEGORIA: RPG
  {
    code: "P021",
    name: "Livro D&D 5E",
    category: "RPG",
    priceOriginal: 269.90,
    pricePromotional: 219.00,
    stock: 8,
    lowStock: true,
    imagePlaceholder: "./img/livro_dnd.jpg",
    description: "Livro do Jogador (Player's Handbook) de Dungeons & Dragons 5ª Edição. Capa dura e páginas totalmente em português."
  },
  {
    code: "P022",
    name: "Kit Dados RPG Acrílico",
    category: "RPG",
    priceOriginal: 59.90,
    pricePromotional: 39.00,
    stock: 50,
    lowStock: false,
    imagePlaceholder: "./img/dados_acrilico.jpg",
    description: "Conjunto completo poliédrico com 7 dados (D4, D6, D8, D10, D12, D20, D%) em acrílico translúcido colorido de alta rolagem."
  },
  {
    code: "P023",
    name: "Kit Dados RPG Metálico",
    category: "RPG",
    priceOriginal: 129.90,
    pricePromotional: 99.00,
    stock: 18,
    lowStock: false,
    imagePlaceholder: "./img/dados_metalico.jpg",
    description: "Sinta o peso das suas escolhas. Conjunto premium de 7 dados feitos em liga de zinco sólida com acabamento envelhecido."
  },
  {
    code: "P024",
    name: "Escudo Mestre RPG",
    category: "RPG",
    priceOriginal: 89.90,
    pricePromotional: 69.00,
    stock: 15,
    lowStock: false,
    imagePlaceholder: "./img/escudo_mestre.jpg",
    description: "Escudo de 4 abas cartonado rígido contendo as tabelas de regras de consulta rápida mais importantes para guiar sua aventura."
  },
  {
    code: "P025",
    name: "Miniatura Dragão Vermelho",
    category: "RPG",
    priceOriginal: 119.90,
    pricePromotional: 89.00,
    stock: 10,
    lowStock: false,
    imagePlaceholder: "./img/miniatura_dragao.jpg",
    description: "Miniatura plástica imponente ricamente detalhada para encontros de combate épicos no seu tabuleiro."
  },
  {
    code: "P026",
    name: "Livro Call of Cthulhu",
    category: "RPG",
    priceOriginal: 259.90,
    pricePromotional: 210.00,
    stock: 5,
    lowStock: true,
    imagePlaceholder: "./img/livro_cthulhu.jpg",
    description: "Livro de Regras do Guardião para o RPG de horror cósmico clássico. Desvende mistérios ancestrais e teste sua sanidade mental."
  },
  {
    code: "P027",
    name: "Mapa Fantasia RPG",
    category: "RPG",
    priceOriginal: 69.90,
    pricePromotional: 45.00,
    stock: 32,
    lowStock: false,
    imagePlaceholder: "./img/mapa_fantasia.jpg",
    description: "Grid quadriculado tático apagável frente e verso revestido com película protetora especial. Ideal para desenhar masmorras."
  },
  {
    code: "P028",
    name: "Livro Tormenta 20",
    category: "RPG",
    priceOriginal: 229.90,
    pricePromotional: 189.00,
    stock: 9,
    lowStock: true,
    imagePlaceholder: "./img/livro_tormenta.jpg",
    description: "Edição de colecionador do maior RPG nacional. Entre no fantástico mundo de Arton e enfrente a temível tempestade rubra."
  },
  {
    code: "P029",
    name: "Torre de Dados",
    category: "RPG",
    priceOriginal: 85.00,
    pricePromotional: 59.00,
    stock: 26,
    lowStock: false,
    imagePlaceholder: "./img/torre_dados.jpg",
    description: "Torre organizadora em MDF cortada a laser com formato de castelo medieval. Garante rolagens honestas e evita que os dados caiam da mesa."
  },
  {
    code: "P030",
    name: "Miniatura Guerreiro Bastardo",
    category: "RPG",
    priceOriginal: 69.90,
    pricePromotional: 49.00,
    stock: 22,
    lowStock: false,
    imagePlaceholder: "./img/miniatura_guerreiro.jpg",
    description: "Miniatura em resina premium de alta definição com escala de 28mm para representar o herói ou paladino do seu grupo de jogo."
  },

  // CATEGORIA: ELETRÔNICOS
  {
    code: "P031",
    name: "Headset Gamer RGB",
    category: "Eletrônicos",
    priceOriginal: 299.90,
    pricePromotional: 229.00,
    stock: 18,
    lowStock: false,
    imagePlaceholder: "./img/headset_rgb.jpg",
    description: "Headset Surround 7.1 com almofadas memory foam super confortáveis, microfone com cancelamento de ruído e iluminação RGB fluida."
  },
  {
    code: "P032",
    name: "Mouse Gamer RGB",
    category: "Eletrônicos",
    priceOriginal: 249.90,
    pricePromotional: 189.00,
    stock: 24,
    lowStock: false,
    imagePlaceholder: "./img/mouse_rgb.jpg",
    description: "Mouse de alta precisão com sensor Pixart configurável até 12.000 DPI, botões laterais macros e iluminação personalizável por software."
  },
  {
    code: "P033",
    name: "Teclado Mecânico RGB",
    category: "Eletrônicos",
    priceOriginal: 349.90,
    pricePromotional: 259.00,
    stock: 14,
    lowStock: false,
    imagePlaceholder: "./img/teclado_mecanico.jpg",
    description: "Teclado mecânico compacto padrão ABNT2 equipado com switches mecânicos Outemu Blue auditivos e táteis com cliques perfeitos."
  },
  {
    code: "P034",
    name: "Webcam Full HD",
    category: "Eletrônicos",
    priceOriginal: 229.90,
    pricePromotional: 179.00,
    stock: 20,
    lowStock: false,
    imagePlaceholder: "./img/webcam_hd.jpg",
    description: "Câmera de transmissão ao vivo capturando em resolução nativa 1080p a 30fps. Possui foco automático inteligente e tampa de privacidade."
  },
  {
    code: "P035",
    name: "Microfone USB Gamer",
    category: "Eletrônicos",
    priceOriginal: 319.90,
    pricePromotional: 249.00,
    stock: 13,
    lowStock: false,
    imagePlaceholder: "./img/microfone_gamer.jpg",
    description: "Microfone condensador cardioide perfeito para podcasts e streams. Acompanha shockmount integrado e botão touch de mute rápido."
  },
  {
    code: "P036",
    name: "Ring Light LED",
    category: "Eletrônicos",
    priceOriginal: 129.90,
    pricePromotional: 89.00,
    stock: 27,
    lowStock: false,
    imagePlaceholder: "./img/ring_light.jpg",
    description: "Iluminador circular com diâmetro de 26cm acompanhado de tripé telescópico ajustável e 3 tonalidades de temperatura de cor."
  },
  {
    code: "P037",
    name: "SSD 1TB Gamer",
    category: "Eletrônicos",
    priceOriginal: 549.90,
    pricePromotional: 449.00,
    stock: 12,
    lowStock: false,
    imagePlaceholder: "./img/ssd_1tb.jpg",
    description: "SSD NVMe M.2 de altíssima velocidade. Carregue seus jogos e seu sistema operacional Windows em poucos segundos com taxas de leitura incríveis."
  },
  {
    code: "P038",
    name: "Caixa de Som Bluetooth",
    category: "Eletrônicos",
    priceOriginal: 249.90,
    pricePromotional: 199.00,
    stock: 17,
    lowStock: false,
    imagePlaceholder: "./img/caixa_bluetooth.jpg",
    description: "Caixa de som sem fio portátil à prova d'água IPX7 com graves profundos batendo forte e autonomia de bateria para até 12 horas seguidas."
  },
  {
    code: "P039",
    name: "Fone Bluetooth",
    category: "Eletrônicos",
    priceOriginal: 229.90,
    pricePromotional: 179.00,
    stock: 29,
    lowStock: false,
    imagePlaceholder: "./img/fone_bluetooth.jpg",
    description: "Fone intra-auricular TWS com pareamento estável de baixíssima latência para não perder o sincronismo de áudio nos seus jogos mobiles."
  },
  {
    code: "P040",
    name: "Hub USB Gamer",
    category: "Eletrônicos",
    priceOriginal: 99.90,
    pricePromotional: 69.00,
    stock: 31,
    lowStock: false,
    imagePlaceholder: "./img/hub_usb.jpg",
    description: "Expansor multifuncional contendo 4 portas adicionais USB 3.0 ultra rápidas, revestido com corpo em alumínio e fitas LED de acabamento."
  },

  // CATEGORIA: MÚSICA
  {
    code: "P041",
    name: "Violão Acústico",
    category: "Música",
    priceOriginal: 849.90,
    pricePromotional: 699.00,
    stock: 5,
    lowStock: true,
    imagePlaceholder: "./img/violao_acustico.jpg",
    description: "Violão clássico com cordas de nylon macias, tampo em madeira selecionada. Sonoridade encorpada e ideal para iniciantes ou veteranos."
  },
  {
    code: "P042",
    name: "Guitarra Elétrica",
    category: "Música",
    priceOriginal: 1699.90,
    pricePromotional: 1399.00,
    stock: 4,
    lowStock: true,
    imagePlaceholder: "./img/guitarra_eletrica.jpg",
    description: "Guitarra modelo Stratocaster equipada com 3 captadores single-coil, chave seletora de timbres e corpo leve ergonômico."
  },
  {
    code: "P043",
    name: "Palheta Personalizada",
    category: "Música",
    priceOriginal: 15.00,
    pricePromotional: 10.00,
    stock: 60,
    lowStock: false,
    imagePlaceholder: "./img/palhetas_anime.jpg",
    description: "Kit contendo 5 palhetas de celuloide de espessura média estampadas com artes coloridas estilizadas dos animes mais populares."
  },
  {
    code: "P044",
    name: "Fone Studio",
    category: "Música",
    priceOriginal: 399.90,
    pricePromotional: 329.00,
    stock: 12,
    lowStock: false,
    imagePlaceholder: "./img/fone_studio.jpg",
    description: "Headphone de monitoramento profissional Over-Ear com resposta de frequência plana e precisa para mixagem e produção musical refinada."
  },
  {
    code: "P045",
    name: "Teclado Musical",
    category: "Música",
    priceOriginal: 1099.90,
    pricePromotional: 899.00,
    stock: 6,
    lowStock: true,
    imagePlaceholder: "./img/teclado_musical.jpg",
    description: "Teclado arranjador contendo 61 teclas sensitivas, centenas de timbres instrumentais embutidos e conexões MIDI completas."
  },
  {
    code: "P046",
    name: "Suporte para Violão",
    category: "Música",
    priceOriginal: 79.90,
    pricePromotional: 59.00,
    stock: 25,
    lowStock: false,
    imagePlaceholder: "./img/suporte_violao.jpg",
    description: "Suporte de chão em formato de 'A' com travas de segurança superiores e borrachas espumadas macias que evitam riscos e quedas do instrumento."
  },
  {
    code: "P047",
    name: "Camiseta Banda Linkin Park",
    category: "Música",
    priceOriginal: 109.90,
    pricePromotional: 89.00,
    stock: 18,
    lowStock: false,
    imagePlaceholder: "./img/camiseta_linkin_park.jpg",
    description: "Camiseta oficial com estampa do álbum clássico Hybrid Theory. Alta definição resistente a dezenas de lavagens na máquina."
  },
  {
    code: "P048",
    name: "Camiseta Banda Queen",
    category: "Música",
    priceOriginal: 109.90,
    pricePromotional: 89.00,
    stock: 21,
    lowStock: false,
    imagePlaceholder: "./img/camiseta_queen.jpg",
    description: "Eternize Freddie Mercury e banda com esta camiseta de algodão com a icônica silhueta da banda britânica sob os refletores."
  },
  {
    code: "P049",
    name: "Vinil Iron Maiden",
    category: "Música",
    priceOriginal: 229.90,
    pricePromotional: 179.00,
    stock: 8,
    lowStock: true,
    imagePlaceholder: "./img/vinil_iron_maiden.jpg",
    description: "Disco de vinil Long Play importado de 180g contendo os clássicos remasterizados em estúdio. Item colecionável analógico premium."
  },
  {
    code: "P050",
    name: "Caneca Rock Clássico",
    category: "Música",
    priceOriginal: 55.00,
    pricePromotional: 39.00,
    stock: 33,
    lowStock: false,
    imagePlaceholder: "./img/caneca_rock.jpg",
    description: "Caneca cerâmica fosca preta estilizada com logotipos clássicos das maiores lendas que mudaram a história do Rock N' Roll."
  }
];