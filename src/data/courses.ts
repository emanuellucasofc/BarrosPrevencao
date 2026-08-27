import { Course } from '../types';

export const coursesData: Course[] = [
  {
    id: 'bombeiro-civil',
    slug: 'bombeiro-civil',
    title: 'Formação de Bombeiro Civil',
    shortTitle: 'Bombeiro Civil',
    category: 'bombeiro',
    badge: 'Formação Profissional',
    iconName: 'Flame',
    imageUrl: '/images/bombeiro-civil.jpg',
    imageAlt: 'Aluno e instrutor em treinamento prático de combate a incêndio com extintor',
    shortDescription: 'Capacitação voltada à formação e preparação de profissionais para atuação na prevenção e resposta a situações de emergência.',
    fullDescription: 'O curso de Bombeiro Civil da Barros Prevenção prepara você para atuar diretamente na proteção de vidas e patrimônios em indústrias, eventos, shopping centers, condomínios e instalações comerciais. Nosso treinamento une sólida base teórica com ampla vivência prática em combate a incêndios, primeiros socorros avançados, resgate e planos de contingência.',
    objective: 'Capacitar profissionais para identificar riscos de incêndio e acidentes, operar sistemas de segurança e emergência, prestar primeiros socorros de forma ágil e executar procedimentos táticos de resgate e abandono de área com máxima segurança e conformidade técnica.',
    targetAudience: [
      'Pessoas que desejam ingressar na carreira de Bombeiro Civil;',
      'Profissionais de segurança patrimonial e privada buscando qualificação;',
      'Pessoas interessadas em atuação profissional na área de emergência e resgate;',
      'Profissionais que necessitam de qualificação técnica para atuar em eventos e indústrias.'
    ],
    workload: '[DEFINIR CARGA HORÁRIA - EX: Conforme Legislação / Carga Horária Completa]',
    modality: 'Presencial (Aulas Teóricas + Módulos Práticos Intensivos)',
    location: 'Rua Nicarágua, 186 - Penha, RJ (Em frente à estação de trem, em cima do Itaú)',
    datesAvailable: '[CONSULTAR PRÓXIMAS TURMAS / VAGAS LIMITADAS]',
    certificationInfo: '[CERTIFICADO PROFISSIONAL EMITIDO CONFORME LEGISLAÇÃO E NORMAS TÉCNICAS VIGENTES]',
    requirements: [
      'Idade mínima: 18 anos;',
      'Ensino fundamental ou médio completo (conforme diretrizes aplicáveis);',
      'Aptidão física e mental para atividades práticas operacionais.'
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Prevenção e Combate a Princípios de Incêndio',
        topics: [
          'Teoria do fogo, tetraedro do fogo e classes de incêndio (A, B, C, D e K);',
          'Técnicas de extinção e manuseio correto de extintores portáteis e sobre rodas;',
          'Operação de sistemas hidráulicos, mangueiras, esguichos e hidrantes;',
          'Inspeção preventiva de equipamentos de combate e rotas de fuga.'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Primeiros Socorros e Suporte Básico à Vida',
        topics: [
          'Avaliação primária e secundária da vítima;',
          'Reanimação Cardiopulmonar (RCP) com treinamento prático e manuseio de DEA;',
          'Controle de hemorragias, curativos e imobilizações provisórias;',
          'Atendimento a crises clínicas: desmaios, convulsões e parada cardiorrespiratória.'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Salvamento Terrestre e em Ambientes Críticos',
        topics: [
          'Técnicas de resgate de vítimas em locais de difícil acesso;',
          'Fundamentos de nós, amarrações e salvamento em altura;',
          'Noções de espaço confinado e ventilação tática;',
          'Equipamentos de Proteção Individual (EPI) e Proteção Respiratória (EPR).'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Produtos Perigosos, Riscos Especiais e Abandono de Área',
        topics: [
          'Identificação e sinalização de produtos químicos e inflamáveis;',
          'Elaboração e execução de planos de emergência e rotas de escape;',
          'Comunicação em emergências e coordenação de brigadas;',
          'Simulado prático final integrado sob condições operacionais controladas.'
        ]
      }
    ],
    faqs: [
      {
        question: 'O que faz um Bombeiro Civil no dia a dia?',
        answer: 'Atua preventivamente inspecionando extintores, hidrantes e saídas de emergência, orienta pessoas sobre segurança, combate princípios de incêndio e realiza o primeiro atendimento em emergências médicas até a chegada do SAMU ou Corpo de Bombeiros Militar.'
      },
      {
        question: 'O curso inclui treinamento prático com fogo e manequins?',
        answer: 'Sim, a metodologia da Barros Prevenção prioriza a prática com simulações realistas para que o aluno ganhe segurança operacional.'
      },
      {
        question: 'Como consultar valores e condições de pagamento?',
        answer: 'Entre em contato direto pelo formulário do site ou pelo WhatsApp para receber a grade detalhada com valores e formas de parcelamento disponíveis.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'aph-atendimento-pre-hospitalar',
    slug: 'aph-atendimento-pre-hospitalar',
    title: 'APH – Atendimento Pré-Hospitalar',
    shortTitle: 'APH - Emergência',
    category: 'aph',
    badge: 'Treinamento Tático & Prático',
    iconName: 'Activity',
    imageUrl: '/images/aph-curso.png',
    imageAlt: 'Equipe de socorristas em simulação de APH e imobilização de vítima em prancha rígida',
    shortDescription: 'Treinamento voltado para atendimento inicial e cuidados em situações de emergência até a chegada do suporte especializado.',
    fullDescription: 'O curso de Atendimento Pré-Hospitalar (APH) da Barros Prevenção é voltado para capacitar profissionais no atendimento rápido, padronizado e eficaz a vítimas de traumas mecânicos, acidentes automobilísticos, mal súbito e ocorrências clínicas no ambiente extra-hospitalar. Foco total em protocolos internacionais atualizados e tomada de decisão ágil.',
    objective: 'Proporcionar domínio técnico e prático na execução do protocolo de trauma (XABCDE), suporte de via aérea, estabilização de coluna, controle de hemorragias massivas e manobras de reanimação, reduzindo o tempo de resposta e aumentando a sobrevida da vítima.',
    targetAudience: [
      'Profissionais e estudantes da área de saúde e emergência;',
      'Bombeiros Civis, socorristas, condutores de veículos de emergência;',
      'Agentes de segurança pública e privada;',
      'Pessoas interessadas em adquirir conhecimento avançado em atendimento a vítimas.'
    ],
    workload: '[DEFINIR CARGA HORÁRIA - EX: 40h a 60h Teórico-Práticas]',
    modality: 'Presencial com Workshops e Práticas em Cenários Realistas',
    location: 'Rua Nicarágua, 186 - Penha, RJ (Em frente à estação de trem, em cima do Itaú)',
    datesAvailable: '[CONSULTAR PRÓXIMAS TURMAS / VAGAS LIMITADAS]',
    certificationInfo: '[CERTIFICADO DE CAPACITAÇÃO EM APH COM VALIDADE EM TODO O TERRITÓRIO NACIONAL]',
    requirements: [
      'Idade mínima: 18 anos;',
      'Interesse em técnicas de atendimento a traumas e urgências clínicas.'
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Cinemática do Trauma e Segurança da Cena',
        topics: [
          'Avaliação da cena de ocorrência, biossegurança e gerenciamento de riscos;',
          'Cinemática do trauma (acidentes de trânsito, quedas e ferimentos penetrantes);',
          'Triagem de múltiplas vítimas pelo método START.'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Protocolo XABCDE do Trauma Atualizado',
        topics: [
          'X: Hemorragias exsanguinantes e aplicação prática de torniquete e curativos hemostáticos;',
          'A: Vias aéreas, controle cervical e desobstrução;',
          'B: Boa ventilação e respiração (oxigenoterapia e pneumotórax);',
          'C: Circulação, choque e perfusão periférica;',
          'D: Disfunção neurológica e Escala de Coma de Glasgow atualizada;',
          'E: Exposição do paciente e prevenção da hipotermia.'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Parada Cardiorrespiratória (PCR) e Uso do DEA',
        topics: [
          'Reconhecimento imediato de PCR no adulto, criança e lactente;',
          'Compressões torácicas de alta qualidade e ventilações de resgate;',
          'Operação segura e ágil do Desfibrilador Externo Automático (DEA);',
          'Trabalho de equipe em ressuscitação em alta performance.'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Imobilização, Extricação e Simulações Operacionais',
        topics: [
          'Uso de colar cervical, prancha rígida e imobilizadores laterais;',
          'Técnicas de extricação veicular (Chave de Rauteck e pranchamento rápido);',
          'Simulação de ocorrências em tempo real com cenários de alta pressão.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Preciso ter formação na área da saúde para fazer o curso de APH?',
        answer: 'Não necessariamente. O curso é aberto tanto para quem busca ingressar na área de socorro quanto para quem já atua como bombeiro civil, segurança ou profissional de saúde que deseja reciclar seus conhecimentos.'
      },
      {
        question: 'O certificado é aceito em seleções e concursos?',
        answer: 'Sim, o certificado emitido pela Barros Prevenção especifica a carga horária, conteúdo programático e atende às exigências de capacitação profissional complementar.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'primeiros-socorros',
    slug: 'primeiros-socorros',
    title: 'Curso de Primeiros Socorros',
    shortTitle: 'Primeiros Socorros',
    category: 'primeiros-socorros',
    badge: 'Essencial & Cidadão',
    iconName: 'HeartPulse',
    imageUrl: '/images/primeiros-socorros.jpg',
    imageAlt: 'Treinamento prático de primeiros socorros e massagem cardíaca RCP em manequim',
    shortDescription: 'Aprenda como agir diante de situações de emergência, acidentes e mal súbito.',
    fullDescription: 'O curso de Primeiros Socorros da Barros Prevenção foi planejado para capacitar qualquer cidadão, professor, esportista ou trabalhador a prestar os primeiros cuidados com rapidez e segurança antes do socorro médico chegar. Conhecimento vital que transforma pessoas comuns em elos fundamentais da corrente de sobrevivência.',
    objective: 'Ensinar técnicas claras, práticas e seguras para identificar situações de risco, acionar o serviço de emergência correto e prestar atendimento de suporte básico sem colocar em risco a vítima ou o socorrista.',
    targetAudience: [
      'Público em geral que deseja saber como salvar vidas em casa ou no trabalho;',
      'Professores e educadores (atendimento à Lei Lucas);',
      'Monitores, treinadores e profissionais de academias e clubes;',
      'Motoristas, recepcionistas e colaboradores de empresas em geral.'
    ],
    workload: '[DEFINIR CARGA HORÁRIA - EX: 8h a 20h Conforme Modalidade]',
    modality: 'Presencial com Prática em Manequins de Reanimação',
    location: 'Rua Nicarágua, 186 - Penha, RJ (ou In Company na sua empresa)',
    datesAvailable: '[CONSULTAR PRÓXIMAS TURMAS REGULARES]',
    certificationInfo: '[CERTIFICADO DE CAPACITAÇÃO EM PRIMEIROS SOCORROS COM CARGA HORÁRIA]',
    requirements: [
      'Sem pré-requisitos de formação;',
      'Aberto a maiores de 16 anos (ou com autorização do responsável).'
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Introdução e Noções Gerais de Socorro',
        topics: [
          'O que são primeiros socorros e aspectos legais da omissão de socorro;',
          'Como acionar o SAMU (192) e Bombeiros (193) passando informações precisas;',
          'Biossegurança: uso de luvas e proteção individual.'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Desengasgo e Manobras de Emergência',
        topics: [
          'Manobra de Heimlich em adultos conscientes e inconscientes;',
          'Técnica correta de desengasgo em bebês (lactentes) e crianças (Lei Lucas);',
          'Desobstrução de corpos estranhos das vias aéreas.'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Reanimação Cardiopulmonar (RCP) Prática',
        topics: [
          'Reconhecimento de parada respiratória e cardíaca;',
          'Massagem cardíaca prática em manequins;',
          'Como funciona e como operar o DEA (Desfibrilador Externo Automático).'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Urgências Clínicas e Traumáticas Cotidianas',
        topics: [
          'Como agir em convulsões, desmaios, AVC e infarto;',
          'Cuidados imediatos com queimaduras, cortes e hemorragias;',
          'Procedimentos em fraturas, entorses e picadas de animais peçonhentos.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Este curso atende à Lei Lucas para escolas e creches?',
        answer: 'Sim, nosso módulo de primeiros socorros contempla todas as diretrizes exigidas para capacitação de professores e funcionários de instituições de ensino infantil e básico.'
      },
      {
        question: 'Posso levar o treinamento para o meu condomínio ou grupo particular?',
        answer: 'Sim, a Barros Prevenção realiza turmas fechadas para grupos, condomínios e associações.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'nr-06-epi',
    slug: 'nr-06-epi',
    title: 'NR 6 – Equipamento de Proteção Individual (EPI)',
    shortTitle: 'NR 6 - EPIs',
    category: 'nrs',
    badge: 'Norma Regulamentadora',
    iconName: 'ShieldCheck',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Equipamentos de Proteção Individual, capacetes e luvas de segurança do trabalho',
    shortDescription: 'Orientação técnica sobre seleção, uso adequado, guarda, higienização e conservação de EPIs para neutralizar riscos ocupacionais.',
    fullDescription: 'O treinamento da NR 6 capacita empregadores, líderes e colaboradores a compreender a importância vital do Equipamento de Proteção Individual (EPI), os critérios legais de fornecimento com CA (Certificado de Aprovação), a inspeção periódica e as responsabilidades legais conforme as diretrizes do Ministério do Trabalho e Emprego.',
    objective: 'Capacitar os trabalhadores quanto ao uso correto, conservação, limitações e guarda dos EPIs, prevenindo acidentes, doenças ocupacionais e garantindo conformidade com a legislação trabalhista vigente.',
    targetAudience: [
      'Trabalhadores da indústria, construção civil, manutenção e logística;',
      'Técnicos e Engenheiros de Segurança do Trabalho;',
      'Membros da CIPA e brigadistas;',
      'Empresas que necessitam conscientizar colaboradores sobre o uso obrigatório de EPIs.'
    ],
    workload: '[DEFINIR CARGA HORÁRIA - EX: 4h a 8h Conforme Grau de Risco]',
    modality: 'Presencial / In Company ou Semipresencial',
    location: 'Rua Nicarágua, 186 - Penha, RJ ou In Company na sua empresa',
    datesAvailable: '[CONSULTAR PRÓXIMAS TURMAS / AGENDAMENTO IN COMPANY]',
    certificationInfo: '[CERTIFICADO OFICIAL EM CONFORMIDADE COM A NR 6 DO MTE]',
    requirements: [
      'Sem pré-requisitos específicos;',
      'Indicado para todos os trabalhadores expostos a riscos ambientais.'
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Fundamentos Legais e Responsabilidades da NR 6',
        topics: [
          'Direitos e deveres do empregador e do empregado;',
          'O que é Certificado de Aprovação (CA) e como consultar validade;',
          'Hierarquia das medidas de proteção coletiva (EPC) e individual (EPI).'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Tipos de EPIs e Especificidades por Risco',
        topics: [
          'Proteção para cabeça, olhos, face e sistema auditivo;',
          'Proteção respiratória (máscaras, filtros e respiradores autônomos);',
          'Proteção para membros superiores, tronco e membros inferiores.'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Uso Correto, Ajuste Ergonômico e Limitações',
        topics: [
          'Técnicas de colocação, ajuste e teste de vedação;',
          'Limites de tolerância e situações em que o EPI precisa ser substituído;',
          'Inspeção prévia de integridade antes do início da jornada.'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Guarda, Higienização, Manutenção e Descarte',
        topics: [
          'Procedimentos seguros de limpeza e descontaminação;',
          'Armazenamento adequado para evitar degradação de materiais;',
          'Critérios para descarte seguro e substituição imediata de peças danificadas.'
        ]
      }
    ],
    faqs: [
      {
        question: 'O treinamento de NR 6 é obrigatório para todas as empresas?',
        answer: 'Sim, a NR 6 determina que todo empregador deve orientar e treinar o trabalhador sobre o uso adequado, guarda e conservação dos EPIs fornecidos.'
      },
      {
        question: 'A Barros Prevenção realiza o treinamento dentro da nossa fábrica ou canteiro?',
        answer: 'Sim, realizamos o treinamento In Company adaptado exatamente aos tipos de EPIs utilizados na rotina da sua empresa.'
      }
    ],
    isFeatured: false
  },
  {
    id: 'nr-10-seguranca-eletricidade',
    slug: 'nr-10-seguranca-eletricidade',
    title: 'NR 10 – Segurança em Instalações e Serviços em Eletricidade',
    shortTitle: 'NR 10 - Eletricidade',
    category: 'nrs',
    badge: 'Norma Regulamentadora',
    iconName: 'Zap',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Técnico eletricista com EPIs e ferramentas isoladas trabalhando com segurança elétrica',
    shortDescription: 'Medidas de controle, requisitos e sistemas preventivos para garantir a segurança dos trabalhadores em instalações elétricas.',
    fullDescription: 'O curso de NR 10 da Barros Prevenção estabelece as diretrizes de segurança para profissionais que interagem direta ou indiretamente com eletricidade. O conteúdo aborda riscos de choque elétrico, arcos voltaicos, queimaduras, procedimentos de desenergização, bloqueio e etiquetagem (Lockout/Tagout), além de noções cruciais de primeiros socorros em acidentes elétricos.',
    objective: 'Capacitar os profissionais a identificar riscos elétricos, aplicar medidas de controle preventivas e adotar práticas operacionais seguras em serviços com circuitos energizados e desenergizados, em total conformidade com a NR 10.',
    targetAudience: [
      'Eletricistas, técnicos em eletrotécnica, engenheiros e montadores elétricos;',
      'Profissionais de manutenção predial e industrial;',
      'Trabalhadores da construção civil e infraestrutura;',
      'Profissionais que atuam na proximidade de redes e quadros elétricos.'
    ],
    workload: '[DEFINIR CARGA HORÁRIA - EX: Básico: 40h / Reciclagem: 16h a 20h]',
    modality: 'Presencial ou Semipresencial (Teoria + Prática Operacional)',
    location: 'Rua Nicarágua, 186 - Penha, RJ ou In Company na sua empresa',
    datesAvailable: '[CONSULTAR PRÓXIMAS TURMAS / AGENDAMENTO IN COMPANY]',
    certificationInfo: '[CERTIFICADO DE HABILITAÇÃO EM NR 10 VÁLIDO NACIONALMENTE]',
    requirements: [
      'Idade mínima: 18 anos;',
      'Conhecimento básico ou atuação em áreas correlatas à eletricidade/manutenção.'
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Introdução à Segurança com Eletricidade e Riscos',
        topics: [
          'Efeitos da corrente elétrica no corpo humano, choque e fibrilação;',
          'Queimaduras por arco elétrico e explosões elétricas;',
          'Campos eletromagnéticos e riscos adicionais (altura, confinamento e umidade).'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Medidas de Controle do Risco Elétrico',
        topics: [
          'Desenergização controlada e reenergização programada;',
          'Seccionamento, impedimento de reenergização e travamento (LOTO);',
          'Aterramento funcional, temporário e equipotencialização;',
          'Uso de ferramentas isoladas e barreiras de proteção.'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Normas Técnicas, EPIs e EPCs para Eletricistas',
        topics: [
          'Vestimentas antichama (categoria de risco ATPV);',
          'Luvas isolantes de borracha e protetoras de pelica;',
          'Documentação técnica, prontuário das instalações elétricas e APR.'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Combate a Incêndios Elétricos e Primeiros Socorros',
        topics: [
          'Classes de incêndio específicas para equipamentos energizados (Classe C);',
          'Extintores de CO2 e pó químico adequados;',
          'Técnicas de resgate de vítimas de choque elétrico e massagem cardíaca RCP.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Qual a validade do treinamento da NR 10?',
        answer: 'O curso tem validade bienal (2 anos), sendo necessária a realização de reciclagem periódica após esse período ou em caso de troca de função/empresa.'
      },
      {
        question: 'O curso aborda primeiros socorros em caso de choque elétrico?',
        answer: 'Sim, a NR 10 exige obrigatoriamente módulo específico de atendimento e reanimação a vítimas de choque elétrico.'
      }
    ],
    isFeatured: false
  },
  {
    id: 'nr-20-inflamaveis-combustiveis',
    slug: 'nr-20-inflamaveis-combustiveis',
    title: 'NR 20 – Segurança com Inflamáveis e Combustíveis',
    shortTitle: 'NR 20 - Inflamáveis',
    category: 'nrs',
    badge: 'Norma Regulamentadora',
    iconName: 'Fuel',
    imageUrl: '/images/nr-20.jpg',
    imageAlt: 'Profissional com roupa de proteção química amarela, máscara respiratória e tambores de produtos inflamáveis',
    shortDescription: 'Requisitos mínimos para a gestão da segurança e saúde no trabalho contra os fatores de risco de acidentes nas atividades com inflamáveis.',
    fullDescription: 'A capacitação em NR 20 da Barros Prevenção prepara profissionais que atuam na extração, produção, armazenamento, transferência, manuseio e manipulação de líquidos inflamáveis, gases e combustíveis. O treinamento foca em prevenção de vazamentos, controle de fontes de ignição, plano de resposta a emergências e controle de atmosferas explosivas.',
    objective: 'Estabelecer os requisitos técnicos e operacionais de segurança no manuseio de inflamáveis e combustíveis para prevenir incêndios, explosões e exposições tóxicas graves.',
    targetAudience: [
      'Operadores e frentistas de postos de combustíveis;',
      'Trabalhadores de refinarias, distribuidoras e transportadoras de combustíveis;',
      'Profissionais de manutenção em tanques e tubulações;',
      'Equipes de brigada e segurança patrimonial em áreas com armazenamento de combustíveis.'
    ],
    workload: '[DEFINIR CARGA HORÁRIA - EX: Básico (4h/8h), Intermediário (16h), Avançado (24h/32h)]',
    modality: 'Presencial / In Company ou Semipresencial',
    location: 'Rua Nicarágua, 186 - Penha, RJ ou In Company na sua empresa',
    datesAvailable: '[CONSULTAR PRÓXIMAS TURMAS / AGENDAMENTO IN COMPANY]',
    certificationInfo: '[CERTIFICADO OFICIAL EM CONFORMIDADE COM A NR 20 E NÍVEL DE CLASSIFICAÇÃO]',
    requirements: [
      'Idade mínima: 18 anos;',
      'Atuação em instalações classes I, II ou III conforme a NR 20.'
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Propriedades Físico-Químicas dos Inflamáveis',
        topics: [
          'Ponto de fulgor, ponto de combustão e ponto de autoignição;',
          'Limites de inflamabilidade (LIE e LSE);',
          'Gases liquefeitos de petróleo (GLP), gasolina, diesel, etanol e solventes.'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Fontes de Ignição e Controle de Riscos Operacionais',
        topics: [
          'Eletricidade estática, fagulhas e equipamentos elétricos à prova de explosão (Ex);',
          'Ventilação e controle de vapores tóxicos/inflamáveis;',
          'Permissão de Trabalho (PT) em áreas classificadas.'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Proteção Contra Incêndio e Sistemas de Mitigação',
        topics: [
          'Sistemas fixos de espuma mecânica e resfriamento por água;',
          'Extintores de pó químico para líquidos inflamáveis (Classe B);',
          'Contenção de derramamentos e bacias de contenção.'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Plano de Resposta a Emergências e Primeiros Socorros',
        topics: [
          'Procedimentos imediatos em caso de vazamento, princípio de incêndio e derramamento;',
          'Evacuação e isolamento da área de risco;',
          'Atendimento a vítimas intoxicadas por vapores e com queimaduras térmicas.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Quais são os níveis de treinamento da NR 20?',
        answer: 'A NR 20 divide os cursos em níveis: Iniciação, Básico, Intermediário, Avançado e Específico, de acordo com a classe da instalação e a função do trabalhador.'
      },
      {
        question: 'O curso é indicado para funcionários de postos de gasolina?',
        answer: 'Sim, frentistas e funcionários de postos de serviços devem realizar o treinamento da NR 20 com reciclagem periódica.'
      }
    ],
    isFeatured: false
  },
  {
    id: 'nr-33-espacos-confinados',
    slug: 'nr-33-espacos-confinados',
    title: 'NR 33 – Segurança em Espaços Confinados',
    shortTitle: 'NR 33 - Espaço Confinado',
    category: 'nrs',
    badge: 'Norma Regulamentadora',
    iconName: 'Box',
    imageUrl: '/images/nr-33.png',
    imageAlt: 'Trabalhadores e vigias com capacete, tripé de resgate e detector multigás em entrada de espaço confinado',
    shortDescription: 'Requisitos para identificação, reconhecimento, avaliação, monitoramento e controle dos riscos em trabalhos em espaços confinados.',
    fullDescription: 'O treinamento de NR 33 da Barros Prevenção capacita Supervisores de Entrada, Vigias e Trabalhadores Autorizados a atuar com segurança em ambientes não projetados para ocupação humana contínua (como tanques, galerias, silos, tubulações e caixas subterrâneas). Aborda testes contínuos de atmosfera, ventilação mecânica, emissão de PET e técnicas de resgate emergencial.',
    objective: 'Capacitar a equipe a reconhecer riscos atmosféricos e físicos, utilizar detectores de quatro gases, preencher a Permissão de Entrada e Trabalho (PET) e aplicar procedimentos seguros de entrada e saída.',
    targetAudience: [
      'Trabalhadores autorizados e vigias de espaço confinado;',
      'Supervisores de entrada e técnicos de segurança;',
      'Profissionais de saneamento, indústria química, petroquímica e silos;',
      'Equipes de resgate industrial e bombeiros civis.'
    ],
    workload: '[DEFINIR CARGA HORÁRIA - EX: Trabalhador/Vigia: 16h / Supervisor: 40h / Reciclagem: 8h]',
    modality: 'Presencial com Simulações Práticas e Uso de Detectores',
    location: 'Rua Nicarágua, 186 - Penha, RJ ou In Company na sua empresa',
    datesAvailable: '[CONSULTAR PRÓXIMAS TURMAS / AGENDAMENTO IN COMPANY]',
    certificationInfo: '[CERTIFICADO OFICIAL EM CONFORMIDADE COM A NR 33 (VIGIA/TRABALHADOR OU SUPERVISOR)]',
    requirements: [
      'Idade mínima: 18 anos;',
      'Aptidão física e mental atestada por ASO com declaração de aptidão para espaço confinado.'
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Definições, Legislação e Reconhecimento de Espaço Confinado',
        topics: [
          'Critérios de caracterização de espaço confinado segundo a NR 33;',
          'Responsabilidades do Supervisor de Entrada, Vigia e Trabalhador Autorizado;',
          'Importância da Permissão de Entrada e Trabalho (PET).'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Riscos Atmosféricos e Monitoramento Contínuo',
        topics: [
          'Atmosferas deficientes e enriquecidas de oxigênio (O2);',
          'Gases inflamáveis e gases tóxicos (Monóxido de Carbono - CO, Sulfeto de Hidrogênio - H2S);',
          'Operação e calibração de detectores multigases portáteis.'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Medidas de Controle, Ventilação e Equipamentos',
        topics: [
          'Ventilação por exaustão e insuflamento de ar limpo;',
          'Equipamentos de Proteção Respiratória (EPR autônomo e de ar mandado);',
          'Sistemas de tripé, monopé, guincho resgatador e trava-quedas.'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Noções de Salvamento, Resgate e Primeiros Socorros',
        topics: [
          'Procedimentos de resgate sem entrada e com entrada de equipe;',
          'Simulação de retirada de vítima desacordada por guincho mecânico;',
          'Reanimação cardiopulmonar e oxigenoterapia de emergência.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Qual a diferença do curso para Vigia e para Supervisor?',
        answer: 'O curso para Trabalhador Autorizado e Vigia tem carga horária padrão de 16h, enquanto para Supervisor de Entrada a carga é de 40h, abrangendo a emissão de PET e gestão de riscos.'
      },
      {
        question: 'É necessária a realização de exames médicos prévios?',
        answer: 'Sim, a empresa deve garantir que os participantes possuam Atestado de Saúde Ocupacional (ASO) indicando aptidão para trabalho em espaços confinados.'
      }
    ],
    isFeatured: false
  },
  {
    id: 'nr-35-trabalho-em-altura',
    slug: 'nr-35-trabalho-em-altura',
    title: 'NR 35 – Trabalho em Altura',
    shortTitle: 'NR 35 - Altura',
    category: 'nrs',
    badge: 'Norma Regulamentadora',
    iconName: 'Mountain',
    imageUrl: '/images/nr-35.png',
    imageAlt: 'Trabalhador em andaime equipado com cinto de segurança tipo paraquedista, talabarte e capacete para trabalho em altura',
    shortDescription: 'Requisitos mínimos e medidas de proteção para o trabalho em altura, envolvendo o planejamento, a organização e a execução.',
    fullDescription: 'O curso de NR 35 da Barros Prevenção capacita profissionais para qualquer atividade executada acima de 2,00m do nível inferior onde haja risco de queda. Os alunos aprendem a inspecionar e utilizar cintos tipo paraquedista, talabartes, trava-quedas, linhas de vida e pontos de ancoragem, além de procedimentos práticos de resgate e prevenção da síndrome da suspensão inerte.',
    objective: 'Garantir a segurança física dos trabalhadores em atividades em altura, instruindo sobre planejamento prévio, Análise de Risco (AR), uso de equipamentos de retenção de quedas e resposta a emergências.',
    targetAudience: [
      'Trabalhadores da construção civil, montagem industrial e andaimes;',
      'Profissionais de manutenção predial, limpeza de fachadas e telecomunicações;',
      'Eletricistas e instaladores de ar-condicionado e placas solares;',
      'Bombeiros Civis e equipes de resgate.'
    ],
    workload: '[DEFINIR CARGA HORÁRIA - EX: Formação: 8h / Reciclagem Bienal: 8h]',
    modality: 'Presencial com Treinamento Prático de Ancoragem e Suspensão',
    location: 'Rua Nicarágua, 186 - Penha, RJ ou In Company na sua empresa',
    datesAvailable: '[CONSULTAR PRÓXIMAS TURMAS / AGENDAMENTO IN COMPANY]',
    certificationInfo: '[CERTIFICADO OFICIAL DE CAPACITAÇÃO EM NR 35 CONFORME DIRETRIZES DO MTE]',
    requirements: [
      'Idade mínima: 18 anos;',
      'Aptidão física atestada em ASO médico com aptidão para trabalho em altura.'
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Normas, Regulamentos e Análise de Risco',
        topics: [
          'Conceito legal de trabalho em altura (> 2,00 metros);',
          'Elaboração de Análise de Risco (AR) e Permissão de Trabalho (PT);',
          'Condições impeditivas (vento forte, chuva e tempestades elétricas).'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Sistemas de Proteção Contra Quedas (SPQ)',
        topics: [
          'Sistemas de Proteção Coletiva Contra Quedas (SPCQ - guarda-corpos e redes);',
          'Sistemas de Proteção Individual Contra Quedas (SPIQ);',
          'Inspeção prévia e critérios de descarte de cordas, fitas e mosquetões.'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Equipamentos Individuais e Pontos de Ancoragem',
        topics: [
          'Ajuste correto do cinto de segurança tipo paraquedista;',
          'Uso de talabarte em Y com absorvedor de energia e trava-quedas;',
          'Linhas de vida horizontais e verticais, nós e pontos de ancoragem certificados.'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Resgate em Altura e Primeiros Socorros',
        topics: [
          'Riscos da Síndrome da Suspensão Inerte e tempo crítico de socorro;',
          'Uso de fitas anti-trauma de suspensão;',
          'Procedimentos e simulação de evacuação e resgate de vítima suspensa.'
        ]
      }
    ],
    faqs: [
      {
        question: 'A partir de qual altura a NR 35 se aplica?',
        answer: 'A NR 35 considera trabalho em altura toda atividade executada acima de 2,00 metros do nível inferior onde haja risco de queda.'
      },
      {
        question: 'Com que frequência o treinamento deve ser renovado?',
        answer: 'O treinamento deve ser renovado a cada dois anos (bienal) ou antes desse prazo se houver mudança de procedimentos, riscos ou evento de acidente.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'treinamentos-personalizados-empresas',
    slug: 'outros-treinamentos',
    title: 'Treinamentos Personalizados e In Company',
    shortTitle: 'Outros Treinamentos',
    category: 'empresas',
    badge: 'Soluções Corporativas',
    iconName: 'Building2',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Treinamento de segurança do trabalho e brigada em ambiente corporativo',
    shortDescription: 'Capacitações e treinamentos personalizados para profissionais, empresas e equipes em todas as NRs.',
    fullDescription: 'Desenvolvemos programas de capacitação sob medida para a realidade operacional da sua empresa. Atendemos aos requisitos de prevenção de acidentes, formação de Brigadas de Incêndio, reciclagens periódicas e simulações de evacuação predial com instrutores experientes e metodologia voltada a resultados reais de segurança.',
    objective: 'Preparar equipes de trabalho para prevenir sinistros, agir com rapidez e calma em situações críticas, garantir a integridade dos colaboradores e manter a organização em total conformidade com as normas regulamentadoras.',
    targetAudience: [
      'Empresas de todos os portes (indústria, comércio, logística, serviços e condomínios);',
      'Equipes de CIPA e Segurança do Trabalho;',
      'Membros da Brigada de Incêndio e Emergência;',
      'Líderes de setor e brigadistas voluntários.'
    ],
    workload: '[CARGA HORÁRIA PERSONALIZADA CONFORME DEMANDA E GRAU DE RISCO]',
    modality: 'In Company (Nas dependências da sua empresa) ou em Campo de Treinamento Dedicado',
    location: 'In Company (Na sede da sua empresa) ou na Unidade Penha/RJ (Rua Nicarágua, 186)',
    datesAvailable: '[AGENDAMENTO FLEXÍVEL DE ACORDO COM A DISPONIBILIDADE DA SUA EQUIPE]',
    certificationInfo: '[CERTIFICADOS INDIVIDUAIS E LAUDO DE TREINAMENTO CORPORATIVO PARA COMPROVAÇÃO DE NORMAS]',
    requirements: [
      'Definição do escopo com a equipe de Recursos Humanos / SESMT da empresa.'
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Formação e Reciclagem de Brigada de Incêndio',
        topics: [
          'Conceitos de prevenção, combate e abandono de área;',
          'Prática com os extintores e hidrantes instalados na própria empresa;',
          'Comunicação de emergência e liderança em evacuação.'
        ]
      },
      {
        moduleNumber: 2,
        title: 'Primeiros Socorros no Ambiente de Trabalho',
        topics: [
          'Atendimento a acidentes ocupacionais típicos do setor;',
          'Suporte Básico de Vida, controle de sangramentos e contenção de fraturas;',
          'Uso de estojo de primeiros socorros corporativo.'
        ]
      },
      {
        moduleNumber: 3,
        title: 'Simulados de Abandono de Área e Evacuação',
        topics: [
          'Planejamento do exercício simulado de emergência;',
          'Cronometragem de tempo de resposta e desocupação de prédios;',
          'Relatório técnico pós-simulado com oportunidades de melhoria.'
        ]
      },
      {
        moduleNumber: 4,
        title: 'Treinamentos Específicos e Normas Regulamentadoras (NRs)',
        topics: [
          'Módulos especiais focados na realidade de risco da sua empresa (NR 6, NR 10, NR 20, NR 33, NR 35);',
          'Treinamentos de conscientização preventiva para todos os funcionários;',
          'Adequação contínua às exigências do Corpo de Bombeiros e órgãos reguladores.'
        ]
      }
    ],
    faqs: [
      {
        question: 'A Barros Prevenção emite certificado para a empresa apresentar aos órgãos de fiscalização?',
        answer: 'Sim, são emitidos os certificados individuais dos colaboradores e o documento comprobatório para a empresa atender às exigências legais.'
      },
      {
        question: 'É possível realizar o treinamento nos horários de turno da nossa equipe?',
        answer: 'Sim, o cronograma é totalmente customizável para se adequar à rotina da sua empresa sem impactar as operações essenciais.'
      }
    ],
    isFeatured: true
  }
];
