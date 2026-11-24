/* ============================================================
   AnimeVerse — Lógica da aplicação
   SPA em seções, catálogo com filtros, favoritos (LocalStorage),
   tema claro/escuro, busca dinâmica e detalhes dos animes.
============================================================ */

/* ---------- 1. DADOS DE DEMONSTRAÇÃO ---------- */
const IMG = (p) => `https://kimi-web-img.kimi.ai/img/${p}`;

const ANIMES = [
  {
    id: "attack-on-titan",
    titulo: "Attack on Titan",
    original: "Shingeki no Kyojin",
    sinopse: "Em um mundo onde a humanidade vive cercada por muralhas gigantes para se proteger de criaturas devoradoras de humanos chamadas Titãs, Eren Yeager jura exterminá-los após a destruição de sua cidade natal e a morte de sua mãe. O que começa como uma história de vingança se transforma em um dos maiores mistérios já contados no anime.",
    generos: ["Ação", "Drama", "Militar", "Mistério"],
    ano: 2013, episodios: 87, status: "Finalizado", nota: 9.1,
    estudio: "WIT Studio / MAPPA", temporada: "Primavera 2013",
    popularidade: 98, imagem: IMG("static.wikia.nocookie.net/9269a726bc362a659757a4806f3f324617a38844"),
    personagens: [
      { nome: "Eren Yeager", papel: "Protagonista" },
      { nome: "Mikasa Ackerman", papel: "Co-protagonista" },
      { nome: "Armin Arlert", papel: "Co-protagonista" },
      { nome: "Levi Ackerman", papel: "Capitão da Tropa de Exploração" }
    ],
    curiosidades: [
      "O autor Hajime Isayama inspirou o design dos Titãs em pessoas bêbadas que ele viu num bar.",
      "Levi foi inspirado no personagem Rorschach, do quadrinho Watchmen.",
      "A mudança de estúdio de WIT para MAPPA na temporada final foi uma das maiores notícias da década no anime."
    ],
    flags: { popular: true, recomendado: true, alta: true }
  },
  {
    id: "demon-slayer",
    titulo: "Demon Slayer",
    original: "Kimetsu no Yaiba",
    sinopse: "Tanjiro Kamado vive uma vida pacífica até que sua família é massacrada por demônios e sua irmã Nezuko é transformada em uma deles. Determinado a curá-la, Tanjiro ingressa na Corporação de Caçadores de Demônios e enfrenta poderosos inimigos em uma jornada de ação visualmente deslumbrante.",
    generos: ["Ação", "Fantasia", "Sobrenatural"],
    ano: 2019, episodios: 63, status: "Em lançamento", nota: 8.9,
    estudio: "ufotable", temporada: "Primavera 2019",
    popularidade: 97, imagem: IMG("dbzbooks.com/01c95d3a6d72d038a20c995a2bccc9c77cd3e42f.jpg"),
    personagens: [
      { nome: "Tanjiro Kamado", papel: "Protagonista" },
      { nome: "Nezuko Kamado", papel: "Irmã de Tanjiro" },
      { nome: "Zenitsu Agatsuma", papel: "Caçador" },
      { nome: "Inosuke Hashibira", papel: "Caçador" }
    ],
    curiosidades: [
      "O filme Mugen Train (2020) foi a maior bilheteria mundial de 2020, com mais de US$ 500 milhões.",
      "A técnica de animação da Respiração da Água combina animação 2D e efeitos 3D gerados por computador.",
      "O mangá é um dos mais vendidos da história, com mais de 150 milhões de cópias."
    ],
    flags: { popular: true, recomendado: true, alta: true }
  },
  {
    id: "jujutsu-kaisen",
    titulo: "Jujutsu Kaisen",
    original: "Jujutsu Kaisen",
    sinopse: "Yuji Itadori, um estudante com força física extraordinária, engole um dedo amaldiçoado para salvar seus amigos e se torna o receptáculo de Ryomen Sukuna, o pior das maldições. Agora ele precisa aprender jujutsu para controlar essa força enquanto enfrenta maldições em Tokyo.",
    generos: ["Ação", "Sobrenatural", "Fantasia"],
    ano: 2020, episodios: 47, status: "Em lançamento", nota: 8.8,
    estudio: "MAPPA", temporada: "Outono 2020",
    popularidade: 96, imagem: IMG("japanesegallery.com/a9825a5d1c4f3753edf041ba7be839a08de10b3a.jpg"),
    personagens: [
      { nome: "Yuji Itadori", papel: "Protagonista" },
      { nome: "Megumi Fushiguro", papel: "Feiticeiro" },
      { nome: "Nobara Kugisaki", papel: "Feiticeira" },
      { nome: "Satoru Gojo", papel: "Professor" }
    ],
    curiosidades: [
      "Satoru Gojo se tornou um fenômeno global e um dos personagens mais populares dos últimos anos.",
      "O arco Shibuya (2ª temporada) é considerado um dos melhores arcos de ação dos animes modernos.",
      "A obra mistura cenas de ação intensa com um sistema de poder complexo baseado em energia amaldiçoada."
    ],
    flags: { popular: true, recomendado: true, alta: true }
  },
  {
    id: "fma-brotherhood",
    titulo: "Fullmetal Alchemist: Brotherhood",
    original: "Hagane no Renkinjutsushi: Fullmetal Alchemist",
    sinopse: "Os irmãos Edward e Alphonse Elric cometem o maior tabu da alquimia ao tentar ressuscitar sua mãe: Edward perde um braço e uma perna, e Alphonse tem seu corpo destruído, tendo sua alma selada em uma armadura. Em busca da Pedra Filosofal para recuperar seus corpos, eles desvendam uma conspiração que ameaça o país inteiro.",
    generos: ["Ação", "Aventura", "Drama", "Fantasia"],
    ano: 2009, episodios: 64, status: "Finalizado", nota: 9.1,
    estudio: "Bones", temporada: "Primavera 2009",
    popularidade: 95, imagem: IMG("i.etsystatic.com/2f07b3767abb955191c93dd541195c8407942fd8.jpg"),
    personagens: [
      { nome: "Edward Elric", papel: "Protagonista" },
      { nome: "Alphonse Elric", papel: "Co-protagonista" },
      { nome: "Roy Mustang", papel: "Alquimista" },
      { nome: "Winry Rockbell", papel: "Mecânica" }
    ],
    curiosidades: [
      "É o anime mais bem avaliado do MyAnimeList por muitos anos, com média acima de 9.1.",
      "A série segue fielmente o mangá, diferentemente da adaptação de 2003.",
      "O símbolo da serpente que engole o próprio rabo (Ouroboros) representa a ciclicidade na obra."
    ],
    flags: { popular: true, recomendado: true }
  },
  {
    id: "death-note",
    titulo: "Death Note",
    original: "Desu Nōto",
    sinopse: "Light Yagami, um estudante genial, encontra um caderno sobrenatural que mata qualquer pessoa cujo nome seja escrito nele. Decidido a purgar o mundo do crime sob o pseudônimo de Kira, ele atrai a atenção do maior detetive do mundo, L, iniciando um duelo psicológico lendário.",
    generos: ["Suspense", "Mistério", "Sobrenatural"],
    ano: 2006, episodios: 37, status: "Finalizado", nota: 8.9,
    estudio: "Madhouse", temporada: "Outono 2006",
    popularidade: 94, imagem: IMG("i.ebayimg.com/59a74cce010898bf75ffaef5b747ee71b425318e.jpg"),
    personagens: [
      { nome: "Light Yagami", papel: "Protagonista / Kira" },
      { nome: "L Lawliet", papel: "Detetive" },
      { nome: "Misa Amane", papel: "Segunda Kira" },
      { nome: "Ryuk", papel: "Shinigami" }
    ],
    curiosidades: [
      "Ryuk só escreve no Death Note por tédio — toda a trama nasce do seu desejo de se divertir.",
      "O anime foi banido em alguns países por supostamente influenciar comportamentos violentos.",
      "A estratégia de L de usar Lind L. Tailor como isca é um dos momentos mais inteligentes do anime."
    ],
    flags: { popular: true, recomendado: true }
  },
  {
    id: "one-piece",
    titulo: "One Piece",
    original: "Wan Pīsu",
    sinopse: "Monkey D. Luffy, um jovem com corpo de borracha após comer a Fruta do Diabo Gomu Gomu, parte em busca do lendário tesouro One Piece para se tornar o Rei dos Piratas. Ao seu lado, a tripulação do Chapéu de Palha atravessa mares perigosos em aventuras épicas.",
    generos: ["Ação", "Aventura", "Fantasia", "Comédia"],
    ano: 1999, episodios: 1100, status: "Em lançamento", nota: 8.9,
    estudio: "Toei Animation", temporada: "Outono 1999",
    popularidade: 99, imagem: IMG("i.ebayimg.com/5e1b9f2260eff471646a8215d76c7e25614fdd5d.jpg"),
    personagens: [
      { nome: "Monkey D. Luffy", papel: "Capitão" },
      { nome: "Roronoa Zoro", papel: "Espadachim" },
      { nome: "Nami", papel: "Navegadora" },
      { nome: "Sanji", papel: "Cozinheiro" }
    ],
    curiosidades: [
      "É o mangá mais vendido da história, com mais de 500 milhões de cópias em todo o mundo.",
      "Eiichiro Oda trabalha com no máximo 3 horas de sono por noite para manter o ritmo semanal.",
      "O mundo de One Piece é tão detalhado que possui sua própria linha do tempo histórica."
    ],
    flags: { popular: true, alta: true }
  },
  {
    id: "steins-gate",
    titulo: "Steins;Gate",
    original: "Shutainzu Gēto",
    sinopse: "Rintarou Okabe, um cientista autoproclamado louco, descobre acidentalmente como enviar mensagens para o passado usando um micro-ondas modificado. Ao brincar com o tempo, ele desperta a atenção da organização CERN e precisa lutar contra as consequências de suas viagens temporais para salvar a pessoa que ama.",
    generos: ["Ficção Científica", "Suspense", "Drama"],
    ano: 2011, episodios: 24, status: "Finalizado", nota: 9.0,
    estudio: "White Fox", temporada: "Primavera 2011",
    popularidade: 88, imagem: IMG("m.media-amazon.com/3f0b28601739ed587bcbf7765506fc92dfdf4d7b.jpg"),
    personagens: [
      { nome: "Rintarou Okabe", papel: "Protagonista" },
      { nome: "Kurisu Makise", papel: "Cientista" },
      { nome: "Mayuri Shiina", papel: "Amiga de infância" },
      { nome: "Daru Hashida", papel: "Hacker" }
    ],
    curiosidades: [
      "O termo 'Steins Gate' foi inventado por Okabe e não possui significado real — é uma referência ao Albert Einstein.",
      "O anime usa conceitos reais da física, como o deslocamento em escalas de mundo (World Lines).",
      "A visual novel original de 2009 é considerada uma das melhores já escritas."
    ],
    flags: { recomendado: true }
  },
  {
    id: "chainsaw-man",
    titulo: "Chainsaw Man",
    original: "Chensō Man",
    sinopse: "Denji, um jovem endividado que caça demônios com seu cachorro-motosserra Pochita, acaba sendo traído e morto. Em seu momento final, faz um contrato com Pochita e renasce como o Chainsaw Man, sendo recrutado por caçadores de demônios do governo em uma história brutal, sangrenta e cheia de humor negro.",
    generos: ["Ação", "Horror", "Sobrenatural"],
    ano: 2022, episodios: 12, status: "Em lançamento", nota: 8.6,
    estudio: "MAPPA", temporada: "Outono 2022",
    popularidade: 93, imagem: IMG("i.ebayimg.com/ca61b87fbda1d03cd8ce91e1e70229296d01c4ed.png"),
    personagens: [
      { nome: "Denji", papel: "Protagonista" },
      { nome: "Power", papel: "Demônio Sangue" },
      { nome: "Aki Hayakawa", papel: "Caçador" },
      { nome: "Makima", papel: "Controladora" }
    ],
    curiosidades: [
      "O autor Tatsuki Fujimoto é conhecido por quebrar convenções narrativas constantemente.",
      "O demônio Pochita virou um dos mascotes mais adorados do anime, apesar da obra ser extremamente violenta.",
      "A abertura do anime muda pequenos detalhes a cada episódio como easter egg."
    ],
    flags: { popular: true, alta: true }
  },
  {
    id: "spy-x-family",
    titulo: "Spy x Family",
    original: "Supai Famirī",
    sinopse: "O espião Loid Forger precisa formar uma família falsa para uma missão. O que ele não sabe é que sua filha adotiva Anya é telepata e sua esposa Yor é uma assassina profissional. Uma comédia de espionagem eletrizante cheia de momentos emocionantes.",
    generos: ["Comédia", "Ação", "Aventura"],
    ano: 2022, episodios: 37, status: "Em lançamento", nota: 8.6,
    estudio: "WIT Studio / CloverWorks", temporada: "Primavera 2022",
    popularidade: 92, imagem: IMG("static.wikia.nocookie.net/6c3c0ea6f4e45b8defcb4bcf110aa76d46b2222d"),
    personagens: [
      { nome: "Loid Forger (Twilight)", papel: "Espião" },
      { nome: "Yor Forger (Thorn Princess)", papel: "Assassina" },
      { nome: "Anya Forger", papel: "Telepata" },
      { nome: "Bond Forger", papel: "Cão vidente" }
    ],
    curiosidades: [
      "Anya se tornou um fenômeno da internet, com memes em todo o mundo.",
      "A obra se passa em uma Alemanha fictícia inspirada na Guerra Fria.",
      "O autor Tatsuya Endo começou a série após três cancelamentos anteriores."
    ],
    flags: { popular: true, recomendado: true }
  },
  {
    id: "haikyuu",
    titulo: "Haikyuu!!",
    original: "Haikyū!!",
    sinopse: "Inspirado por um lendário jogador apelidado de 'Pequeno Gigante', Shoyo Hinata entra para o time de vôlei do Colégio Karasuno para conquistar o torneio nacional. Ao lado do gênio levantador Tobio Kageyama, ele descobre que o vôlei é um esporte de altura — mas também de coração.",
    generos: ["Esporte", "Comédia", "Drama"],
    ano: 2014, episodios: 85, status: "Finalizado", nota: 8.7,
    estudio: "Production I.G", temporada: "Primavera 2014",
    popularidade: 89, imagem: IMG("m.media-amazon.com/23e087b0adf176038840f1be286b3829c952dd83.jpg"),
    personagens: [
      { nome: "Shoyo Hinata", papel: "Ponta" },
      { nome: "Tobio Kageyama", papel: "Levantador" },
      { nome: "Kei Tsukishima", papel: "Central" },
      { nome: "Tetsurō Kuroo", papel: "Capitão rival" }
    ],
    curiosidades: [
      "A autora Haruichi Furudate jogou vôlei na escola e capta com precisão impressionante a realidade do esporte.",
      "O mangá deu um salto de popularidade tão grande que influenciou a prática do vôlei no Japão.",
      "O filme Haikyuu!! The Dumpster Battle (2024) foi um enorme sucesso de bilheteria."
    ],
    flags: { popular: true }
  },
  {
    id: "solo-leveling",
    titulo: "Solo Leveling",
    original: "Na Honja Level Up",
    sinopse: "Em um mundo onde portais conectam a Terra a masmorras cheias de monstros, Sung Jinwoo é o caçador mais fraco da humanidade, conhecido como 'o caçador mais fraco de todos'. Após uma missão traiçoeira, ele desperta um sistema misterioso que permite a ele crescer infinitamente — sem limites de nível.",
    generos: ["Ação", "Fantasia", "Aventura"],
    ano: 2024, episodios: 12, status: "Em lançamento", nota: 8.4,
    estudio: "A-1 Pictures", temporada: "Inverno 2024",
    popularidade: 95, imagem: IMG("mpusaimages.com/55f56c78cb09d2e3c3b9090691e1e4a5f53ead61.jpg"),
    personagens: [
      { nome: "Sung Jinwoo", papel: "Protagonista" },
      { nome: "Cha Hae-In", papel: "Caçadora S-Rank" },
      { nome: "Yoo Jinho", papel: "Aliado" },
      { nome: "Igris", papel: "General das Sombras" }
    ],
    curiosidades: [
      "Originado como web novel coreana, tornou-se um dos maiores sucessos globais de 2024.",
      "A frase 'Arise' se tornou um dos momentos mais hypados dos últimos anos.",
      "O estilo visual das sombras de Jinwoo tem inspiração em jogos de RPG."
    ],
    flags: { alta: true }
  },
  {
    id: "tokyo-ghoul",
    titulo: "Tokyo Ghoul",
    original: "Tōkyō Gūru",
    sinopse: "Ken Kaneki, um estudante tímido, sobrevive a um encontro mortal com uma ghoul — criatura que se alimenta de humanos — e recebe seus órgãos em um transplante. Agora meio ghoul, ele precisa navegar entre dois mundos enquanto luta para manter sua humanidade.",
    generos: ["Horror", "Ação", "Drama", "Sobrenatural"],
    ano: 2014, episodios: 48, status: "Finalizado", nota: 8.0,
    estudio: "Pierrot", temporada: "Verão 2014",
    popularidade: 87, imagem: IMG("m.media-amazon.com/2d0b6ab370ab2ddb31a2944699241ea3910f4b5b.jpg"),
    personagens: [
      { nome: "Ken Kaneki", papel: "Protagonista" },
      { nome: "Touka Kirishima", papel: "Ghoul" },
      { nome: "Rize Kamishiro", papel: "Ghoul" },
      { nome: "Shuu Tsukiyama", papel: "Ghoul" }
    ],
    curiosidades: [
      "A máscara de Kaneki, criada pelo artista Uta, é um dos ícones mais reconhecíveis do anime.",
      "O autor Sui Ishida escreveu a sequência Tokyo Ghoul:re com um enredo ainda mais denso.",
      "A obra explora temas de identidade e discriminação de forma metafórica."
    ],
    flags: { recomendado: true }
  },
  {
    id: "vinland-saga",
    titulo: "Vinland Saga",
    original: "Vinrando Saga",
    sinopse: "Thorfinn, filho de um grande guerreiro viking, cresce obcecado por vingança após ver seu pai ser assassinado. Em meio às guerras e invasões da Europa do século XI, ele embarca em uma jornada brutal que questiona o verdadeiro significado de força, honra e paz.",
    generos: ["Ação", "Aventura", "Drama", "Histórico"],
    ano: 2019, episodios: 48, status: "Finalizado", nota: 8.8,
    estudio: "WIT Studio / MAPPA", temporada: "Verão 2019",
    popularidade: 84, imagem: IMG("cdn.europosters.eu/4e8b51d89e2af2f0e09e107ba778ab353bfbece7.jpg"),
    personagens: [
      { nome: "Thorfinn", papel: "Protagonista" },
      { nome: "Askeladd", papel: "Líder viking" },
      { nome: "Thors", papel: "Pai de Thorfinn" },
      { nome: "Canute", papel: "Príncipe" }
    ],
    curiosidades: [
      "A obra é inspirada em sagas nórdicas históricas e no lendário Thorfinn Karlsefni.",
      "A segunda temporada muda radicalmente de tom, focando no trabalho escravo e redenção.",
      "O autor Makoto Yukimura é o mesmo de Planetes, outra obra aclamada."
    ],
    flags: { recomendado: true }
  },
  {
    id: "re-zero",
    titulo: "Re:Zero — Starting Life in Another World",
    original: "Re:Zero kara Hajimeru Isekai Seikatsu",
    sinopse: "Subaru Natsuki é transportado para um mundo de fantasia e descobre que possui o poder de voltar no tempo ao morrer — mas ninguém mais se lembra de nada. Preso em um ciclo de mortes e sofrimento, ele tenta salvar os que ama, começando do zero quantas vezes for preciso.",
    generos: ["Isekai", "Fantasia", "Drama", "Suspense"],
    ano: 2016, episodios: 50, status: "Em lançamento", nota: 8.5,
    estudio: "White Fox", temporada: "Primavera 2016",
    popularidade: 90, imagem: IMG("i.ebayimg.com/f810cd964bdd5056858b541c72354c27ff2f2067.png"),
    personagens: [
      { nome: "Subaru Natsuki", papel: "Protagonista" },
      { nome: "Emilia", papel: "Heroína" },
      { nome: "Rem", papel: "Oni" },
      { nome: "Puck", papel: "Espírito" }
    ],
    curiosidades: [
      "A terceira temporada estreou em outubro de 2024, quase 8 anos após a primeira.",
      "O poder de Subaru é chamado de 'Retorno pela Morte' e carrega um custo emocional devastador.",
      "Rem se tornou um dos personagens mais amados da comunidade, mesmo com pouco tempo de tela."
    ],
    flags: { popular: true, alta: true }
  }
];

const PERSONAGENS = [
  { nome: "Satoru Gojo", anime: "Jujutsu Kaisen", imagem: IMG("japanesegallery.com/a9825a5d1c4f3753edf041ba7be839a08de10b3a.jpg"),
    descricao: "O feiticeiro mais poderoso do mundo, professor na Escola de Jujutsu de Tokyo. Carismático, arrogante e praticamente invencível.",
    habilidades: ["Seis Olhos", "Infinito", "Expansão de Domínio: Vazio Infinito"],
    curiosidade: "Foi o primeiro personagem da obra a quebrar a quarta parede com seu sorriso icônico." },
  { nome: "Levi Ackerman", anime: "Attack on Titan", imagem: IMG("static.wikia.nocookie.net/9269a726bc362a659757a4806f3f324617a38844"),
    descricao: "Capitão da Tropa de Exploração, considerado o soldado mais forte da humanidade. Frio, obsessivo por limpeza e leal a quem ama.",
    habilidades: ["Manejo de Manobras Tridimensionais", "Força sobre-humana", "Tático brilhante"],
    curiosidade: "Sua cena de luta contra o Titã Bestial é considerada uma das melhores animadas da década." },
  { nome: "L Lawliet", anime: "Death Note", imagem: IMG("i.ebayimg.com/59a74cce010898bf75ffaef5b747ee71b425318e.jpg"),
    descricao: "O maior detetive do mundo, mascarado atrás da letra L. Gênio do raciocínio dedutivo, excêntrico e movido por justiça.",
    habilidades: ["Raciocínio dedutivo", "Estratégia", "Observação"],
    curiosidade: "Sente-se de cócoras e come doces para manter o cérebro funcionando — estranho, mas funciona." },
  { nome: "Anya Forger", anime: "Spy x Family", imagem: IMG("static.wikia.nocookie.net/6c3c0ea6f4e45b8defcb4bcf110aa76d46b2222d"),
    descricao: "A filha telepata da família Forger. Adora manteiga de amendoim, detesta cenouras e esconde seu poder de todos.",
    habilidades: ["Telepatia", "Fofura letal", "Leitura de mentes"],
    curiosidade: "Ela sabia de tudo o tempo todo — lê mentes desde antes de ser adotada." },
  { nome: "Sung Jinwoo", anime: "Solo Leveling", imagem: IMG("mpusaimages.com/55f56c78cb09d2e3c3b9090691e1e4a5f53ead61.jpg"),
    descricao: "O caçador mais fraco da humanidade que desperta um sistema de níveis infinitos e se torna o Monarca das Sombras.",
    habilidades: ["Crescimento infinito", "Exército das Sombras", "Regeneração"],
    curiosidade: "Seu slogan 'Arise' invocando suas sombras virou um meme global." },
  { nome: "Nezuko Kamado", anime: "Demon Slayer", imagem: IMG("dbzbooks.com/01c95d3a6d72d038a20c995a2bccc9c77cd3e42f.jpg"),
    descricao: "Irmã de Tanjiro, transformada em demônio, mas que mantém sua humanidade e luta ao lado do irmão.",
    habilidades: ["Sangue Demoníaco Flamejante", "Tamanho variável", "Força demoníaca"],
    curiosidade: "Ela dorme dentro de uma caixa de madeira para se recuperar em vez de devorar humanos." },
  { nome: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood", imagem: IMG("i.etsystatic.com/2f07b3767abb955191c93dd541195c8407942fd8.jpg"),
    descricao: "O alquimista de metal mais jovem da história de Amestris. Determinado, impulsivo e carrega o peso da tentativa de transmutação humana.",
    habilidades: ["Alquimia sem círculo", "Braço automail", "Transmutação de metal"],
    curiosidade: "Apesar do apelido 'Fullmetal', o corpo de metal é do seu irmão Alphonse." },
  { nome: "Kurisu Makise", anime: "Steins;Gate", imagem: IMG("m.media-amazon.com/3f0b28601739ed587bcbf7765506fc92dfdf4d7b.jpg"),
    descricao: "Neurocientista de 18 anos, membro do laboratório de Okabe e responsável por teorizar a viagem no tempo via mensagens.",
    habilidades: ["Neurociência", "Raciocínio lógico", "Teoria temporal"],
    curiosidade: "É uma das personagens mais premiadas da história, vencendo o prêmio Saimoe e outros torneios de popularidade." }
];

const NOTICIAS = [
  { titulo: "Demon Slayer: Infinity Castle chega aos cinemas com recorde de bilheteria", tag: "Lançamento",
    resumo: "O primeiro filme da trilogia Infinity Castle estreou quebrando recordes de bilheteria no Japão e confirmando o fim épico da saga dos Hashira.",
    data: "2025-11-08", imagem: IMG("dbzbooks.com/01c95d3a6d72d038a20c995a2bccc9c77cd3e42f.jpg") },
  { titulo: "Jujutsu Kaisen: mangá encerra arco final com capítulo histórico", tag: "Mangá",
    resumo: "O capítulo final do mangá de Gege Akutami foi publicado, fechando uma das obras mais influentes da nova geração de shounens.",
    data: "2024-09-30", imagem: IMG("japanesegallery.com/a9825a5d1c4f3753edf041ba7be839a08de10b3a.jpg") },
  { titulo: "Solo Leveling confirma terceira temporada para 2026", tag: "Anúncio",
    resumo: "A A-1 Pictures confirmou a produção da terceira temporada, adaptando o arco da Reawakening com Sung Jinwoo ainda mais poderoso.",
    data: "2025-03-21", imagem: IMG("mpusaimages.com/55f56c78cb09d2e3c3b9090691e1e4a5f53ead61.jpg") },
  { titulo: "Spy x Family Code: White estreia com elogios da crítica", tag: "Filme",
    resumo: "O primeiro filme da franquia conquistou público e crítica com uma aventura inédita da família Forger em um cruzeiro gelado.",
    data: "2023-12-22", imagem: IMG("static.wikia.nocookie.net/6c3c0ea6f4e45b8defcb4bcf110aa76d46b2222d") },
  { titulo: "Chainsaw Man — Reze Arc ganha data de estreia nos cinemas", tag: "Filme",
    resumo: "O aguardado arco do filme de Chainsaw Man, focado no personagem Reze, foi confirmado para exibição mundial em cinemas.",
    data: "2025-09-19", imagem: IMG("i.ebayimg.com/ca61b87fbda1d03cd8ce91e1e70229296d01c4ed.png") },
  { titulo: "Attack on Titan: projeto final de artbook e exposição é anunciado", tag: "Evento",
    resumo: "Para celebrar o fim da série, foi anunciada uma grande exposição e um artbook definitivo com ilustrações inéditas de Hajime Isayama.",
    data: "2025-06-14", imagem: IMG("static.wikia.nocookie.net/9269a726bc362a659757a4806f3f324617a38844") }
];

const GENEROS_INFO = {
  "Ação": "🗡️", "Aventura": "🗺️", "Fantasia": "🔮", "Drama": "🎭",
  "Suspense": "🕵️", "Mistério": "❓", "Ficção Científica": "🚀",
  "Horror": "👻", "Sobrenatural": "✨", "Comédia": "😂",
  "Esporte": "🏐", "Isekai": "🌀", "Militar": "🎖️", "Histórico": "🏰"
};

/* ---------- 2. ESTADO E HELPERS ---------- */
const FAV_KEY = "animeverse_favorites";
const THEME_KEY = "animeverse_theme";
const PER_PAGE = 8;

const state = {
  page: 1,
  filters: { genero: "", ano: "", nota: "", status: "", busca: "", ordenar: "popularidade" }
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function getFavorites() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; }
  catch { return []; }
}
function saveFavorites(favs) {
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  updateFavBadge();
}
function isFavorited(id) { return getFavorites().includes(id); }

function showToast(msg) {
  const container = $("#toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
}

function formatDate(iso) {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

function getGeneros() {
  const set = new Set();
  ANIMES.forEach(a => a.generos.forEach(g => set.add(g)));
  return [...set].sort();
}

/* ---------- 3. NAVEGAÇÃO SPA ---------- */
function showSection(id) {
  $$(".page").forEach(p => p.classList.remove("active"));
  $(`#page-${id}`).classList.add("active");
  $$(".nav-link").forEach(l => l.classList.toggle("active", l.dataset.nav === id));
  $("#navLinks").classList.remove("open");
  $("#hamburger").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
  requestAnimationFrame(observeReveals);
  if (id === "favoritos") renderFavorites();
}

function bindNavigation() {
  document.addEventListener("click", (e) => {
    const nav = e.target.closest("[data-nav]");
    if (nav) {
      e.preventDefault();
      showSection(nav.dataset.nav);
    }
  });
  $("#hamburger").addEventListener("click", () => {
    $("#navLinks").classList.toggle("open");
    $("#hamburger").classList.toggle("open");
  });
}

/* ---------- 4. CARD FACTORY ---------- */
function createCard(anime) {
  const fav = isFavorited(anime.id);
  const card = document.createElement("article");
  card.className = "anime-card";
  card.innerHTML = `
    <div class="card-poster">
      <img src="${anime.imagem}" alt="Pôster de ${anime.titulo}" loading="lazy">
      <span class="card-rating">★ ${anime.nota.toFixed(1)}</span>
      <button class="card-fav ${fav ? "favorited" : ""}" aria-label="Favoritar">${fav ? "❤️" : "🤍"}</button>
      <span class="card-status ${anime.status === "Em lançamento" ? "airing" : "finished"}">${anime.status === "Em lançamento" ? "Ao vivo" : "Completo"}</span>
    </div>
    <div class="card-info">
      <h3 title="${anime.titulo}">${anime.titulo}</h3>
      <p>${anime.generos.slice(0, 2).join(" · ")} • ${anime.ano}</p>
    </div>`;
  card.querySelector(".card-fav").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFavorite(anime.id, e.target);
  });
  card.addEventListener("click", () => openAnimeDetail(anime.id));
  return card;
}

function renderGrid(targetId, list) {
  const grid = $(targetId);
  grid.innerHTML = "";
  list.forEach((a, i) => {
    const card = createCard(a);
    card.style.animationDelay = `${i * 0.05}s`;
    grid.appendChild(card);
  });
}

/* ---------- 5. FAVORITOS ---------- */
function toggleFavorite(id, btn) {
  const favs = getFavorites();
  const idx = favs.indexOf(id);
  const anime = ANIMES.find(a => a.id === id);
  if (idx >= 0) {
    favs.splice(idx, 1);
    showToast(`💔 "${anime.titulo}" removido dos favoritos`);
  } else {
    favs.push(id);
    showToast(`❤️ "${anime.titulo}" adicionado aos favoritos!`);
  }
  saveFavorites(favs);
  if (btn) {
    const favorited = isFavorited(id);
    btn.classList.toggle("favorited", favorited);
    btn.textContent = favorited ? "❤️" : "🤍";
  }
  // Atualiza os grids visíveis
  renderHomeSections();
  applyCatalogFilters();
  updateHeroFavBtn();
}

function updateFavBadge() {
  $("#navFavCount").textContent = getFavorites().length;
}

function updateHeroFavBtn() {
  const btn = $("#heroFavBtn");
  const id = btn.dataset.animeId;
  if (!id) return;
  const fav = isFavorited(id);
  btn.classList.toggle("favorited", fav);
  btn.textContent = fav ? "❤️ Nos favoritos" : "♡ Adicionar aos favoritos";
}

function renderFavorites() {
  const favs = getFavorites();
  const list = ANIMES.filter(a => favs.includes(a.id));
  $("#favoritesEmpty").hidden = list.length > 0;
  renderGrid("#favoritesGrid", list);
}

/* ---------- 6. HOME / HERO ---------- */
function renderHero() {
  const destaque = ANIMES.reduce((prev, cur) => (cur.popularidade > prev.popularidade ? cur : prev), ANIMES[0]);
  $("#hero").style.backgroundImage = `url('${destaque.imagem}')`;
  $("#heroTitle").textContent = destaque.titulo;
  $("#heroMeta").innerHTML = `
    <span class="hero-rating">★ ${destaque.nota.toFixed(1)}</span>
    <span>${destaque.ano}</span>
    <span>${destaque.generos.join(" · ")}</span>
    <span>${destaque.episodios} episódios</span>`;
  $("#heroSynopsis").textContent = destaque.sinopse;
  $("#heroFavBtn").dataset.animeId = destaque.id;
  updateHeroFavBtn();
  $("#heroBtn").onclick = () => openAnimeDetail(destaque.id);
  $("#heroFavBtn").onclick = (e) => toggleFavorite(destaque.id, null);
}

function renderHomeSections() {
  const byPop = [...ANIMES].sort((a, b) => b.popularidade - a.popularidade);
  const byNota = [...ANIMES].sort((a, b) => b.nota - a.nota);
  const recentes = ANIMES.filter(a => a.ano >= 2022);
  renderGrid("#gridPopulares", ANIMES.filter(a => a.flags.popular).slice(0, 6));
  renderGrid("#gridTop", byNota.slice(0, 6));
  renderGrid("#gridRecentes", recentes.slice(0, 6));
  renderGrid("#gridRecomendados", ANIMES.filter(a => a.flags.recomendado).slice(0, 6));
  renderGrid("#gridAlta", ANIMES.filter(a => a.flags.alta).slice(0, 6));
}

/* ---------- 7. CATÁLOGO: FILTROS, ORDENAÇÃO E PAGINAÇÃO ---------- */
function populateFilterOptions() {
  const generoSel = $("#filterGenero");
  getGeneros().forEach(g => {
    const opt = document.createElement("option");
    opt.value = g; opt.textContent = g;
    generoSel.appendChild(opt);
  });
  const anoSel = $("#filterAno");
  const anos = [...new Set(ANIMES.map(a => a.ano))].sort((a, b) => b - a);
  anos.forEach(a => {
    const opt = document.createElement("option");
    opt.value = a; opt.textContent = a;
    anoSel.appendChild(opt);
  });
}

function getFilteredAnimes() {
  const f = state.filters;
  let list = ANIMES.filter(a => {
    if (f.genero && !a.generos.includes(f.genero)) return false;
    if (f.ano && String(a.ano) !== String(f.ano)) return false;
    if (f.nota && a.nota < parseFloat(f.nota)) return false;
    if (f.status && a.status !== f.status) return false;
    if (f.busca && !a.titulo.toLowerCase().includes(f.busca.toLowerCase()) &&
        !a.original.toLowerCase().includes(f.busca.toLowerCase())) return false;
    return true;
  });
  switch (f.ordenar) {
    case "nota": list.sort((a, b) => b.nota - a.nota); break;
    case "anoDesc": list.sort((a, b) => b.ano - a.ano); break;
    case "anoAsc": list.sort((a, b) => a.ano - b.ano); break;
    case "titulo": list.sort((a, b) => a.titulo.localeCompare(b.titulo)); break;
    default: list.sort((a, b) => b.popularidade - a.popularidade);
  }
  return list;
}

function applyCatalogFilters() {
  const list = getFilteredAnimes();
  const totalPages = Math.max(1, Math.ceil(list.length / PER_PAGE));
  if (state.page > totalPages) state.page = totalPages;
  const start = (state.page - 1) * PER_PAGE;
  const pageItems = list.slice(start, start + PER_PAGE);

  renderGrid("#catalogGrid", pageItems);
  $("#catalogEmpty").hidden = list.length > 0;
  $("#resultsInfo").textContent = list.length
    ? `${list.length} anime(s) encontrado(s) — página ${state.page} de ${totalPages}`
    : "";
  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const container = $("#pagination");
  container.innerHTML = "";
  if (totalPages <= 1) return;

  const mkBtn = (label, page, opts = {}) => {
    const btn = document.createElement("button");
    btn.innerHTML = label;
    btn.disabled = !!opts.disabled;
    if (opts.current) btn.classList.add("current");
    btn.addEventListener("click", () => { state.page = page; applyCatalogFilters(); window.scrollTo({ top: 0, behavior: "smooth" }); });
    container.appendChild(btn);
  };

  mkBtn("«", Math.max(1, state.page - 1), { disabled: state.page === 1 });
  for (let i = 1; i <= totalPages; i++) mkBtn(i, i, { current: i === state.page });
  mkBtn("»", Math.min(totalPages, state.page + 1), { disabled: state.page === totalPages });
}

function bindCatalogFilters() {
  const map = {
    "#filterGenero": "genero", "#filterAno": "ano", "#filterNota": "nota",
    "#filterStatus": "status", "#sortSelect": "ordenar"
  };
  Object.entries(map).forEach(([sel, key]) => {
    $(sel).addEventListener("change", (e) => {
      state.filters[key] = e.target.value;
      state.page = 1;
      applyCatalogFilters();
    });
  });
  let debounce;
  $("#catalogSearch").addEventListener("input", (e) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      state.filters.busca = e.target.value.trim();
      state.page = 1;
      applyCatalogFilters();
    }, 250);
  });
  const clear = () => {
    state.filters = { genero: "", ano: "", nota: "", status: "", busca: "", ordenar: "popularidade" };
    state.page = 1;
    $("#filterGenero").value = ""; $("#filterAno").value = ""; $("#filterNota").value = "";
    $("#filterStatus").value = ""; $("#sortSelect").value = "popularidade";
    $("#catalogSearch").value = "";
    applyCatalogFilters();
  };
  $("#clearFilters").addEventListener("click", clear);
  $("#emptyClear").addEventListener("click", clear);
}

/* ---------- 8. BUSCA DINÂMICA (NAVBAR) ---------- */
function bindSearch() {
  const input = $("#searchInput");
  const box = $("#searchResults");
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { box.classList.remove("open"); box.innerHTML = ""; return; }
    const matches = ANIMES.filter(a =>
      a.titulo.toLowerCase().includes(q) || a.original.toLowerCase().includes(q)
    ).slice(0, 6);
    box.innerHTML = matches.length
      ? matches.map(a => `
          <button class="search-item" data-id="${a.id}">
            <img src="${a.imagem}" alt="${a.titulo}">
            <span class="search-item-info"><strong>${a.titulo}</strong><span>★ ${a.nota.toFixed(1)} • ${a.ano}</span></span>
          </button>`).join("")
      : `<div class="search-empty">Nenhum resultado para "${input.value}"</div>`;
    box.classList.add("open");
  });
  box.addEventListener("click", (e) => {
    const item = e.target.closest(".search-item");
    if (!item) return;
    box.classList.remove("open");
    input.value = "";
    openAnimeDetail(item.dataset.id);
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-box")) box.classList.remove("open");
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      state.filters.busca = input.value.trim();
      state.page = 1;
      $("#catalogSearch").value = state.filters.busca;
      box.classList.remove("open");
      showSection("animes");
      applyCatalogFilters();
    }
  });
}

/* ---------- 9. TEMPORADAS E GÊNEROS ---------- */
function renderSeasons() {
  const seasons = [...new Set(ANIMES.map(a => a.temporada))]
    .sort((a, b) => {
      const order = { "Inverno": 0, "Primavera": 1, "Verão": 2, "Outono": 3 };
      const [sa, ya] = a.split(" ");
      const [sb, yb] = b.split(" ");
      return yb - ya || order[sa] - order[sb];
    });
  const sel = $("#seasonSelect");
  sel.innerHTML = seasons.map(s => `<option value="${s}">${s}</option>`).join("");
  const update = () => renderGrid("#seasonGrid", ANIMES.filter(a => a.temporada === sel.value));
  sel.addEventListener("change", update);
  update();
}

function renderGenres() {
  const grid = $("#genresGrid");
  grid.innerHTML = "";
  getGeneros().forEach(g => {
    const count = ANIMES.filter(a => a.generos.includes(g)).length;
    const btn = document.createElement("button");
    btn.className = "genre-card reveal";
    btn.innerHTML = `<span class="genre-icon">${GENEROS_INFO[g] || "🎬"}</span><h3>${g}</h3><span>${count} anime(s) no catálogo</span>`;
    btn.addEventListener("click", () => {
      state.filters.genero = g;
      state.page = 1;
      $("#filterGenero").value = g;
      applyCatalogFilters();
      showSection("animes");
    });
    grid.appendChild(btn);
  });
}

/* ---------- 10. PERSONAGENS E NOTÍCIAS ---------- */
function renderCharacters() {
  const grid = $("#charactersGrid");
  grid.innerHTML = "";
  PERSONAGENS.forEach((c, i) => {
    const card = document.createElement("article");
    card.className = "character-card reveal";
    card.style.transitionDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <img src="${c.imagem}" alt="${c.nome}" loading="lazy">
      <div class="character-body">
        <h3>${c.nome}</h3>
        <span class="char-anime">${c.anime}</span>
        <p>${c.descricao}</p>
        <div class="character-tags">${c.habilidades.map(h => `<span>${h}</span>`).join("")}</div>
        <div class="character-curiosity">💡 ${c.curiosidade}</div>
      </div>`;
    grid.appendChild(card);
  });
}

function renderNews() {
  const grid = $("#newsGrid");
  grid.innerHTML = "";
  NOTICIAS.forEach((n, i) => {
    const card = document.createElement("article");
    card.className = "news-card reveal";
    card.style.transitionDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <img src="${n.imagem}" alt="${n.titulo}" loading="lazy">
      <div class="news-body">
        <span class="news-tag">${n.tag}</span>
        <h3>${n.titulo}</h3>
        <p>${n.resumo}</p>
        <span class="news-date">📅 ${formatDate(n.data)}</span>
      </div>`;
    card.addEventListener("click", () => showToast(`📰 ${n.titulo}`));
    grid.appendChild(card);
  });
}

/* ---------- 11. PÁGINA DE DETALHE ---------- */
function openAnimeDetail(id) {
  const anime = ANIMES.find(a => a.id === id);
  if (!anime) return;
  const similar = ANIMES
    .filter(a => a.id !== id && a.generos.some(g => anime.generos.includes(g)))
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 6);
  const fav = isFavorited(id);

  $("#detailContent").innerHTML = `
    <div class="detail-hero" style="background-image:url('${anime.imagem}')">
      <div class="detail-hero-content">
        <div class="detail-poster"><img src="${anime.imagem}" alt="Capa de ${anime.titulo}"></div>
        <div class="detail-hero-text">
          <h1>${anime.titulo}</h1>
          <p class="detail-original">${anime.original}</p>
          <div class="detail-meta">
            <span class="rating">★ ${anime.nota.toFixed(1)}</span>
            <span>${anime.ano}</span>
            <span>${anime.episodios} episódios</span>
            <span>${anime.status}</span>
            <span>${anime.temporada}</span>
          </div>
          <div class="hero-actions">
            <button class="btn btn-primary" id="detailFavBtn">${fav ? "❤️ Nos favoritos" : "♡ Adicionar aos favoritos"}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-body">
      <div class="detail-main">
        <button class="btn btn-ghost detail-back" id="detailBack">← Voltar</button>
        <h2>Sinopse</h2>
        <p class="synopsis">${anime.sinopse}</p>
        <div class="detail-section">
          <h2>Personagens principais</h2>
          <div class="char-list">
            ${anime.personagens.map(p => `<div class="char-item"><strong>${p.nome}</strong><span>${p.papel}</span></div>`).join("")}
          </div>
        </div>
        <div class="detail-section">
          <h2>Curiosidades</h2>
          <ul class="curiosities-list">${anime.curiosidades.map(c => `<li>${c}</li>`).join("")}</ul>
        </div>
        <div class="detail-section">
          <h2>Animes semelhantes</h2>
          <div class="similar-grid">
            ${similar.map(s => `
              <div class="similar-card" data-id="${s.id}">
                <img src="${s.imagem}" alt="${s.titulo}">
                <span>${s.titulo}</span>
              </div>`).join("")}
          </div>
        </div>
      </div>
      <aside class="detail-aside">
        <div class="aside-box">
          <h3>Informações</h3>
          <div class="info-row"><span>Título original</span><strong>${anime.original}</strong></div>
          <div class="info-row"><span>Ano</span><strong>${anime.ano}</strong></div>
          <div class="info-row"><span>Episódios</span><strong>${anime.episodios}</strong></div>
          <div class="info-row"><span>Status</span><strong>${anime.status}</strong></div>
          <div class="info-row"><span>Avaliação</span><strong>★ ${anime.nota.toFixed(1)}</strong></div>
          <div class="info-row"><span>Estúdio</span><strong>${anime.estudio}</strong></div>
          <div class="info-row"><span>Temporada</span><strong>${anime.temporada}</strong></div>
        </div>
        <div class="aside-box">
          <h3>Gêneros</h3>
          <div class="character-tags">${anime.generos.map(g => `<span>${g}</span>`).join("")}</div>
        </div>
      </aside>
    </div>`;

  $("#detailBack").addEventListener("click", () => history.length ? showSection("animes") : showSection("inicio"));
  $("#detailFavBtn").addEventListener("click", (e) => {
    toggleFavorite(id, null);
    const f = isFavorited(id);
    e.target.textContent = f ? "❤️ Nos favoritos" : "♡ Adicionar aos favoritos";
  });
  $$("#detailContent .similar-card").forEach(el =>
    el.addEventListener("click", () => openAnimeDetail(el.dataset.id))
  );
  showSection("detalhe");
}

/* ---------- 12. TEMA CLARO/ESCURO ---------- */
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || "dark";
  applyTheme(saved);
  $("#themeToggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });
}
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  $("#themeToggle").textContent = theme === "dark" ? "☀️" : "🌙";
}

/* ---------- 13. SCROLL: ANIMAÇÕES E VOLTAR AO TOPO ---------- */
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
  }
  $$(".reveal:not(.visible)").forEach(el => revealObserver.observe(el));
}

function bindScrollUI() {
  const btn = $("#backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ---------- 14. SOBRE / RODAPÉ EXTRAS ---------- */
function renderAboutStats() {
  $("#statAnimes").textContent = ANIMES.length;
  $("#statGeneros").textContent = getGeneros().length;
  $("#statPersonagens").textContent = PERSONAGENS.length;
  $("#statNoticias").textContent = NOTICIAS.length;
  $("#privacyLink").addEventListener("click", (e) => { e.preventDefault(); showToast("🔒 Política de Privacidade: seus favoritos ficam apenas no seu navegador."); });
  $("#termsLink").addEventListener("click", (e) => { e.preventDefault(); showToast("📜 Projeto demonstrativo — uso educacional."); });
}

/* ---------- 15. INICIALIZAÇÃO ---------- */
document.addEventListener("DOMContentLoaded", () => {
  bindNavigation();
  initTheme();
  bindScrollUI();
  updateFavBadge();
  renderHero();
  renderHomeSections();
  populateFilterOptions();
  bindCatalogFilters();
  applyCatalogFilters();
  bindSearch();
  renderSeasons();
  renderGenres();
  renderCharacters();
  renderNews();
  renderAboutStats();
  observeReveals();
});
