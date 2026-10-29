export type Lang = 'pt' | 'en'

export const links = {
  email: 'isabelafagundesdev@gmail.com',
  linkedin: 'https://linkedin.com/in/isabeladev',
  github: 'https://github.com/isabelafagundes',
  resume: 'https://drive.google.com/file/d/1NQs71bawfkZ0qnSOgkci6VWecfctFbNG/view?usp=sharing',
}

type Content = {
  nav: { about: string; experience: string; projects: string; stack: string; contact: string }
  hero: { eyebrow: string; role: string; intro: string; ctaProjects: string; ctaContact: string; location: string; photoAlt: string }
  about: { label: string; title: string; paragraphs: string[] }
  experience: {
    label: string
    title: string
    company: string
    place: string
    roles: { title: string; period: string }[]
    highlights: { title: string; text: string }[]
    education: { label: string; course: string; school: string }
  }
  projects: { label: string; title: string; code: string; preview: string; store: string; site: string; videos: string; videosNote: string; unmute: string; mute: string; viewCase: string; back: string; next: string; stack: string; gallery: string }
  stack: {
    label: string
    title: string
    groups: { name: string; items: { name: string; desc: string }[] }[]
    certs: { issuer: string; name: string; url: string; image: string; accent: string; imageAlt: string }[]
    certsLabel: string
    credential: string
  }
  contact: {
    label: string
    title: string
    text: string
    copy: string
    copied: string
    resume: string
    form: {
      name: string
      email: string
      message: string
      messagePlaceholder: string
      send: string
      sending: string
      sent: string
      error: string
      subject: string
    }
  }
  footer: string
}

export const content: Record<Lang, Content> = {
  pt: {
    nav: { about: 'Sobre', experience: 'Experiência', projects: 'Projetos', stack: 'Stack', contact: 'Contato' },
    hero: {
      eyebrow: 'Portfolio · 2026',
      role: 'Desenvolvedora Full-stack',
      intro:
        'Do front ao back: interfaces em Flutter, APIs em Go e Java, integrações de pagamento e fluxos fiscais, do totem de autoatendimento à palma da mão.',
      ctaProjects: 'Ver projetos',
      ctaContact: 'Fale comigo',
      location: 'São Paulo, SP',
      photoAlt: 'Foto de Isabela Fagundes',
    },
    about: {
      label: 'Sobre',
      title: 'Do front ao back, com visão de produto',
      paragraphs: [
        'Sou desenvolvedora Full-stack Pleno e gosto de construir produtos de ponta a ponta: da interface à API, da modelagem dos dados à experiência de quem usa. Trabalho principalmente com Flutter e Dart no front-end e com Go e Java (Quarkus) no back-end. Tenho um carinho especial por UI/UX e design systems, e gosto de entender o problema antes de escrever a primeira linha de código.',
      ],
    },
    experience: {
      label: 'Experiência',
      title: 'Trajetória',
      company: 'HIPCOM ERP',
      place: 'São Paulo, SP · Remoto',
      roles: [
        { title: 'Desenvolvedora Full-stack Pleno', period: 'Fev 2026 até hoje' },
        { title: 'Desenvolvedora Júnior', period: 'Fev 2024 a Fev 2026' },
        { title: 'Estagiária de Desenvolvimento', period: 'Fev 2023 a Fev 2024' },
      ],
      highlights: [
        { title: 'Front-end multiplataforma', text: 'Interfaces responsivas em Flutter, de terminais compactos a totens, com Design Systems, tempo real via Centrifuge e participação nas decisões de UI/UX.' },
        { title: 'Back-end e APIs', text: 'Desenvolvimento e manutenção de APIs REST em Go e Java (Quarkus), com MySQL e SQLite: modelagem, migração e versionamento de dados.' },
        { title: 'Pagamentos e integrações', text: 'Fluxos de pagamento via DLLs em 4+ plataformas e ambientes, incluindo Windows, Linux, totens e terminais de pagamento.' },
        { title: 'Performance de ponta a ponta', text: 'Otimizações no back-end e no front-end reduziram o tempo de finalização de vendas em mais de 66%, de 15s+ para menos de 5s.' },
        { title: 'Implantação e qualidade', text: 'Implantação em 15+ clientes, inclusive presencialmente, e roteiros de teste cobrindo 20+ módulos para reduzir bugs em produção.' },
        { title: 'Eficiência com IA', text: 'Desenvolvimento assistido por IA com especificação e prototipação, levando novos módulos de semanas para dias.' },
      ],
      education: { label: 'Formação', course: 'Tecnologia em Análise e Desenvolvimento de Sistemas', school: 'FATEC Santana de Parnaíba · 2024' },
    },
    projects: {
      label: 'Projetos',
      title: 'Coisas que eu construí',
      code: 'Código',
      preview: 'Preview',
      store: 'Google Play',
      site: 'Página do produto',
      videos: 'Em vídeo',
      videosNote: 'Vídeos da Hipcom ERP no YouTube.',
      unmute: 'Ativar som',
      mute: 'Desativar som',
      viewCase: 'Ver projeto',
      back: 'Voltar',
      next: 'Próximo projeto',
      stack: 'Tecnologias',
      gallery: 'Telas',
    },
    stack: {
      label: 'Stack',
      title: 'Ferramentas do dia a dia',
      groups: [
        {
          name: 'Front-end & mobile',
          items: [
            { name: 'Flutter', desc: 'Framework do Google para criar apps nativos a partir de um único código. É onde construo as interfaces de celulares, terminais de pagamento e totens.' },
            { name: 'Dart', desc: 'Linguagem tipada e compilada por trás do Flutter, com null safety e código assíncrono simples de ler.' },
            { name: 'Design Systems', desc: 'Bibliotecas de componentes, cores e tipografia que mantêm várias telas e produtos consistentes.' },
            { name: 'UI/UX', desc: 'Pensar no fluxo antes da tela: hierarquia, estados de erro e carregamento, e o uso real em loja, muitas vezes com pressa.' },
            { name: 'Interfaces responsivas', desc: 'Layouts que se adaptam de um celular a um totem de tela grande sem perder a legibilidade.' },
            { name: 'Crashlytics', desc: 'Monitoramento de falhas do Firebase: relatórios de crash em produção para encontrar e corrigir erros mais rápido.' },
          ],
        },
        {
          name: 'Back-end & APIs',
          items: [
            { name: 'Go', desc: 'Linguagem do Google, simples e rápida, com concorrência nativa. Boa para serviços e APIs leves.' },
            { name: 'Java', desc: 'Linguagem madura e fortemente tipada, base de boa parte dos sistemas corporativos.' },
            { name: 'Quarkus', desc: 'Framework Java pensado para nuvem e containers, com inicialização rápida e baixo consumo de memória.' },
            { name: 'APIs REST', desc: 'Contratos HTTP claros entre apps e servidor: recursos, verbos, códigos de status e versionamento.' },
            { name: 'AWS', desc: 'Serviços de nuvem da Amazon para hospedar e rodar aplicações e dados.' },
          ],
        },
        {
          name: 'Dados',
          items: [
            { name: 'SQL', desc: 'Linguagem para consultar e organizar dados relacionais: joins, agregações e índices.' },
            { name: 'MySQL', desc: 'Banco relacional usado nos servidores, onde ficam os dados centrais.' },
            { name: 'SQLite', desc: 'Banco embutido no próprio dispositivo, que deixa o app funcionar mesmo sem internet.' },
            { name: 'Modelagem de dados', desc: 'Desenhar tabelas e relações que seguem as regras do negócio e continuam fáceis de evoluir.' },
            { name: 'Migrações', desc: 'Mudanças versionadas no banco, aplicadas com segurança em cada instalação.' },
          ],
        },
        {
          name: 'Integrações',
          items: [
            { name: 'SiTef', desc: 'Plataforma de pagamento eletrônico muito usada no varejo brasileiro para processar transações de cartão nos terminais.' },
            { name: 'Terminais de pagamento', desc: 'Maquininhas e POS Android onde o app roda junto com o fluxo de pagamento.' },
            { name: 'DLLs', desc: 'Bibliotecas nativas do Windows, chamadas pelo app para conversar com hardware e sistemas de terceiros.' },
            { name: 'Integrações nativas', desc: 'Pontes entre o Flutter e o sistema operacional (Android, Windows) para recursos como impressoras e leitores.' },
          ],
        },
        {
          name: 'Práticas',
          items: [
            { name: 'Clean Architecture', desc: 'Separar a regra de negócio do framework, do banco e da interface, para testar e trocar peças sem efeito cascata.' },
            { name: 'DDD', desc: 'Modelar o código com a linguagem do próprio negócio, em domínios com limites claros.' },
            { name: 'MVC', desc: 'Divide a aplicação em modelo, visão e controle, cada um com sua responsabilidade.' },
            { name: 'Git', desc: 'Versionamento com branches, revisão de código e um histórico fácil de seguir.' },
            { name: 'Bitbucket', desc: 'Repositórios Git com pull requests e revisão de código em equipe.' },
            { name: 'CI/CD', desc: 'Build, testes e entrega automáticos a cada mudança.' },
            { name: 'Linux', desc: 'Ambiente dos servidores e do terminal no dia a dia.' },
            { name: 'Scrum', desc: 'Trabalho em sprints curtas, com planejamento, revisão e retrospectiva.' },
            { name: 'Kanban', desc: 'Fluxo contínuo visualizado em quadro, com limite de tarefas em andamento.' },
          ],
        },
        {
          name: 'IA no fluxo de trabalho',
          items: [
            { name: 'Desenvolvimento assistido por IA', desc: 'Uso IA para explorar soluções, revisar código e acelerar tarefas repetitivas, sempre conferindo o resultado.' },
            { name: 'Claude Code', desc: 'Agente de programação da Anthropic que trabalha direto no terminal e no código do projeto.' },
            { name: 'Codex', desc: 'Agente de programação da OpenAI para escrever, explicar e refatorar código.' },
            { name: 'CircleCI', desc: 'Plataforma de CI/CD para build, testes e deploy automáticos. Minha experiência com ela vem do desenvolvimento assistido por IA.' },
          ],
        },
      ],
      certs: [
        {
          issuer: 'Microsoft · AZ-900 · 2022',
          name: 'Microsoft Certified: Azure Fundamentals',
          url: 'https://www.credly.com/badges/3c7a3f06-16e1-4177-b7a8-acd287c554cc',
          image: '/certs/azure-fundamentals.webp',
          accent: '#3b8be6',
          imageAlt: 'Selo Microsoft Certified: Azure Fundamentals',
        },
        {
          issuer: 'DIO · Bootcamp GFT · 55 horas · 2022',
          name: 'GFT Start Woman Java',
          url: 'https://www.dio.me/certificate/AB2640FC/share',
          image: '/certs/gft-start-woman-java.webp',
          accent: '#e05ad6',
          imageAlt: 'Selo do bootcamp GFT Start Woman Java',
        },
      ],
      certsLabel: 'Certificações',
      credential: 'Ver credencial',
    },
    contact: {
      label: 'Contato',
      title: 'Vamos criar algo juntos?',
      text: 'Estou aberta a novas oportunidades e conversas sobre desenvolvimento full-stack, integrações e produto.',
      copy: 'Copiar e-mail',
      copied: 'Copiado!',
      resume: 'Ver currículo',
      form: {
        name: 'Nome',
        email: 'E-mail',
        message: 'Mensagem',
        messagePlaceholder: 'Conte um pouco sobre a oportunidade, o projeto ou a sua dúvida.',
        send: 'Enviar mensagem',
        sending: 'Enviando...',
        sent: 'Mensagem enviada! Respondo assim que puder.',
        error: 'Não consegui enviar agora. Tente de novo ou escreva direto para o meu e-mail.',
        subject: 'Nova mensagem pelo portfolio',
      },
    },
    footer: 'Criado com desenvolvimento assistido por IA.',
  },
  en: {
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', stack: 'Stack', contact: 'Contact' },
    hero: {
      eyebrow: 'Portfolio · 2026',
      role: 'Full-stack Developer',
      intro:
        'Front to back: Flutter interfaces, Go and Java APIs, payment integrations and tax flows, from self-service kiosks to the palm of your hand.',
      ctaProjects: 'See projects',
      ctaContact: 'Get in touch',
      location: 'São Paulo, Brazil',
      photoAlt: 'Photo of Isabela Fagundes',
    },
    about: {
      label: 'About',
      title: 'Front to back, with a product mindset',
      paragraphs: [
        'I’m a mid-level Full-stack Developer who likes building products end to end: from the interface to the API, from data modeling to the experience of the people using it. I work mostly with Flutter and Dart on the front-end and Go and Java (Quarkus) on the back-end. I have a soft spot for UI/UX and design systems, and I like to understand the problem before writing the first line of code.',
      ],
    },
    experience: {
      label: 'Experience',
      title: 'Journey',
      company: 'HIPCOM ERP',
      place: 'São Paulo, Brazil · Remote',
      roles: [
        { title: 'Mid-level Full-stack Developer', period: 'Feb 2026 to present' },
        { title: 'Junior Developer', period: 'Feb 2024 to Feb 2026' },
        { title: 'Software Development Intern', period: 'Feb 2023 to Feb 2024' },
      ],
      highlights: [
        { title: 'Cross-platform front-end', text: 'Responsive Flutter interfaces, from compact terminals to kiosks, with Design Systems, real-time updates via Centrifuge and a voice in UI/UX decisions.' },
        { title: 'Back-end & APIs', text: 'Building and maintaining REST APIs in Go and Java (Quarkus), with MySQL and SQLite: data modeling, migrations and versioning.' },
        { title: 'Payments & integrations', text: 'Payment flows via DLLs across 4+ platforms and environments, including Windows, Linux, kiosks and payment terminals.' },
        { title: 'End-to-end performance', text: 'Back-end and front-end optimizations cut checkout completion time by more than 66%, from 15s+ to under 5s.' },
        { title: 'Rollout & quality', text: 'Rollouts at 15+ clients, including on site, and test plans covering 20+ modules to reduce production bugs.' },
        { title: 'AI-assisted efficiency', text: 'AI-assisted development paired with specs and prototyping, shrinking new module delivery from weeks to days.' },
      ],
      education: { label: 'Education', course: 'Associate Degree in Systems Analysis and Development', school: 'FATEC Santana de Parnaíba · 2024' },
    },
    projects: {
      label: 'Projects',
      title: 'Things I built',
      code: 'Code',
      preview: 'Preview',
      store: 'Google Play',
      site: 'Product page',
      videos: 'On video',
      videosNote: 'Videos by Hipcom ERP on YouTube.',
      unmute: 'Turn sound on',
      mute: 'Turn sound off',
      viewCase: 'View project',
      back: 'Back',
      next: 'Next project',
      stack: 'Tech stack',
      gallery: 'Screens',
    },
    stack: {
      label: 'Stack',
      title: 'Everyday tools',
      groups: [
        {
          name: 'Front-end & mobile',
          items: [
            { name: 'Flutter', desc: 'Google\'s framework for building native apps from a single codebase. It\'s where I build interfaces for phones, payment terminals and kiosks.' },
            { name: 'Dart', desc: 'The typed, compiled language behind Flutter, with null safety and async code that\'s easy to read.' },
            { name: 'Design Systems', desc: 'Component libraries, colors and type that keep many screens and products consistent.' },
            { name: 'UI/UX', desc: 'Thinking about the flow before the screen: hierarchy, error and loading states, and real in-store use, often in a hurry.' },
            { name: 'Responsive interfaces', desc: 'Layouts that adapt from a phone to a large kiosk screen without losing readability.' },
            { name: 'Crashlytics', desc: 'Firebase crash reporting: production crash reports to find and fix errors faster.' },
          ],
        },
        {
          name: 'Back-end & APIs',
          items: [
            { name: 'Go', desc: 'A simple, fast language from Google with built-in concurrency. Great for lightweight services and APIs.' },
            { name: 'Java', desc: 'A mature, strongly typed language behind many enterprise systems.' },
            { name: 'Quarkus', desc: 'A Java framework built for cloud and containers, with fast startup and low memory use.' },
            { name: 'REST APIs', desc: 'Clear HTTP contracts between apps and server: resources, verbs, status codes and versioning.' },
            { name: 'AWS', desc: 'Amazon’s cloud services for hosting and running applications and data.' },
          ],
        },
        {
          name: 'Data',
          items: [
            { name: 'SQL', desc: 'The language for querying and shaping relational data: joins, aggregations and indexes.' },
            { name: 'MySQL', desc: 'The relational database on the servers, where the central data lives.' },
            { name: 'SQLite', desc: 'A database embedded in the device itself, so the app keeps working without internet.' },
            { name: 'Data modeling', desc: 'Designing tables and relationships that follow business rules and stay easy to evolve.' },
            { name: 'Migrations', desc: 'Versioned database changes, applied safely on every install.' },
          ],
        },
        {
          name: 'Integrations',
          items: [
            { name: 'SiTef', desc: 'An electronic payment platform widely used in Brazilian retail to process card transactions on terminals.' },
            { name: 'Payment terminals', desc: 'Card machines and Android POS devices where the app runs alongside the payment flow.' },
            { name: 'DLLs', desc: 'Native Windows libraries the app calls to talk to hardware and third-party systems.' },
            { name: 'Native integrations', desc: 'Bridges between Flutter and the operating system (Android, Windows) for things like printers and scanners.' },
          ],
        },
        {
          name: 'Practices',
          items: [
            { name: 'Clean Architecture', desc: 'Keeping business rules apart from the framework, database and UI, so parts can be tested and swapped without ripple effects.' },
            { name: 'DDD', desc: 'Modeling code with the business\'s own language, in domains with clear boundaries.' },
            { name: 'MVC', desc: 'Splits an app into model, view and controller, each with its own job.' },
            { name: 'Git', desc: 'Version control with branches, code review and a history that\'s easy to follow.' },
            { name: 'Bitbucket', desc: 'Git repositories with pull requests and team code review.' },
            { name: 'CI/CD', desc: 'Automated build, tests and delivery on every change.' },
            { name: 'Linux', desc: 'The server environment and everyday terminal.' },
            { name: 'Scrum', desc: 'Work in short sprints with planning, review and retrospective.' },
            { name: 'Kanban', desc: 'Continuous flow on a board, with limits on work in progress.' },
          ],
        },
        {
          name: 'AI in the workflow',
          items: [
            { name: 'AI-assisted development', desc: 'I use AI to explore solutions, review code and speed up repetitive tasks, always checking the output.' },
            { name: 'Claude Code', desc: 'Anthropic\'s coding agent that works right in the terminal and the project\'s code.' },
            { name: 'Codex', desc: 'OpenAI\'s coding agent for writing, explaining and refactoring code.' },
            { name: 'CircleCI', desc: 'CI/CD platform for automated builds, tests and deploys. My experience with it comes from AI-assisted development.' },
          ],
        },
      ],
      certs: [
        {
          issuer: 'Microsoft · AZ-900 · 2022',
          name: 'Microsoft Certified: Azure Fundamentals',
          url: 'https://www.credly.com/badges/3c7a3f06-16e1-4177-b7a8-acd287c554cc',
          image: '/certs/azure-fundamentals.webp',
          accent: '#3b8be6',
          imageAlt: 'Microsoft Certified: Azure Fundamentals badge',
        },
        {
          issuer: 'DIO · GFT bootcamp · 55 hours · 2022',
          name: 'GFT Start Woman Java',
          url: 'https://www.dio.me/certificate/AB2640FC/share',
          image: '/certs/gft-start-woman-java.webp',
          accent: '#e05ad6',
          imageAlt: 'GFT Start Woman Java bootcamp badge',
        },
      ],
      certsLabel: 'Certifications',
      credential: 'View credential',
    },
    contact: {
      label: 'Contact',
      title: "Let's build something together",
      text: "I'm open to new opportunities and conversations about full-stack development, integrations and product.",
      copy: 'Copy email',
      copied: 'Copied!',
      resume: 'View résumé',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        messagePlaceholder: 'Tell me a bit about the opportunity, the project or your question.',
        send: 'Send message',
        sending: 'Sending...',
        sent: 'Message sent! I’ll get back to you as soon as I can.',
        error: 'I couldn’t send it right now. Try again or write straight to my email.',
        subject: 'New message from the portfolio',
      },
    },
    footer: 'Built with AI-assisted development.',
  },
}

