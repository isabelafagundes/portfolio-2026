import type { Lang } from './content'

export type Hue = 'violet' | 'rose' | 'ember'

export type Mockup =
  | { kind: 'phone'; src: string; alt: Record<Lang, string>; ratio?: number; tone?: string }
  | { kind: 'browser'; src: string; alt: Record<Lang, string>; url: string }

type Copy = {
  name: string
  tagline: string
  badge: string
  /** Texto curto usado no card da home. */
  summary: string
  /** Abertura da página do projeto. */
  intro: string
  meta: { label: string; value: string }[]
  context: { title: string; paragraphs: string[] }
  role: { title: string; intro?: string; items: (string | { title: string; text: string })[] }
  features: { title: string; items: { title: string; text: string }[] }
  decisions: { title: string; items: { title: string; text: string }[] }
  outcome: { title: string; paragraphs: string[] }
}

export type Project = {
  slug: string
  hue: Hue
  /** Cor da barra de status das molduras de celular (topo das telas do app). */
  screenTone: string
  featured?: boolean
  stack: string[]
  links: { site?: string; store?: string; preview?: string; github?: string[] }
  /** Destaque no topo da página. */
  mockups: Mockup[]
  /** Telas extras, exibidas numa faixa rolável com legenda (o `alt`). */
  gallery?: Mockup[]
  copy: Record<Lang, Copy>
}

export const projects: Project[] = [
  {
    slug: 'atendimento',
    hue: 'ember',
    screenTone: '#fdfdfd',
    featured: true,
    stack: ['Flutter', 'Dart', 'SiTef', 'NF-e · NFC-e', 'Integrações nativas', 'Android'],
    links: {
      site: 'https://hipcomerp.com.br/produtos/aplicativos/atendimento',
      store: 'https://play.google.com/store/apps/details?id=br.com.hipcom.mercurio_app',
    },
    mockups: [
      { kind: 'phone', src: '/projects/atendimento/home.webp', ratio: 720 / 1461, alt: { pt: 'Módulos do app', en: 'App modules' } },
      { kind: 'phone', src: '/projects/atendimento/categories.webp', ratio: 720 / 1461, alt: { pt: 'Cardápio por categorias', en: 'Menu by category' } },
      { kind: 'phone', src: '/projects/atendimento/close-tab.webp', ratio: 720 / 1461, alt: { pt: 'Fechamento de comanda', en: 'Closing a tab' } },
    ],
    gallery: [
      { kind: 'phone', src: '/projects/atendimento/areas.webp', ratio: 720 / 1461, alt: { pt: 'Mesas por ambiente', en: 'Tables by area' } },
      { kind: 'phone', src: '/projects/atendimento/split.webp', ratio: 720 / 1461, alt: { pt: 'Divisão da conta', en: 'Splitting the bill' } },
      { kind: 'phone', src: '/projects/atendimento/receipt.webp', ratio: 720 / 1461, tone: '#f4f6f8', alt: { pt: 'Recibo e nota fiscal', en: 'Receipt and invoice' } },
    ],
    copy: {
      pt: {
        name: 'Atendimento by Hipcom',
        tagline: 'Atendimento multiplataforma para restaurantes',
        badge: 'Profissional · HIPCOM',
        summary:
          'Sistema multiplataforma que conecta todo o atendimento de restaurantes, do pedido à produção e do pagamento à nota fiscal, direto na mesa do cliente.',
        intro:
          'Um sistema multiplataforma para gestão e otimização do atendimento em restaurantes, que conecta todas as etapas da operação: do registro do pedido e envio à produção até o pagamento e a emissão fiscal, direto na mesa do cliente.',
        meta: [
          { label: 'Tipo', value: 'Produto comercial' },
          { label: 'Empresa', value: 'HIPCOM ERP' },
          { label: 'Minha atuação', value: 'Quase 4 anos' },
          { label: 'Plataformas', value: 'Celulares, terminais e totens' },
        ],
        context: {
          title: 'Contexto',
          paragraphs: [
            'Em um restaurante, cada etapa do atendimento costuma viver em um lugar diferente: o pedido no papel, a produção na cozinha, o pagamento no caixa. Cada deslocamento é tempo perdido para a equipe e espera para o cliente.',
            'O Atendimento by Hipcom reúne tudo isso em um só fluxo. Com comandas de mesa ou avulsas, ele se adapta a operações de balcão, salão e autoatendimento, levando pagamento, impressão e documentos fiscais até a mesa.',
          ],
        },
        role: {
          title: 'Minha atuação',
          intro:
            'Atuei por quase 4 anos no desenvolvimento e na evolução do produto, da implementação de funcionalidades e integrações a otimizações, implantação e suporte em produção. O foco foi o front-end em Flutter, mas o trabalho também envolveu integrações nativas, serviços de back-end e fluxos de pagamento e emissão fiscal.',
          items: [
            { title: 'Interfaces multiplataforma', text: 'Interfaces intuitivas e responsivas, adaptadas de smartphones e terminais compactos até grandes totens de autoatendimento.' },
            { title: 'Integrações de pagamento', text: 'Desenvolvimento e manutenção de integrações com SiTef e terminais de pagamento: comunicação com o equipamento, processamento de transações e tratamento dos diferentes cenários da operação.' },
            { title: 'Performance de ponta a ponta', text: 'Refatoração dos fluxos críticos de finalização de venda e emissão fiscal, do back-end ao front-end, para reduzir o tempo de processamento e melhorar a experiência de quem opera.' },
            { title: 'Evolução funcional', text: 'Gestão de comandas, personalização de pedidos, acompanhamento da produção, pagamentos e impressão de documentos.' },
            { title: 'Implantação e suporte', text: 'Mais de 15 implantações em clientes, com acompanhamento presencial, investigação de problemas em ambientes reais e melhorias guiadas pela operação.' },
          ],
        },
        features: {
          title: 'O que o sistema faz',
          items: [
            { title: 'Modalidades de atendimento', text: 'Comandas de mesa e avulsas, com mesas organizadas por ambiente, para balcão, salão ou autoatendimento.' },
            { title: 'Pedidos sob medida', text: 'Adicionais e observações em cada item, cancelamento de itens e transferência de comandas.' },
            { title: 'Produção em tempo real', text: 'Os pedidos seguem direto para a produção, e o preparo pode ser acompanhado em tempo real.' },
            { title: 'Pagamento na mesa', text: 'Integração com terminais Gertec, Clover e Cielo, com taxa de serviço e divisão da conta por pessoa, sem precisar ir até o caixa.' },
            { title: 'Fiscal e impressão', text: 'Emissão de NF-e e NFC-e e impressão de contas, documentos fiscais e comprovantes de pagamento.' },
            { title: 'Autoatendimento', text: 'A mesma solução se adapta a totens de autoatendimento e a pedidos via QR Code.' },
            { title: 'Cardápio visual', text: 'Cardápio com fotos e organizado por categorias, com busca para encontrar qualquer item rápido durante o atendimento.' },
            { title: 'Gestão e análise', text: 'Módulos de gestão e de análise, com gráficos para acompanhar o movimento, no mesmo app usado no salão.' },
          ],
        },
        decisions: {
          title: 'Desafios técnicos',
          items: [
            { title: 'Uma interface, muitos formatos', text: 'O mesmo produto roda em smartphones, terminais de pagamento com telas compactas e totens verticais e horizontais, cada um com seu próprio contexto de uso.' },
            { title: 'Software que conversa com hardware', text: 'Pagamentos dependem da comunicação com equipamentos físicos e bibliotecas como o SiTef. O fluxo precisa se manter claro e confiável em todos os cenários da operação.' },
            { title: 'Performance no momento crítico', text: 'Finalizar a venda e emitir a nota é o momento em que o cliente está esperando. Otimizar esse fluxo exigiu atuar do back-end ao front-end.' },
            { title: 'Do código ao salão', text: 'Acompanhar implantações presencialmente mostrou problemas que só aparecem na operação real. Esses aprendizados viraram fonte direta de melhorias no produto.' },
          ],
        },
        outcome: {
          title: 'Impacto e aprendizados',
          paragraphs: [
            'Trabalhar no Atendimento by Hipcom me deu experiência com um produto comercial usado em operações reais, em que performance, confiabilidade e usabilidade não são opcionais.',
            'Os desafios foram muito além das interfaces: comunicação entre plataformas, integração com equipamentos físicos, fluxos fiscais e problemas em produção. Isso fortaleceu minha visão end-to-end: hoje entendo como decisões de arquitetura, interface e performance chegam direto na experiência do usuário e na eficiência do negócio.',
          ],
        },
      },
      en: {
        name: 'Atendimento by Hipcom',
        tagline: 'Cross-platform restaurant service',
        badge: 'Professional · HIPCOM',
        summary:
          'Cross-platform system that connects the whole restaurant service flow, from order to kitchen and from payment to invoice, right at the table.',
        intro:
          'A cross-platform system for managing and streamlining restaurant service, connecting every step of the operation: from taking the order and sending it to the kitchen to payment and tax invoicing, right at the guest’s table.',
        meta: [
          { label: 'Type', value: 'Commercial product' },
          { label: 'Company', value: 'HIPCOM ERP' },
          { label: 'My time on it', value: 'Almost 4 years' },
          { label: 'Platforms', value: 'Phones, terminals and kiosks' },
        ],
        context: {
          title: 'Context',
          paragraphs: [
            'In a restaurant, each step of service usually lives somewhere else: the order on paper, preparation in the kitchen, payment at the cashier. Every trip in between is lost time for staff and waiting time for guests.',
            'Atendimento by Hipcom brings it all into a single flow. With table and standalone tabs, it adapts to counter, dining room and self-service operations, bringing payment, printing and tax documents to the table.',
          ],
        },
        role: {
          title: 'My role',
          intro:
            'I worked on the product for almost 4 years, from building features and integrations to optimization, rollout and production support. My focus was the Flutter front-end, but the work also covered native integrations, back-end services and payment and tax invoicing flows.',
          items: [
            { title: 'Cross-platform interfaces', text: 'Intuitive, responsive interfaces adapted from smartphones and compact terminals to large self-service kiosks.' },
            { title: 'Payment integrations', text: 'Building and maintaining integrations with SiTef and payment terminals: device communication, transaction processing and handling the many scenarios of a real operation.' },
            { title: 'End-to-end performance', text: 'Refactoring the critical checkout and tax invoicing flows, from back-end to front-end, to cut processing time and improve the operator experience.' },
            { title: 'Feature development', text: 'Tab management, order customization, kitchen tracking, payments and document printing.' },
            { title: 'Rollout & support', text: 'Over 15 client rollouts, including on-site support, investigating issues in real environments and shipping improvements driven by the operation.' },
          ],
        },
        features: {
          title: 'What the system does',
          items: [
            { title: 'Service modes', text: 'Table and standalone tabs, with tables organized by area, for counter, dining room or self-service.' },
            { title: 'Custom orders', text: 'Add-ons and notes on every item, item cancellation and tab transfers.' },
            { title: 'Real-time kitchen', text: 'Orders go straight to preparation, which can be tracked in real time.' },
            { title: 'Pay at the table', text: 'Integration with Gertec, Clover and Cielo terminals, with service charge and per-person bill splitting, so no one has to walk to the cashier.' },
            { title: 'Tax & printing', text: 'NF-e and NFC-e tax invoices, plus printing of bills, tax documents and payment receipts.' },
            { title: 'Self-service', text: 'The same solution adapts to self-service kiosks and QR Code ordering.' },
            { title: 'Visual menu', text: 'A photo menu organized by category, with search to find any item quickly during service.' },
            { title: 'Management & insights', text: 'Management and analytics modules, with charts to follow the day’s activity, in the same app used on the floor.' },
          ],
        },
        decisions: {
          title: 'Technical challenges',
          items: [
            { title: 'One interface, many formats', text: 'The same product runs on smartphones, payment terminals with compact screens and vertical and horizontal kiosks, each with its own context of use.' },
            { title: 'Software talking to hardware', text: 'Payments depend on communicating with physical devices and libraries like SiTef. The flow has to stay clear and reliable in every operational scenario.' },
            { title: 'Performance when it matters', text: 'Closing the sale and issuing the invoice is exactly when the guest is waiting. Optimizing that flow meant working from back-end to front-end.' },
            { title: 'From code to the dining room', text: 'Following rollouts on site surfaced problems that only appear in real operations. Those findings became a direct source of product improvements.' },
          ],
        },
        outcome: {
          title: 'Impact & learnings',
          paragraphs: [
            'Working on Atendimento by Hipcom gave me experience with a commercial product used in real operations, where performance, reliability and usability are not optional.',
            'The challenges went far beyond interfaces: cross-platform communication, integration with physical devices, tax flows and production issues. It strengthened my end-to-end view: I now understand how architecture, interface and performance decisions reach the user experience and the efficiency of the business.',
          ],
        },
      },
    },
  },
  {
    slug: 'kynori',
    hue: 'violet',
    screenTone: '#faf6f1',
    stack: ['Claude Code', 'Codex', 'React', 'TypeScript', 'Capacitor'],
    links: {
      preview: 'https://trainify-psi.vercel.app',
      github: ['https://github.com/isabelafagundes/kynori'],
    },
    mockups: [
      { kind: 'phone', src: '/projects/kynori/welcome.webp', tone: '#f7f3ed', alt: { pt: 'Boas-vindas', en: 'Welcome' } },
      { kind: 'phone', src: '/projects/kynori/home.webp', alt: { pt: 'Próximo treino e sequência', en: 'Next workout and streak' } },
      { kind: 'phone', src: '/projects/kynori/workout.webp', alt: { pt: 'Registro de séries com timer de descanso', en: 'Set logging with rest timer' } },
    ],
    gallery: [
      { kind: 'phone', src: '/projects/kynori/muscles.webp', tone: '#aeaaa9', alt: { pt: 'Mapa de ativação muscular', en: 'Muscle activation map' } },
      { kind: 'phone', src: '/projects/kynori/history.webp', alt: { pt: 'Histórico de treinos', en: 'Workout history' } },
      { kind: 'phone', src: '/projects/kynori/stats.webp', alt: { pt: 'Estatísticas', en: 'Statistics' } },
    ],
    copy: {
      pt: {
        name: 'Kynori',
        tagline: 'Acompanhamento de treinos',
        badge: 'Projeto pessoal',
        summary:
          'Projeto pessoal conduzido com desenvolvimento assistido por IA, da especificação funcional e UX/UI à prototipação, aos testes e à evolução do produto.',
        intro:
          'Movimento que vira progresso. Um app de treino para organizar rotinas, registrar musculação e cardio com o mínimo de atrito e tornar a evolução visível, sem transformar o treino em um painel complexo.',
        meta: [
          { label: 'Tipo', value: 'Projeto pessoal' },
          { label: 'Papel', value: 'Produto, UX/UI e desenvolvimento' },
          { label: 'Plataformas', value: 'Android, iOS e web' },
          { label: 'Método', value: 'Desenvolvimento assistido por IA' },
        ],
        context: {
          title: 'O problema',
          paragraphs: [
            'Apps de treino costumam errar para um de dois lados: planilhas disfarçadas, cheias de campos, ou apps barulhentos com linguagem de "treinador gritando metas". Nos dois casos, registrar um treino vira trabalho, e a constância sofre.',
            'O Kynori parte da rotina real: treinos mudam, cargas variam, fichas são copiadas e nem todo dia precisa virar uma análise profunda. O sucesso não é o usuário passar mais tempo no app, e sim treinar melhor e seguir em movimento.',
          ],
        },
        role: {
          title: 'Minha atuação',
          items: [
            'Especificação funcional e direção de produto.',
            'Naming e identidade: "Kyn-" vem de kínēsis, movimento em grego.',
            'UX/UI mobile-first, tom de voz e microinterações.',
            'Implementação assistida por IA (Claude Code e Codex), testes e evolução contínua.',
          ],
        },
        features: {
          title: 'Funcionalidades',
          items: [
            { title: 'Programas e fichas', text: 'Criar, copiar e reutilizar fichas entre programas, com um programa ativo por vez e exercícios personalizados.' },
            { title: 'Execução do treino', text: 'Registro de séries, repetições e cargas durante a sessão, com timer de descanso por exercício e notas.' },
            { title: 'Cardio opcional', text: 'Tipo, duração e observações registrados junto da sessão de musculação.' },
            { title: 'Histórico e progressão', text: 'Evolução por exercício com base nas sessões anteriores, sempre visível durante o treino.' },
            { title: 'Mapa muscular', text: 'Ativação estimada de cada músculo, de frente e de costas, para entender o que cada exercício trabalha.' },
            { title: 'Estatísticas', text: 'Resumo, exercícios e cardio: sequência, recorde, volume semanal, tempo total e carga levantada.' },
            { title: 'Constância', text: 'Meta semanal, sequência de treinos e atividade da semana, reforçadas de forma discreta.' },
            { title: 'Backup', text: 'Exportação e importação dos dados, com persistência local no dispositivo.' },
          ],
        },
        decisions: {
          title: 'Decisões de design e engenharia',
          items: [
            { title: 'Tom calmo e direto', text: 'Inspiração em apps de produtividade: hierarquia simples, ações claras e personalidade usada para orientar, não para pressionar.' },
            { title: 'Arquitetura em camadas', text: 'domain, application, infrastructure e interface separados, para evoluir a UI e trocar fontes de dados sem espalhar regra de negócio pelas telas.' },
            { title: 'Uma base, três plataformas', text: 'Com a IA, escolhi React + Capacitor para Android, iOS e web, com integrações nativas: haptics, notificações locais, safe area e compartilhamento.' },
            { title: 'Local-first', text: 'Dados salvos no dispositivo via Capacitor Preferences e Filesystem, com backups exportáveis.' },
            { title: 'Qualidade', text: 'Vitest e Testing Library para testes unitários e de comportamento, com ESLint padronizando o código.' },
          ],
        },
        outcome: {
          title: 'Aprendizados',
          paragraphs: [
            'O Kynori foi meu laboratório para conduzir um produto de ponta a ponta com IA: especificar bem, prototipar rápido e revisar com critério. A qualidade do resultado veio menos de gerar código e mais de decidir o que construir e o que deixar de fora.',
          ],
        },
      },
      en: {
        name: 'Kynori',
        tagline: 'Workout tracking app',
        badge: 'Personal project',
        summary:
          'Personal project driven by AI-assisted development, from functional specs and UX/UI to prototyping, testing and product evolution.',
        intro:
          'Movement that becomes progress. A workout app to organize routines, log strength and cardio sessions with minimal friction and make progress visible, without turning training into a complex dashboard.',
        meta: [
          { label: 'Type', value: 'Personal project' },
          { label: 'Role', value: 'Product, UX/UI and development' },
          { label: 'Platforms', value: 'Android, iOS and web' },
          { label: 'Method', value: 'AI-assisted development' },
        ],
        context: {
          title: 'The problem',
          paragraphs: [
            'Workout apps usually fail in one of two ways: spreadsheets in disguise, full of fields, or loud apps that sound like a coach yelling goals. Either way, logging a workout becomes a chore, and consistency suffers.',
            "Kynori starts from real routines: workouts change, loads vary, plans get copied and not every day needs deep analysis. Success isn't more time in the app. It's training better and staying in motion.",
          ],
        },
        role: {
          title: 'My role',
          items: [
            'Functional specs and product direction.',
            'Naming and identity: "Kyn-" comes from kínēsis, Greek for movement.',
            'Mobile-first UX/UI, tone of voice and micro-interactions.',
            'AI-assisted implementation (Claude Code and Codex), testing and continuous evolution.',
          ],
        },
        features: {
          title: 'Features',
          items: [
            { title: 'Programs & plans', text: 'Create, copy and reuse workout plans across programs, with one active program at a time and custom exercises.' },
            { title: 'Workout logging', text: 'Log sets, reps and loads during the session, with a per-exercise rest timer and notes.' },
            { title: 'Optional cardio', text: 'Type, duration and notes logged alongside the strength session.' },
            { title: 'History & progression', text: 'Per-exercise progress based on previous sessions, always visible during the workout.' },
            { title: 'Muscle map', text: 'Estimated activation for each muscle, front and back, to understand what every exercise works.' },
            { title: 'Statistics', text: 'Summary, exercises and cardio: streak, personal best, weekly volume, total time and load lifted.' },
            { title: 'Consistency', text: 'Weekly goal, workout streak and weekly activity, reinforced subtly.' },
            { title: 'Backup', text: 'Data export and import, with local on-device persistence.' },
          ],
        },
        decisions: {
          title: 'Design & engineering decisions',
          items: [
            { title: 'Calm, direct tone', text: 'Inspired by productivity apps: simple hierarchy, clear actions and personality used to guide, not to pressure.' },
            { title: 'Layered architecture', text: 'domain, application, infrastructure and interface kept apart, so the UI can evolve and data sources can change without leaking business rules into screens.' },
            { title: 'One codebase, three platforms', text: 'Working with AI, I chose React + Capacitor for Android, iOS and web, with native integrations: haptics, local notifications, safe area and sharing.' },
            { title: 'Local-first', text: 'Data stored on device via Capacitor Preferences and Filesystem, with exportable backups.' },
            { title: 'Quality', text: 'Vitest and Testing Library for unit and behavior tests, with ESLint keeping the code consistent.' },
          ],
        },
        outcome: {
          title: 'Learnings',
          paragraphs: [
            'Kynori was my lab for running a product end to end with AI: write good specs, prototype fast and review with judgment. The quality came less from generating code and more from deciding what to build and what to leave out.',
          ],
        },
      },
    },
  },
  {
    slug: 'leituramiga',
    hue: 'rose',
    screenTone: '#ebeee6',
    stack: ['Flutter', 'Dart', 'Java', 'Quarkus', 'MySQL'],
    links: {
      preview: 'https://leituramiga.vercel.app',
      github: [
        'https://github.com/isabelafagundes/leituramiga-FLUTTER',
        'https://github.com/isabelafagundes/leituramiga-api-QUARKUS',
      ],
    },
    mockups: [
      {
        kind: 'browser',
        src: '/projects/leituramiga/desktop-home.webp',
        url: 'leituramiga.vercel.app',
        alt: { pt: 'Catálogo de livros no desktop', en: 'Book catalog on desktop' },
      },
      { kind: 'phone', src: '/projects/leituramiga/home.webp', ratio: 720 / 1356, alt: { pt: 'Catálogo no celular', en: 'Catalog on mobile' } },
    ],
    gallery: [
      {
        kind: 'browser',
        src: '/projects/leituramiga/desktop-book-form.webp',
        url: 'leituramiga.vercel.app',
        alt: { pt: 'Cadastro de livro', en: 'Adding a book' },
      },
      { kind: 'phone', src: '/projects/leituramiga/book.webp', ratio: 720 / 1356, alt: { pt: 'Detalhes do livro', en: 'Book details' } },
      { kind: 'phone', src: '/projects/leituramiga/add-book.webp', ratio: 720 / 1356, alt: { pt: 'Cadastro de livro no celular', en: 'Adding a book on mobile' } },
      { kind: 'phone', src: '/projects/leituramiga/profile.webp', ratio: 720 / 1356, alt: { pt: 'Perfil do leitor', en: 'Reader profile' } },
      { kind: 'phone', src: '/projects/leituramiga/requests.webp', ratio: 720 / 1356, tone: '#454a53', alt: { pt: 'Solicitações em andamento', en: 'Ongoing requests' } },
      { kind: 'phone', src: '/projects/leituramiga/request-detail.webp', ratio: 720 / 1356, tone: '#454a53', alt: { pt: 'Detalhes da solicitação', en: 'Request details' } },
      { kind: 'phone', src: '/projects/leituramiga/menu.webp', ratio: 720 / 1356, tone: '#37393f', alt: { pt: 'Menu com ajuste de fonte e tema', en: 'Menu with font size and theme settings' } },
    ],
    copy: {
      pt: {
        name: 'LeiturAmiga',
        tagline: 'Compartilhamento de livros',
        badge: 'TCC · FATEC',
        summary:
          'Plataforma full-stack desenvolvida de ponta a ponta: interface, APIs, arquitetura e modelagem de dados. TCC com nota máxima.',
        intro:
          'Uma plataforma para trocar, emprestar e doar livros entre estudantes e democratizar o acesso à leitura. Desenvolvida de ponta a ponta, do Flutter à API em Quarkus.',
        meta: [
          { label: 'Tipo', value: 'Trabalho de graduação' },
          { label: 'Instituição', value: 'FATEC Santana de Parnaíba' },
          { label: 'Ano', value: '2024' },
          { label: 'Resultado', value: 'Nota máxima' },
          { label: 'Status', value: 'Preview com dados fictícios' },
        ],
        context: {
          title: 'O problema',
          paragraphs: [
            'Segundo o PISA 2022, metade dos estudantes brasileiros avaliados teve baixo desempenho em leitura, e os melhores resultados se concentraram nas classes mais privilegiadas. O preço do livro é uma barreira real.',
            'O LeiturAmiga nasce para reduzir essa barreira: conectar quem tem livros parados na estante a quem quer ler, começando pelas comunidades universitárias.',
          ],
        },
        role: {
          title: 'Minha atuação',
          items: [
            'Interface em Flutter, responsiva para web e celular.',
            'API REST em Java com Quarkus.',
            'Arquitetura da solução e modelagem de dados em MySQL.',
            'Documentação e defesa do trabalho de graduação.',
          ],
        },
        features: {
          title: 'Funcionalidades',
          items: [
            { title: 'Troca, empréstimo ou doação', text: 'Cada livro indica as formas de compartilhamento aceitas, e o leitor escolhe a sua ao fazer o pedido.' },
            { title: 'Solicitações e notificações', text: 'Pedidos com data e endereço de encontro, acompanhados por quem pede e por quem recebe.' },
            { title: 'Cadastro de livros', text: 'Foto da capa, autor, descrição, estado físico, categorias e tipos de solicitação aceitos.' },
            { title: 'Busca e filtros', text: 'Por título, categoria, tipo de solicitação, estado, cidade e instituição de ensino.' },
            { title: 'Perfis de leitores', text: 'Instituição, cidade, livros disponíveis e comentários de outros leitores.' },
            { title: 'Acessibilidade', text: 'Ajuste de tamanho de fonte e alternância de tema direto na interface.' },
            { title: 'Escolha de livros e entrega', text: 'Na troca, cada lado escolhe os livros da negociação, e o pedido registra a forma de entrega, como Correios, e informações adicionais.' },
            { title: 'Calendário e histórico', text: 'Calendário para acompanhar as datas de entrega combinadas e histórico com as solicitações já finalizadas.' },
          ],
        },
        decisions: {
          title: 'Decisões técnicas',
          items: [
            { title: 'Flutter na web', text: 'Uma única base de código com layout adaptativo: menu lateral no desktop e navegação inferior no celular.' },
            { title: 'Quarkus no back-end', text: 'APIs de alta performance e baixo consumo de recursos, adequadas a um projeto com infraestrutura enxuta.' },
            { title: 'Dados relacionais', text: 'Usuários, livros, instituições e localização modelados em MySQL, documentados em UML.' },
          ],
        },
        outcome: {
          title: 'Resultado',
          paragraphs: [
            'O projeto foi aprovado com nota máxima. Ele não está em produção: o link abre um preview com dados fictícios, para mostrar o fluxo completo. Foi minha primeira experiência construindo um produto completo, da pergunta "por quê?" ao deploy.',
          ],
        },
      },
      en: {
        name: 'LeiturAmiga',
        tagline: 'Book sharing platform',
        badge: 'Thesis · FATEC',
        summary:
          'Full-stack platform built end to end: interface, APIs, architecture and data modeling. Final thesis project, graded with top marks.',
        intro:
          'A platform for students to trade, lend and donate books and make reading more accessible. Built end to end, from Flutter to a Quarkus API.',
        meta: [
          { label: 'Type', value: 'Final thesis project' },
          { label: 'Institution', value: 'FATEC Santana de Parnaíba' },
          { label: 'Year', value: '2024' },
          { label: 'Result', value: 'Top marks' },
          { label: 'Status', value: 'Preview with mock data' },
        ],
        context: {
          title: 'The problem',
          paragraphs: [
            'According to PISA 2022, half of the Brazilian students assessed performed poorly in reading, and the best results were concentrated among wealthier students. The price of books is a real barrier.',
            'LeiturAmiga was created to lower that barrier: connecting people with books sitting on their shelves to people who want to read, starting with university communities.',
          ],
        },
        role: {
          title: 'My role',
          items: [
            'Flutter interface, responsive across web and mobile.',
            'REST API in Java with Quarkus.',
            'Solution architecture and MySQL data modeling.',
            'Documentation and thesis defense.',
          ],
        },
        features: {
          title: 'Features',
          items: [
            { title: 'Trade, lend or donate', text: 'Each book shows which sharing options it accepts, and readers pick one when making a request.' },
            { title: 'Requests & notifications', text: 'Requests with a meeting date and address, tracked by both the requester and the owner.' },
            { title: 'Adding books', text: 'Cover photo, author, description, physical condition, categories and accepted request types.' },
            { title: 'Search & filters', text: 'By title, category, request type, state, city and school.' },
            { title: 'Reader profiles', text: 'School, city, available books and comments from other readers.' },
            { title: 'Accessibility', text: 'Font size adjustment and theme toggle built into the interface.' },
            { title: 'Book selection & delivery', text: 'In a trade, each side picks the books involved, and the request records the delivery method, such as mail, plus any extra notes.' },
            { title: 'Calendar & history', text: 'A calendar to keep track of agreed delivery dates and a history of completed requests.' },
          ],
        },
        decisions: {
          title: 'Technical decisions',
          items: [
            { title: 'Flutter on the web', text: 'A single codebase with an adaptive layout: side menu on desktop and bottom navigation on mobile.' },
            { title: 'Quarkus back-end', text: 'High-performance, low-footprint APIs, a good fit for a project with lean infrastructure.' },
            { title: 'Relational data', text: 'Users, books, institutions and location modeled in MySQL and documented in UML.' },
          ],
        },
        outcome: {
          title: 'Outcome',
          paragraphs: [
            'The project was approved with top marks. It is not in production: the link opens a preview with mock data that shows the full flow. It was my first time building a complete product, from the "why?" to deployment.',
          ],
        },
      },
    },
  },
]

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug)
