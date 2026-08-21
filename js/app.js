const NPCatalog={
  AGES:[{id:'3-5',label:'3 a 5 anos'},{id:'6-8',label:'6 a 8 anos'},{id:'9-11',label:'9 a 11 anos'},{id:'12-14',label:'12 a 14 anos'},{id:'15-17',label:'15 a 17 anos'}],
  GAMES:[
    {id:'memoria',title:'Jogo da Memória',icon:'🧠',category:'memoria',ages:['3-5','6-8','9-11','12-14','15-17'],skills:['memória','concentração'],href:'games/memoria.html'},
    {id:'atencao',title:'Encontre o Diferente',icon:'🔍',category:'atencao',ages:['3-5','6-8','9-11','12-14','15-17'],skills:['atenção','percepção'],href:'games/atencao.html'},
    {id:'sequencia_cores',title:'Sequência de Cores',icon:'🎨',category:'memoria',ages:['3-5','6-8','9-11'],skills:['memória','sequência'],href:'games/sequencia.html?mode=colors'},
    {id:'sequencia_num',title:'Sequência Numérica',icon:'🔢',category:'matematica',ages:['6-8','9-11','12-14'],skills:['matemática','raciocínio'],href:'games/sequencia.html?mode=numbers'},
    {id:'num_quantidade',title:'Número e Quantidade',icon:'🧮',category:'matematica',ages:['3-5','6-8'],skills:['matemática'],href:'games/matematica.html?mode=count'},
    {id:'formas',title:'Formas Geométricas',icon:'🔷',category:'percepcao',ages:['3-5','6-8'],skills:['percepção'],href:'games/atencao.html?mode=shapes'},
    {id:'puzzle',title:'Quebra-Cabeça',icon:'🧩',category:'logica',ages:['6-8','9-11','12-14','15-17'],skills:['raciocínio'],href:'games/coordenacao.html?mode=puzzle'},
    {id:'imagem_palavra',title:'Imagem e Palavra',icon:'🖼️',category:'linguagem',ages:['3-5','6-8','9-11'],skills:['linguagem','leitura'],href:'games/linguagem.html?mode=match'},
    {id:'formar_palavras',title:'Formar Palavras',icon:'🔤',category:'linguagem',ages:['6-8','9-11','12-14'],skills:['linguagem','escrita'],href:'games/linguagem.html?mode=spell'},
    {id:'matematica_ops',title:'Matemática',icon:'➕',category:'matematica',ages:['6-8','9-11','12-14','15-17'],skills:['matemática'],href:'games/matematica.html?mode=ops'},
    {id:'classificacao',title:'Classificação',icon:'🗂️',category:'logica',ages:['3-5','6-8','9-11'],skills:['raciocínio'],href:'games/logica.html?mode=classify'},
    {id:'labirinto',title:'Labirinto',icon:'🌀',category:'coordenacao',ages:['6-8','9-11','12-14','15-17'],skills:['coordenação'],href:'games/coordenacao.html?mode=maze'},
    {id:'emocoes',title:'Emoções',icon:'😊',category:'emocao',ages:['3-5','6-8','9-11','12-14','15-17'],skills:['emoções'],href:'games/emocao.html'},
    {id:'sequencia_logica',title:'Sequência Lógica',icon:'🧵',category:'logica',ages:['6-8','9-11','12-14','15-17'],skills:['raciocínio'],href:'games/logica.html?mode=sequence'},
    {id:'diferencas',title:'Encontre as Diferenças',icon:'🔎',category:'atencao',ages:['6-8','9-11','12-14'],skills:['atenção'],href:'games/atencao.html?mode=diff'}
  ],
  ACHIEVEMENTS:[
    {id:'first_game',title:'Primeiro Passo',desc:'Complete sua primeira atividade',icon:'🎯'},
    {id:'memory_master',title:'Mestre da Memória',desc:'Vença 5 jogos da memória',icon:'🧠'},
    {id:'math_whiz',title:'Gênio da Matemática',desc:'Acerte 20 contas',icon:'🔢'},
    {id:'explorer',title:'Explorador',desc:'Experimente 5 áreas',icon:'🗺️'},
    {id:'reader',title:'Leitor',desc:'Leia 3 histórias',icon:'📚'},
    {id:'stars_50',title:'Colecionador',desc:'Ganhe 50 estrelas',icon:'⭐'}
  ],
  STORIES:[
    {id:'s1',title:'O Gato Curioso',icon:'🐱',pages:[{text:'Era uma vez um gatinho chamado Miau.',img:'🐱'},{text:'Ele adorava explorar a casa.',img:'🏠'},{text:'Um dia encontrou um novelo de lã.',img:'🧶'},{text:'Miau brincou o dia inteiro!',img:'😸'}]},
    {id:'s2',title:'A Estrela Cadente',icon:'⭐',pages:[{text:'No céu estrelado, uma pequena estrela brilhava.',img:'⭐'},{text:'Ela sonhava em visitar a Terra.',img:'🌍'},{text:'Uma noite, decidiu cair.',img:'💫'},{text:'Uma criança a encontrou e fez um pedido.',img:'🌠'}]},
    {id:'s3',title:'O Cachorro Fiel',icon:'🐶',pages:[{text:'Rex era um cachorro muito fiel.',img:'🐶'},{text:'Esperava seu amigo todo dia.',img:'🏡'},{text:'Um dia, seu amigo chegou triste.',img:'😢'},{text:'Rex o consolou com carinho.',img:'❤️'}]},
    {id:'s4',title:'A Floresta Mágica',icon:'🌳',pages:[{text:'Havia uma floresta cheia de magia.',img:'🌳'},{text:'As árvores conversavam entre si.',img:'🌲'},{text:'Os animais viviam em harmonia.',img:'🦊'},{text:'Quem entrava, saía mais sábio.',img:'🧙'}]},
    {id:'s5',title:'A Borboleta Colorida',icon:'🦋',pages:[{text:'Bela era uma borboleta muito colorida.',img:'🦋'},{text:'Voava de flor em flor.',img:'🌺'},{text:'Deixava um rastro de alegria.',img:'✨'},{text:'Todos a admiravam!',img:'😍'}]}
  ],
  ANIMALS:[
    {name:'Cachorro',emoji:'🐶',sound:'Au au!',habitat:'Casa',fact:'Melhor amigo do homem'},
    {name:'Gato',emoji:'🐱',sound:'Miau!',habitat:'Casa',fact:'Dorme até 16 horas por dia'},
    {name:'Vaca',emoji:'🐄',sound:'Muuu!',habitat:'Fazenda',fact:'Dá leite todos os dias'},
    {name:'Leão',emoji:'🦁',sound:'Roar!',habitat:'Savana',fact:'Rei da selva'},
    {name:'Elefante',emoji:'🐘',sound:'Fwooo!',habitat:'Savana',fact:'Maior animal terrestre'},
    {name:'Golfinho',emoji:'🐬',sound:'Click!',habitat:'Oceano',fact:'Muito inteligente'},
    {name:'Papagaio',emoji:'🦜',sound:'Falaa!',habitat:'Floresta',fact:'Repete palavras'},
    {name:'Pinguim',emoji:'🐧',sound:'Quack!',habitat:'Polo Sul',fact:'Não voa, mas nada bem'},
    {name:'Coelho',emoji:'🐰',sound:'...',habitat:'Campo',fact:'Pula muito alto'},
    {name:'Macaco',emoji:'🐵',sound:'Uh uh!',habitat:'Floresta',fact:'Usa ferramentas'}
  ],
  getGame(id){return this.GAMES.find(g=>g.id===id)},
  getGamesForAge(a){return this.GAMES.filter(g=>g.ages.includes(a))}
};
window.NPCatalog=NPCatalog;

function ageToBand(a){if(a>=3&&a<=5)return'3-5';if(a>=6&&a<=8)return'6-8';if(a>=9&&a<=11)return'9-11';if(a>=12&&a<=14)return'12-14';if(a>=15&&a<=17)return'15-17';return'6-8'}

function buildSidebar(active,role){
  var links={
    aluno:[{h:'dashboard.html',i:'🏠',l:'Início'},{h:'games.html',i:'🎮',l:'Jogos'},{h:'reading.html',i:'📚',l:'Biblioteca'},{h:'typing.html',i:'⌨️',l:'Digitação'},{h:'music.html',i:'🎵',l:'Música'},{h:'animals.html',i:'🐶',l:'Animais'},{h:'achievements.html',i:'🏆',l:'Conquistas'}],
    parent:[{h:'dashboard.html',i:'🏠',l:'Início'},{h:'children.html',i:'👨‍👩‍👧',l:'Filhos'},{h:'control.html',i:'🛡️',l:'Controle'}],
    teacher:[{h:'dashboard.html',i:'🏠',l:'Início'},{h:'students.html',i:'👨‍🎓',l:'Alunos'},{h:'reports.html',i:'📊',l:'Relatórios'}],
    admin:[{h:'dashboard.html',i:'🏠',l:'Início'},{h:'users.html',i:'👥',l:'Usuários'},{h:'logs.html',i:'📋',l:'Logs'}]
  };
  var items=links[role]||links.aluno;
  return '<aside class="sidebar" id="sidebar"><div class="sidebar-header"><div class="sidebar-logo">🧠</div><div class="sidebar-brand">NEUROPLAY</div></div><nav class="sidebar-nav">'+items.map(function(x){return '<a href="'+x.h+'" class="nav-item '+(active===x.h?'active':'')+'"><span>'+x.i+'</span><span>'+x.l+'</span></a>'}).join('')+'<a href="../../index.html" class="nav-item" style="margin-top:1rem"><span>🚪</span><span>Sair</span></a></nav></aside>';
}

function renderLayout(role,active,title,content){
  return '<div class="dashboard-layout">'+buildSidebar(active,role)+'<div><header class="dashboard-header"><div><h1 class="dashboard-title">'+title+'</h1></div><button class="btn btn-ghost" id="menuToggle" style="display:none">☰</button></header><main class="dashboard-main">'+content+'</main></div></div>';
}

window.NPApp={buildSidebar:buildSidebar,renderLayout:renderLayout,ageToBand:ageToBand};