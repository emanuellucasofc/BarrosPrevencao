export type RpgIconType = 'flame' | 'server' | 'zap' | 'users' | 'alert-triangle' | 'door-open' | 'biohazard' | 'skull';

export interface RPGChoice {
  text: string;
  isSuccess: boolean;
  feedbackText: string;
  integrityChange: number;
  dangerChange: number;
  nextScenarioId: string | 'random' | null;
  endGameState?: 'victory' | 'game-over';
}

export interface RPGScenario {
  id: string;
  title: string;
  description: string;
  icon: RpgIconType;
  imageUrl?: string;
  choices: RPGChoice[];
}

export const rpgScenarios: RPGScenario[] = [
  {
    "id": "s1_cpd",
    "title": "Alarme no CPD",
    "description": "O alarme de incêndio da sala do servidor (CPD) disparou no 4º andar. Há muita fumaça escura saindo por baixo da porta e um forte cheiro de plástico queimado.",
    "icon": "server",
    "imageUrl": "/assets/rpg/rpg_cpd_fire.jpg",
    "choices": [
      {
        "text": "Usar Extintor de Água e abrir a porta imediatamente.",
        "isSuccess": false,
        "feedbackText": "FALHA CRÍTICA! Você usou Água em equipamento energizado (Classe C). Curto-circuito!",
        "integrityChange": -40,
        "dangerChange": 50,
        "nextScenarioId": "random"
      },
      {
        "text": "Desligar a energia geral do andar e pegar o Extintor de CO2.",
        "isSuccess": true,
        "feedbackText": "EXCELENTE! Você isolou o risco elétrico e usou o agente correto para Classe C.",
        "integrityChange": 0,
        "dangerChange": -20,
        "nextScenarioId": "random"
      },
      {
        "text": "Acionar o rádio solicitando apoio e aguardar sem intervir.",
        "isSuccess": false,
        "feedbackText": "MÁ DECISÃO! A omissão na fase inicial permitiu que o fogo se alastrasse.",
        "integrityChange": 0,
        "dangerChange": 40,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s2_corredor",
    "title": "Fumaça no Corredor",
    "description": "Você está no corredor principal que foi tomado por fumaça densa e tóxica. A visibilidade é quase nula e a temperatura está subindo.",
    "icon": "flame",
    "imageUrl": "/assets/rpg/rpg_corridor_smoke.jpg",
    "choices": [
      {
        "text": "Colocar Máscara Autônoma (EPR), abaixar-se e avançar.",
        "isSuccess": true,
        "feedbackText": "AÇÃO TÁTICA! A fumaça e o calor ficam na parte alta. Rastejando você avançou com segurança.",
        "integrityChange": 0,
        "dangerChange": -10,
        "nextScenarioId": "random"
      },
      {
        "text": "Correr em pé rapidamente pelo corredor.",
        "isSuccess": false,
        "feedbackText": "ERRO GRAVE! Você inalou gases superaquecidos e tóxicos em pé.",
        "integrityChange": -30,
        "dangerChange": 20,
        "nextScenarioId": "random"
      },
      {
        "text": "Quebrar as janelas laterais para ventilar a fumaça.",
        "isSuccess": false,
        "feedbackText": "PROCEDIMENTO INADEQUADO! Gerou fluxo de oxigênio descontrolado (efeito chaminé) alimentando o incêndio.",
        "integrityChange": 0,
        "dangerChange": 30,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s3_salvamento",
    "title": "Resgate de Vítima",
    "description": "Uma vítima inalou fumaça e está caída inconsciente. A temperatura do ambiente está subindo rápido (Flashover iminente).",
    "icon": "users",
    "imageUrl": "/assets/rpg/rpg_rescue_victim.jpg",
    "choices": [
      {
        "text": "Tentar reanimar a vítima com RCP no local.",
        "isSuccess": false,
        "feedbackText": "ERRO TÁTICO! A cena não é segura para RCP. O risco de morte na zona quente é alto.",
        "integrityChange": -30,
        "dangerChange": 30,
        "nextScenarioId": "random"
      },
      {
        "text": "Usar técnica de extração rápida (Chave de Raute) para retirá-lo.",
        "isSuccess": true,
        "feedbackText": "SALVAMENTO HEROICO! Você retirou a vítima com a técnica correta de arrasto de emergência.",
        "integrityChange": 0,
        "dangerChange": -20,
        "nextScenarioId": "random"
      },
      {
        "text": "Pegar no colo e usar o elevador.",
        "isSuccess": false,
        "feedbackText": "FALHA FATAL! Elevadores são armadilhas mortais em incêndios. Vocês ficaram presos.",
        "integrityChange": -50,
        "dangerChange": 50,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s4_vazamento",
    "title": "Vazamento Químico",
    "description": "No setor logístico, uma empilhadeira perfurou um tambor de produto químico desconhecido. Há um vapor esverdeado no ar.",
    "icon": "biohazard",
    "imageUrl": "/assets/rpg/rpg_chemical_spill.jpg",
    "choices": [
      {
        "text": "Isolar a área a favor do vento e checar a FISPQ do produto.",
        "isSuccess": true,
        "feedbackText": "PERFEITO! Isolar a área (zona quente) e identificar o produto (HazMat) é a prioridade.",
        "integrityChange": 0,
        "dangerChange": -20,
        "nextScenarioId": "random"
      },
      {
        "text": "Jogar água com a mangueira do hidrante para diluir o produto.",
        "isSuccess": false,
        "feedbackText": "ERRO CRÍTICO! Água reage violentamente com muitos produtos, gerando explosão ou nuvem tóxica.",
        "integrityChange": -40,
        "dangerChange": 40,
        "nextScenarioId": "random"
      },
      {
        "text": "Prender a respiração e correr para fechar o tambor com fita.",
        "isSuccess": false,
        "feedbackText": "NUNCA FAÇA ISSO! Você inalou vapores imperceptíveis e sofreu queimaduras químicas.",
        "integrityChange": -60,
        "dangerChange": 30,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s5_desabamento",
    "title": "Estrutura Colapsada",
    "description": "Após uma forte explosão, parte do teto do galpão cedeu. Há risco de novos desabamentos e focos de incêndio sob os escombros.",
    "icon": "alert-triangle",
    "imageUrl": "/assets/rpg/rpg_structural_collapse.jpg",
    "choices": [
      {
        "text": "Gritar e entrar correndo para puxar os escombros.",
        "isSuccess": false,
        "feedbackText": "SUICÍDIO TÁTICO! Mover escombros sem escoramento causa desabamento secundário.",
        "integrityChange": -50,
        "dangerChange": 50,
        "nextScenarioId": "random"
      },
      {
        "text": "Avaliar a estabilidade (360 graus) e chamar equipe BREC.",
        "isSuccess": true,
        "feedbackText": "CORRETO! O protocolo BREC (Busca e Resgate em Estruturas Colapsadas) exige estabilização prévia.",
        "integrityChange": 0,
        "dangerChange": -10,
        "nextScenarioId": "random"
      },
      {
        "text": "Jogar água pesada no teto para esfriar o aço.",
        "isSuccess": false,
        "feedbackText": "ERRO! Choque térmico violento em estruturas de aço superaquecidas acelera o colapso estrutural.",
        "integrityChange": -20,
        "dangerChange": 40,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s6_cozinha",
    "title": "Incêndio na Cozinha Industrial",
    "description": "O óleo da fritadeira industrial pegou fogo na cozinha do refeitório. As chamas subiram até o exaustor e ameaçam o duto de ventilação.",
    "icon": "flame",
    "imageUrl": "/assets/rpg/rpg_cpd_fire.jpg",
    "choices": [
      {
        "text": "Fechar o registro de gás e usar o Extintor de Pó Químico (BC).",
        "isSuccess": true,
        "feedbackText": "CORRETO! Classe K (óleos e gorduras) exige agentes secos. Fechar o gás isolou o combustível.",
        "integrityChange": 0,
        "dangerChange": -20,
        "nextScenarioId": "random"
      },
      {
        "text": "Jogar água na fritadeira para apagar as chamas.",
        "isSuccess": false,
        "feedbackText": "DESASTRE! Água em óleo quente causa explosão de vapor (boilover). As chamas se espalharam.",
        "integrityChange": -50,
        "dangerChange": 50,
        "nextScenarioId": "random"
      },
      {
        "text": "Tampar a fritadeira com uma bandeja metálica.",
        "isSuccess": false,
        "feedbackText": "RISCO! Abafar pode funcionar, mas sem desligar o gás, o fogo retorna. Ação incompleta.",
        "integrityChange": -10,
        "dangerChange": 20,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s7_elevador",
    "title": "Pessoa Presa no Elevador",
    "description": "O elevador parou entre o 3º e 4º andar durante o alarme de incêndio. Uma pessoa está em pânico dentro da cabine.",
    "icon": "alert-triangle",
    "imageUrl": "/assets/rpg/rpg_corridor_smoke.jpg",
    "choices": [
      {
        "text": "Acalmar a vítima pelo interfone e acionar a manutenção para resgate seguro.",
        "isSuccess": true,
        "feedbackText": "CORRETO! O resgate em elevador deve ser feito por equipe técnica. Você manteve a calma da vítima.",
        "integrityChange": 0,
        "dangerChange": -10,
        "nextScenarioId": "random"
      },
      {
        "text": "Forçar a porta do elevador com o machado de arrombamento.",
        "isSuccess": false,
        "feedbackText": "PERIGO! Forçar portas de elevador pode causar queda da cabine ou lesionar o resgatista.",
        "integrityChange": -30,
        "dangerChange": 30,
        "nextScenarioId": "random"
      },
      {
        "text": "Ignorar e focar no combate ao incêndio.",
        "isSuccess": false,
        "feedbackText": "OMISSÃO! A vítima pode morrer por inalação de fumaça que entra pelo poço do elevador.",
        "integrityChange": 0,
        "dangerChange": 40,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s8_panico",
    "title": "Pânico na Evacuação",
    "description": "Durante o abandono de área, 200 pessoas correm em pânico para a saída principal. Há risco de pisoteamento.",
    "icon": "users",
    "imageUrl": "/assets/rpg/rpg_corridor_smoke.jpg",
    "choices": [
      {
        "text": "Posicionar-se na saída, usar voz de comando e direcionar o fluxo ordenadamente.",
        "isSuccess": true,
        "feedbackText": "LIDERANÇA! Você assumiu o controle e evitou o pisoteamento, canalizando a multidão.",
        "integrityChange": 0,
        "dangerChange": -15,
        "nextScenarioId": "random"
      },
      {
        "text": "Gritar \"FOGO! CORRAM!\" para acelerar a evacuação.",
        "isSuccess": false,
        "feedbackText": "ERRO GRAVÍSSIMO! Você aumentou o pânico. Pessoas caíram e foram pisoteadas.",
        "integrityChange": -20,
        "dangerChange": 40,
        "nextScenarioId": "random"
      },
      {
        "text": "Trancar a porta principal para controlar o fluxo.",
        "isSuccess": false,
        "feedbackText": "ILEGAL E FATAL! Bloquear rotas de fuga é crime. As pessoas ficaram presas.",
        "integrityChange": -40,
        "dangerChange": 50,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s9_gas",
    "title": "Vazamento de GLP",
    "description": "A central de gás do condomínio apresenta vazamento. O cheiro forte de mercaptana (odorizante) é perceptível a 20 metros.",
    "icon": "alert-triangle",
    "imageUrl": "/assets/rpg/rpg_chemical_spill.jpg",
    "choices": [
      {
        "text": "Isolar a área (50m), eliminar fontes de ignição e fechar o registro geral.",
        "isSuccess": true,
        "feedbackText": "PROTOCOLO CORRETO! GLP é mais pesado que o ar e se acumula em áreas baixas. Isolamento é a chave.",
        "integrityChange": 0,
        "dangerChange": -20,
        "nextScenarioId": "random"
      },
      {
        "text": "Acender uma lanterna comum para localizar o vazamento.",
        "isSuccess": false,
        "feedbackText": "EXPLOSÃO IMINENTE! Qualquer centelha em atmosfera rica em GLP causa deflagração.",
        "integrityChange": -60,
        "dangerChange": 50,
        "nextScenarioId": "random"
      },
      {
        "text": "Ligar o exaustor para dissipar o gás.",
        "isSuccess": false,
        "feedbackText": "RISCO! Equipamentos elétricos convencionais geram faísca. Somente equipamentos à prova de explosão.",
        "integrityChange": -30,
        "dangerChange": 40,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s10_eletrico",
    "title": "Choque Elétrico",
    "description": "Um trabalhador está inconsciente no chão, agarrado a um cabo elétrico desencapado. O corpo dele está em contato com o fio energizado.",
    "icon": "zap",
    "imageUrl": "/assets/rpg/rpg_structural_collapse.jpg",
    "choices": [
      {
        "text": "Desligar o disjuntor geral antes de tocar na vítima.",
        "isSuccess": true,
        "feedbackText": "PERFEITO! Nunca toque na vítima sem isolar a fonte. Você evitou ser a segunda vítima.",
        "integrityChange": 0,
        "dangerChange": -15,
        "nextScenarioId": "random"
      },
      {
        "text": "Puxar a vítima rapidamente pelo braço.",
        "isSuccess": false,
        "feedbackText": "CHOQUE EM CADEIA! Você também foi eletrocutado. Agora há duas vítimas no local.",
        "integrityChange": -50,
        "dangerChange": 40,
        "nextScenarioId": "random"
      },
      {
        "text": "Jogar água na vítima para \"acordá-la\".",
        "isSuccess": false,
        "feedbackText": "LETAL! Água conduz eletricidade. Você criou um caminho de corrente letal.",
        "integrityChange": -60,
        "dangerChange": 50,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s11_subsolo",
    "title": "Fumaça no Subsolo",
    "description": "O subsolo do prédio comercial está cheio de fumaça. Não há janelas e a ventilação natural é zero. O detector de CO está em alarme crítico.",
    "icon": "flame",
    "imageUrl": "/assets/rpg/rpg_corridor_smoke.jpg",
    "choices": [
      {
        "text": "Usar EPR (Equipamento de Proteção Respiratória) e entrar com linha de vida.",
        "isSuccess": true,
        "feedbackText": "PROTOCOLO CORRETO! Ambiente confinado exige EPR e sistema de segurança com linha de vida.",
        "integrityChange": 0,
        "dangerChange": -10,
        "nextScenarioId": "random"
      },
      {
        "text": "Entrar sem máscara segurando a respiração.",
        "isSuccess": false,
        "feedbackText": "MORTE EM 30 SEGUNDOS! Monóxido de carbono (CO) é inodoro. Você desmaiou sem perceber.",
        "integrityChange": -50,
        "dangerChange": 40,
        "nextScenarioId": "random"
      },
      {
        "text": "Abrir a porta corta-fogo do subsolo para ventilar.",
        "isSuccess": false,
        "feedbackText": "BACKDRAFT! A entrada súbita de oxigênio em ambiente superaquecido causou explosão de gases.",
        "integrityChange": -40,
        "dangerChange": 50,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s12_escada",
    "title": "Queda na Escada de Emergência",
    "description": "Durante a evacuação, um idoso caiu na escada de emergência e não consegue se mover. Há pessoas descendo atrás dele.",
    "icon": "users",
    "imageUrl": "/assets/rpg/rpg_rescue_victim.jpg",
    "choices": [
      {
        "text": "Imobilizar a vítima e criar um corredor de passagem para os demais.",
        "isSuccess": true,
        "feedbackText": "EXCELENTE! Você protegeu a vítima de pisoteamento e manteve o fluxo de evacuação.",
        "integrityChange": 0,
        "dangerChange": -10,
        "nextScenarioId": "random"
      },
      {
        "text": "Carregar o idoso nas costas escada abaixo.",
        "isSuccess": false,
        "feedbackText": "RISCO DE LESÃO ESPINHAL! Movimentação sem imobilização pode causar paralisia permanente.",
        "integrityChange": -20,
        "dangerChange": 20,
        "nextScenarioId": "random"
      },
      {
        "text": "Pedir para as pessoas pularem por cima dele.",
        "isSuccess": false,
        "feedbackText": "ABSURDO! A vítima seria pisoteada. Isso agrava lesões e causa pânico na multidão.",
        "integrityChange": -30,
        "dangerChange": 40,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s13_gerador",
    "title": "Incêndio no Gerador",
    "description": "O gerador a diesel do prédio pegou fogo. Há poças de combustível no chão e o risco de propagação é altíssimo.",
    "icon": "flame",
    "imageUrl": "/assets/rpg/rpg_cpd_fire.jpg",
    "choices": [
      {
        "text": "Fechar a válvula de combustível e usar extintor de Espuma Mecânica (AFFF).",
        "isSuccess": true,
        "feedbackText": "CORRETO! Diesel é Classe B. Espuma AFFF abafa e resfria. Cortar o combustível isolou a fonte.",
        "integrityChange": 0,
        "dangerChange": -20,
        "nextScenarioId": "random"
      },
      {
        "text": "Usar extintor de CO2 nas poças de diesel.",
        "isSuccess": false,
        "feedbackText": "INEFICAZ! CO2 não forma película sobre líquidos. O fogo reignita imediatamente.",
        "integrityChange": -10,
        "dangerChange": 30,
        "nextScenarioId": "random"
      },
      {
        "text": "Jogar areia sobre as chamas.",
        "isSuccess": false,
        "feedbackText": "INSUFICIENTE! Areia funciona para pequenas poças, mas o volume de diesel é grande demais.",
        "integrityChange": -15,
        "dangerChange": 25,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s14_cadeirante",
    "title": "Evacuação de Cadeirante",
    "description": "Uma pessoa cadeirante está no 5º andar. O elevador está desligado e a escada é a única rota de fuga. A fumaça está chegando.",
    "icon": "users",
    "imageUrl": "/assets/rpg/rpg_rescue_victim.jpg",
    "choices": [
      {
        "text": "Levar até a Área de Refúgio e aguardar resgate pelo Corpo de Bombeiros.",
        "isSuccess": true,
        "feedbackText": "PROTOCOLO NBR 9077! Áreas de Refúgio são projetadas para proteger PCDs até o resgate especializado.",
        "integrityChange": 0,
        "dangerChange": -15,
        "nextScenarioId": "random"
      },
      {
        "text": "Descer com a cadeira de rodas pela escada.",
        "isSuccess": false,
        "feedbackText": "RISCO EXTREMO! A cadeira pode tombar, causando traumatismo craniano na vítima e no socorrista.",
        "integrityChange": -30,
        "dangerChange": 30,
        "nextScenarioId": "random"
      },
      {
        "text": "Deixar a pessoa sozinha e ir buscar ajuda.",
        "isSuccess": false,
        "feedbackText": "ABANDONO! A fumaça pode chegar antes do resgate. A vítima ficou em pânico e tentou sair sozinha.",
        "integrityChange": -20,
        "dangerChange": 40,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s15_hidrante",
    "title": "Falha no Hidrante",
    "description": "Ao tentar usar o hidrante de parede, você percebe que não sai água. A bomba de incêndio não acionou automaticamente.",
    "icon": "alert-triangle",
    "imageUrl": "/assets/rpg/rpg_cpd_fire.jpg",
    "choices": [
      {
        "text": "Ir até a casa de bombas e acionar a bomba manualmente (botoeira de emergência).",
        "isSuccess": true,
        "feedbackText": "BOA! A botoeira de emergência é o backup. Você restabeleceu a pressão nos hidrantes.",
        "integrityChange": 0,
        "dangerChange": -15,
        "nextScenarioId": "random"
      },
      {
        "text": "Desistir do hidrante e tentar combater com extintores portáteis.",
        "isSuccess": false,
        "feedbackText": "INSUFICIENTE! Extintores portáteis não dão conta de incêndios de médio e grande porte.",
        "integrityChange": -10,
        "dangerChange": 30,
        "nextScenarioId": "random"
      },
      {
        "text": "Conectar uma mangueira de jardim no registro mais próximo.",
        "isSuccess": false,
        "feedbackText": "PRESSÃO ZERO! Mangueiras de jardim não têm pressão suficiente. Você perdeu tempo precioso.",
        "integrityChange": 0,
        "dangerChange": 35,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s16_estacionamento",
    "title": "Incêndio no Estacionamento",
    "description": "Um veículo pegou fogo no estacionamento subterrâneo. A fumaça preta está se acumulando rapidamente no teto baixo.",
    "icon": "flame",
    "imageUrl": "/assets/rpg/rpg_corridor_smoke.jpg",
    "choices": [
      {
        "text": "Acionar a ventilação mecânica do subsolo e combater com espuma (AFFF).",
        "isSuccess": true,
        "feedbackText": "CORRETO! Ventilação mecânica em subsolos é obrigatória pela IT. Espuma é ideal para combustíveis líquidos.",
        "integrityChange": 0,
        "dangerChange": -20,
        "nextScenarioId": "random"
      },
      {
        "text": "Tentar mover os carros vizinhos para evitar propagação.",
        "isSuccess": false,
        "feedbackText": "RISCO DE EXPLOSÃO! Tanques de combustível próximos ao fogo podem explodir. Nunca mova veículos.",
        "integrityChange": -40,
        "dangerChange": 40,
        "nextScenarioId": "random"
      },
      {
        "text": "Usar extintor de água no veículo em chamas.",
        "isSuccess": false,
        "feedbackText": "INEFICAZ! Gasolina é Classe B. Água espalha o combustível líquido, aumentando a área de fogo.",
        "integrityChange": -20,
        "dangerChange": 35,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s17_pcr",
    "title": "Parada Cardiorrespiratória",
    "description": "Um funcionário desabou no chão do escritório, sem pulso e sem respiração. O DEA (Desfibrilador) está na parede a 10 metros.",
    "icon": "users",
    "imageUrl": "/assets/rpg/rpg_rescue_victim.jpg",
    "choices": [
      {
        "text": "Iniciar RCP imediato (30:2) e pedir alguém para trazer o DEA.",
        "isSuccess": true,
        "feedbackText": "PADRÃO OURO! Compressões imediatas + DEA precoce é a cadeia de sobrevivência da AHA.",
        "integrityChange": 0,
        "dangerChange": -15,
        "nextScenarioId": "random"
      },
      {
        "text": "Correr para buscar o DEA antes de iniciar as compressões.",
        "isSuccess": false,
        "feedbackText": "CADA SEGUNDO CONTA! Sem compressões, o cérebro sofre dano irreversível em 4-6 minutos.",
        "integrityChange": -20,
        "dangerChange": 25,
        "nextScenarioId": "random"
      },
      {
        "text": "Verificar se a pessoa está \"fingindo\" antes de agir.",
        "isSuccess": false,
        "feedbackText": "OMISSÃO! Em PCR, a hesitação mata. Sempre assuma o pior e aja imediatamente.",
        "integrityChange": -30,
        "dangerChange": 40,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s18_almoxarifado",
    "title": "Princípio de Incêndio no Almoxarifado",
    "description": "Caixas de papelão empilhadas estão pegando fogo no almoxarifado. A fumaça é branca e o fogo ainda é pequeno.",
    "icon": "flame",
    "imageUrl": "/assets/rpg/rpg_cpd_fire.jpg",
    "choices": [
      {
        "text": "Usar extintor de Água Pressurizada (AP) nas caixas em chamas.",
        "isSuccess": true,
        "feedbackText": "CORRETO! Papelão é Classe A (materiais sólidos). Água resfria e apaga com eficiência.",
        "integrityChange": 0,
        "dangerChange": -20,
        "nextScenarioId": "random"
      },
      {
        "text": "Usar extintor de CO2 no papelão.",
        "isSuccess": false,
        "feedbackText": "REIGNIÇÃO! CO2 apaga momentaneamente mas não resfria. Materiais sólidos voltam a queimar.",
        "integrityChange": -10,
        "dangerChange": 25,
        "nextScenarioId": "random"
      },
      {
        "text": "Tentar abafar as caixas com um cobertor.",
        "isSuccess": false,
        "feedbackText": "INSUFICIENTE! O volume de material é grande demais. O cobertor pegou fogo também.",
        "integrityChange": -15,
        "dangerChange": 30,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s19_queimadura",
    "title": "Vítima com Queimadura Grave",
    "description": "Um trabalhador sofreu queimaduras de 2º grau nos braços após contato com vapor superaquecido. Há bolhas extensas.",
    "icon": "users",
    "imageUrl": "/assets/rpg/rpg_rescue_victim.jpg",
    "choices": [
      {
        "text": "Resfriar com água corrente limpa por 20 minutos e cobrir com curativo estéril.",
        "isSuccess": true,
        "feedbackText": "PROTOCOLO CORRETO! Água corrente por 20min reduz a profundidade da queimadura. Nunca estourar bolhas.",
        "integrityChange": 0,
        "dangerChange": -10,
        "nextScenarioId": "random"
      },
      {
        "text": "Aplicar pasta de dente e gelo nas queimaduras.",
        "isSuccess": false,
        "feedbackText": "MITO PERIGOSO! Pasta de dente causa infecção. Gelo causa queimadura por frio (vasoconstricção).",
        "integrityChange": -20,
        "dangerChange": 20,
        "nextScenarioId": "random"
      },
      {
        "text": "Estourar as bolhas e passar pomada.",
        "isSuccess": false,
        "feedbackText": "INFECÇÃO! As bolhas são proteção natural. Estourá-las expõe tecido vivo a bactérias.",
        "integrityChange": -25,
        "dangerChange": 25,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s20_telhado",
    "title": "Fogo na Cobertura",
    "description": "Faíscas de um serviço de solda atingiram material inflamável na cobertura do prédio. As chamas estão se espalhando pela manta asfáltica.",
    "icon": "flame",
    "imageUrl": "/assets/rpg/rpg_structural_collapse.jpg",
    "choices": [
      {
        "text": "Combater com hidrante de cobertura e isolar a área abaixo.",
        "isSuccess": true,
        "feedbackText": "AÇÃO CORRETA! A manta asfáltica é altamente combustível. O hidrante de cobertura tem pressão adequada.",
        "integrityChange": 0,
        "dangerChange": -20,
        "nextScenarioId": "random"
      },
      {
        "text": "Subir pela escada externa carregando extintores portáteis.",
        "isSuccess": false,
        "feedbackText": "INSUFICIENTE! Extintores portáteis não dão conta de incêndio em manta asfáltica espalhado.",
        "integrityChange": -15,
        "dangerChange": 30,
        "nextScenarioId": "random"
      },
      {
        "text": "Aguardar o Corpo de Bombeiros sem intervir.",
        "isSuccess": false,
        "feedbackText": "OMISSÃO! Em poucos minutos a cobertura colapsa e compromete toda a estrutura abaixo.",
        "integrityChange": 0,
        "dangerChange": 40,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s21_engasgamento",
    "title": "Engasgamento no Refeitório",
    "description": "Um funcionário está engasgado no refeitório, com as mãos no pescoço, sem conseguir tossir ou falar. O rosto está ficando roxo.",
    "icon": "users",
    "imageUrl": "/assets/rpg/rpg_rescue_victim.jpg",
    "choices": [
      {
        "text": "Aplicar a Manobra de Heimlich (compressões abdominais).",
        "isSuccess": true,
        "feedbackText": "SALVOU UMA VIDA! A Manobra de Heimlich é o protocolo para obstrução total de via aérea.",
        "integrityChange": 0,
        "dangerChange": -15,
        "nextScenarioId": "random"
      },
      {
        "text": "Dar tapas nas costas e oferecer água.",
        "isSuccess": false,
        "feedbackText": "ERRADO! Em obstrução TOTAL, tapas podem piorar. Água é impossível — a via aérea está bloqueada.",
        "integrityChange": -15,
        "dangerChange": 25,
        "nextScenarioId": "random"
      },
      {
        "text": "Colocar o dedo na garganta para tentar puxar o objeto.",
        "isSuccess": false,
        "feedbackText": "PERIGO! O dedo pode empurrar o objeto mais fundo e causar obstrução completa irreversível.",
        "integrityChange": -25,
        "dangerChange": 30,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s22_confinado",
    "title": "Resgate em Espaço Confinado",
    "description": "Um operário desmaiou dentro de uma cisterna durante manutenção. O detector de gases mostra nível crítico de H2S (gás sulfídrico).",
    "icon": "skull",
    "imageUrl": "/assets/rpg/rpg_chemical_spill.jpg",
    "choices": [
      {
        "text": "Acionar equipe de resgate com EPR e sistema de tripé com guincho.",
        "isSuccess": true,
        "feedbackText": "PROTOCOLO NR-33! Resgate em espaço confinado exige equipe treinada, EPR e equipamento de içamento.",
        "integrityChange": 0,
        "dangerChange": -15,
        "nextScenarioId": "random"
      },
      {
        "text": "Descer imediatamente na cisterna para socorrer.",
        "isSuccess": false,
        "feedbackText": "SUICÍDIO! H2S causa perda de consciência em segundos. Você seria a segunda vítima fatal.",
        "integrityChange": -60,
        "dangerChange": 50,
        "nextScenarioId": "random"
      },
      {
        "text": "Jogar uma corda para a vítima.",
        "isSuccess": false,
        "feedbackText": "IMPOSSÍVEL! A vítima está inconsciente e não pode agarrar a corda. Perda de tempo crítico.",
        "integrityChange": -10,
        "dangerChange": 30,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s23_sprinkler",
    "title": "Sprinklers Acionados Indevidamente",
    "description": "Os sprinklers do andar foram acionados, mas não há incêndio. A água está danificando computadores e documentos importantes.",
    "icon": "alert-triangle",
    "imageUrl": "/assets/rpg/rpg_cpd_fire.jpg",
    "choices": [
      {
        "text": "Fechar o registro do ramal do andar e comunicar a manutenção.",
        "isSuccess": true,
        "feedbackText": "CORRETO! Cada ramal tem registro setorial. Você conteve o dano sem comprometer outros andares.",
        "integrityChange": 0,
        "dangerChange": -10,
        "nextScenarioId": "random"
      },
      {
        "text": "Desligar a bomba de incêndio principal.",
        "isSuccess": false,
        "feedbackText": "PROIBIDO! Desligar a bomba principal deixa TODO o prédio sem proteção contra incêndio real.",
        "integrityChange": 0,
        "dangerChange": 40,
        "nextScenarioId": "random"
      },
      {
        "text": "Quebrar o cabeçote do sprinkler para parar a água.",
        "isSuccess": false,
        "feedbackText": "PIOROU! Quebrar o cabeçote aumenta o fluxo de água. Agora a inundação é muito pior.",
        "integrityChange": -15,
        "dangerChange": 25,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s24_fraturaexposta",
    "title": "Fratura Exposta",
    "description": "Um trabalhador caiu de uma escada e sofreu fratura exposta na perna. Há sangramento moderado e o osso está visível.",
    "icon": "users",
    "imageUrl": "/assets/rpg/rpg_rescue_victim.jpg",
    "choices": [
      {
        "text": "Controlar hemorragia com compressão indireta, imobilizar e aguardar SAMU.",
        "isSuccess": true,
        "feedbackText": "PROTOCOLO APH! Controle de hemorragia, imobilização e transporte adequado previnem choque e infecção.",
        "integrityChange": 0,
        "dangerChange": -10,
        "nextScenarioId": "random"
      },
      {
        "text": "Tentar recolocar o osso no lugar.",
        "isSuccess": false,
        "feedbackText": "NUNCA! Redução de fratura é ato médico. Você pode lesar vasos e nervos, causando hemorragia interna.",
        "integrityChange": -30,
        "dangerChange": 30,
        "nextScenarioId": "random"
      },
      {
        "text": "Aplicar torniquete imediatamente na perna.",
        "isSuccess": false,
        "feedbackText": "DESPROPORCIONAL! Torniquete é último recurso para hemorragia que ameaça a vida. Compressão direta primeiro.",
        "integrityChange": -20,
        "dangerChange": 20,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s25_paineleletrico",
    "title": "Curto-Circuito no Painel Elétrico",
    "description": "O quadro de distribuição elétrica do 2º andar está emitindo faíscas e fumaça. Há cheiro de fiação queimada.",
    "icon": "zap",
    "imageUrl": "/assets/rpg/rpg_cpd_fire.jpg",
    "choices": [
      {
        "text": "Desligar o disjuntor geral do andar e usar Extintor de CO2.",
        "isSuccess": true,
        "feedbackText": "PERFEITO! Desenergizar primeiro, depois combater com agente limpo (CO2) para Classe C.",
        "integrityChange": 0,
        "dangerChange": -20,
        "nextScenarioId": "random"
      },
      {
        "text": "Jogar água no painel para resfriar os fios.",
        "isSuccess": false,
        "feedbackText": "ELETROCUÇÃO! Água em circuito energizado causa choque elétrico fatal e curto-circuito massivo.",
        "integrityChange": -50,
        "dangerChange": 50,
        "nextScenarioId": "random"
      },
      {
        "text": "Usar extintor de Pó Químico ABC.",
        "isSuccess": false,
        "feedbackText": "FUNCIONA, MAS... O pó químico danifica equipamentos eletrônicos e o resíduo é corrosivo. CO2 era melhor.",
        "integrityChange": -5,
        "dangerChange": 10,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s26_desmaio",
    "title": "Desmaio por Calor",
    "description": "Em um dia de 40°C, um segurança desmaiou durante a ronda externa. Está vermelho, sem suar, com pele quente e seca.",
    "icon": "users",
    "imageUrl": "/assets/rpg/rpg_rescue_victim.jpg",
    "choices": [
      {
        "text": "Levar para sombra, resfriar com compressas frias nas axilas/virilha e acionar SAMU.",
        "isSuccess": true,
        "feedbackText": "CORRETO! Sinais de intermação (heat stroke): pele seca e quente. Resfriamento ativo é urgência médica.",
        "integrityChange": 0,
        "dangerChange": -10,
        "nextScenarioId": "random"
      },
      {
        "text": "Dar água gelada para ele beber imediatamente.",
        "isSuccess": false,
        "feedbackText": "RISCO! Vítima inconsciente pode broncoaspirar (engasgar). Nunca ofereça líquidos a inconscientes.",
        "integrityChange": -20,
        "dangerChange": 20,
        "nextScenarioId": "random"
      },
      {
        "text": "Colocar álcool no rosto para \"acordar\".",
        "isSuccess": false,
        "feedbackText": "INÚTIL E PERIGOSO! Álcool não trata intermação. Pode causar irritação nos olhos e não resfria o corpo.",
        "integrityChange": -15,
        "dangerChange": 25,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s27_transformador",
    "title": "Explosão de Transformador",
    "description": "O transformador da subestação explodiu. Há óleo mineral incendiado no chão e risco de energização residual.",
    "icon": "zap",
    "imageUrl": "/assets/rpg/rpg_structural_collapse.jpg",
    "choices": [
      {
        "text": "Isolar área (20m), confirmar desenergização com a concessionária e usar espuma AFFF.",
        "isSuccess": true,
        "feedbackText": "PROTOCOLO CORRETO! Transformadores contêm óleo mineral (Classe B) e risco elétrico residual.",
        "integrityChange": 0,
        "dangerChange": -20,
        "nextScenarioId": "random"
      },
      {
        "text": "Combater as chamas imediatamente com água.",
        "isSuccess": false,
        "feedbackText": "ELETROCUÇÃO + PROPAGAÇÃO! Água em óleo mineral espalha o fogo. Equipamento pode estar energizado.",
        "integrityChange": -50,
        "dangerChange": 50,
        "nextScenarioId": "random"
      },
      {
        "text": "Jogar areia no óleo em chamas.",
        "isSuccess": false,
        "feedbackText": "INSUFICIENTE! O volume de óleo do transformador é enorme. Areia não abafa grandes áreas.",
        "integrityChange": -10,
        "dangerChange": 30,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s28_evento",
    "title": "Emergência em Show ao Vivo",
    "description": "Durante um show com 5.000 pessoas, um palco auxiliar começou a pegar fogo. O público está entre o palco e as saídas.",
    "icon": "users",
    "imageUrl": "/assets/rpg/rpg_corridor_smoke.jpg",
    "choices": [
      {
        "text": "Acionar o PAE (Plano de Ação de Emergência), orientar evacuação setorizada e combater o foco.",
        "isSuccess": true,
        "feedbackText": "LIDERANÇA! O PAE prevê rotas de fuga setorizadas. Evacuação coordenada evita pisoteamento.",
        "integrityChange": 0,
        "dangerChange": -15,
        "nextScenarioId": "random"
      },
      {
        "text": "Pegar o microfone e gritar para todos correrem para a saída principal.",
        "isSuccess": false,
        "feedbackText": "CATÁSTROFE! 5.000 pessoas correndo para uma única saída = esmagamento e mortes por compressão.",
        "integrityChange": -30,
        "dangerChange": 50,
        "nextScenarioId": "random"
      },
      {
        "text": "Desligar toda a iluminação para que as placas de saída brilhem no escuro.",
        "isSuccess": false,
        "feedbackText": "PÂNICO! Escuridão repentina em multidão causa histeria coletiva e quedas em massa.",
        "integrityChange": -20,
        "dangerChange": 40,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s29_afogamento",
    "title": "Afogamento na Piscina",
    "description": "Uma criança foi encontrada inconsciente na piscina do condomínio. Não há sinais de respiração.",
    "icon": "users",
    "imageUrl": "/assets/rpg/rpg_rescue_victim.jpg",
    "choices": [
      {
        "text": "Retirar da água, abrir via aérea, aplicar 5 ventilações de resgate e iniciar RCP.",
        "isSuccess": true,
        "feedbackText": "PROTOCOLO DE AFOGAMENTO! Em afogados, a prioridade é VENTILAÇÃO (5 insuflações iniciais), depois RCP 30:2.",
        "integrityChange": 0,
        "dangerChange": -15,
        "nextScenarioId": "random"
      },
      {
        "text": "Virar a criança de cabeça para baixo para \"escorrer a água\".",
        "isSuccess": false,
        "feedbackText": "MITO PERIGOSO! Isso atrasa a RCP, não remove água dos pulmões e pode causar vômito e aspiração.",
        "integrityChange": -20,
        "dangerChange": 30,
        "nextScenarioId": "random"
      },
      {
        "text": "Iniciar compressões torácicas sem ventilar.",
        "isSuccess": false,
        "feedbackText": "INCOMPLETO! Em afogamento, a causa é hipóxia. Sem ventilação, as compressões sozinhas são insuficientes.",
        "integrityChange": -15,
        "dangerChange": 25,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s30_laboratorio",
    "title": "Incêndio no Laboratório",
    "description": "Um béquer com solvente orgânico caiu sobre o bico de Bunsen no laboratório. As chamas atingiram a bancada e reagentes próximos.",
    "icon": "biohazard",
    "imageUrl": "/assets/rpg/rpg_chemical_spill.jpg",
    "choices": [
      {
        "text": "Fechar o registro de gás, usar cobertor antichamas e evacuar o lab.",
        "isSuccess": true,
        "feedbackText": "CORRETO! Solventes orgânicos (Classe B) são apagados por abafamento. Fechar o gás elimina a fonte.",
        "integrityChange": 0,
        "dangerChange": -20,
        "nextScenarioId": "random"
      },
      {
        "text": "Usar extintor de Água no solvente.",
        "isSuccess": false,
        "feedbackText": "PROPAGAÇÃO! Solventes orgânicos são imiscíveis com água. As chamas se espalharam pela bancada toda.",
        "integrityChange": -30,
        "dangerChange": 40,
        "nextScenarioId": "random"
      },
      {
        "text": "Soprar as chamas tentando apagar.",
        "isSuccess": false,
        "feedbackText": "PIOROU! O sopro espalhou o solvente em chamas e alimentou o fogo com oxigênio.",
        "integrityChange": -25,
        "dangerChange": 35,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s31_convulsao",
    "title": "Crise Convulsiva",
    "description": "Um visitante está tendo uma convulsão tônico-clônica no saguão principal. Ele está se debatendo violentamente no chão.",
    "icon": "users",
    "imageUrl": "/assets/rpg/rpg_rescue_victim.jpg",
    "choices": [
      {
        "text": "Proteger a cabeça, afastar objetos, cronometrar e aguardar. Posição lateral após a crise.",
        "isSuccess": true,
        "feedbackText": "PROTOCOLO CORRETO! Não contenha os movimentos. Proteja a cabeça e cronometre. Se >5min, é emergência (Status Epilepticus).",
        "integrityChange": 0,
        "dangerChange": -10,
        "nextScenarioId": "random"
      },
      {
        "text": "Segurar a língua para ele não engolir.",
        "isSuccess": false,
        "feedbackText": "MITO! É IMPOSSÍVEL engolir a própria língua. Colocar objetos na boca causa fratura dental e lesão no socorrista.",
        "integrityChange": -20,
        "dangerChange": 20,
        "nextScenarioId": "random"
      },
      {
        "text": "Segurar firmemente os braços e pernas para parar os movimentos.",
        "isSuccess": false,
        "feedbackText": "ERRADO! Conter os movimentos pode causar fraturas e luxações. A crise para sozinha.",
        "integrityChange": -15,
        "dangerChange": 25,
        "nextScenarioId": "random"
      }
    ]
  },
  {
    "id": "s32_quadra",
    "title": "Raio durante Evento Esportivo",
    "description": "Uma tempestade elétrica se aproxima durante um evento ao ar livre na quadra. Há raios caindo a menos de 5km de distância.",
    "icon": "zap",
    "imageUrl": "/assets/rpg/rpg_structural_collapse.jpg",
    "choices": [
      {
        "text": "Suspender o evento imediatamente e conduzir todos para abrigos fechados.",
        "isSuccess": true,
        "feedbackText": "PROTOCOLO! A regra 30-30: se o intervalo entre raio e trovão for <30 segundos, evacue. Aguarde 30min após o último raio.",
        "integrityChange": 0,
        "dangerChange": -15,
        "nextScenarioId": "random"
      },
      {
        "text": "Pedir para as pessoas se abrigarem debaixo das árvores.",
        "isSuccess": false,
        "feedbackText": "ARMADILHA! Árvores isoladas são para-raios naturais. Descarga lateral pode atingir quem está abaixo.",
        "integrityChange": -40,
        "dangerChange": 40,
        "nextScenarioId": "random"
      },
      {
        "text": "Continuar o evento e monitorar a situação.",
        "isSuccess": false,
        "feedbackText": "NEGLIGÊNCIA! Raios matam. A responsabilidade é do Bombeiro Civil. Você é o responsável pela segurança.",
        "integrityChange": -20,
        "dangerChange": 45,
        "nextScenarioId": "random"
      }
    ]
  }
];
