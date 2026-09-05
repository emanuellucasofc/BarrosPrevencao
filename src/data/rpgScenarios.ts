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
    "id": "s6_var",
    "title": "Alarme no Auditório",
    "description": "[Ocorrência Simultânea #6] Você foi deslocado para o local. Há muita fumaça escura saindo por baixo da porta e um forte cheiro de plástico queimado.",
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
    "id": "s7_var",
    "title": "Fumaça na Casa de Máquinas",
    "description": "[Ocorrência Simultânea #7] Você foi deslocado para o local. A visibilidade é quase nula e a temperatura está subindo.",
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
    "id": "s8_var",
    "title": "Resgate no Setor Elétrico",
    "description": "[Ocorrência Simultânea #8] Você foi deslocado para o local. A temperatura do ambiente está subindo rápido (Flashover iminente).",
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
    "id": "s9_var",
    "title": "Vazamento no Subsolo",
    "description": "[Ocorrência Simultânea #9] Você foi deslocado para o local. Há um vapor esverdeado no ar.",
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
    "id": "s10_var",
    "title": "Estrutura na Cobertura",
    "description": "[Ocorrência Simultânea #10] Você foi deslocado para o local. Há risco de novos desabamentos e focos de incêndio sob os escombros.",
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
    "id": "s11_var",
    "title": "Alarme no Almoxarifado",
    "description": "[Ocorrência Simultânea #11] Você foi deslocado para o local. Há muita fumaça escura saindo por baixo da porta e um forte cheiro de plástico queimado.",
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
    "id": "s12_var",
    "title": "Fumaça no Estacionamento",
    "description": "[Ocorrência Simultânea #12] Você foi deslocado para o local. A visibilidade é quase nula e a temperatura está subindo.",
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
    "id": "s13_var",
    "title": "Resgate na Cozinha Industrial",
    "description": "[Ocorrência Simultânea #13] Você foi deslocado para o local. A temperatura do ambiente está subindo rápido (Flashover iminente).",
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
    "id": "s14_var",
    "title": "Vazamento no Auditório",
    "description": "[Ocorrência Simultânea #14] Você foi deslocado para o local. Há um vapor esverdeado no ar.",
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
    "id": "s15_var",
    "title": "Estrutura na Casa de Máquinas",
    "description": "[Ocorrência Simultânea #15] Você foi deslocado para o local. Há risco de novos desabamentos e focos de incêndio sob os escombros.",
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
    "id": "s16_var",
    "title": "Alarme no Setor Elétrico",
    "description": "[Ocorrência Simultânea #16] Você foi deslocado para o local. Há muita fumaça escura saindo por baixo da porta e um forte cheiro de plástico queimado.",
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
    "id": "s17_var",
    "title": "Fumaça no Subsolo",
    "description": "[Ocorrência Simultânea #17] Você foi deslocado para o local. A visibilidade é quase nula e a temperatura está subindo.",
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
    "id": "s18_var",
    "title": "Resgate na Cobertura",
    "description": "[Ocorrência Simultânea #18] Você foi deslocado para o local. A temperatura do ambiente está subindo rápido (Flashover iminente).",
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
    "id": "s19_var",
    "title": "Vazamento no Almoxarifado",
    "description": "[Ocorrência Simultânea #19] Você foi deslocado para o local. Há um vapor esverdeado no ar.",
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
    "id": "s20_var",
    "title": "Estrutura no Estacionamento",
    "description": "[Ocorrência Simultânea #20] Você foi deslocado para o local. Há risco de novos desabamentos e focos de incêndio sob os escombros.",
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
    "id": "s21_var",
    "title": "Alarme na Cozinha Industrial",
    "description": "[Ocorrência Simultânea #21] Você foi deslocado para o local. Há muita fumaça escura saindo por baixo da porta e um forte cheiro de plástico queimado.",
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
    "id": "s22_var",
    "title": "Fumaça no Auditório",
    "description": "[Ocorrência Simultânea #22] Você foi deslocado para o local. A visibilidade é quase nula e a temperatura está subindo.",
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
    "id": "s23_var",
    "title": "Resgate na Casa de Máquinas",
    "description": "[Ocorrência Simultânea #23] Você foi deslocado para o local. A temperatura do ambiente está subindo rápido (Flashover iminente).",
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
    "id": "s24_var",
    "title": "Vazamento no Setor Elétrico",
    "description": "[Ocorrência Simultânea #24] Você foi deslocado para o local. Há um vapor esverdeado no ar.",
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
    "id": "s25_var",
    "title": "Estrutura no Subsolo",
    "description": "[Ocorrência Simultânea #25] Você foi deslocado para o local. Há risco de novos desabamentos e focos de incêndio sob os escombros.",
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
    "id": "s26_var",
    "title": "Alarme na Cobertura",
    "description": "[Ocorrência Simultânea #26] Você foi deslocado para o local. Há muita fumaça escura saindo por baixo da porta e um forte cheiro de plástico queimado.",
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
    "id": "s27_var",
    "title": "Fumaça no Almoxarifado",
    "description": "[Ocorrência Simultânea #27] Você foi deslocado para o local. A visibilidade é quase nula e a temperatura está subindo.",
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
    "id": "s28_var",
    "title": "Resgate no Estacionamento",
    "description": "[Ocorrência Simultânea #28] Você foi deslocado para o local. A temperatura do ambiente está subindo rápido (Flashover iminente).",
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
    "id": "s29_var",
    "title": "Vazamento na Cozinha Industrial",
    "description": "[Ocorrência Simultânea #29] Você foi deslocado para o local. Há um vapor esverdeado no ar.",
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
    "id": "s30_var",
    "title": "Estrutura no Auditório",
    "description": "[Ocorrência Simultânea #30] Você foi deslocado para o local. Há risco de novos desabamentos e focos de incêndio sob os escombros.",
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
    "id": "s31_var",
    "title": "Alarme na Casa de Máquinas",
    "description": "[Ocorrência Simultânea #31] Você foi deslocado para o local. Há muita fumaça escura saindo por baixo da porta e um forte cheiro de plástico queimado.",
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
    "id": "s32_var",
    "title": "Fumaça no Setor Elétrico",
    "description": "[Ocorrência Simultânea #32] Você foi deslocado para o local. A visibilidade é quase nula e a temperatura está subindo.",
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
  }
];
