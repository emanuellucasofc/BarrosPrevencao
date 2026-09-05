export interface ExamQuestion {
  id: number;
  category: 'NBR 14608' | 'Combate a Incêndio' | 'Primeiros Socorros / APH' | 'Prevenção & Legislação' | 'Produtos Perigosos' | 'Salvamento & Resgate';
  statement: string;
  options: {
    letter: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctOption: 'A' | 'B' | 'C' | 'D';
  explanation: {
    rule: string;
    standard: string;
    details: string;
  };
}

/**
 * Banco completo oficial com 105 questões técnicas de Bombeiro Civil e Primeiros Socorros / APH
 * Barros Prevenção - Base técnica: NBR 14608, NR-23, NR-35, NR-33, Diretrizes AHA e CBMERJ.
 */
export const mockExamQuestions: ExamQuestion[] = [
  {
    "id": 1,
    "category": "Primeiros Socorros / APH",
    "statement": "Durante uma ronda, o Bombeiro Civil encontra uma vítima adulta caída, irresponsiva e sem movimentos respiratórios normais (apenas gasping). Conforme o protocolo atual de Suporte Básico de Vida (SBV/AHA), qual deve ser a primeira conduta após constatar a ausência de pulso?",
    "options": [
      {
        "letter": "A",
        "text": "Iniciar imediatamente compressões torácicas de alta qualidade e solicitar o DEA."
      },
      {
        "letter": "B",
        "text": "Realizar duas ventilações boca a boca de resgate antes de tocar no tórax."
      },
      {
        "letter": "C",
        "text": "Elevar os membros inferiores da vítima e aguardar 5 minutos."
      },
      {
        "letter": "D",
        "text": "Oferecer água e colocar a vítima em posição lateral de segurança."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "rule": "Sequência C-A-B do Suporte Básico de Vida (AHA).",
      "standard": "Diretrizes AHA de RCP / Protocolo CBMERJ",
      "details": "Na PCR confirmada, a prioridade imediata são compressões torácicas precoces para manter a perfusão coronariana e cerebral, além do acionamento rápido do Desfibrilador Externo Automático (DEA)."
    }
  },
  {
    "id": 2,
    "category": "Primeiros Socorros / APH",
    "statement": "Qual é a frequência recomendada de compressões torácicas por minuto durante a Ressuscitação Cardiopulmonar (RCP) em um adulto?",
    "options": [
      {
        "letter": "A",
        "text": "60 a 80 compressões por minuto."
      },
      {
        "letter": "B",
        "text": "100 a 120 compressões por minuto."
      },
      {
        "letter": "C",
        "text": "140 a 160 compressões por minuto."
      },
      {
        "letter": "D",
        "text": "Exatamente 50 compressões por minuto."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Frequência de compressão torácica de alta qualidade.",
      "standard": "Diretrizes Internacionais ILCOR / AHA",
      "details": "A frequência de 100 a 120 compressões/minuto garante fluxo sanguíneo ideal sem comprometer o retorno venoso e o enchimento ventricular entre as compressões."
    }
  },
  {
    "id": 3,
    "category": "Primeiros Socorros / APH",
    "statement": "Qual deve ser a profundidade adequada das compressões torácicas na RCP em uma vítima adulta?",
    "options": [
      {
        "letter": "A",
        "text": "No máximo 2 a 3 centímetros."
      },
      {
        "letter": "B",
        "text": "Pelo menos 5 centímetros, não ultrapassando 6 centímetros."
      },
      {
        "letter": "C",
        "text": "Mais de 8 centímetros para atingir o esterno."
      },
      {
        "letter": "D",
        "text": "Apenas 1 centímetro para evitar fraturas de costela."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Profundidade da compressão no tórax do adulto.",
      "standard": "AHA Guidelines / PHTLS",
      "details": "Comprimir pelo menos 5 cm (2 polegadas), sem exceder 6 cm (2,4 polegadas), permite compressão cardíaca suficiente gerando débito cardíaco adequado com menor risco de lesões torácicas graves."
    }
  },
  {
    "id": 4,
    "category": "Primeiros Socorros / APH",
    "statement": "Na RCP de um adulto com apenas um socorrista e sem via aérea avançada, qual é a relação recomendada entre compressões e ventilações?",
    "options": [
      {
        "letter": "A",
        "text": "15 compressões para 2 ventilações."
      },
      {
        "letter": "B",
        "text": "30 compressões para 2 ventilações."
      },
      {
        "letter": "C",
        "text": "5 compressões para 1 ventilação."
      },
      {
        "letter": "D",
        "text": "50 compressões para 5 ventilações."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Ciclo padrão 30:2 no Suporte Básico de Vida.",
      "standard": "Diretrizes AHA / Protocolo Nacional de APH",
      "details": "No adulto, seja com 1 ou 2 socorristas sem via aérea definitiva, a relação universal é de 30 compressões seguidas por 2 ventilações de 1 segundo cada."
    }
  },
  {
    "id": 5,
    "category": "Primeiros Socorros / APH",
    "statement": "O Desfibrilador Externo Automático (DEA) é programado para indicar choque apenas em quais ritmos de Parada Cardiorrespiratória?",
    "options": [
      {
        "letter": "A",
        "text": "Assistolia e Atividade Elétrica Sem Pulso (AESP)."
      },
      {
        "letter": "B",
        "text": "Fibrilação Ventricular (FV) e Taquicardia Ventricular sem pulso (TV)."
      },
      {
        "letter": "C",
        "text": "Bradicardia sinusal e taquicardia sinusal."
      },
      {
        "letter": "D",
        "text": "Em qualquer ritmo cardíaco, inclusive coração normal."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Ritmos chocáveis na PCR.",
      "standard": "Protocolos de Suporte Básico de Vida / AHA",
      "details": "O DEA atua despolarizando o miocárdio nos ritmos caóticos desorganizados: Fibrilação Ventricular (FV) e Taquicardia Ventricular (TV) sem pulso. Assistolia e AESP NÃO são chocáveis."
    }
  },
  {
    "id": 6,
    "category": "Primeiros Socorros / APH",
    "statement": "Em um restaurante, um cliente apresenta o sinal universal de engasgo (mãos na garganta), sem conseguir falar, tossir ou respirar. Qual conduta deve ser realizada imediatamente?",
    "options": [
      {
        "letter": "A",
        "text": "Oferecer água fria e desferir tapas no topo da cabeça."
      },
      {
        "letter": "B",
        "text": "Manobra de Heimlich (compressões subdiafragmáticas para dentro e para cima)."
      },
      {
        "letter": "C",
        "text": "Realizar varredura digital cega na boca da vítima."
      },
      {
        "letter": "D",
        "text": "Deitar a vítima de bruços e puxar a língua."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Desobstrução de Vias Aéreas por Corpo Estranho (OVACE).",
      "standard": "Diretrizes de Primeiros Socorros / AHA",
      "details": "A Manobra de Heimlich comprime o ar residual nos pulmões gerando uma tosse artificial que expele o corpo estranho. Varredura cega é terminantemente proibida pelo risco de empurrar o objeto."
    }
  },
  {
    "id": 7,
    "category": "Primeiros Socorros / APH",
    "statement": "Qual é o procedimento correto para desobstrução de vias aéreas em um lactente (bebê menor de 1 ano) consciente com engasgo total?",
    "options": [
      {
        "letter": "A",
        "text": "5 golpes no dorso seguidos por 5 compressões torácicas com o bebê apoiado no antebraço e cabeça declive."
      },
      {
        "letter": "B",
        "text": "Manobra de Heimlich tradicional com força total sobre o abdome."
      },
      {
        "letter": "C",
        "text": "Sacudir o bebê vigorosamente segurando pelos tornozelos de cabeça para baixo."
      },
      {
        "letter": "D",
        "text": "Ventilar imediatamente 5 vezes sem checar a via aérea."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "rule": "OVACE em lactentes (< 1 ano).",
      "standard": "Diretrizes PALS / AHA de Pediatria",
      "details": "Em bebês não se faz compressão abdominal para não lesionar o fígado e baço. Alternam-se 5 golpes dorsais interescapulares e 5 compressões torácicas com 2 dedos no esterno."
    }
  },
  {
    "id": 8,
    "category": "Primeiros Socorros / APH",
    "statement": "Ao se deparar com uma hemorragia arterial grave em membro superior, com sangue vermelho rutilante jorrando em pulsos, qual é a conduta prioritária para estancar o sangramento com risco iminente de morte?",
    "options": [
      {
        "letter": "A",
        "text": "Colocar o braço em água fria corrente e aguardar a coagulação."
      },
      {
        "letter": "B",
        "text": "Aplicação imediata de pressão direta e torniquete de extremidade certificado proximal à lesão."
      },
      {
        "letter": "C",
        "text": "Aplicar pó de café sobre a ferida aberta."
      },
      {
        "letter": "D",
        "text": "Fazer apenas curativo oclusivo simples com fita adesiva."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Controle de hemorragias exsanguinantes (Stop the Bleed).",
      "standard": "Protocolo PHTLS 10ª edição / CoTCCC",
      "details": "Hemorragias arteriais podem levar ao choque e óbito em menos de 3 minutos. Pressão direta firme e o uso de torniquete tático homologado salvam vidas no APH."
    }
  },
  {
    "id": 9,
    "category": "Primeiros Socorros / APH",
    "statement": "Em que local anatômico deve ser posicionado o torniquete de extremidade em caso de hemorragia grave no antebraço que não cessa?",
    "options": [
      {
        "letter": "A",
        "text": "Diretamente sobre a articulação do cotovelo."
      },
      {
        "letter": "B",
        "text": "No braço, cerca de 5 a 7 cm acima da lesão (nunca sobre a articulação)."
      },
      {
        "letter": "C",
        "text": "Abaixo da ferida, próximo à mão."
      },
      {
        "letter": "D",
        "text": "No pescoço da vítima para cortar o fluxo geral."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Posicionamento correto do torniquete.",
      "standard": "Protocolo CBMERJ / Diretrizes Stop the Bleed",
      "details": "O torniquete deve ser colocado de 5 a 7 cm proximal ao sangramento, sobre osso único (braço ou coxa), evitando articulações para permitir a oclusão arterial mecânica correta."
    }
  },
  {
    "id": 10,
    "category": "Primeiros Socorros / APH",
    "statement": "Quais são os sinais clínicos clássicos de uma vítima em Estado de Choque Hipovolêmico decorrente de hemorragia intensa?",
    "options": [
      {
        "letter": "A",
        "text": "Pele quente e avermelhada, pulso lento e pressão arterial muito alta."
      },
      {
        "letter": "B",
        "text": "Pele pálida, fria e pegajosa, sudorese, taquicardia (pulso rápido e fraco) e queda de pressão arterial."
      },
      {
        "letter": "C",
        "text": "Febre alta, rigidez de nuca e delírio."
      },
      {
        "letter": "D",
        "text": "Pupilas mióticas e respiração lenta e pausada."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Fisiopatologia do Choque Hipovolêmico.",
      "standard": "PHTLS / Manual de Primeiros Socorros",
      "details": "A perda de volume sanguíneo reduz a oxigenação tecidual. O organismo responde com vasoconstrição periférica (palidez e pele fria) e taquicardia para tentar compensar o débito cardíaco."
    }
  },
  {
    "id": 11,
    "category": "Primeiros Socorros / APH",
    "statement": "Qual das características abaixo descreve com precisão uma Queimadura de Segundo Grau?",
    "options": [
      {
        "letter": "A",
        "text": "Acomete apenas a epiderme com vermelhidão leve sem formação de bolhas."
      },
      {
        "letter": "B",
        "text": "Acomete epiderme e parte da derme, caracterizando-se por dor intensa e presença de flictenas (bolhas d'água)."
      },
      {
        "letter": "C",
        "text": "Destruição total da pele até o osso com ausência completa de sensibilidade no centro."
      },
      {
        "letter": "D",
        "text": "Pele totalmente carbonizada e seca, com ausência de dor local."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Classificação da profundidade das queimaduras.",
      "standard": "Cartilha de Queimaduras do Ministério da Saúde / CBMERJ",
      "details": "A queimadura de 2º grau afeta a epiderme e porções da derme, formando bolhas (flictenas) preenchidas por plasma e terminando em dor excruciante devido à exposição das terminações nervosas."
    }
  },
  {
    "id": 12,
    "category": "Primeiros Socorros / APH",
    "statement": "Qual é o primeiro socorro correto e imediato diante de uma queimadura térmica recente de 1º ou 2º grau?",
    "options": [
      {
        "letter": "A",
        "text": "Aplicar manteiga, pasta de dente ou pó de café sobre a área queimada."
      },
      {
        "letter": "B",
        "text": "Romper todas as bolhas com agulha para drenar o líquido."
      },
      {
        "letter": "C",
        "text": "Resfriar o local com água corrente limpa em temperatura ambiente por cerca de 10 a 20 minutos."
      },
      {
        "letter": "D",
        "text": "Colocar blocos de gelo diretamente na pele até congelar a região."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "rule": "Resfriamento inicial de queimaduras térmicas.",
      "standard": "Sociedade Brasileira de Queimaduras / Protocolos Internacionais",
      "details": "Água limpa corrente em temperatura ambiente interrompe a progressão do calor nos tecidos e alivia a dor. Nunca aplicar gelo (provoca necrose por vasoconstrição) nem produtos caseiros (risco de infecção severa)."
    }
  },
  {
    "id": 13,
    "category": "Primeiros Socorros / APH",
    "statement": "Qual é o mnemônico atualizado adotado no atendimento inicial ao trauma grave no Atendimento Pré-Hospitalar?",
    "options": [
      {
        "letter": "A",
        "text": "S-O-S-R-C"
      },
      {
        "letter": "B",
        "text": "X-A-B-C-D-E"
      },
      {
        "letter": "C",
        "text": "D-O-R-E-S"
      },
      {
        "letter": "D",
        "text": "V-I-T-A-L"
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Sistemática de avaliação primária no trauma.",
      "standard": "PHTLS 9ª e 10ª Edição / Protocolos CBMERJ",
      "details": "X (Exsanguinante / Hemorragias catastróficas), A (Vias aéreas com controle cervical), B (Respiração e ventilação), C (Circulação com controle de hemorragia), D (Disfunção neurológica), E (Exposição e hipotermia)."
    }
  },
  {
    "id": 14,
    "category": "Primeiros Socorros / APH",
    "statement": "Durante a crise convulsiva tônico-clônica generalizada de um funcionário, qual das condutas abaixo é expressamente CORRETA?",
    "options": [
      {
        "letter": "A",
        "text": "Tentar introduzir uma colher ou os dedos na boca do paciente para puxar sua língua."
      },
      {
        "letter": "B",
        "text": "Segurar firmemente os braços e pernas da vítima para conter os movimentos à força."
      },
      {
        "letter": "C",
        "text": "Proteger a cabeça da vítima de impactos, afastar objetos cortantes próximos e lateralizá-la ao término da crise."
      },
      {
        "letter": "D",
        "text": "Jogar água gelada no rosto da vítima e fazê-la cheirar álcool."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "rule": "Manejo seguro da crise convulsiva.",
      "standard": "Liga Brasileira de Epilepsia / Protocolo SAMU",
      "details": "A língua não enrola; colocar objetos na boca provoca traumas dentários e risco de mordedura ao socorrista. Deve-se proteger a cabeça, afrouxar roupas apertadas e lateralizar após a crise para evitar broncoaspiração."
    }
  },
  {
    "id": 15,
    "category": "Primeiros Socorros / APH",
    "statement": "A Escala Pré-Hospitalar de AVC de Cincinnati avalia três parâmetros rápidos para suspeita de Acidente Vascular Cerebral. Quais são eles?",
    "options": [
      {
        "letter": "A",
        "text": "Temperatura corporal, cor da urina e reflexo patelar."
      },
      {
        "letter": "B",
        "text": "Desvio de rima labial (sorriso), queda do braço (fraqueza motora) e fala anormal (arrastada ou confusa)."
      },
      {
        "letter": "C",
        "text": "Visão dupla, dor de garganta e dor nas articulações."
      },
      {
        "letter": "D",
        "text": "Náusea, suor nos pés e sensação de frio nos joelhos."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Escala de Cincinnati para AVC.",
      "standard": "Diretrizes AHA / Protocolo Nacional de Urgência",
      "details": "Pedir para sorrir (assimetria facial), levantar ambos os braços por 10 segundos (fraqueza de um dos lados) e repetir uma frase (fala incompreensível). Um único achado positivo indica 72% de probabilidade de AVC."
    }
  },
  {
    "id": 16,
    "category": "Primeiros Socorros / APH",
    "statement": "Um trabalhador relata dor retroesternal em aperto, de início súbito, que não melhora com repouso e irradia para o braço esquerdo e mandíbula, acompanhada de sudorese fria. Qual é a principal suspeita clínica?",
    "options": [
      {
        "letter": "A",
        "text": "Crise de asma brônquica leve."
      },
      {
        "letter": "B",
        "text": "Infarto Agudo do Miocárdio (Síndrome Coronariana Aguda)."
      },
      {
        "letter": "C",
        "text": "Distensão muscular do trapézio."
      },
      {
        "letter": "D",
        "text": "Apendicite aguda supurada."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Reconhecimento precoce de Infarto Agudo do Miocárdio.",
      "standard": "Sociedade Brasileira de Cardiologia / AHA",
      "details": "A dor em aperto com irradiação para mandíbula e membro superior esquerdo associada a sintomas autonômicos (sudorese fria, palidez, náuseas) é o quadro típico de isquemia miocárdica aguda, exigindo acionamento imediato do SAMU."
    }
  },
  {
    "id": 17,
    "category": "Primeiros Socorros / APH",
    "statement": "Diante de uma vítima de acidente com um objeto empalado (uma barra de ferro cravada na coxa), qual deve ser a conduta do Bombeiro Civil?",
    "options": [
      {
        "letter": "A",
        "text": "Puxar o objeto rapidamente para limpar o ferimento e suturar."
      },
      {
        "letter": "B",
        "text": "Nunca remover o objeto no local; estabilizá-lo com curativos volumosos para evitar movimentação."
      },
      {
        "letter": "C",
        "text": "Girar o objeto em 360 graus para descolar dos tecidos."
      },
      {
        "letter": "D",
        "text": "Bater no objeto com um martelo para terminar de transpassar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Conduta em ferimentos com corpos empalados.",
      "standard": "PHTLS / Protocolo de Resgate Veicular",
      "details": "O objeto empalado pode estar tamponando vasos sanguíneos rompidos. Sua retirada sem suporte cirúrgico provoca hemorragia exsanguinante maciça imediata e choque fatal."
    }
  },
  {
    "id": 18,
    "category": "Primeiros Socorros / APH",
    "statement": "Qual é a conduta correta no atendimento a uma vítima que sofreu amputação traumática de um dos dedos da mão em uma máquina industrial?",
    "options": [
      {
        "letter": "A",
        "text": "Lavar o membro amputado em água quente com sabão em pó e mergulhar em álcool."
      },
      {
        "letter": "B",
        "text": "Colocar o dedo diretamente no gelo sem qualquer proteção plástica."
      },
      {
        "letter": "C",
        "text": "Tratar o coto com curativo compressivo; envolver o dedo em gaze estéril, colocá-lo em saco plástico vedado e este sobre um recipiente com gelo e água."
      },
      {
        "letter": "D",
        "text": "Descartar o dedo amputado no lixo infectante hospitalar."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "rule": "Preservação de segmento corpóreo amputado.",
      "standard": "Manual de APH / Sociedade Brasileira de Cirurgia da Mão",
      "details": "O coto sangrante deve ser protegido e comprimido. O membro amputado nunca entra em contato direto com o gelo (para não queimar e necrosar os tecidos); deve ficar em bolsa estéril resfriada indiretamente."
    }
  },
  {
    "id": 19,
    "category": "Primeiros Socorros / APH",
    "statement": "Em um ferimento torácico aspirativo aberto (pneumotórax aberto), com entrada e saída de ar pelo orifício, qual curativo deve ser aplicado?",
    "options": [
      {
        "letter": "A",
        "text": "Curativo com gesso ortopédico fechado."
      },
      {
        "letter": "B",
        "text": "Curativo de 3 pontas (valvulado), fixado em três lados e deixando um lado livre."
      },
      {
        "letter": "C",
        "text": "Curativo compressivo com faixa elástica apertando as 4 pontas."
      },
      {
        "letter": "D",
        "text": "Colocação de uma rolha de cortiça para vedar completamente o buraco."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Manejo do Pneumotórax Aberto.",
      "standard": "PHTLS / ATLS",
      "details": "O curativo de 3 pontas funciona como válvula unidirecional: ao inspirar, o plástico cola impedindo o ar externo de entrar; ao expirar, a ponta solta abre liberando o ar e sangue acumulados, prevenindo o pneumotórax hipertensivo."
    }
  },
  {
    "id": 20,
    "category": "Primeiros Socorros / APH",
    "statement": "Quando deve ser adotada a Posição Lateral de Segurança (PLS) no atendimento de primeiros socorros?",
    "options": [
      {
        "letter": "A",
        "text": "Em vítimas com suspeita de lesão na coluna cervical ou fraturas graves de bacia."
      },
      {
        "letter": "B",
        "text": "Em vítimas irresponsivas (inconscientes) que estejam respirando normalmente e sem suspeita de trauma."
      },
      {
        "letter": "C",
        "text": "Em vítimas que estão em parada cardiorrespiratória."
      },
      {
        "letter": "D",
        "text": "Em pessoas com parada respiratória aguda."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Indicação da Posição Lateral de Segurança (PLS).",
      "standard": "Diretrizes AHA / Cruz Vermelha Internacional",
      "details": "A PLS evita que a língua relaxada obstrua as vias aéreas superiores e previne a broncoaspiração de secreções e vômito em vítimas clínicas inconscientes que mantêm respiração espontânea eficaz."
    }
  },
  {
    "id": 21,
    "category": "Primeiros Socorros / APH",
    "statement": "Ao atender uma vítima de picada de cobra jararaca em uma área florestal de um condomínio, o que NUNCA se deve fazer nos primeiros socorros?",
    "options": [
      {
        "letter": "A",
        "text": "Fazer torniquete no membro picado, cortar o local e tentar sugar o veneno com a boca."
      },
      {
        "letter": "B",
        "text": "Lavar o local da ferida com água limpa e sabão."
      },
      {
        "letter": "C",
        "text": "Manter a vítima calma e em repouso com o membro nivelado."
      },
      {
        "letter": "D",
        "text": "Transportar a vítima rapidamente para o hospital de referência com soro antiofídico."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "rule": "Atendimento a acidentes ofídicos.",
      "standard": "Manual do Instituto Butantan / Ministério da Saúde",
      "details": "Garrotes/torniquetes concentram o veneno e causam necrose e amputação do membro; cortes e sucção oral provocam infecção bacteriana grave e não removem o veneno absorvido."
    }
  },
  {
    "id": 22,
    "category": "Primeiros Socorros / APH",
    "statement": "Qual é o método correto de abertura de vias aéreas em uma vítima com suspeita de lesão na coluna cervical?",
    "options": [
      {
        "letter": "A",
        "text": "Hiperextensão máxima da cabeça com elevação do queixo."
      },
      {
        "letter": "B",
        "text": "Manobra de anteriorização da mandíbula (Jaw-Thrust) sem estender a cabeça."
      },
      {
        "letter": "C",
        "text": "Girar a cabeça da vítima 90 graus para a esquerda."
      },
      {
        "letter": "D",
        "text": "Flexionar a cabeça para a frente aproximando o queixo do peito."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Abertura de vias aéreas com proteção cervical.",
      "standard": "PHTLS / Protocolo CBMERJ",
      "details": "A manobra de tração da mandíbula (Jaw-Thrust) desloca a mandíbula para frente elevando a base da língua sem qualquer movimentação da coluna cervical, preservando a medula espinhal."
    }
  },
  {
    "id": 23,
    "category": "Primeiros Socorros / APH",
    "statement": "Qual é o primeiro passo absoluto ao ligar o Desfibrilador Externo Automático (DEA) e preparar o paciente?",
    "options": [
      {
        "letter": "A",
        "text": "Chocar o paciente imediatamente sem posicionar as pás."
      },
      {
        "letter": "B",
        "text": "Seguir os comandos de voz do DEA: expor e secar o tórax do paciente e colar as pás adesivas nos locais indicados."
      },
      {
        "letter": "C",
        "text": "Dar duas ventilações rápidas enquanto o aparelho calcula."
      },
      {
        "letter": "D",
        "text": "Segurar firmemente nas mãos do paciente durante a análise do ritmo."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Operação segura do DEA.",
      "standard": "AHA Guidelines / NBR 14608",
      "details": "Assim que o DEA chega, liga-se o aparelho e segue-se a instrução de voz: limpar e secar o tórax, posicionar as pás adesivas (uma abaixo da clavícula direita e outra na ponta das costelas à esquerda) e conectar o cabo."
    }
  },
  {
    "id": 24,
    "category": "Primeiros Socorros / APH",
    "statement": "Durante a análise do ritmo e aplicação do choque pelo DEA, qual comando de segurança obrigatório o operador deve gritar em voz alta?",
    "options": [
      {
        "letter": "A",
        "text": "\"Continuem todos comprimindo o tórax sem parar!\""
      },
      {
        "letter": "B",
        "text": "\"Afastem-se todos! Ninguém encosta na vítima!\""
      },
      {
        "letter": "C",
        "text": "\"Segurem a cabeça da vítima firmemente!\""
      },
      {
        "letter": "D",
        "text": "\"Verifiquem o pulso com os dedos!\""
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Segurança durante a desfibrilação externa.",
      "standard": "Diretrizes AHA de Ressuscitação Cardiopulmonar",
      "details": "Qualquer contato físico com a vítima durante a análise provoca interferência no eletrocardiograma e, durante o choque, descarrega corrente elétrica de alta voltagem no socorrista."
    }
  },
  {
    "id": 25,
    "category": "Primeiros Socorros / APH",
    "statement": "Em caso de entorse de tornozelo ou suspeita de fratura fechada em uma quadra poliesportiva, qual é a conduta inicial recomendada?",
    "options": [
      {
        "letter": "A",
        "text": "Puxar o pé da vítima com força para colocar o osso no lugar."
      },
      {
        "letter": "B",
        "text": "Forçar a vítima a caminhar para testar se há dor."
      },
      {
        "letter": "C",
        "text": "Imobilizar na posição em que se encontra englobando uma articulação acima e uma abaixo da lesão, aplicando compressas frias locais."
      },
      {
        "letter": "D",
        "text": "Aplicar compressas de água fervente sobre a articulação."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "rule": "Princípios de imobilização ortopédica provisória.",
      "standard": "PHTLS / Manual de Primeiros Socorros Cruz Vermelha",
      "details": "Fraturas e luxações nunca devem ser reduzidas por socorristas leigos. Imobiliza-se a articulação proximal e distal na posição encontrada para evitar lesões em feixes vásculo-nervosos."
    }
  },
  {
    "id": 26,
    "category": "Primeiros Socorros / APH",
    "statement": "Em caso de queimadura ocular por produto químico cáustico (ácido ou soda cáustica), qual é a primeira providência no local de trabalho?",
    "options": [
      {
        "letter": "A",
        "text": "Cobrir o olho com pano seco e esperar a ambulância."
      },
      {
        "letter": "B",
        "text": "Lavar os olhos imediatamente em água corrente limpa ou chuveiro lava-olhos por no mínimo 15 a 20 minutos."
      },
      {
        "letter": "C",
        "text": "Pingar gotas de vinagre para neutralizar o produto químico."
      },
      {
        "letter": "D",
        "text": "Esfregar vigorosamente os olhos com as mãos."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Manejo de queimaduras químicas oculares.",
      "standard": "NR-32 / Diretrizes Médicas Oftalmológicas",
      "details": "A irrigação contínua e abundante com água limpa por 15 a 20 minutos remove fisicamente o agente químico e reduz a profundidade da corrosão na córnea, prevenindo a perda irreversível da visão."
    }
  },
  {
    "id": 27,
    "category": "Primeiros Socorros / APH",
    "statement": "O que caracteriza uma parada respiratória isolada em um paciente e qual deve ser a conduta do socorrista enquanto o coração ainda bate?",
    "options": [
      {
        "letter": "A",
        "text": "Vítima sem pulso e sem respiração; iniciar compressões torácicas."
      },
      {
        "letter": "B",
        "text": "Vítima sem respiração espontânea ou apenas gasping, porém com pulso carotídeo palpável; realizar 1 ventilação a cada 5 a 6 segundos."
      },
      {
        "letter": "C",
        "text": "Vítima conversando normalmente; colocar em coma induzido."
      },
      {
        "letter": "D",
        "text": "Vítima com dor torácica; chocar imediatamente com o DEA."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Manejo da parada respiratória isolada com pulso.",
      "standard": "Protocolo AHA de Suporte Básico de Vida",
      "details": "Havendo pulso central palpável, o coração ainda bombeia. Deve-se administrar 1 ventilação eficaz com bolsa-válvula-máscara a cada 5 a 6 segundos (10 a 12 por minuto) e reavaliar o pulso a cada 2 minutos."
    }
  },
  {
    "id": 28,
    "category": "Primeiros Socorros / APH",
    "statement": "Em um desmaio (síncope vasovagal) sem trauma, qual é a posição recomendada para recuperar a perfusão cerebral da vítima?",
    "options": [
      {
        "letter": "A",
        "text": "Colocar a vítima de pé e forçá-la a pular."
      },
      {
        "letter": "B",
        "text": "Deitar a vítima de costas (decúbito dorsal) e elevar suas pernas cerca de 30 cm do solo."
      },
      {
        "letter": "C",
        "text": "Pendurar a vítima pelos braços."
      },
      {
        "letter": "D",
        "text": "Dar tapas no rosto e borrifar perfume no nariz."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Primeiros socorros na síncope.",
      "standard": "Manual de Primeiros Socorros / Cruz Vermelha",
      "details": "A elevação dos membros inferiores em cerca de 30 cm facilita o retorno venoso por gravidade, restabelecendo o fluxo sanguíneo e a oxigenação no cérebro rapidamente."
    }
  },
  {
    "id": 29,
    "category": "Primeiros Socorros / APH",
    "statement": "Qual é o tempo máximo recomendado para interrupção das compressões torácicas durante a troca de socorristas ou análise do DEA?",
    "options": [
      {
        "letter": "A",
        "text": "Até 45 segundos."
      },
      {
        "letter": "B",
        "text": "No máximo 10 segundos."
      },
      {
        "letter": "C",
        "text": "Até 2 minutos inteiros."
      },
      {
        "letter": "D",
        "text": "Não há limite de tempo."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Minimização das interrupções na RCP.",
      "standard": "Diretrizes AHA de Alta Qualidade",
      "details": "A pressão de perfusão coronariana cai a zero rapidamente a cada pausa. Interrupções superiores a 10 segundos reduzem drasticamente as taxas de retorno da circulação espontânea."
    }
  },
  {
    "id": 30,
    "category": "Primeiros Socorros / APH",
    "statement": "Qual é o método padrão para verificar a responsividade de uma pessoa caída no chão?",
    "options": [
      {
        "letter": "A",
        "text": "Chutar a perna da vítima."
      },
      {
        "letter": "B",
        "text": "Tocar firmemente nos dois ombros da vítima e chamar em voz alta: \"Senhor(a), você está bem?\"."
      },
      {
        "letter": "C",
        "text": "Jogar um balde de água no rosto."
      },
      {
        "letter": "D",
        "text": "Apertar o pescoço com as duas mãos."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Verificação da consciência e responsividade.",
      "standard": "Suporte Básico de Vida / AHA",
      "details": "O estímulo tátil e auditivo bilateral e seguro (tocar com firmeza nos dois ombros chamando em tom audível) permite testar a consciência sem agravar lesões de coluna."
    }
  },
  {
    "id": 31,
    "category": "Primeiros Socorros / APH",
    "statement": "Ao presenciar um colega de trabalho sofrendo um choque elétrico em um fio solto de alta tensão, qual é a PRIMEIRA atitude do socorrista?",
    "options": [
      {
        "letter": "A",
        "text": "Puxar o colega imediatamente com as mãos descalças."
      },
      {
        "letter": "B",
        "text": "Garantir a segurança do local desligando a fonte de energia geral antes de tocar na vítima."
      },
      {
        "letter": "C",
        "text": "Jogar água sobre o fio elétrico para resfriar."
      },
      {
        "letter": "D",
        "text": "Pular sobre a vítima para empurrá-la com o corpo."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Segurança da cena em acidentes elétricos.",
      "standard": "NR-10 / Protocolo de Bombeiro Civil",
      "details": "A regra fundamental do socorrista é nunca se tornar uma segunda vítima. Antes de qualquer aproximação, a corrente elétrica deve ser interrompida na chave geral ou disjuntor."
    }
  },
  {
    "id": 32,
    "category": "Primeiros Socorros / APH",
    "statement": "O que deve ser feito em caso de hemorragia nasal comum (epistaxe) sem sinais de fratura facial?",
    "options": [
      {
        "letter": "A",
        "text": "Jogar a cabeça para trás e engolir o sangue."
      },
      {
        "letter": "B",
        "text": "Inclinar a cabeça levemente para a frente e comprimir as narinas com os dedos por 5 a 10 minutos."
      },
      {
        "letter": "C",
        "text": "Deitar de barriga para baixo e assoar o nariz com força."
      },
      {
        "letter": "D",
        "text": "Fazer bochecho com água com sal."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Controle de Epistaxe.",
      "standard": "Manual de Primeiros Socorros / Ministério da Saúde",
      "details": "Inclinar a cabeça para trás faz a vítima engolir sangue provocando náuseas e vômitos. A cabeça deve pender levemente para frente enquanto se comprime o septo nasal."
    }
  },
  {
    "id": 33,
    "category": "Primeiros Socorros / APH",
    "statement": "Qual é o equipamento de proteção individual mínimo que o Bombeiro Civil deve colocar antes de qualquer atendimento de primeiros socorros com sangue visível?",
    "options": [
      {
        "letter": "A",
        "text": "Apenas protetor auricular."
      },
      {
        "letter": "B",
        "text": "Luvas de procedimento descartáveis e óculos de proteção (biossegurança)."
      },
      {
        "letter": "C",
        "text": "Bota de borracha apenas."
      },
      {
        "letter": "D",
        "text": "Nenhum equipamento é necessário em emergências."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Biossegurança e precauções padrão.",
      "standard": "NR-32 / Diretrizes CDC e Ministério da Saúde",
      "details": "O contato com sangue e fluidos biológicos oferece alto risco de transmissão de patógenos (HIV, Hepatite B e C). O uso de luvas e proteção ocular é mandatório."
    }
  },
  {
    "id": 34,
    "category": "Primeiros Socorros / APH",
    "statement": "O que caracteriza a hipotermia acidental e qual é a conduta para reaquecimento da vítima no APH?",
    "options": [
      {
        "letter": "A",
        "text": "Temperatura central abaixo de 35°C; retirar roupas molhadas e aquecer com cobertores ou manta térmica aluminizada."
      },
      {
        "letter": "B",
        "text": "Temperatura acima de 40°C; colocar a vítima no freezer."
      },
      {
        "letter": "C",
        "text": "Pele muito quente e seca; oferecer bebidas destiladas com álcool."
      },
      {
        "letter": "D",
        "text": "Desmaio decorrente de excesso de calor no verão."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "rule": "Manejo de Hipotermia.",
      "standard": "PHTLS / Diretrizes da Cruz Vermelha",
      "details": "A hipotermia ocorre com temperatura corporal < 35°C, levando a arritmias graves e coagulopatia. Deve-se isolar a vítima do vento/chão frio, remover vestimentas úmidas e envolvê-la em manta térmica aluminizada."
    }
  },
  {
    "id": 35,
    "category": "Primeiros Socorros / APH",
    "statement": "Ao realizar a aplicação de um torniquete em membro inferior para estancar um sangramento massivo, o que é OBRIGATÓRIO anotar visivelmente?",
    "options": [
      {
        "letter": "A",
        "text": "O nome dos familiares da vítima."
      },
      {
        "letter": "B",
        "text": "O horário exato da aplicação do torniquete (ex: \"TK 14:35\")."
      },
      {
        "letter": "C",
        "text": "A cor da roupa da vítima."
      },
      {
        "letter": "D",
        "text": "O modelo da ambulância que fará o transporte."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Registro de tempo de aplicação do torniquete.",
      "standard": "Diretrizes Stop the Bleed / PHTLS",
      "details": "O horário exato de colocação do torniquete deve ser marcado no próprio dispositivo ou na testa/pele da vítima para guiar a equipe cirúrgica do hospital quanto ao tempo de isquemia tecidual."
    }
  },
  {
    "id": 36,
    "category": "Combate a Incêndio",
    "statement": "O Tetraedro do Fogo representa os elementos indispensáveis para a ocorrência e sustentação da combustão com chamas. Quais são os 4 elementos?",
    "options": [
      {
        "letter": "A",
        "text": "Água, Vento, Madeira e Oxigênio."
      },
      {
        "letter": "B",
        "text": "Combustível, Comburente (Oxigênio), Calor e Reação Química em Cadeia."
      },
      {
        "letter": "C",
        "text": "Fumaça, Cinzas, Calor e Temperatura."
      },
      {
        "letter": "D",
        "text": "Pressão, Ignição, Densidade e Chama."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Teoria da combustão.",
      "standard": "Manual Técnico de Bombeiros / NBR 14276",
      "details": "O fogo necessita do combustível (o que queima), comburente (geralmente oxigênio), calor (energia de ativação) e a reação em cadeia que torna a combustão autossustentável."
    }
  },
  {
    "id": 37,
    "category": "Combate a Incêndio",
    "statement": "Qual é a definição correta de \"Ponto de Fulgor\" (Flash Point)?",
    "options": [
      {
        "letter": "A",
        "text": "Temperatura em que o combustível queima espontaneamente sem necessidade de chama externa."
      },
      {
        "letter": "B",
        "text": "Menor temperatura na qual um combustível desprende vapores suficientes para queimar em contato com uma chama externa, mas a chama se apaga ao retirar a fonte de calor."
      },
      {
        "letter": "C",
        "text": "Temperatura em que a queima se mantém contínua mesmo retirando a fonte de calor."
      },
      {
        "letter": "D",
        "text": "Ponto máximo de resfriamento da água."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Pontos de temperatura da combustão.",
      "standard": "NBR 14276 / Fundamentos da Combustão",
      "details": "No ponto de fulgor há apenas uma inflamação momentânea (\"flash\") com chama externa, pois a taxa de desprendimento de vapores ainda é insuficiente para manter queima contínua."
    }
  },
  {
    "id": 38,
    "category": "Combate a Incêndio",
    "statement": "Qual é a diferença entre Ponto de Combustão e Ponto de Ignição (Autoignição)?",
    "options": [
      {
        "letter": "A",
        "text": "São sinônimos idênticos para a mesma temperatura."
      },
      {
        "letter": "B",
        "text": "No Ponto de Combustão a queima se mantém com fonte externa; no Ponto de Ignição o combustível queima pelo simples contato com o calor ambiente, sem chama externa."
      },
      {
        "letter": "C",
        "text": "Ponto de ignição ocorre sempre abaixo de zero grau Celsius."
      },
      {
        "letter": "D",
        "text": "Ponto de combustão só se aplica a metais e o de ignição a líquidos."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Diferenciação dos pontos térmicos.",
      "standard": "Manual de Incêndio CBMERJ / NBR 14276",
      "details": "Ponto de ignição (temperatura de autoignição) é a temperatura na qual os vapores do combustível reagem tão rapidamente com o oxigênio que inflamam espontaneamente sem qualquer faísca ou chama externa."
    }
  },
  {
    "id": 39,
    "category": "Combate a Incêndio",
    "statement": "A transferência de calor que ocorre de molécula a molécula através de um corpo sólido (como uma barra de ferro aquecida em uma ponta) é denominada:",
    "options": [
      {
        "letter": "A",
        "text": "Convecção."
      },
      {
        "letter": "B",
        "text": "Condução."
      },
      {
        "letter": "C",
        "text": "Irradiação."
      },
      {
        "letter": "D",
        "text": "Sublimação."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Propagação de calor por condução.",
      "standard": "Física do Fogo / NBR 14276",
      "details": "A condução ocorre pelo contato físico direto entre partículas sólidas. O calor viaja através de tubulações, vigas de aço e paredes metálicas transmitindo o fogo para outros cômodos."
    }
  },
  {
    "id": 40,
    "category": "Combate a Incêndio",
    "statement": "A propagação do calor em edifícios através do movimento ascendente de massas de ar aquecido e gases de fumaça pelas caixas de escadas e poços de elevador ocorre por:",
    "options": [
      {
        "letter": "A",
        "text": "Irradiação."
      },
      {
        "letter": "B",
        "text": "Convecção."
      },
      {
        "letter": "C",
        "text": "Condução."
      },
      {
        "letter": "D",
        "text": "Fissão."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Propagação de calor por convecção.",
      "standard": "Dinâmica de Incêndio / NBR 14276",
      "details": "O ar quente se expande, torna-se menos denso e sobe, transportando calor e fumaça para os andares superiores (efeito chaminé), sendo a principal causa de propagação vertical em edifícios."
    }
  },
  {
    "id": 41,
    "category": "Combate a Incêndio",
    "statement": "Qual é o processo de propagação de calor por meio de ondas eletromagnéticas que se deslocam pelo espaço e dispensam contato material?",
    "options": [
      {
        "letter": "A",
        "text": "Irradiação."
      },
      {
        "letter": "B",
        "text": "Convecção."
      },
      {
        "letter": "C",
        "text": "Condução."
      },
      {
        "letter": "D",
        "text": "Combustão lenta."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "rule": "Propagação de calor por irradiação.",
      "standard": "Física do Fogo / NBR 14276",
      "details": "A irradiação térmica viaja em linha reta através do vácuo ou ar (como a luz solar). É responsável por incendiar casas vizinhas ou materiais expostos ao calor de chamas próximas."
    }
  },
  {
    "id": 42,
    "category": "Combate a Incêndio",
    "statement": "Qual classe de incêndio engloba materiais sólidos como madeira, papel, tecido e borracha, que queimam em superfície e profundidade deixando brasas e cinzas?",
    "options": [
      {
        "letter": "A",
        "text": "Classe A."
      },
      {
        "letter": "B",
        "text": "Classe B."
      },
      {
        "letter": "C",
        "text": "Classe C."
      },
      {
        "letter": "D",
        "text": "Classe D."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "rule": "Classificação dos incêndios - Classe A.",
      "standard": "NBR 15808 / Instrução Técnica CBMERJ",
      "details": "Incêndios Classe A exigem primordialmente o efeito de resfriamento proporcionado pela água para apagar as brasas e o calor retido nas camadas profundas do material."
    }
  },
  {
    "id": 43,
    "category": "Combate a Incêndio",
    "statement": "Incêndios envolvendo líquidos inflamáveis (gasolina, álcool, diesel, solventes) que queimam na superfície sem deixar cinzas pertencem a qual classe?",
    "options": [
      {
        "letter": "A",
        "text": "Classe A."
      },
      {
        "letter": "B",
        "text": "Classe B."
      },
      {
        "letter": "C",
        "text": "Classe C."
      },
      {
        "letter": "D",
        "text": "Classe K."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Classificação dos incêndios - Classe B.",
      "standard": "NBR 15808 / NR-23",
      "details": "Na Classe B queimam apenas os vapores que se desprendem na superfície do líquido. A extinção principal é por abafamento (interrupção do oxigênio) com pó químico, espuma ou CO2."
    }
  },
  {
    "id": 44,
    "category": "Combate a Incêndio",
    "statement": "Um foco de incêndio atinge um transformador e servidores de TI energizados. Qual é a classe do incêndio e qual extintor é TERMINANTEMENTE PROIBIDO?",
    "options": [
      {
        "letter": "A",
        "text": "Classe C; proibido extintor de Água Pressurizada (AP) em jato pleno."
      },
      {
        "letter": "B",
        "text": "Classe A; proibido extintor de Pó Químico Seco."
      },
      {
        "letter": "C",
        "text": "Classe B; proibido extintor de Dióxido de Carbono (CO2)."
      },
      {
        "letter": "D",
        "text": "Classe D; proibido extintor de Halon."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "rule": "Incêndios Classe C e risco elétrico.",
      "standard": "NR-10 / NBR 15808 / CBMERJ",
      "details": "A Classe C compreende equipamentos elétricos energizados. O uso de água em jato contínuo conduz corrente elétrica de alta voltagem diretamente ao operador, causando choque fatal."
    }
  },
  {
    "id": 45,
    "category": "Combate a Incêndio",
    "statement": "A Classe D de incêndio abrange quais tipos de materiais especiais?",
    "options": [
      {
        "letter": "A",
        "text": "Óleos de cozinha e gorduras vegetais em cozinhas industriais."
      },
      {
        "letter": "B",
        "text": "Metais pirofóricos e combustíveis (como magnésio, titânio, zircônio, sódio e potássio)."
      },
      {
        "letter": "C",
        "text": "Gases nobres como hélio e argônio."
      },
      {
        "letter": "D",
        "text": "Fibras têxteis sintéticas comuns."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Classificação dos incêndios - Classe D.",
      "standard": "NBR 15808 / NFPA 10",
      "details": "Metais combustíveis queimam em temperaturas altíssimas e decompõem a água em hidrogênio provocando explosões violentas. Exigem pós químicos especiais Classe D (base de cloreto de sódio)."
    }
  },
  {
    "id": 46,
    "category": "Combate a Incêndio",
    "statement": "A Classe K foi criada para contemplar especificamente qual tipo de incêndio?",
    "options": [
      {
        "letter": "A",
        "text": "Incêndios nucleares e radioativos."
      },
      {
        "letter": "B",
        "text": "Fogo em óleos vegetais e gorduras animais em equipamentos de cozinha comercial (fritadeiras)."
      },
      {
        "letter": "C",
        "text": "Fogo em aeronaves na pista de pouso."
      },
      {
        "letter": "D",
        "text": "Incêndios florestais e de vegetação rasteira."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Classe K e saponificação.",
      "standard": "NBR 15808 / NFPA 10",
      "details": "Óleos e gorduras quentes (Kitchen) atingem altíssimas temperaturas. O extintor de Acetato de Potássio atua por saponificação, criando uma camada espumosa que veda a superfície e resfria o meio."
    }
  },
  {
    "id": 47,
    "category": "Combate a Incêndio",
    "statement": "Qual é o método de extinção que consiste na eliminação ou redução da concentração de oxigênio abaixo de 14% do ambiente?",
    "options": [
      {
        "letter": "A",
        "text": "Resfriamento."
      },
      {
        "letter": "B",
        "text": "Abafamento."
      },
      {
        "letter": "C",
        "text": "Isolamento."
      },
      {
        "letter": "D",
        "text": "Diluição térmica."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Método de extinção por abafamento.",
      "standard": "Manual Técnico de Bombeiros",
      "details": "A combustão com chamas requer oxigênio acima de 14%. O abafamento (usando tampa, terra, cobertores antichama ou gás inerte CO2) interrompe a chegada do comburente extinguindo o fogo."
    }
  },
  {
    "id": 48,
    "category": "Combate a Incêndio",
    "statement": "O método de extinção que consiste em retirar o material combustível que ainda não pegou fogo do caminho das chamas (como fechar a válvula de gás) chama-se:",
    "options": [
      {
        "letter": "A",
        "text": "Abafamento."
      },
      {
        "letter": "B",
        "text": "Isolamento (ou retirada do material)."
      },
      {
        "letter": "C",
        "text": "Resfriamento."
      },
      {
        "letter": "D",
        "text": "Inibição química."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Extinção por isolamento.",
      "standard": "NBR 14276 / CBMERJ",
      "details": "O isolamento atua retirando o combustível da reação, seja fechando registros de alimentação de inflamáveis, abrindo aceiros em florestas ou afastando caixas e móveis em prédios."
    }
  },
  {
    "id": 49,
    "category": "Combate a Incêndio",
    "statement": "Por que o extintor de Dióxido de Carbono (CO2) é amplamente indicado para centrais de telecomunicações e salas de computadores?",
    "options": [
      {
        "letter": "A",
        "text": "Porque molha os servidores mantendo a umidade necessária."
      },
      {
        "letter": "B",
        "text": "Porque é um gás limpo, não condutor de eletricidade e não deixa resíduos sólidos sobre os circuitos eletrônicos."
      },
      {
        "letter": "C",
        "text": "Porque é o mais barato do mercado e não exige recarga periódica."
      },
      {
        "letter": "D",
        "text": "Porque tem cheiro perfumado que mascara a fumaça."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Propriedades do agente extintor CO2.",
      "standard": "NBR 15808 / ABNT",
      "details": "O CO2 apaga por abafamento e leve resfriamento. Como é um gás que sublima e dispersa na atmosfera, ele não é corrosivo nem deixa pós que danificam placas eletrônicas e relés."
    }
  },
  {
    "id": 50,
    "category": "Combate a Incêndio",
    "statement": "Ao utilizar um extintor de CO2, por que o operador deve segurar na manopla isolada do difusor e NUNCA no difusor ou na mangueira diretamente?",
    "options": [
      {
        "letter": "A",
        "text": "Para não riscar a pintura do difusor."
      },
      {
        "letter": "B",
        "text": "Devido à rápida expansão do gás comprimido, o difusor atinge temperaturas próximas a -78°C podendo provocar queimaduras graves por congelamento (geladura) nas mãos."
      },
      {
        "letter": "C",
        "text": "Para evitar choque elétrico gerado pela bateria do extintor."
      },
      {
        "letter": "D",
        "text": "Porque o difusor esquenta a mais de 300°C."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Segurança no manuseio do extintor de CO2.",
      "standard": "Instruções de Operação / NBR 15808",
      "details": "O CO2 sai em estado criogênico (gelo seco) a cerca de -78,5°C. O contato direto da pele com a corneta/difusor causa queimadura grave por frio extremo imediata."
    }
  },
  {
    "id": 51,
    "category": "Combate a Incêndio",
    "statement": "O que caracteriza o fenômeno extremo do \"Flashover\" em um incêndio confinado?",
    "options": [
      {
        "letter": "A",
        "text": "Apagamento repentino do fogo por falta de ar."
      },
      {
        "letter": "B",
        "text": "A ignição quase simultânea e generalizada de todas as superfícies combustíveis presentes no compartimento devido à radiação térmica dos gases no teto."
      },
      {
        "letter": "C",
        "text": "Vazamento lento de água pelos bicos de sprinkler."
      },
      {
        "letter": "D",
        "text": "Inundação do subsolo por esgoto."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Dinâmica do Flashover.",
      "standard": "Manual de Combate a Incêndio Estrutural",
      "details": "O Flashover marca a transição de um fogo em fase de crescimento para a fase plenamente desenvolvida. As temperaturas ultrapassam 600°C e o ambiente torna-se letal para qualquer ser humano sem EPR em segundos."
    }
  },
  {
    "id": 52,
    "category": "Combate a Incêndio",
    "statement": "O fenômeno do \"Backdraft\" ocorre quando:",
    "options": [
      {
        "letter": "A",
        "text": "A água do hidrante acaba repentinamente."
      },
      {
        "letter": "B",
        "text": "Há uma entrada súbita de oxigênio em um ambiente superaquecido que continha excesso de gases combustíveis não queimados e deficiência de ar, gerando uma explosão violenta."
      },
      {
        "letter": "C",
        "text": "Um botijão de GLP congelado é submerso em água fria."
      },
      {
        "letter": "D",
        "text": "A fumaça esfria e se transforma em gelo no piso."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Dinâmica do Backdraft.",
      "standard": "Táticas de Combate a Incêndio CBMERJ / NFPA",
      "details": "Indícios de Backdraft: fumaça densa saindo em pulsos (respirando pelas frestas), vidros enegrecidos e estalando pelo calor, ausência de chamas visíveis. A abertura intempestiva de uma porta causa deflagração explosiva."
    }
  },
  {
    "id": 53,
    "category": "Combate a Incêndio",
    "statement": "Qual é a diferença entre mangueiras de incêndio do Tipo 1 e Tipo 2 conforme a norma ABNT NBR 11861?",
    "options": [
      {
        "letter": "A",
        "text": "Tipo 1 é para edifícios de ocupação residencial; Tipo 2 possui maior resistência à pressão e abrasão, indicada para edifícios comerciais e indústrias."
      },
      {
        "letter": "B",
        "text": "Tipo 1 é feita de ferro e Tipo 2 de borracha pura."
      },
      {
        "letter": "C",
        "text": "Tipo 1 conduz ar e Tipo 2 conduz água."
      },
      {
        "letter": "D",
        "text": "Não há diferença técnica entre os tipos de mangueira."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "rule": "Especificação técnica de mangueiras de incêndio.",
      "standard": "ABNT NBR 11861",
      "details": "Mangueira Tipo 1 (pressão de trabalho de 980 kPa) é para uso residencial leve. Tipo 2 (pressão de 1.370 kPa) possui reforço têxtil superior para edifícios comerciais e áreas industriais."
    }
  },
  {
    "id": 54,
    "category": "Combate a Incêndio",
    "statement": "O que é o \"Golpe de Aríete\" (Water Hammer) em sistemas hidráulicos de combate a incêndio e como o Bombeiro Civil deve evitá-lo?",
    "options": [
      {
        "letter": "A",
        "text": "Uma pancada de fumaça que quebra as janelas do prédio."
      },
      {
        "letter": "B",
        "text": "Uma onda de choque e sobrepressão violenta na tubulação provocada pelo fechamento brusco de esguichos ou válvulas; evita-se abrindo e fechando esguichos sempre de forma lenta e progressiva."
      },
      {
        "letter": "C",
        "text": "A pressão que empurra o bombeiro para trás ao usar a mangueira."
      },
      {
        "letter": "D",
        "text": "O ruído emitido pela bomba de incêndio ao faltar combustível."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Prevenção do Golpe de Aríete na hidráulica.",
      "standard": "Manual Técnico de Hidrantes / CBMERJ",
      "details": "Fechar um esguicho bruscamente faz a energia cinética da coluna de água em movimento bater contra a válvula gerando choque hidráulico capaz de romper mangueiras, conexões e tubulações rígidas."
    }
  },
  {
    "id": 55,
    "category": "Combate a Incêndio",
    "statement": "O que representa o acrônimo B.L.E.V.E. na área de combate a incêndios e emergências com gases?",
    "options": [
      {
        "letter": "A",
        "text": "Boiling Liquid Expanding Vapor Explosion (Explosão de Vapor em Expansão de Líquido em Ebulição)."
      },
      {
        "letter": "B",
        "text": "Basic Level Emergency Ventilation Entry."
      },
      {
        "letter": "C",
        "text": "Bombeiro Líder em Evacuação de Vítimas Especiais."
      },
      {
        "letter": "D",
        "text": "Brigada Legal de Extinção Rápida de Edifícios."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "rule": "Fenômeno de explosão em vasos de pressão.",
      "standard": "Manual de Produtos Perigosos / NFPA",
      "details": "O BLEVE ocorre quando um tanque pressurizado com gás liquefeito (como GLP) é aquecido externamente pelo fogo, a pressão interna sobe, a parede do vaso enfraquece pelo calor e rompe-se catastroficamente."
    }
  },
  {
    "id": 56,
    "category": "Combate a Incêndio",
    "statement": "Qual é o componente do sistema de hidrantes predial onde as mangueiras são acopladas por engate rápido tipo Storz?",
    "options": [
      {
        "letter": "A",
        "text": "Válvula de retenção."
      },
      {
        "letter": "B",
        "text": "Válvula angular tipo globo com adaptador Storz."
      },
      {
        "letter": "C",
        "text": "Bocal de recalque da calçada."
      },
      {
        "letter": "D",
        "text": "Pressostato."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Componentes do abrigo de hidrante.",
      "standard": "NBR 13714 (Sistemas de hidrantes e mangotinhos)",
      "details": "No interior do abrigo encontra-se a válvula globo angular com rosca e o adaptador de engate rápido Storz (geralmente de 1½\" ou 2½\"), permitindo conexão de mangueira com um quarto de volta."
    }
  },
  {
    "id": 57,
    "category": "Combate a Incêndio",
    "statement": "Onde se localiza o \"Registro de Recalque\" de um sistema de combate a incêndio predial e qual é a sua função principal?",
    "options": [
      {
        "letter": "A",
        "text": "No teto da caixa d'água para encher a piscina."
      },
      {
        "letter": "B",
        "text": "Na calçada ou fachada da edificação, permitindo que as viaturas do Corpo de Bombeiros injetem água na rede predial ou retirem água da reserva técnica."
      },
      {
        "letter": "C",
        "text": "Dentro da sala de comando do gerador."
      },
      {
        "letter": "D",
        "text": "No fundo do poço do elevador."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Registro de Recalque da edificação.",
      "standard": "NBR 13714 / Legislação CBMERJ",
      "details": "O recalque da calçada permite que a viatura dos Bombeiros Militares bombeie água externa para pressurizar os hidrantes e sprinklers do prédio durante um grande incêndio."
    }
  },
  {
    "id": 58,
    "category": "Combate a Incêndio",
    "statement": "O extintor portátil de Pó Químico Seco (PQS) do tipo ABC utiliza qual princípio ativo para combater as três classes de fogo?",
    "options": [
      {
        "letter": "A",
        "text": "Bicarbonato de sódio."
      },
      {
        "letter": "B",
        "text": "Fosfato Monoamônico."
      },
      {
        "letter": "C",
        "text": "Ácido sulfúrico concentrado."
      },
      {
        "letter": "D",
        "text": "Cloreto de potássio."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Agente extintor ABC.",
      "standard": "NBR 15808",
      "details": "O fosfato monoamônico funde-se ao entrar em contato com materiais sólidos da Classe A criando uma película vitrificada que isola o oxigênio, além de quebrar a reação em cadeia nas classes B e C."
    }
  },
  {
    "id": 59,
    "category": "Combate a Incêndio",
    "statement": "Ao operar um extintor portátil para extinguir um princípio de incêndio, para onde o jato do agente extintor deve ser direcionado?",
    "options": [
      {
        "letter": "A",
        "text": "Para o topo das chamas na fumaça."
      },
      {
        "letter": "B",
        "text": "Para a base do fogo, realizando movimento em leque (varredura)."
      },
      {
        "letter": "C",
        "text": "Para cima, deixando o pó cair como chuva."
      },
      {
        "letter": "D",
        "text": "Atrás do operador para protegê-lo."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Técnica correta de ataque com extintor.",
      "standard": "NBR 14276 / Procedimento Operacional",
      "details": "O calor e o combustível em queima encontram-se na base do fogo. Jogar o agente nas chamas superiores é ineficaz e desperdiça a carga do extintor sem interromper a queima."
    }
  },
  {
    "id": 60,
    "category": "Combate a Incêndio",
    "statement": "Qual é a posição em relação ao vento que o Bombeiro Civil deve adotar ao combater um foco de incêndio em área aberta com extintores?",
    "options": [
      {
        "letter": "A",
        "text": "Contra o vento, para que o vento traga o ar fresco."
      },
      {
        "letter": "B",
        "text": "A favor do vento (vento pelas costas), para que o vento empurre as chamas, o calor e o agente extintor na direção do fogo."
      },
      {
        "letter": "C",
        "text": "Exatamente perpendicular girando em círculos."
      },
      {
        "letter": "D",
        "text": "A posição do vento não tem qualquer relevância operacional."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Posicionamento tático contra o vento.",
      "standard": "Manual Básico de Combate a Incêndio",
      "details": "Ficar contra o vento projeta calor, fumaça tóxica e o próprio pó químico nos olhos do bombeiro. Com o vento nas costas, o operador tem segurança visual e maior alcance do jato."
    }
  },
  {
    "id": 61,
    "category": "Combate a Incêndio",
    "statement": "Qual das alternativas descreve corretamente a capacidade extintora indicada em um rótulo de extintor (ex: 2-A:20-B:C)?",
    "options": [
      {
        "letter": "A",
        "text": "O número de dias de validade e o peso do cilindro."
      },
      {
        "letter": "B",
        "text": "O índice padronizado em ensaio normativo que mede o poder de extinção do aparelho para focos de Classe A e Classe B, e sua aptidão para Classe C."
      },
      {
        "letter": "C",
        "text": "A quantidade de bombeiros necessários para carregá-lo."
      },
      {
        "letter": "D",
        "text": "O número da sala onde o extintor deve ficar alocado."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Conceito de Capacidade Extintora.",
      "standard": "ABNT NBR 15808",
      "details": "A capacidade extintora certifica a eficiência real do extintor em testes de fogo padronizados com gradis de madeira (para A) e tanques de heptano (para B). O \"C\" atesta que não conduz eletricidade."
    }
  },
  {
    "id": 62,
    "category": "Combate a Incêndio",
    "statement": "O que significa a Reserva Técnica de Incêndio (RTI) presente em um reservatório de água predial?",
    "options": [
      {
        "letter": "A",
        "text": "Volume de água reservado para lavagem de garagens e rega de jardins."
      },
      {
        "letter": "B",
        "text": "Volume mínimo de água garantido e exclusivo para alimentar o sistema de combate a incêndio (hidrantes e sprinklers), não podendo ser consumido pelo uso comum predial."
      },
      {
        "letter": "C",
        "text": "Água descartada dos vasos sanitários."
      },
      {
        "letter": "D",
        "text": "Água engarrafada mantida na recepção."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Reserva Técnica de Incêndio (RTI).",
      "standard": "NBR 13714 / Código de Segurança CBMERJ",
      "details": "A tubulação de consumo diário é instalada em cota superior à da tomada de incêndio, garantindo que mesmo se a água do prédio acabar totalmente, o volume de combate a incêndio esteja 100% preservado."
    }
  },
  {
    "id": 63,
    "category": "Combate a Incêndio",
    "statement": "Em um sistema de chuveiros automáticos (Sprinklers), o que provoca a abertura do bico e liberação de água?",
    "options": [
      {
        "letter": "A",
        "text": "O som estridente da sirene de alarme."
      },
      {
        "letter": "B",
        "text": "O rompimento de uma ampola de vidro termossensível ou fusão de elemento metálico devido à elevação de temperatura gerada pelo fogo."
      },
      {
        "letter": "C",
        "text": "Um comando manual enviado pelo porteiro do condomínio."
      },
      {
        "letter": "D",
        "text": "A presença de qualquer quantidade de poeira comum no ar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Funcionamento de Sprinklers.",
      "standard": "NBR 10897 (Sistemas de proteção contra incêndio por chuveiros automáticos)",
      "details": "A ampola contém um líquido com coeficiente de dilatação térmica que expande e rompe o vidro na temperatura pré-determinada (ex: vermelha a 68°C), liberando o jato de água que atinge o defletor."
    }
  },
  {
    "id": 64,
    "category": "Combate a Incêndio",
    "statement": "Ao avançar com uma linha de mangueira pressurizada em um corredor enfumaçado, qual é a postura e técnica correta de progressão da dupla de bombeiros?",
    "options": [
      {
        "letter": "A",
        "text": "Avançar correndo em pé com o esguicho totalmente fechado."
      },
      {
        "letter": "B",
        "text": "Progredir agachados ou rastejando, mantendo contato físico e testando a temperatura das portas antes de abrir."
      },
      {
        "letter": "C",
        "text": "Subir pelas paredes e andar de costas sem comunicação."
      },
      {
        "letter": "D",
        "text": "Um bombeiro empurra o outro para frente à força."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Progressão tática em ambientes confinados.",
      "standard": "Manual de Combate a Incêndio Estrutural",
      "details": "Junto ao piso o ar é mais fresco, a temperatura é menor e a visibilidade é melhor (plano neutro). A dupla deve manter contato constante e testar portas com o dorso da mão protegida por luva."
    }
  },
  {
    "id": 65,
    "category": "Combate a Incêndio",
    "statement": "Qual é o fenômeno denominado \"Rollover\" em um incêndio compartimentado?",
    "options": [
      {
        "letter": "A",
        "text": "A queima de gases combustíveis acumulados na camada superior (teto), onde línguas de fogo correm pelo forro."
      },
      {
        "letter": "B",
        "text": "O colapso da laje de concreto."
      },
      {
        "letter": "C",
        "text": "A água da mangueira congelando no ar."
      },
      {
        "letter": "D",
        "text": "O capotamento de uma viatura de bombeiros."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "rule": "Dinâmica do Rollover.",
      "standard": "Comportamento do Fogo Compartimentado",
      "details": "O Rollover é um sinal de alerta iminente de Flashover: os gases quentes no teto atingem sua faixa de inflamabilidade e produzem chamas que rolam velozmente sob o teto da edificação."
    }
  },
  {
    "id": 66,
    "category": "NBR 14608",
    "statement": "Conforme a norma ABNT NBR 14608, qual é o objetivo primordial da presença do Bombeiro Civil nas instalações de uma empresa ou evento?",
    "options": [
      {
        "letter": "A",
        "text": "Substituir a polícia militar na segurança pública das ruas."
      },
      {
        "letter": "B",
        "text": "Proteger a vida, o meio ambiente e o patrimônio por meio de ações permanentes de prevenção e pronto atendimento inicial a emergências."
      },
      {
        "letter": "C",
        "text": "Aplicar multas pecuniárias aos funcionários que chegam atrasados."
      },
      {
        "letter": "D",
        "text": "Fazer o conserto da rede elétrica da empresa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Missão e escopo do Bombeiro Civil.",
      "standard": "ABNT NBR 14608",
      "details": "O Bombeiro Civil atua como profissional qualificado dedicado à prevenção diária, inspeções de equipamentos, treinamento de brigadistas e primeira resposta qualificada em incidentes."
    }
  },
  {
    "id": 67,
    "category": "NBR 14608",
    "statement": "Qual é a regra mandatória de segurança quanto às portas corta-fogo instaladas em caixas de escadas de emergência?",
    "options": [
      {
        "letter": "A",
        "text": "Devem permanecer trancadas com cadeado e chave durante todo o expediente."
      },
      {
        "letter": "B",
        "text": "Devem permanecer sempre fechadas (com dispositivo de mola regulado), nunca trancadas e com abertura no sentido da rota de fuga."
      },
      {
        "letter": "C",
        "text": "Devem ser mantidas permanentemente abertas com calços de madeira para ventilar a escada."
      },
      {
        "letter": "D",
        "text": "Podem ser obstruídas por armários desde que haja extintor perto."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Operação de Portas Corta-Fogo.",
      "standard": "ABNT NBR 11742 / NBR 9077",
      "details": "A porta corta-fogo estanca a passagem de fumaça tóxica e calor para a escada enclausurada. Se calçada aberta ou trancada, anula a rota de fuga e provoca asfixia de quem tenta evacuar o prédio."
    }
  },
  {
    "id": 68,
    "category": "NBR 14608",
    "statement": "Durante a ronda diária de segurança, o Bombeiro Civil identifica caixas de papelão empilhadas em frente a um hidrante predial. Qual deve ser a sua atitude imediata?",
    "options": [
      {
        "letter": "A",
        "text": "Ignorar o fato e voltar para a sala de descanso."
      },
      {
        "letter": "B",
        "text": "Providenciar a imediata desobstrução do hidrante e registrar a não conformidade no relatório diário de ronda."
      },
      {
        "letter": "C",
        "text": "Aguardar o próximo plantonista no dia seguinte para resolver."
      },
      {
        "letter": "D",
        "text": "Esconder a mangueira dentro da caixa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Garantia de desobstrução dos sistemas de emergência.",
      "standard": "NBR 14608 / NR-23",
      "details": "Equipamentos de combate a incêndio e rotas de fuga devem estar 100% desimpedidos e visíveis a qualquer momento. Em emergência, cada segundo perdido removendo obstáculos custa vidas."
    }
  },
  {
    "id": 69,
    "category": "NBR 14608",
    "statement": "Qual é a finalidade principal do Plano de Emergência contra Incêndio (PECI) em uma planta industrial ou condomínio comercial?",
    "options": [
      {
        "letter": "A",
        "text": "Servir apenas como documento decorativo para passar na vistoria."
      },
      {
        "letter": "B",
        "text": "Padronizar ações preventivas e definir procedimentos operacionais de escape, alarme, combate inicial e socorro médico para toda a população da edificação."
      },
      {
        "letter": "C",
        "text": "Calcular o imposto predial urbano."
      },
      {
        "letter": "D",
        "text": "Definir os horários de almoço dos funcionários."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Importância do Plano de Emergência.",
      "standard": "ABNT NBR 15219 (Plano de emergência contra incêndio)",
      "details": "O plano estabelece rotas de abandono, atribuições dos brigadistas, pontos de encontro externos, sistema de comunicação e procedimentos de corte de energia em sinistros."
    }
  },
  {
    "id": 70,
    "category": "NBR 14608",
    "statement": "Ao soar o alarme geral de incêndio de uma edificação comercial de 10 andares, qual orientação os ocupantes NUNCA devem seguir durante a evacuação?",
    "options": [
      {
        "letter": "A",
        "text": "Utilizar as escadas de emergência mantendo a calma e segurando no corrimão."
      },
      {
        "letter": "B",
        "text": "Utilizar os elevadores para descer mais rápido."
      },
      {
        "letter": "C",
        "text": "Dirigir-se ao Ponto de Encontro externo pré-determinado."
      },
      {
        "letter": "D",
        "text": "Não voltar para buscar objetos pessoais deixados para trás."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Proibição de elevadores em sinistros de incêndio.",
      "standard": "NBR 9077 / Instruções CBMERJ",
      "details": "Elevadores não devem ser usados em incêndios: o calor queima cabos elétricos provocando paradas entre andares, e os poços atuam como chaminés acumulando fumaça asfixiante e calor extremo."
    }
  },
  {
    "id": 71,
    "category": "NBR 14608",
    "statement": "O que é o \"Ponto de Encontro\" (Assembly Point) em um plano de abandono de emergência?",
    "options": [
      {
        "letter": "A",
        "text": "Uma sala fechada no subsolo da edificação."
      },
      {
        "letter": "B",
        "text": "Um local externo seguro, arejado e fora do raio de risco da edificação, onde os ocupantes se concentram para conferência de chamada e triagem."
      },
      {
        "letter": "C",
        "text": "A cozinha da empresa."
      },
      {
        "letter": "D",
        "text": "A caixa de escada enclausurada do 5º andar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Conceito de Ponto de Encontro.",
      "standard": "NBR 15219",
      "details": "O ponto de encontro seguro permite aos líderes de brigada e bombeiros civis contar os ocupantes evacuados e identificar com exatidão se alguém ainda está preso no interior do prédio."
    }
  },
  {
    "id": 72,
    "category": "NBR 14608",
    "statement": "No método de triagem de múltiplas vítimas denominado START (Simple Triage And Rapid Treatment), qual cor de lona/fita é atribuída a uma vítima com risco de morte imediato (prioridade máxima de transporte)?",
    "options": [
      {
        "letter": "A",
        "text": "Verde."
      },
      {
        "letter": "B",
        "text": "Amarelo."
      },
      {
        "letter": "C",
        "text": "Vermelho."
      },
      {
        "letter": "D",
        "text": "Preto."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "rule": "Método de Triagem START em desastres.",
      "standard": "Protocolo de Resgate e Atendimento a Múltiplas Vítimas",
      "details": "Vermelho (Prioridade 1 - Imediata): respiração > 30 rpm, ausência de pulso radial ou não obedece a comandos simples; Amarelo (Prioridade 2 - Urgente); Verde (Leves / deambulam); Preto (Óbito)."
    }
  },
  {
    "id": 73,
    "category": "NBR 14608",
    "statement": "Ao realizar a inspeção visual diária em um extintor de pó químico com manômetro indicador de pressão, onde deve estar posicionado o ponteiro?",
    "options": [
      {
        "letter": "A",
        "text": "Na faixa vermelha do lado esquerdo (despressurizado)."
      },
      {
        "letter": "B",
        "text": "Na faixa verde central (pressão de trabalho adequada)."
      },
      {
        "letter": "C",
        "text": "Na faixa vermelha do lado direito (sobrepressão)."
      },
      {
        "letter": "D",
        "text": "Tanto faz a posição do ponteiro."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Inspeção de extintores pressurizados.",
      "standard": "ABNT NBR 12962 / Portaria INMETRO",
      "details": "O ponteiro deve repousar rigorosamente na faixa verde. Se estiver à esquerda, o gás expelente vazou e o extintor não funcionará; se à direita, há risco de sobrepressão."
    }
  },
  {
    "id": 74,
    "category": "NBR 14608",
    "statement": "O que o Bombeiro Civil deve fazer ao constatar que o lacre de um extintor foi violado ou rompido?",
    "options": [
      {
        "letter": "A",
        "text": "Amarrar um pedaço de barbante e fingir que está novo."
      },
      {
        "letter": "B",
        "text": "Retirar imediatamente o aparelho de serviço, providenciar substituto com capacidade compatível e encaminhar para manutenção credenciada pelo INMETRO."
      },
      {
        "letter": "C",
        "text": "Pintar o extintor com tinta amarela."
      },
      {
        "letter": "D",
        "text": "Deixar no local até o vencimento da etiqueta de papel."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Manutenção de extintores violados.",
      "standard": "ABNT NBR 12962",
      "details": "Lacre rompido indica que o extintor pode ter sido usado parcialmente, perdendo pressão e estanqueidade. Nunca se mantém extintor violado sem recarga e teste técnico formal."
    }
  },
  {
    "id": 75,
    "category": "NBR 14608",
    "statement": "Na radiocomunicação de emergência do Bombeiro Civil, o que significa o código \"QAP\" na tabela internacional do Código Q?",
    "options": [
      {
        "letter": "A",
        "text": "\"Estou indo almoçar.\""
      },
      {
        "letter": "B",
        "text": "\"Na escuta / Permaneça na escuta / Pronto para receber mensagens.\""
      },
      {
        "letter": "C",
        "text": "\"Houve uma explosão.\""
      },
      {
        "letter": "D",
        "text": "\"Desligue o rádio agora.\""
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Comunicação padronizada por rádio (Código Q).",
      "standard": "Procedimentos Operacionais de Radiocomunicação",
      "details": "QAP significa \"Permaneça na escuta\" ou \"Estou na escuta\". QSL = \"Compreendido/Confirmado\"; QTH = \"Localização/Endereço\"; TKS = \"Obrigado\"."
    }
  },
  {
    "id": 76,
    "category": "NBR 14608",
    "statement": "Qual é o papel do Bombeiro Civil na relação com a Brigada de Incêndio voluntária da empresa (formada por funcionários)?",
    "options": [
      {
        "letter": "A",
        "text": "Substituir todos os funcionários e mandar a brigada embora."
      },
      {
        "letter": "B",
        "text": "Auxiliar no treinamento contínuo, conduzir simulados e liderar a equipe de brigadistas na resposta inicial a emergências."
      },
      {
        "letter": "C",
        "text": "Não manter qualquer contato com os brigadistas."
      },
      {
        "letter": "D",
        "text": "Fiscalizar a pontualidade no trabalho dos brigadistas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Integração Bombeiro Civil e Brigada de Incêndio.",
      "standard": "ABNT NBR 14276 / NBR 14608",
      "details": "O Bombeiro Civil é o profissional técnico dedicado que atua como elo de capacitação e liderança operacional dos brigadistas voluntários durante as rotinas preventivas e de combate."
    }
  },
  {
    "id": 77,
    "category": "NBR 14608",
    "statement": "Em caso de chegada das viaturas do Corpo de Bombeiros Militar ao local de um sinistro na empresa, qual é a conduta do Bombeiro Civil?",
    "options": [
      {
        "letter": "A",
        "text": "Impedir a entrada dos Bombeiros Militares alegando propriedade privada."
      },
      {
        "letter": "B",
        "text": "Apresentar-se imediatamente ao Comandante da Operação militar, repassar todas as informações do sinistro (local exato, vítimas, riscos, cortes de energia) e colocar-se como guia de apoio à disposição."
      },
      {
        "letter": "C",
        "text": "Ir embora para casa pois o serviço acabou."
      },
      {
        "letter": "D",
        "text": "Disputar a liderança do combate com os militares."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Passagem de comando para o Corpo de Bombeiros Militar.",
      "standard": "Lei Federal 11.901/2009 / NBR 14608",
      "details": "O Corpo de Bombeiros Militar assume o comando operacional da ocorrência pública. O Bombeiro Civil fornece dados vitais da planta predial, sistemas hidráulicos e presença de produtos perigosos."
    }
  },
  {
    "id": 78,
    "category": "NBR 14608",
    "statement": "Qual é a periodicidade mínima recomendada para a realização de exercícios simulados de abandono de área em edificações com plano de emergência?",
    "options": [
      {
        "letter": "A",
        "text": "A cada 10 anos."
      },
      {
        "letter": "B",
        "text": "No mínimo uma vez ao ano (anual)."
      },
      {
        "letter": "C",
        "text": "Apenas quando houver um incêndio de verdade."
      },
      {
        "letter": "D",
        "text": "A cada 15 dias."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Periodicidade de simulados de abandono.",
      "standard": "ABNT NBR 15219 / Instruções Técnicas CBMERJ",
      "details": "A NBR 15219 preconiza que exercícios simulados gerais de evacuação de área devem ocorrer no mínimo anualmente para avaliar o tempo de resposta e corrigir falhas comportamentais dos ocupantes."
    }
  },
  {
    "id": 79,
    "category": "NBR 14608",
    "statement": "Qual das seguintes informações é primordial constar no \"Livro de Ocorrências / Livro Ata\" ao final do plantão do Bombeiro Civil?",
    "options": [
      {
        "letter": "A",
        "text": "O cardápio das refeições consumidas pela equipe."
      },
      {
        "letter": "B",
        "text": "Todas as anomalias identificadas, equipamentos avariados, chamados atendidos, testes realizados e o estado dos sistemas de combate a incêndio."
      },
      {
        "letter": "C",
        "text": "Opiniões políticas e pessoais sobre a administração."
      },
      {
        "letter": "D",
        "text": "Apenas a assinatura sem texto."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Registro formal de ocorrências e rondas.",
      "standard": "NBR 14608 / Procedimentos Operacionais Padrão",
      "details": "O livro ata é um documento formal com valor jurídico em auditorias e investigações de sinistros, atestando que a prevenção foi executada e quais irregularidades foram notificadas à administração."
    }
  },
  {
    "id": 80,
    "category": "NBR 14608",
    "statement": "Em locais com grande aglomeração de público (como casas de shows e teatros), qual equipamento de abertura de portas de emergência é obrigatório por norma?",
    "options": [
      {
        "letter": "A",
        "text": "Fechadura biométrica eletrônica."
      },
      {
        "letter": "B",
        "text": "Barra antipânico acionada por pressão horizontal."
      },
      {
        "letter": "C",
        "text": "Corrente de aço com cadeado náutico."
      },
      {
        "letter": "D",
        "text": "Trinco manual embutido no topo da porta."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Exigência de Barras Antipânico.",
      "standard": "ABNT NBR 11785 / NBR 9077",
      "details": "A barra antipânico abre a porta instantaneamente mediante simples pressão do corpo da multidão em fuga no sentido de escape, prevenindo esmagamentos trágicos contra portas trancadas."
    }
  },
  {
    "id": 81,
    "category": "Prevenção & Legislação",
    "statement": "A Lei Federal nº 11.901/2009 dispõe sobre a profissão de Bombeiro Civil. De acordo com o Art. 5º desta lei, qual é a jornada máxima semanal de trabalho permitida?",
    "options": [
      {
        "letter": "A",
        "text": "44 horas semanais."
      },
      {
        "letter": "B",
        "text": "36 horas semanais."
      },
      {
        "letter": "C",
        "text": "40 horas semanais."
      },
      {
        "letter": "D",
        "text": "60 horas semanais."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Jornada legal do Bombeiro Civil.",
      "standard": "Art. 5º da Lei Federal nº 11.901/2009",
      "details": "A jornada do Bombeiro Civil é especial e fixada por lei em 36 horas semanais, cumprida tipicamente em escala de 12 horas de trabalho por 36 horas de descanso."
    }
  },
  {
    "id": 82,
    "category": "Prevenção & Legislação",
    "statement": "Qual é o percentual do adicional de periculosidade assegurado por lei ao Bombeiro Civil sobre o seu salário base?",
    "options": [
      {
        "letter": "A",
        "text": "10% sobre o salário mínimo."
      },
      {
        "letter": "B",
        "text": "30% sobre o salário mensal sem os acréscimos resultantes de gratificações ou prêmios."
      },
      {
        "letter": "C",
        "text": "50% do valor total."
      },
      {
        "letter": "D",
        "text": "20% apenas se houver incêndio no mês."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Adicional de periculosidade do Bombeiro Civil.",
      "standard": "Art. 6º, III da Lei Federal nº 11.901/2009",
      "details": "O Bombeiro Civil tem direito a adicional de periculosidade de 30% sobre o seu salário base devido à exposição constante aos riscos inerentes à sua atividade profissional de emergência."
    }
  },
  {
    "id": 83,
    "category": "Prevenção & Legislação",
    "statement": "Em relação aos uniformes utilizados pelos Bombeiros Civis, qual restrição legal é estabelecida pela legislação brasileira?",
    "options": [
      {
        "letter": "A",
        "text": "Devem ser obrigatoriamente idênticos aos dos Corpos de Bombeiros Militares."
      },
      {
        "letter": "B",
        "text": "Não podem ser semelhantes aos usados pelas Forças Armadas, Forças Policiais e Corpos de Bombeiros Militares, para não induzir o público a engano."
      },
      {
        "letter": "C",
        "text": "É obrigatório usar gravata e terno formal em todas as rondas."
      },
      {
        "letter": "D",
        "text": "Não há qualquer regra sobre uniformes."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Diferenciação visual de uniformes civis e militares.",
      "standard": "Lei Federal 11.901/2009 e Portarias Militares Estaduais",
      "details": "O uniforme do Bombeiro Civil deve conter clara identificação com a denominação \"Bombeiro Civil\" e não pode copiar padrões camuflados ou brasões exclusivos das forças militares públicas."
    }
  },
  {
    "id": 84,
    "category": "Prevenção & Legislação",
    "statement": "A Norma Regulamentadora NR-23 do Ministério do Trabalho e Emprego estabelece quais premissas básicas para todas as empresas?",
    "options": [
      {
        "letter": "A",
        "text": "Apenas a obrigatoriedade de ter seguro contra incêndio residencial."
      },
      {
        "letter": "B",
        "text": "Que todos os empregadores devem adotar medidas de prevenção contra incêndios, saídas de emergência desobstruídas, sinalização e capacitação de trabalhadores."
      },
      {
        "letter": "C",
        "text": "Proibição de extintores portáteis em ambientes de escritório."
      },
      {
        "letter": "D",
        "text": "Permissão para fumar livremente em depósitos de inflamáveis."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Obrigações da NR-23.",
      "standard": "NR-23 (Proteção contra Incêndios nos Locais de Trabalho)",
      "details": "A NR-23 exige que as empresas mantenham sistemas de detecção, equipamentos de combate operacionais, rotas de saída livres e equipes treinadas para evacuação imediata."
    }
  },
  {
    "id": 85,
    "category": "Prevenção & Legislação",
    "statement": "Segundo a norma ABNT NBR 13434, qual propriedade é obrigatória para as placas de sinalização de rotas de fuga e saídas de emergência?",
    "options": [
      {
        "letter": "A",
        "text": "Devem ser pintadas com tinta dourada brilhante."
      },
      {
        "letter": "B",
        "text": "Devem possuir efeito fotoluminescente (armazenar luz e brilhar no escuro em caso de falta de energia)."
      },
      {
        "letter": "C",
        "text": "Devem ser ligadas na tomada comum de 110V com lâmpadas incandescentes."
      },
      {
        "letter": "D",
        "text": "Devem ser de papelão descartável."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Sinalização fotoluminescente de segurança.",
      "standard": "ABNT NBR 13434 / Instrução Técnica CBMERJ",
      "details": "Em caso de sinistro, a energia elétrica geral costuma ser cortada. A fotoluminescência assegura que as placas de rotas de fuga e equipamentos continuem visíveis e brilhando na escuridão total."
    }
  },
  {
    "id": 86,
    "category": "Prevenção & Legislação",
    "statement": "Qual é a demarcação de piso obrigatória sob os extintores de incêndio instalados em áreas industriais e garagens?",
    "options": [
      {
        "letter": "A",
        "text": "Uma pintura azul clara de meio metro."
      },
      {
        "letter": "B",
        "text": "Uma área quadrada de 1,0 m x 1,0 m pintada em vermelho com bordas amarelas de 15 cm, que deve permanecer permanentemente desobstruída."
      },
      {
        "letter": "C",
        "text": "Desenho de chamas em preto e cinza."
      },
      {
        "letter": "D",
        "text": "Não existe demarcação de piso por norma."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Demarcação de solo para equipamentos de combate.",
      "standard": "NBR 12693 / Instruções Técnicas dos Corpos de Bombeiros",
      "details": "A pintura em vermelho e amarelo no solo alerta visualmente para que veículos, caixas e materiais nunca sejam estacionados ou depositados bloqueando o acesso ao extintor."
    }
  },
  {
    "id": 87,
    "category": "Prevenção & Legislação",
    "statement": "Qual é a periodicidade máxima para a realização do Teste Hidrostático em cilindros de extintores de incêndio portáteis conforme as normas do INMETRO?",
    "options": [
      {
        "letter": "A",
        "text": "A cada 6 meses."
      },
      {
        "letter": "B",
        "text": "A cada 5 anos (ou em prazo menor se houver corrosão/danos visíveis)."
      },
      {
        "letter": "C",
        "text": "A cada 20 anos."
      },
      {
        "letter": "D",
        "text": "Cilindros de extintores nunca necessitam de teste hidrostático."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Teste Hidrostático de extintores (Nível 3).",
      "standard": "Portaria INMETRO / ABNT NBR 12962",
      "details": "O teste hidrostático a cada 5 anos submete o recipiente à pressão superior à normal para verificar a resistência mecânica do aço contra deformações e risco de explosão."
    }
  },
  {
    "id": 88,
    "category": "Prevenção & Legislação",
    "statement": "O que é o documento denominado AVCB (Auto de Vistoria do Corpo de Bombeiros) ou Certificado de Conformidade?",
    "options": [
      {
        "letter": "A",
        "text": "A carteira de motorista do condutor de ambulância."
      },
      {
        "letter": "B",
        "text": "O documento oficial emitido pelo Corpo de Bombeiros Militar atestando que a edificação cumpre todas as medidas de segurança contra incêndio e pânico exigidas por lei."
      },
      {
        "letter": "C",
        "text": "Um alvará de funcionamento sanitário para restaurantes."
      },
      {
        "letter": "D",
        "text": "A apólice de seguro contra roubos."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Importância e validade do AVCB.",
      "standard": "Legislação Estadual de Segurança contra Incêndio",
      "details": "Sem o AVCB / Certidão de Conformidade válida, a edificação funciona em situação de irregularidade jurídica, podendo ser interditada e ter sinistros recusados pelas seguradoras."
    }
  },
  {
    "id": 89,
    "category": "Prevenção & Legislação",
    "statement": "De acordo com o Artigo 135 do Código Penal Brasileiro, o que configura o crime de \"Omissão de Socorro\"?",
    "options": [
      {
        "letter": "A",
        "text": "Não saber operar um rádio comunicador."
      },
      {
        "letter": "B",
        "text": "Deixar de prestar assistência, quando possível fazê-lo sem risco pessoal, à pessoa ferida, desamparada ou em grave e iminente perigo, ou não socorrer chamando o socorro público."
      },
      {
        "letter": "C",
        "text": "Cobrar pelo serviço de primeiros socorros de um amigo."
      },
      {
        "letter": "D",
        "text": "Errar uma pergunta em uma prova de primeiros socorros."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Crime de Omissão de Socorro no Brasil.",
      "standard": "Art. 135 do Decreto-Lei nº 2.848 (Código Penal)",
      "details": "A lei pune quem se omite diante de alguém que precisa de socorro. Quando o socorrista não puder atuar fisicamente sem risco à sua própria vida, tem a obrigação legal de acionar imediatamente o socorro público (193/192)."
    }
  },
  {
    "id": 90,
    "category": "Prevenção & Legislação",
    "statement": "Qual é a altura máxima recomendada em relação ao piso acabado para a instalação de extintores portáteis fixados em paredes?",
    "options": [
      {
        "letter": "A",
        "text": "3,5 metros do piso."
      },
      {
        "letter": "B",
        "text": "O suporte deve posicionar a alça de transporte no máximo a 1,60 m do piso (e o fundo no mínimo a 0,10 m)."
      },
      {
        "letter": "C",
        "text": "No teto, perto dos sprinklers."
      },
      {
        "letter": "D",
        "text": "No mínimo 2,20 metros para não bater a cabeça."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Ergonomia e altura de fixação de extintores.",
      "standard": "ABNT NBR 12693 / IT CBMERJ",
      "details": "A altura máxima de 1,60 m na alça garante que pessoas de diferentes estaturas consigam desacoplar o aparelho com facilidade e rapidez em emergências."
    }
  },
  {
    "id": 91,
    "category": "Prevenção & Legislação",
    "statement": "Segundo a Norma Regulamentadora NR-6, qual é a exigência legal indispensável para que um Equipamento de Proteção Individual (EPI) possa ser comercializado e utilizado?",
    "options": [
      {
        "letter": "A",
        "text": "Ter a cor amarela fosforescente."
      },
      {
        "letter": "B",
        "text": "Possuir o Certificado de Aprovação (CA) válido expedido pelo órgão nacional competente em matéria de segurança no trabalho."
      },
      {
        "letter": "C",
        "text": "Ser importado da Europa."
      },
      {
        "letter": "D",
        "text": "Vir acompanhado de manual em língua estrangeira."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Validade e exigência do Certificado de Aprovação (CA).",
      "standard": "NR-6 (Equipamentos de Proteção Individual)",
      "details": "O CA emitido pelo Ministério do Trabalho atesta que o EPI foi submetido a rigorosos testes laboratoriais de resistência a calor, impactos mecânicos e agentes biológicos."
    }
  },
  {
    "id": 92,
    "category": "Prevenção & Legislação",
    "statement": "Qual é a exigência normativa para o sistema de iluminação de emergência em rotas de fuga prediais em caso de blecaute total?",
    "options": [
      {
        "letter": "A",
        "text": "Deve funcionar por no máximo 2 minutos."
      },
      {
        "letter": "B",
        "text": "Deve acender automaticamente e garantir autonomia mínima de funcionamento (geralmente 1 a 2 horas conforme norma estadual) para permitir a evacuação segura."
      },
      {
        "letter": "C",
        "text": "Pode ser substituído por fósforos e isqueiros comuns distribuídos na portaria."
      },
      {
        "letter": "D",
        "text": "Só precisa funcionar nas noites de lua cheia."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Sistema de Iluminação de Emergência.",
      "standard": "ABNT NBR 10898 / Instrução Técnica CBMERJ",
      "details": "A iluminação de aclaramento e balizamento orienta os ocupantes até a área externa segura sem que tropecem em degraus ou obstáculos durante a queda de energia."
    }
  },
  {
    "id": 93,
    "category": "Prevenção & Legislação",
    "statement": "Em um evento temporário com concentração de mais de 2.000 pessoas, qual documento legal e plano são exigidos para liberação pelo Corpo de Bombeiros Militar?",
    "options": [
      {
        "letter": "A",
        "text": "Apenas a lista de músicas dos artistas."
      },
      {
        "letter": "B",
        "text": "Projeto Técnico de Instalação e Ocupação Provisória (TIOP) com dimensionamento de brigada/bombeiros civis e Plano de Evacuação aprovado."
      },
      {
        "letter": "C",
        "text": "Apenas a autorização da associação de moradores local."
      },
      {
        "letter": "D",
        "text": "Nenhum documento é exigido se os ingressos forem gratuitos."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Licenciamento de eventos temporários de reunião de público.",
      "standard": "Resolução CBMERJ / Legislação Estadual de Eventos",
      "details": "Eventos temporários exigem aprovação prévia com cálculo rigoroso de largura de saídas de emergência, extintores proporcionais, brigadas e presença de Bombeiros Civis certificados."
    }
  },
  {
    "id": 94,
    "category": "Prevenção & Legislação",
    "statement": "Qual é a responsabilidade do Bombeiro Civil diante da constatação de uma área de risco iminente de desabamento ou explosão dentro de uma indústria?",
    "options": [
      {
        "letter": "A",
        "text": "Ficar em silêncio para não alarmar a diretoria."
      },
      {
        "letter": "B",
        "text": "Isolar a área imediatamente, evacuar os trabalhadores em perigo e comunicar formalmente e com urgência à administração da empresa e órgãos competentes."
      },
      {
        "letter": "C",
        "text": "Tentar consertar sozinho o pilar quebrado."
      },
      {
        "letter": "D",
        "text": "Aguardar o final de semana para averiguar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Atuação preventiva do Bombeiro Civil em risco grave e iminente.",
      "standard": "NR-1 / NBR 14608",
      "details": "O direito de recusa e a interrupção de atividades em situações de risco grave e iminente são prerrogativas de segurança voltadas à preservação da integridade física das pessoas."
    }
  },
  {
    "id": 95,
    "category": "Prevenção & Legislação",
    "statement": "Qual o telefone nacional padrão e gratuito para acionamento do Corpo de Bombeiros Militar e do SAMU em todo o Brasil?",
    "options": [
      {
        "letter": "A",
        "text": "190 para Bombeiros e 191 para SAMU."
      },
      {
        "letter": "B",
        "text": "193 para Bombeiros e 192 para SAMU."
      },
      {
        "letter": "C",
        "text": "197 para Bombeiros e 199 para SAMU."
      },
      {
        "letter": "D",
        "text": "911 para ambos."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Telefones de emergência nacionais.",
      "standard": "Legislação Federal / Sistema de Segurança Pública",
      "details": "O 193 aciona a central de operações do Corpo de Bombeiros Militar (resgate e incêndio); o 192 aciona o Serviço de Atendimento Móvel de Urgência (SAMU)."
    }
  },
  {
    "id": 96,
    "category": "Produtos Perigosos",
    "statement": "No transporte de produtos perigosos, o Painel de Segurança retangular laranja exibe dois números. O que significam o número superior e o número inferior?",
    "options": [
      {
        "letter": "A",
        "text": "Superior: data de fabricação; Inferior: data de validade."
      },
      {
        "letter": "B",
        "text": "Superior: Número de Risco (indica a natureza do perigo); Inferior: Número ONU com 4 algarismos (identifica a substância química específica)."
      },
      {
        "letter": "C",
        "text": "Superior: velocidade máxima da carreta; Inferior: peso da carga em quilos."
      },
      {
        "letter": "D",
        "text": "Superior: telefone da seguradora; Inferior: placa do cavalo mecânico."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Sinalização de Produtos Perigosos.",
      "standard": "Resolução ANTT nº 5.998 / ABNT NBR 7500 / Guia ABIQUIM",
      "details": "O painel laranja permite identificar de imediato os perigos (ex: 33 = líquido altamente inflamável) e a substância através do Número ONU (ex: 1203 = gasolina), orientando a distância de isolamento."
    }
  },
  {
    "id": 97,
    "category": "Produtos Perigosos",
    "statement": "Quando o Número de Risco no painel de segurança laranja é precedido pela letra \"X\" (por exemplo, X338), o que essa letra adverte aos bombeiros?",
    "options": [
      {
        "letter": "A",
        "text": "Que o produto é importado do exterior."
      },
      {
        "letter": "B",
        "text": "Que a substância reage perigosamente com água (proibido o uso direto de água para combate)."
      },
      {
        "letter": "C",
        "text": "Que o produto é comestível."
      },
      {
        "letter": "D",
        "text": "Que a carga está vazia."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Alerta de reatividade com água em produtos perigosos.",
      "standard": "Resolução ANTT nº 5.998 / Manual de Emergências Químicas",
      "details": "O prefixo X indica que o produto libera gases tóxicos, inflamáveis ou calor violento em contato com a água, exigindo outros agentes extintores específicos (pó seco especial, CO2 ou espuma sintética)."
    }
  },
  {
    "id": 98,
    "category": "Produtos Perigosos",
    "statement": "O \"Diamante de Hommel\" (NFPA 704) é dividido em 4 losangos coloridos com pontuações de 0 a 4. O que representa a cor VERMELHA?",
    "options": [
      {
        "letter": "A",
        "text": "Perigo para a saúde humana."
      },
      {
        "letter": "B",
        "text": "Inflamabilidade (risco de fogo e combustão)."
      },
      {
        "letter": "C",
        "text": "Reatividade / Instabilidade química."
      },
      {
        "letter": "D",
        "text": "Risco radioativo."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Código de cores do Diamante de Hommel (NFPA 704).",
      "standard": "NFPA 704 / ABNT NBR 14725",
      "details": "Azul = Perigo para a Saúde; Vermelho = Inflamabilidade; Amarelo = Reatividade; Branco = Riscos Especiais (como W cortado para não usar água, OX para oxidante)."
    }
  },
  {
    "id": 99,
    "category": "Produtos Perigosos",
    "statement": "O cilindro do Equipamento de Proteção Respiratória Autônoma (EPRA) utilizado pelo Bombeiro Civil em ambientes com fumaça e atmosfera tóxica é preenchido com:",
    "options": [
      {
        "letter": "A",
        "text": "Oxigênio 100% puro comprimido."
      },
      {
        "letter": "B",
        "text": "Ar comprimido respirável (composto por aprox. 78% Nitrogênio e 21% Oxigênio)."
      },
      {
        "letter": "C",
        "text": "Gás hélio com vapor d'água."
      },
      {
        "letter": "D",
        "text": "Dióxido de carbono comprimido."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Composição do gás em EPR Autônoma.",
      "standard": "ABNT NBR 13716 / Fundamentos de Proteção Respiratória",
      "details": "Cilindros de EPR autônoma contêm ar atmosférico filtrado e comprimido (respirável). Oxigênio puro sob pressão nunca é usado em combate a incêndio pelo altíssimo risco de explosão e toxicidade."
    }
  },
  {
    "id": 100,
    "category": "Produtos Perigosos",
    "statement": "Qual é o sinal de aviso obrigatório que alerta o bombeiro de que a carga de ar da sua EPR autônoma está no fim e ele deve sair IMEDIATAMENTE da edificação?",
    "options": [
      {
        "letter": "A",
        "text": "Uma vibração no cinto de couro."
      },
      {
        "letter": "B",
        "text": "O alarme sonoro (apito contínuo de alta intensidade) disparado quando a pressão atinge a reserva de ar (em torno de 50 a 55 bar)."
      },
      {
        "letter": "C",
        "text": "A máscara descola do rosto automaticamente."
      },
      {
        "letter": "D",
        "text": "O cilindro fica mais leve."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Alarme de reserva de ar na EPR.",
      "standard": "ABNT NBR 13716",
      "details": "Ao apitar a reserva de 50 bar, o bombeiro possui apenas alguns minutos de ar para efetuar o trajeto de retorno pela rota de fuga. Continuar avançando após o apito é fatal."
    }
  },
  {
    "id": 101,
    "category": "Salvamento & Resgate",
    "statement": "De acordo com a Norma Regulamentadora NR-35, a partir de qual altura de desnível a atividade é considerada legalmente como \"Trabalho em Altura\", exigindo planejamento e uso de EPI contra quedas?",
    "options": [
      {
        "letter": "A",
        "text": "A partir de 1,00 metro."
      },
      {
        "letter": "B",
        "text": "A partir de 2,00 metros do nível inferior, onde haja risco de queda."
      },
      {
        "letter": "C",
        "text": "Apenas a partir de 10 metros."
      },
      {
        "letter": "D",
        "text": "Qualquer altura acima de 50 centímetros."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Definição de Trabalho em Altura.",
      "standard": "NR-35 (Trabalho em Altura)",
      "details": "A NR-35 define trabalho em altura qualquer atividade executada acima de 2,00 m do nível inferior onde haja risco de queda, exigindo cinto tipo paraquedista com talabarte duplo em Y ou trava-quedas."
    }
  },
  {
    "id": 102,
    "category": "Salvamento & Resgate",
    "statement": "Qual é o tipo de cinto de segurança obrigatório para operações de resgate e trabalho em altura com risco de queda livre?",
    "options": [
      {
        "letter": "A",
        "text": "Cinto abdominal simples de eletricista."
      },
      {
        "letter": "B",
        "text": "Cinturão de segurança tipo paraquedista com pontos de ancoragem dorsal e peitoral."
      },
      {
        "letter": "C",
        "text": "Cinto de couro comum de calça jeans."
      },
      {
        "letter": "D",
        "text": "Corda amarrada com laço simples na cintura."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "EPI para retenção de quedas.",
      "standard": "NR-35 / ABNT NBR 15836",
      "details": "O cinto paraquedista distribui a força de impacto da desaceleração da queda pelos membros inferiores e bacia, protegendo a coluna lombar e mantendo a vítima na posição vertical."
    }
  },
  {
    "id": 103,
    "category": "Salvamento & Resgate",
    "statement": "A Norma Regulamentadora NR-33 estabelece os requisitos para trabalho em Espaços Confinados. Qual documento formal é OBRIGATÓRIO antes de qualquer trabalhador entrar em um espaço confinado?",
    "options": [
      {
        "letter": "A",
        "text": "Recibo de pagamento de salário."
      },
      {
        "letter": "B",
        "text": "Permissão de Entrada e Trabalho (PET), emitida e assinada pelo Responsável Técnico ou Supervisor de Entrada."
      },
      {
        "letter": "C",
        "text": "Comprovante de residência atualizado."
      },
      {
        "letter": "D",
        "text": "Apenas crachá funcional."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Permissão de Entrada e Trabalho (PET).",
      "standard": "NR-33 (Segurança e Saúde nos Trabalhos em Espaços Confinados)",
      "details": "A PET valida que os testes de atmosfera (oxigênio entre 19,5% e 23%, ausência de inflamáveis e tóxicos), ventilação contínua, isolamento de fontes de energia e vigia externo estão operacionais."
    }
  },
  {
    "id": 104,
    "category": "Salvamento & Resgate",
    "statement": "Qual nó de salvamento e resgate é amplamente considerado o nó padrão por excelência para confecção de laçadas de ancoragem e amarração com cordas de alta resistência?",
    "options": [
      {
        "letter": "A",
        "text": "Nó cego."
      },
      {
        "letter": "B",
        "text": "Nó Oito Duplo (ou Oito Guiado)."
      },
      {
        "letter": "C",
        "text": "Laço de cadarço comum."
      },
      {
        "letter": "D",
        "text": "Nó de forca."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Nós e amarrações de salvamento.",
      "standard": "Manual de Salvamento em Altura / NFPA 1983",
      "details": "O nó oito duplo mantém alta porcentagem da resistência residual da corda (cerca de 75 a 80%), é fácil de inspecionar visualmente e não desfaz acidentalmente sob tensão."
    }
  },
  {
    "id": 105,
    "category": "Salvamento & Resgate",
    "statement": "Em um resgate veicular em que o automóvel colidiu e começou a pegar fogo na frente, qual manobra rápida de emergência o Bombeiro Civil pode empregar para retirar uma vítima inconsciente de dentro do veículo sem equipamentos imediatos?",
    "options": [
      {
        "letter": "A",
        "text": "Puxar a vítima pelas duas pernas com força."
      },
      {
        "letter": "B",
        "text": "Manobra de Chave de Raute (passando os braços sob as axilas da vítima e segurando seu antebraço apoiando sua cabeça no peito do socorrista)."
      },
      {
        "letter": "C",
        "text": "Girar o corpo da vítima 180 graus e arremessar pelo vidro traseiro."
      },
      {
        "letter": "D",
        "text": "Esperar o carro queimar por completo para mexer."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "rule": "Extração rápida de emergência (Chave de Raute).",
      "standard": "PHTLS / Manual de Resgate Veicular",
      "details": "A chave de Raute é uma técnica de extração rápida reservada para perigo iminente de morte (fogo, explosão ou parada respiratória), permitindo arrastar a vítima mantendo alinhamento relativo da cabeça e coluna."
    }
  }
];

/**
 * Sorteia N questões sem repetição utilizando o algoritmo Fisher-Yates.
 * Garante que a cada novo simulado o aluno receba uma prova dinâmica e inédita.
 */
export function getRandomExamQuestions(count: number = 10, excludedIds: number[] = []): ExamQuestion[] {
  // Filtrar questões excluídas se houver banco grande
  let available = mockExamQuestions.filter(q => !excludedIds.includes(q.id));
  if (available.length < count) {
    available = [...mockExamQuestions];
  }

  // Fisher-Yates Shuffle
  const shuffled = [...available];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}
