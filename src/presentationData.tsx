import { LucideIcon, Layout, AlertTriangle, Rocket, HelpCircle, TrendingDown, ClipboardList, Globe, BarChart3, Lock, Zap, Award, Target, MessageSquare, CheckCircle, Smartphone } from 'lucide-react';

export interface SlideData {
  id: number;
  title: string;
  bullets: string[];
  visualSuggestion: string;
  script: string;
  icon: LucideIcon;
  type?: 'cover' | 'content' | 'split' | 'analysis' | 'comparison' | 'final';
}

export const slides: SlideData[] = [
  {
    id: 1,
    title: "Decisão Estratégica em TI: Modernizar ou Manter um Sistema Legado",
    bullets: [
      "Perspectiva de Governança de TI",
      "Impacto no Valor do Negócio",
      "Trade-offs: Custo vs. Agilidade",
      "Estratégia de Sustentabilidade Tecnológica"
    ],
    visualSuggestion: "Layout minimalista com fundo escuro (Midnight Blue), tipografia em caixa alta e ícone central de engrenagem moderna.",
    script: "Sejam bem-vindos. Hoje discutiremos um dos maiores dilemas da gestão de TI: o que fazer com sistemas que, embora funcionem, podem estar ancorando o crescimento da empresa. Vamos analisar como transformar custo tecnológico em vantagem estratégica.",
    icon: Layout,
    type: 'cover'
  },
  {
    id: 2,
    title: "Contexto do Problema",
    bullets: [
      "Digitalização acelerada dos mercados",
      "Sistemas 'core' desenvolvidos há mais de 10 anos",
      "Dependência de tecnologias obsoletas",
      "Impacto direto na experiência do cliente final",
      "O sistema legado como gargalo operacional"
    ],
    visualSuggestion: "Diagrama de fluxo mostrando o mercado acelerando e a empresa 'travada' pelo sistema antigo.",
    script: "O mercado hoje exige velocidade. Muitas empresas operam com sistemas de uma década atrás que não foram feitos para o volume de dados e a conectividade que o mundo digital exige atualmente.",
    icon: ClipboardList
  },
  {
    id: 3,
    title: "Problemas do Sistema Legado",
    bullets: [
      "Escalabilidade limitada e cara",
      "Brechas de segurança (falta de patches)",
      "Dificuldade de integração via APIs",
      "Escassez de talentos (desenvolvedores COBOL, Delphi, etc.)",
      "Interface de usuário (UI/UX) ultrapassada"
    ],
    visualSuggestion: "Ícones de aviso (warning) para cada bullet point em tons de laranja e vermelho.",
    script: "Sistemas legados são silenciosamente perigosos. Eles não apenas custam caro para manter, mas expõem a empresa a riscos de segurança e criam um 'muro' que impede a integração com novas soluções de mercado.",
    icon: AlertTriangle
  },
  {
    id: 4,
    title: "Novos Desafios da Empresa",
    bullets: [
      "Necessidade de análise de dados em tempo real",
      "Transição para arquitetura 'Cloud First'",
      "Personalização em massa via IA/ML",
      "Exigência de mobilidade e omnichannel",
      "Time-to-market reduzido para novos produtos"
    ],
    visualSuggestion: "Ícone futurista de nuvem interagindo com diversos dispositivos.",
    script: "As necessidades mudaram. A empresa agora precisa de agilidade, inteligência de dados e presença em múltiplos canais. Nosso sistema atual consegue suportar IA? Ele roda bem no mobile? É isso que o negócio está pedindo.",
    icon: Rocket
  },
  {
    id: 5,
    title: "O Dilema Estratégico",
    bullets: [
      "Manter: Menor custo imediato, menor risco de interrupção",
      "Modernizar: Maior investimento, alto ganho competitivo",
      "A zona de conforto vs. O risco do atraso",
      "Análise do ROI de longo prazo",
      "Alinhamento com o plano diretor de TI"
    ],
    visualSuggestion: "Uma balança equilibrando 'Risco/Custo Atual' e 'Oportunidade/Futuro'.",
    script: "Aqui está o coração da nossa decisão. Manter parece seguro e barato hoje, mas qual o custo de NÃO inovar? Modernizar exige fôlego financeiro, mas nos posiciona para os próximos 10 anos.",
    icon: HelpCircle
  },
  {
    id: 6,
    title: "Conceito de Dívida Técnica",
    bullets: [
      "Definição: 'Atalhos' tomados no passado geram juros hoje",
      "Juros da dívida: Manutenção cada vez mais lenta",
      "Impacto na inovação: 80% do orçamento focado em 'manter as luzes acesas'",
      "A incapacidade de mudar vira custo fixo",
      "O colapso inevitável se não houver amortização"
    ],
    visualSuggestion: "Gráfico de barras acumuladas mostrando o crescimento da manutenção e diminuição da inovação.",
    script: "Pense na dívida técnica como um cartão de crédito. Se você só paga o mínimo (apenas correções), os juros acumulam até que todo o seu orçamento de TI seja consumido apenas para manter o sistema vivo.",
    icon: TrendingDown
  },
  {
    id: 7,
    title: "Análise SWOT (F.O.F.A)",
    bullets: [
      "S: Estabilidade e conhecimento do domínio",
      "W: Falta de flexibilidade e alto custo de hardware",
      "O: Migração para Cloud e novos modelos de negócio",
      "T: Novos players (fintechs/startups) 100% digitais"
    ],
    visualSuggestion: "Matriz 2x2 clássica com as cores: Azul (S), Vermelho (W), Verde (O), Amarelo (T).",
    script: "Nossa SWOT revela que nossa força é o conhecimento acumulado, mas nossa maior fraqueza é a rigidez. A maior ameaça são os novos competidores que já nasceram na nuvem, sem o peso que carregamos.",
    icon: BarChart3,
    type: 'analysis'
  },
  {
    id: 8,
    title: "Análise PESTEL",
    bullets: [
      "Político/Legal: Novas regulamentações de dados (LGPD)",
      "Econômico: Pressão por redução de OPEX",
      "Social: Mudança de comportamento do consumidor digital",
      "Tecnológico: Fim de suporte de linguagens e servidores"
    ],
    visualSuggestion: "Diagrama circular mostrando as influências macroambientais sobre a TI.",
    script: "Olhando para fora, a LGPD nos obriga a ter sistemas auditáveis e seguros. Economicamente, o mercado não perdoa ineficiência. O ambiente macro está nos empurrando para a modernização.",
    icon: Globe,
    type: 'analysis'
  },
  {
    id: 9,
    title: "KPIs Importantes para a Decisão",
    bullets: [
      "MTTR (Mean Time to Repair): Tempo de correção",
      "TCO (Total Cost of Ownership): Custo total de posse",
      "Uptime vs. Downtime: Disponibilidade crítica",
      "Lead Time de Desenvolvimento: Velocidade de entrega",
      "Percentual de Inovação vs. Manutenção"
    ],
    visualSuggestion: "Painel de indicadores (Dashboard) estilizado com números de exemplo.",
    script: "Não decidimos por intuição, mas por números. Se nosso TCO está subindo e nosso Lead Time está aumentando, o sistema legado está morrendo. Estes são os termômetros da saúde da nossa infraestrutura.",
    icon: Zap
  },
  {
    id: 10,
    title: "Opção 1: Manter Sistema Legado",
    bullets: [
      "Prós: Conhecimento total da regra de negócio, baixo investimento CAPEX",
      "Contras: Inexistência de profissionais no mercado, alto risco de falha crítica",
      "Estratégia: Encapsulamento (isolar e criar pontes/APIs)",
      "Indicado para: Sistemas periféricos sem impacto estratégico",
      "Veredito: Solução de curto prazo"
    ],
    visualSuggestion: "Ícone de um castelo antigo fortificado, mas cercado por vegetação densa.",
    script: "Manter pode ser uma opção se o sistema for estável e não precisar de mudanças. Mas prepare-se: o custo de encontrar especialistas em tecnologias antigas vai explodir em breve.",
    icon: Lock,
    type: 'comparison'
  },
  {
    id: 11,
    title: "Opção 2: Modernizar (Refatorar/Rebuild)",
    bullets: [
      "Prós: Escalabilidade elástica, agilidade, segurança nativa",
      "Contras: Alto investimento inicial, risco de migração de dados",
      "Estratégia: Migração em etapas (Strangler Pattern)",
      "Indicado para: O 'Core Business' da empresa",
      "Veredito: Sobrevivência de longo prazo"
    ],
    visualSuggestion: "Ícone de um foguete decolando ou ponte sendo construída entre o antigo e o novo.",
    script: "Modernizar não é só trocar de software, é mudar a cultura. Usando o padrão 'Strangler', substituímos partes do sistema gradualmente, reduzindo o risco e entregando valor desde o dia 1.",
    icon: Rocket,
    type: 'comparison'
  },
  {
    id: 12,
    title: "Benchmark de Mercado",
    bullets: [
      "Netflix: Migrou de data center próprio para Cloud (AWS)",
      "Nubank: Nasceu sem legado (Cloud Native Microservices)",
      "Bancos Tradicionais: Gastam bilhões para 'modernizar o avião em pleno voo'",
      "Resultados: Empresas ágeis dominam o market share",
      "Lição: O legado mata se não for gerenciado"
    ],
    visualSuggestion: "Logotipos conhecidos comparando 'Born Digital' vs. 'Legacy Survivors'.",
    script: "Vejam a Netflix: eles levaram 7 anos para sair do data center próprio. O Nubank nunca teve esse peso. Se as grandes corporações não modernizarem, elas perdem o cliente para quem entrega mais rápido.",
    icon: Award
  },
  {
    id: 13,
    title: "Recomendação Estratégica",
    bullets: [
      "Modernização Híbrida e Escalonada",
      "Priorizar o 'Core' que impacta o cliente",
      "Investir em uma camada de APIs robusta",
      "Capacitação do time interno em novas stacks",
      "Focar em 'Cloud Native' para escalabilidade"
    ],
    visualSuggestion: "Um selo de 'Recomendado' com checklist de prioridades.",
    script: "Minha recomendação é clara: não tentem mudar tudo num 'Big Bang'. Modernizem em etapas, começando pelo que o cliente vê. Construam pontes entre o legado e a nuvem enquanto a migração ocorre.",
    icon: Target
  },
  {
    id: 14,
    title: "Plano de Ação (Roadmap)",
    bullets: [
      "Mês 1-2: Auditoria técnica e prova de conceito (PoC)",
      "Mês 3-6: Modernização do primeiro módulo crítico",
      "Mês 7-12: Migração progressiva de dados e usuários",
      "Mês 12+: Avaliação de ROI e desligamento de servidores legados",
      "Governança constante e feedback loops"
    ],
    visualSuggestion: "Linha do tempo (Gantt simplificado) com marcos coloridos.",
    script: "Este é o nosso caminho para o sucesso. Começamos com uma prova de conceito rápida para ganhar confiança e seguimos migrando partes do sistema até que possamos, finalmente, aposentar o antigo.",
    icon: Checklist
  },
  {
    id: 15,
    title: "Stakeholders e Comunicação",
    bullets: [
      "CEO/Diretoria: Foco no ROI e competitividade",
      "Operações: Foco na estabilidade e menor atrito",
      "Time de TI: Foco em aprendizado e redução de suporte",
      "Vendas: Foco em novas funcionalidades rápidas",
      "Comunicação agressiva sobre os ganhos de cada etapa"
    ],
    visualSuggestion: "Círculos concêntricos mostrando as partes interessadas em torno do projeto.",
    script: "Modernização é política. Precisamos convencer o financeiro do ROI e o operacional da estabilidade. Sem o apoio de todos os níveis, o projeto corre o risco de ser interrompido no meio.",
    icon: MessageSquare
  },
  {
    id: 16,
    title: "Conclusão",
    bullets: [
      "Legado não é apenas software, é uma escolha estratégica",
      "Dívida técnica não paga mata a agilidade",
      "Modernizar é investir no futuro do negócio",
      "A tecnologia deve ser aceleradora, não âncora",
      "O momento de agir é agora"
    ],
    visualSuggestion: "Imagem de impacto: Um farol iluminando águas turbulentas ou um caminho claro de dados.",
    script: "Para encerrar: manter o legado por medo é a receita para a insolvência tecnológica. A empresa que domina sua pilha tecnológica domina seu mercado. Vamos modernizar com inteligência.",
    icon: CheckCircle
  },
  {
    id: 17,
    title: "Muito Obrigado!",
    bullets: [
      "Contatos para discussões estratégicas",
      "Q&A - Espaço para perguntas",
      "Documentação completa disponível no portal",
      "Vamos transformar nossa TI hoje."
    ],
    visualSuggestion: "Layout limpo com QR Code para acesso ao material e informações de contato.",
    script: "Agradeço a atenção de todos. Estou à disposição para dúvidas ou para iniciarmos o detalhamento do nosso plano de modernização. Obrigado!",
    icon: Smartphone,
    type: 'final'
  }
];

function Checklist(props: any) {
    return <ClipboardList {...props} />
}
