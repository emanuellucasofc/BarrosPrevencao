export interface ExamQuestion {
  id: number;
  category: 'NBR 14608' | 'Combate a Incêndio' | 'Primeiros Socorros / APH' | 'Prevenção & Legislação' | 'Produtos Perigosos';
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

export const mockExamQuestions: ExamQuestion[] = [
  {
    id: 1,
    category: 'NBR 14608',
    statement: 'De acordo com a norma ABNT NBR 14608 (Bombeiro Civil), qual é a atribuição primária e prioritária do Bombeiro Civil no exercício diário da sua função em uma edificação ou evento?',
    options: [
      { letter: 'A', text: 'Combater incêndios de grandes proporções com linhas adutoras externas.' },
      { letter: 'B', text: 'Ações contínuas de prevenção, inspeção preventiva de riscos e primeiro atendimento a emergências.' },
      { letter: 'C', text: 'Assumir a fiscalização e emitir multas administrativas para a administração predial.' },
      { letter: 'D', text: 'Substituir permanentemente as atribuições dos Corpos de Bombeiros Militares.' },
    ],
    correctOption: 'B',
    explanation: {
      rule: 'A prevenção é o pilar fundamental do Bombeiro Civil.',
      standard: 'ABNT NBR 14608 / Lei Federal 11.901/2009',
      details: 'O Bombeiro Civil atua prioritariamente na prevenção através de rondas, inspeção de rotas de fuga, verificação de equipamentos de combate (extintores, hidrantes, sinalização) e no atendimento imediato (primeira resposta) até a chegada do socorro público.',
    },
  },
  {
    id: 2,
    category: 'Combate a Incêndio',
    statement: 'Um princípio de incêndio foi identificado em um quadro de distribuição de energia energizado (equipamento elétrico ativo). Qual é a classe desse incêndio e qual o extintor portátil mais adequado?',
    options: [
      { letter: 'A', text: 'Classe A – Extintor de Água Pressurizada (AP).' },
      { letter: 'B', text: 'Classe B – Extintor de Espuma Mecânica.' },
      { letter: 'C', text: 'Classe C – Extintor de Gás Carbônico (CO2) ou Pó Químico Seco (PQS).' },
      { letter: 'D', text: 'Classe D – Extintor de Água Nebulizada com jato direto.' },
    ],
    correctOption: 'C',
    explanation: {
      rule: 'Fogo em equipamentos elétricos energizados pertence à Classe C.',
      standard: 'Instrução Técnica CBMERJ / NR-23 / NBR 15808',
      details: 'A Classe C engloba materiais elétricos energizados. O agente extintor não pode ser condutor de eletricidade. O CO2 é ideal por não deixar resíduos, e o PQS também pode ser utilizado. Água em jato direto ou espuma provocam choque elétrico grave.',
    },
  },
  {
    id: 3,
    category: 'Primeiros Socorros / APH',
    statement: 'Durante uma ronda, o Bombeiro Civil encontra uma vítima caída, irresponsiva e sem movimentos respiratórios normais (apenas gasping). Conforme o protocolo atual de Suporte Básico de Vida (SBV/AHA), qual deve ser a primeira conduta imediata após constatar a ausência de pulso?',
    options: [
      { letter: 'A', text: 'Iniciar imediatamente compressões torácicas de alta qualidade e solicitar o DEA (Desfibrilador Externo Automático).' },
      { letter: 'B', text: 'Realizar duas ventilações boca a boca de resgate antes de tocar no tórax.' },
      { letter: 'C', text: 'Elevar os membros inferiores da vítima e aguardar 5 minutos para ver se ela recobra a consciência.' },
      { letter: 'D', text: 'Administrar água para deglutição e colocar a vítima em posição lateral de segurança.' },
    ],
    correctOption: 'A',
    explanation: {
      rule: 'Sequência C-A-B do Suporte Básico de Vida (AHA Guidelines).',
      standard: 'Diretrizes AHA de Ressuscitação Cardiopulmonar (RCP) / Protocolo CBMERJ',
      details: 'Diante de uma Parada Cardiorrespiratória (PCR), o foco é início rápido das compressões torácicas contínuas (frequência de 100 a 120/min e profundidade de 5 a 6 cm no adulto) e uso precoce do DEA.',
    },
  },
  {
    id: 4,
    category: 'Combate a Incêndio',
    statement: 'O "Tetraedro do Fogo" representa os elementos indispensáveis para que ocorra e se mantenha a combustão. Quais são os 4 elementos que o compõem?',
    options: [
      { letter: 'A', text: 'Água, Vento, Madeira e Oxigênio.' },
      { letter: 'B', text: 'Combustível, Comburente (Oxigênio), Calor e Reação em Cadeia.' },
      { letter: 'C', text: 'Fumaça, Calor, Brasas e Monóxido de Carbono.' },
      { letter: 'D', text: 'Pressão, Temperatura, Densidade e Ignição.' },
    ],
    correctOption: 'B',
    explanation: {
      rule: 'Teoria moderna do fogo e métodos de extinção.',
      standard: 'Manual Técnico de Bombeiros / NBR 14276',
      details: 'O tetraedro do fogo é formado por: Combustível (o que queima), Comburente (oxigênio), Calor (energia de ativação) e Reação Química em Cadeia (mantém a queima autossustentável). Os métodos de extinção atuam retirando um desses elementos.',
    },
  },
  {
    id: 5,
    category: 'Prevenção & Legislação',
    statement: 'A Lei Federal nº 11.901/2009 regulamenta a profissão de Bombeiro Civil no Brasil. Sobre a jornada normal de trabalho fixada por esta lei, assinale a alternativa correta:',
    options: [
      { letter: 'A', text: '44 horas semanais com plantões diários de 8 horas sem descanso.' },
      { letter: 'B', text: 'Escala de 12 horas de trabalho por 36 horas de descanso, limitada a 36 horas semanais.' },
      { letter: 'C', text: 'Plantão exclusivo de 24 horas por 48 horas de folga.' },
      { letter: 'D', text: 'Livre negociação sem limite máximo de horas semanais.' },
    ],
    correctOption: 'B',
    explanation: {
      rule: 'Jornada especial de trabalho do Bombeiro Civil.',
      standard: 'Art. 5º da Lei Federal nº 11.901/2009',
      details: 'A jornada de trabalho do Bombeiro Civil é de 36 horas semanais, cumprida em regime de 12 horas de trabalho por 36 horas de descanso (12x36), sendo vedada jornada superior sem os devidos adicionais e compensações legais.',
    },
  },
  {
    id: 6,
    category: 'Primeiros Socorros / APH',
    statement: 'Em um restaurante, um cliente começa a apresentar asfixia grave por corpo estranho (OVACE), demonstrando o sinal universal de engasgo (mãos na garganta), sem conseguir falar ou tossir. Qual manobra deve ser aplicada imediatamente?',
    options: [
      { letter: 'A', text: 'Manobra de Heimlich (compressões subdiafragmáticas no abdome para dentro e para cima).' },
      { letter: 'B', text: 'Oferecer água e dar fortes tapas no topo da cabeça da vítima.' },
      { letter: 'C', text: 'Fazer ventilações de resgate com bolsa-válvula-máscara.' },
      { letter: 'D', text: 'Tentar retirar o objeto com os dedos às cegas no fundo da boca.' },
    ],
    correctOption: 'A',
    explanation: {
      rule: 'Desobstrução de Vias Aéreas por Corpo Estranho (OVACE).',
      standard: 'Protocolos de Primeiros Socorros / Diretrizes AHA / PHTLS',
      details: 'Na obstrução total das vias aéreas em vítima consciente, a Manobra de Heimlich é a técnica padrão: posicionar-se atrás da vítima, colocar o punho entre o umbigo e o apêndice xifoide e realizar compressões rápidas para dentro e para cima em formato de "J". Nunca realizar varredura digital às cegas.',
    },
  },
  {
    id: 7,
    category: 'Combate a Incêndio',
    statement: 'Qual é a principal diferença no comportamento de queima entre os fogos de Classe A (materiais sólidos fibrosos) e Classe B (líquidos inflamáveis)?',
    options: [
      { letter: 'A', text: 'Classe A queima somente na superfície sem deixar cinzas; Classe B queima em profundidade gerando brasas.' },
      { letter: 'B', text: 'Classe A queima em superfície e em profundidade deixando resíduos e brasas; Classe B queima apenas na superfície de seus vapores e não deixa resíduos.' },
      { letter: 'C', text: 'Ambos queimam exatamente da mesma forma e aceitam extintores à base de água pressurizada.' },
      { letter: 'D', text: 'Líquidos inflamáveis não produzem calor antes da queima total do oxigênio.' },
    ],
    correctOption: 'B',
    explanation: {
      rule: 'Comportamento da queima por classe de combustível.',
      standard: 'ABNT NBR 14276 / Manual de Fundamentos do Fogo',
      details: 'Materiais sólidos como madeira, papel e tecido (Classe A) queimam em superfície e profundidade formando brasas (exigem resfriamento, ex: água). Líquidos inflamáveis (Classe B) queimam apenas na camada de vapores na superfície do líquido e não deixam resíduos (exigem abafamento, ex: PQS, CO2 ou Espuma).',
    },
  },
  {
    id: 8,
    category: 'Produtos Perigosos',
    statement: 'No transporte e armazenamento de produtos perigosos, o "Painel de Segurança" é uma placa retangular laranja. O que representam, respectivamente, o número superior (de 2 a 3 dígitos) e o número inferior (de 4 dígitos)?',
    options: [
      { letter: 'A', text: 'O número superior indica a data de fabricação e o inferior a data de validade do produto.' },
      { letter: 'B', text: 'O número superior indica o Número de Risco do produto e o inferior é o Número ONU (identificação da substância).' },
      { letter: 'C', text: 'O número superior é o peso do caminhão e o inferior a rota da rodovia.' },
      { letter: 'D', text: 'O número superior indica o telefone do Corpo de Bombeiros e o inferior a placa do veículo.' },
    ],
    correctOption: 'B',
    explanation: {
      rule: 'Identificação e sinalização de cargas e produtos perigosos.',
      standard: 'Resolução ANTT nº 5.998 / NBR 7500 / Guia ABIQUIM',
      details: 'O Painel de Segurança laranja possui na parte superior o Número de Risco (ex: 33 = líquido altamente inflamável; prefixo X = reage perigosamente com água) e na parte inferior o Número ONU com 4 algarismos (ex: 1203 = gasolina).',
    },
  },
  {
    id: 9,
    category: 'Prevenção & Legislação',
    statement: 'Durante a inspeção diária dos extintores portáteis de pó químico e água de uma empresa, quais são os três itens visuais obrigatórios que o Bombeiro Civil deve checar imediatamente?',
    options: [
      { letter: 'A', text: 'Pintura decorativa, marca do fabricante e peso exato na balança.' },
      { letter: 'B', text: 'Ponteiro do manômetro na faixa verde (pressão adequada), lacre inviolado com trava e selo do INMETRO dentro da validade.' },
      { letter: 'C', text: 'Somente se o extintor está apoiado diretamente no chão úmido.' },
      { letter: 'D', text: 'Se o extintor está escondido atrás de caixas para evitar furtos.' },
    ],
    correctOption: 'B',
    explanation: {
      rule: 'Checklist de inspeção nível 1 em extintores portáteis.',
      standard: 'ABNT NBR 12962 / Portaria INMETRO',
      details: 'A inspeção periódica de nível 1 verifica: manômetro na área verde de operação, anel de plástico e lacre de segurança intactos, etiqueta do INMETRO com validade da carga e teste hidrostático em dia, mangueira desobstruída e acesso 100% desimpedido.',
    },
  },
  {
    id: 10,
    category: 'Primeiros Socorros / APH',
    statement: 'Ao atender uma vítima de acidente traumático com suspeita de fratura ou lesão raquimedular (coluna cervical), qual é a conduta prioritária e indispensável antes de qualquer movimentação?',
    options: [
      { letter: 'A', text: 'Colocar a vítima imediatamente de pé para testar os reflexos das pernas.' },
      { letter: 'B', text: 'Realizar estabilização manual da cabeça e coluna cervical em posição neutra e aguardar a prancha rígida com colar cervical.' },
      { letter: 'C', text: 'Girar a cabeça da vítima para os lados para verificar se há dores no pescoço.' },
      { letter: 'D', text: 'Sentar a vítima em uma cadeira comum para facilitar a respiração.' },
    ],
    correctOption: 'B',
    explanation: {
      rule: 'Controle cervical e cinemática do trauma.',
      standard: 'PHTLS (Prehospital Trauma Life Support) / Protocolo CBMERJ',
      details: 'Em trauma com mecanismo suspeito (quedas de altura, acidentes automobilísticos), a imobilização e restrição de movimento da coluna cervical são prioritárias logo no "A" do mnemônico XABCDE para evitar lesão medular secundária irreversível (tetraplegia).',
    },
  },
];

