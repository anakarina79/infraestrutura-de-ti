const questions = [
{
    "enunciado": "Uma rede VPN (virtual private network) atua como filtro, tornando ilegíveis os dados em uma extremidade e apenas decodificando-os na outra, e sua conexão com a Internet é considerada segura.",
    "correta": "C",
    "tema": "Segurança de Redes - VPN",
    "justificativa": "A VPN utiliza tunelamento e criptografia para encapsular os dados, tornando-os ininteligíveis (ilegíveis) durante o tráfego pela rede pública (Internet) e decodificando-os apenas no destino autorizado [1]. Analogia: É como enviar uma carta em um cofre de aço (túnel criptografado) pelo correio; o carteiro (Internet) vê o cofre, mas não consegue ler o conteúdo da carta."
  },
  {
    "enunciado": "Duas intranets podem estar conectadas por meio de VPN (virtual private network).",
    "correta": "C",
    "tema": "Segurança de Redes - VPN",
    "justificativa": "A VPN é amplamente utilizada para conectar redes locais distantes (Intranets) através de uma rede pública, criando uma extensão segura da rede privada (VPN Site-to-Site) [2]. Analogia: É como construir uma ponte privada e exclusiva conectando dois castelos distantes, passando por cima de uma cidade pública."
  },
  {
    "enunciado": "Uma rede privada virtual (VPN) caracteriza-se por permitir ao usuário restringir o tráfego da Internet para uma rede privada, de modo que ele possa ou não acessar determinados sites na Internet.",
    "correta": "E",
    "tema": "Segurança de Redes - VPN",
    "justificativa": "A função primária da VPN é privacidade e conexão segura, não a filtragem de sites (embora possa ser usada para contornar restrições). A restrição de acesso a sites é função típica de Firewalls ou Proxies, não a definição central de VPN [3]. Analogia: Um túnel escuro esconde quem passa, mas não decide necessariamente em qual loja você pode entrar no final."
  },
  {
    "enunciado": "Uma rede privada virtual (VPN) caracteriza-se por permitir ao usuário ocultar seu endereço IP bem como enviar e receber informações online que só podem ser vistas por ele e seu provedor VPN.",
    "correta": "C",
    "tema": "Segurança de Redes - VPN",
    "justificativa": "Ao usar uma VPN, o tráfego é roteado pelo servidor VPN, mascarando o IP original do usuário e criptografando os dados, garantindo que terceiros na rede pública não vejam o conteúdo [3]. Analogia: É como usar um carro alugado com vidros escuros; ninguém vê quem está dirigindo nem sabe de qual garagem (IP) você saiu originalmente."
  },
  {
    "enunciado": "Uma rede privada virtual (VPN) caracteriza-se por permitir ao usuário criptografar os dados trafegados entre o seu dispositivo e seu provedor de Internet, desde que esse dispositivo não seja um smartphone, que é incompatível com VPN.",
    "correta": "E",
    "tema": "Segurança de Redes - VPN",
    "justificativa": "Smartphones modernos são totalmente compatíveis com tecnologias VPN. A limitação citada no item não existe [3]. Analogia: Dizer que smartphones não usam VPN é como dizer que carros elétricos não podem usar rodovias; a infraestrutura aceita ambos."
  },
  {
    "enunciado": "Uma rede privada virtual (VPN) caracteriza-se por permitir ao usuário monitorar o tráfego de entrada e saída da rede, autorizando ou bloqueando tráfegos específicos.",
    "correta": "E",
    "tema": "Segurança de Redes - VPN",
    "justificativa": "Monitoramento e bloqueio de tráfego são funções de um Firewall ou IDS/IPS, não a característica definidora de uma VPN, que foca em conectividade segura [3]. Analogia: A VPN é o tubo blindado; o Firewall é o guarda que decide quem entra no tubo."
  },
  {
    "enunciado": "Uma rede privada virtual (VPN) caracteriza-se por permitir ao usuário utilizar a VPN como um software antivírus abrangente, pois os arquivos são criptografados durante a transmissão dos dados.",
    "correta": "E",
    "tema": "Segurança de Redes - VPN",
    "justificativa": "Criptografia protege contra interceptação (leitura), mas não verifica o conteúdo quanto a malwares. Um vírus criptografado ainda é um vírus e infectará o destino ao ser descriptografado [3]. Analogia: Enviar uma bomba dentro de uma caixa blindada não a desarma; ela chega segura ao destino e explode lá."
  },
  {
    "enunciado": "Um IDS baseado em rede tem a finalidade de monitorar o tráfego de pacotes de rede para descobrir possíveis atividades suspeitas; entretanto, devido às suas limitações técnicas, ele não pode ser usado para impedir que usuários excluam, acidentalmente, arquivos do sistema.",
    "correta": "E",
    "tema": "Segurança de Redes - IDS",
    "justificativa": "Embora a função primária do IDS seja detecção, a justificativa 'limitações técnicas' para não impedir exclusão de arquivos é falha no contexto da questão (Gabarito Oficial: Errado). Sistemas modernos (IDPS) podem interagir com a rede para bloquear conexões maliciosas, e a exclusão acidental local foge ao escopo de monitoramento de rede, mas a assertiva é considerada errada pela banca, possivelmente por implicar uma incapacidade absoluta ou confundir escopos [4]. Analogia: Um alarme de incêndio (IDS) detecta fumaça; dizer que ele não pode impedir alguém de riscar um fósforo por 'limitação técnica' é uma simplificação que a banca considerou incorreta."
  },
  {
    "enunciado": "Caso o acesso fosse realizado por meio da VPN para o SaaS, por exemplo, para um webmail, os emails estariam imunes a vírus, pois, em um tunelamento criptográfico, o tráfego é, necessariamente e continuadamente, analisado por antivírus.",
    "correta": "E",
    "tema": "Segurança de Redes - VPN",
    "justificativa": "O tunelamento criptográfico (VPN) protege a confidencialidade do tráfego, mas não realiza varredura antivírus no conteúdo dos pacotes. O vírus viaja protegido pelo túnel [5]. Analogia: Um túnel blindado protege o carro de tiros externos, mas não protege o motorista de uma cobra que já está dentro do carro."
  },
  {
    "enunciado": "Redes VPN permitem a troca segura de dados entre dois pontos por meio do tunelamento por criptografia, que cria um túnel seguro dentro de uma rede pública.",
    "correta": "C",
    "tema": "Segurança de Redes - VPN",
    "justificativa": "Esta é a definição clássica de VPN: uso de tunelamento e criptografia para criar um canal seguro sobre uma infraestrutura insegura (Internet) [6]. Analogia: É como um diplomata levando uma mala algemada (criptografia) através de uma multidão (rede pública); ninguém consegue abrir a mala no caminho."
  },
  {
    "enunciado": "O Prometheus utiliza modelo de dados de séries temporais no qual dados são identificados por um conjunto de rótulos chave-valor.",
    "correta": "C",
    "tema": "Observabilidade - Prometheus",
    "justificativa": "Prometheus é uma ferramenta de monitoramento que armazena métricas como séries temporais (valores ao longo do tempo), identificadas por nomes e pares chave-valor (labels) [7]. Analogia: É como um prontuário médico que registra a temperatura (métrica) com data/hora, etiquetado com 'paciente=João' e 'quarto=302' (labels)."
  },
  {
    "enunciado": "O comando GET /_index/clientes/_doc/123 no Elasticsearch recupera um documento específico do índice clientes com o ID 123, retornando os dados armazenados nesse documento.",
    "correta": "E",
    "tema": "Elasticsearch",
    "justificativa": "A sintaxe da URL está incorreta. No Elasticsearch, o nome do índice vem primeiro na URL, não precedido por `_index`. O correto seria algo como `GET /clientes/_doc/123` [8]. Analogia: É como tentar acessar um site digitando `com.google.www` em vez de `www.google.com`; a ordem dos endereços importa."
  },
  {
    "enunciado": "No Grafana, é possível adicionar anotações para destacar eventos nas visualizações diretamente no painel, por meio da consulta de anotação integrada, da API HTTP ou da configuração manual do painel.",
    "correta": "C",
    "tema": "Observabilidade - Grafana",
    "justificativa": "O Grafana permite 'Annotations', que são marcadores em gráficos para correlacionar eventos (como um deploy ou falha) com o comportamento das métricas visualizadas [8, 9]. Analogia: É como colar um post-it em um gráfico de vendas dizendo 'Dia da Black Friday' para explicar o pico de vendas."
  },
  {
    "enunciado": "A EDA (exploratory data analysis) utiliza ferramentas como gráficos de dispersão, correlações e histogramas para descobrir padrões, relações ocultas e tendências importantes nos dados, como sazonalidade e correlação entre variáveis.",
    "correta": "C",
    "tema": "Ciência de Dados - EDA",
    "justificativa": "A Análise Exploratória de Dados (EDA) visa entender a natureza dos dados antes da modelagem, usando visualizações estatísticas para identificar comportamentos [9]. Analogia: É como um detetive examinando a cena do crime e tirando fotos de vários ângulos antes de formular uma teoria sobre o culpado."
  },
  {
    "enunciado": "Um dos objetivos da pilha ELK é agregar e analisar logs de diferentes soluções e criar visualizações para o monitoramento de aplicações e infraestruturas.",
    "correta": "C",
    "tema": "Pilha ELK",
    "justificativa": "A pilha ELK (Elasticsearch, Logstash, Kibana) é padrão de mercado para centralizar logs (Logstash), indexá-los para busca rápida (Elasticsearch) e visualizá-los (Kibana) [10]. Analogia: Logstash é o caminhão de lixo que coleta tudo, Elasticsearch é a usina de reciclagem que separa e organiza, e Kibana é o relatório que mostra quanto plástico foi reciclado."
  },
  {
    "enunciado": "O Elasticsearch permite a divisão de um índice em subpartes denominadas shards, as quais devem ser remontadas para se tornarem funcionais, uma vez que não podem ser utilizadas isoladamente.",
    "correta": "E",
    "tema": "Elasticsearch",
    "justificativa": "Embora o Elasticsearch divida índices em shards, eles são funcionais e gerenciados automaticamente pelo cluster. O usuário não precisa 'remontá-los' manualmente; cada shard é um índice Lucene completo e funcional internamente [11]. Analogia: É como um livro dividido em volumes; você não precisa colar as páginas dos volumes para ler a história, a biblioteca (cluster) te entrega o capítulo certo automaticamente."
  },
  {
    "enunciado": "Em gráficos interativos, um usuário pode detalhar áreas de interesse, de modo que é possível passar de uma visualização agregada, que mostra o total de vendas de um ano inteiro, para os números de vendas mensais de determinado ano.",
    "correta": "C",
    "tema": "Visualização de Dados",
    "justificativa": "O conceito descrito é o 'Drill-down', fundamental em ferramentas de BI e visualização (como Kibana/Grafana), permitindo navegar do macro para o micro [12]. Analogia: É como usar o zoom no Google Maps: você começa vendo o país inteiro e aproxima até ver o nome das ruas."
  },
  {
    "enunciado": "O ElasticSearch é uma linguagem de programação.",
    "correta": "E",
    "tema": "Elasticsearch",
    "justificativa": "Elasticsearch é uma ferramenta de busca e análise (search engine) baseada em Lucene, não uma linguagem de programação [13]. Analogia: Confundir o Google (ferramenta de busca) com Java (linguagem de programação)."
  },
  {
    "enunciado": "O ElasticSearch suporta pesquisas de texto completo (full-text search).",
    "correta": "C",
    "tema": "Elasticsearch",
    "justificativa": "Esta é a principal funcionalidade do Elasticsearch: realizar buscas textuais complexas e rápidas em grandes volumes de dados [13]. Analogia: É como um índice remissivo superpotente de uma biblioteca gigante que encontra qualquer palavra em qualquer livro instantaneamente."
  },
  {
    "enunciado": "O ElasticSearch é um banco de dados relacional.",
    "correta": "E",
    "tema": "Elasticsearch",
    "justificativa": "Elasticsearch é orientado a documentos (NoSQL), armazenando dados em formato JSON, e não utiliza o modelo relacional (tabelas e chaves estrangeiras) [13]. Analogia: É um arquivo de pastas soltas (documentos), não uma planilha excel com linhas e colunas rígidas (relacional)."
  },
  {
    "enunciado": "O ElasticSearch não suporta buscas em tempo real.",
    "correta": "E",
    "tema": "Elasticsearch",
    "justificativa": "O Elasticsearch é 'Near Real-Time' (NRT), disponibilizando documentos para busca tipicamente em cerca de 1 segundo após a indexação [13]. Analogia: É quase ao vivo, como uma transmissão de TV com um atraso de poucos segundos."
  },
  {
    "enunciado": "No Grafana, o tipo de dado que representa uma medida numérica com registro de data e hora para indicar quando ela foi coletada denomina-se metrics.",
    "correta": "C",
    "tema": "Observabilidade - Grafana",
    "justificativa": "Métricas (metrics) são a base do monitoramento quantitativo: valores numéricos atrelados a um timestamp [14]. Analogia: O velocímetro do carro registra a velocidade (número) a cada instante (tempo), isso é uma métrica."
  },
  {
    "enunciado": "No Grafana, o tipo de dado que representa uma medida numérica com registro de data e hora para indicar quando ela foi coletada denomina-se traces.",
    "correta": "E",
    "tema": "Observabilidade - Grafana",
    "justificativa": "Traces (rastreamento) são usados para acompanhar o ciclo de vida de uma requisição através de vários microsserviços, não apenas uma medida numérica simples [14]. Analogia: O 'trace' é o rastreio da encomenda dos correios passo-a-passo, não apenas o peso da caixa."
  },
  {
    "enunciado": "No Grafana, o tipo de dado que representa uma medida numérica com registro de data e hora para indicar quando ela foi coletada denomina-se logs.",
    "correta": "E",
    "tema": "Observabilidade - Grafana",
    "justificativa": "Logs são registros textuais de eventos (ex: 'Erro ao conectar no DB'), enquanto métricas são numéricas. Embora ambos tenham data/hora, sua estrutura e uso são distintos [14]. Analogia: O Log é o diário de bordo do capitão (texto); a Métrica é a leitura da bússola (número)."
  },
 {
    "enunciado": "O Grafana Cloud lida com os detalhes de escalabilidade e disponibilidade das empresas, para que suas equipes possam se concentrar no desenvolvimento e na inovação.",
    "correta": "C",
    "tema": "Observabilidade - Grafana",
    "justificativa": "Serviços em nuvem gerenciados (SaaS), como Grafana Cloud, removem a carga operacional de manter a infraestrutura de monitoramento (Gabarito Oficial: A - Apenas I correto) [15, 16]. Analogia: Em vez de construir e limpar sua própria piscina (On-Premise), você paga para usar a piscina do clube (Cloud) e só se preocupa em nadar."
  },
  {
    "enunciado": "O Grafana Enterprise Stack é uma ferramenta de gerenciamento de plantão que ajuda a reduzir a atividade hands-on por meio de fluxos de trabalho simples.",
    "correta": "E",
    "tema": "Observabilidade - Grafana",
    "justificativa": "O gerenciamento de plantão (On-Call) é função específica do 'Grafana OnCall', não a definição geral do 'Enterprise Stack' (que é o conjunto de ferramentas self-managed com recursos enterprise) [15, 16]. Analogia: Confundir a caixa de ferramentas inteira (Stack) com apenas o bipe de emergência (OnCall)."
  },
  {
    "enunciado": "O Grafana OnCall oferece acesso aprimorado a logs corporativos, métricas empresariais e rastreamentos empresariais.",
    "correta": "E",
    "tema": "Observabilidade - Grafana",
    "justificativa": "Grafana OnCall é focado em gerenciamento de incidentes e alertas (quem chamar quando algo quebra), não em fornecer o acesso aos dados de logs/métricas em si (isso é função do Loki/Prometheus/Grafana Core) [16]. Analogia: O OnCall é o sistema que disca 190; ele não é a câmera de segurança que gravou o crime."
  },
  {
    "enunciado": "Kibana é uma ferramenta que permite visualizar os dados armazenados no Elasticsearch, com possibilidade de gerar gráficos convencionais ou widgets integrados, como mapas, lens e canvas.",
    "correta": "C",
    "tema": "Kibana",
    "justificativa": "Kibana é a interface visual nativa do Elasticsearch, permitindo criar dashboards ricos e visualizações avançadas (Canvas, Maps) [17]. Analogia: O Elasticsearch é o motor do carro; o Kibana é o painel com velocímetro e GPS."
  },
  {
    "enunciado": "Embora seja viável, a coleta de dados não estruturados torna-se ineficiente quando esses dados são modelados em tabelas convencionais.",
    "correta": "C",
    "tema": "Big Data",
    "justificativa": "Dados não estruturados (textos, vídeos, logs variáveis) não se encaixam bem em linhas e colunas rígidas (tabelas relacionais), gerando ineficiência e desperdício de espaço. Por isso usa-se NoSQL ou Data Lakes [17]. Analogia: Tentar guardar roupas de formatos variados em caixas de ovos (tabelas rígidas) é ineficiente; melhor usar um armário amplo (NoSQL)."
  },
  {
    "enunciado": "O elasticsearch indexa todos os dados em cada campo e cada campo indexado possui uma estrutura de dados dedicada e otimizada.",
    "correta": "C",
    "tema": "Elasticsearch",
    "justificativa": "O Elasticsearch utiliza estruturas de índice invertido para texto e árvores BKD para numéricos, otimizando cada campo para busca rápida por padrão [18]. Analogia: É como um livro que tem um índice remissivo para nomes, outro para datas e outro para locais, tudo para facilitar encontrar a informação rapidamente."
  },
  {
    "enunciado": "O Grafana é capaz de fazer queries em diferentes tipos de data source, transformar os dados obtidos e gerar a visualização em forma de dashboard.",
    "correta": "C",
    "tema": "Observabilidade - Grafana",
    "justificativa": "O poder do Grafana reside em sua capacidade de conectar-se a múltiplas fontes (Prometheus, SQL, AWS, etc.) simultaneamente e visualizar tudo num único lugar [19]. Analogia: Um tradutor universal que ouve 10 idiomas diferentes (data sources) e escreve um resumo único em português (dashboard)."
  },
  {
    "enunciado": "O serviço ElasticSearch utiliza índices divididos em fragmentos, de maneira que cada nó armazena diversos fragmentos e atua na coordenação das operações nos vários fragmentos.",
    "correta": "C",
    "tema": "Elasticsearch",
    "justificativa": "O Elasticsearch distribui dados via 'shards' (fragmentos) entre os nós do cluster para garantir redundância e desempenho distribuído [20]. Analogia: Uma biblioteca gigante divide seus livros em várias estantes (shards) espalhadas por várias salas (nós); os bibliotecários coordenam a busca em todas as salas ao mesmo tempo."
  },
  {
    "enunciado": "Os gráficos de linhas são os mais adequados para acompanhar a evolução de uma variável ao longo do tempo.",
    "correta": "C",
    "tema": "Visualização de Dados",
    "justificativa": "Gráficos de linha conectam pontos de dados sequenciais, tornando evidente a tendência temporal [21, 22]. Analogia: O desenho da febre de um paciente na prancheta do hospital é uma linha, pois mostra a evolução."
  },
  {
    "enunciado": "Os histogramas classificam os dados de acordo com o valor de várias categorias.",
    "correta": "E",
    "tema": "Visualização de Dados",
    "justificativa": "Histogramas mostram a *distribuição* de frequência de uma variável contínua (ex: quantas pessoas têm entre 20-30 anos), não categorias qualitativas (isso seria gráfico de barras) [21, 22]. Analogia: Histograma mostra quantos alunos tiraram nota A, B ou C (distribuição); não serve para comparar maçãs com laranjas."
  },
  {
    "enunciado": "Os gráficos de dispersão são usados para visualizar a relação entre duas variáveis contínuas.",
    "correta": "C",
    "tema": "Visualização de Dados",
    "justificativa": "Scatter plots (dispersão) plotam pontos X e Y para revelar correlações entre duas métricas [22]. Analogia: Um gráfico mostrando 'Altura' vs 'Peso' de várias pessoas para ver se pessoas mais altas tendem a ser mais pesadas."
  },
  {
    "enunciado": "Elasticsearch é uma ferramenta baseada em SQL que, ao ser instalada no servidor de uma organização, recupera informações de diversos tipos de bancos de dados.",
    "correta": "E",
    "tema": "Elasticsearch",
    "justificativa": "Elasticsearch é baseado em JSON/REST API e Lucene, não fundamentalmente em SQL (embora tenha plugins SQL). Sua função primária é indexar dados enviados a ele, não agir como um cliente SQL que 'busca' de outros bancos passivamente [23]. Analogia: O Elasticsearch é um arquivo inteligente onde você guarda documentos; ele não é um robô que sai lendo os arquivos dos outros."
  },
  {
    "enunciado": "Em um grafo, um componente conectado é um conjunto de vértices que estão conectados entre si.",
    "correta": "C",
    "tema": "Teoria dos Grafos",
    "justificativa": "Na teoria dos grafos (usada em análise de links no Elastic), um componente conectado é um subgrafo onde existe um caminho entre qualquer par de nós [23]. Analogia: Um grupo de ilhas ligadas por pontes forma um componente conectado; uma ilha isolada sem pontes não faz parte desse componente."
  },
  {
    "enunciado": "O elasticsearch utiliza, por padrão, o algoritmo de pontuação BM25.",
    "correta": "C",
    "tema": "Elasticsearch",
    "justificativa": "O BM25 é o algoritmo padrão de similaridade (relevância) do Elasticsearch para buscas textuais, substituindo o antigo TF/IDF [24]. Analogia: É a fórmula matemática que o sistema usa para decidir que o documento A é 'mais relevante' para sua pesquisa do que o documento B."
  },
  {
    "enunciado": "Elasticsearch é um processo de pesquisa que trabalha com grandes volumes de dados, processando requisições JSON bem como devolvendo dados JSON.",
    "correta": "C",
    "tema": "Elasticsearch",
    "justificativa": "A interface do Elasticsearch é RESTful e baseada inteiramente em objetos JSON para entrada (query) e saída (resposta) [24]. Analogia: A língua oficial do Elasticsearch é o JSON; ele só fala e ouve nesse idioma."
  },
  {
    "enunciado": "Cada instância de elasticsearch é um nó; uma coleção de vários nós que podem trabalhar em harmonia formam um cluster elasticsearch.",
    "correta": "C",
    "tema": "Elasticsearch",
    "justificativa": "Esta é a definição estrutural básica: Instância = Nó; Conjunto de Nós = Cluster [25]. Analogia: Um músico é um nó; a orquestra inteira tocando junta é o cluster."
  },
  {
    "enunciado": "O RAID nível 0 duplica todos os discos, portanto, se há quatro discos primários, há quatro discos de becape, criando redundância e tolerância a falhas.",
    "correta": "E",
    "tema": "Infraestrutura - RAID",
    "justificativa": "RAID 0 faz striping (distribuição) para performance, sem nenhuma redundância. Se um disco falhar, tudo é perdido. A descrição de duplicação refere-se ao RAID 1 ou RAID 10 [26]. Analogia: RAID 0 é como rasgar uma foto em pedaços e guardar cada pedaço em uma gaveta diferente para guardar mais rápido; se uma gaveta quebrar, você perde a foto inteira."
  },
  {
    "enunciado": "O RAID 5 utiliza apenas um disco de paridade.",
    "correta": "E",
    "tema": "Infraestrutura - RAID",
    "justificativa": "O RAID 5 distribui a paridade entre *todos* os discos do arranjo, não usando um disco dedicado (como o RAID 3 ou 4 faziam). O espaço total consumido é equivalente a um disco, mas a paridade é rotativa [27]. Analogia: Em vez de uma pessoa segurar o segredo (disco dedicado), todos no grupo seguram um pedaço do segredo de forma revezada."
  },
  {
    "enunciado": "Tanto no RAID 10 quanto no RAID 01, são aplicados os conceitos do RAID 0 e do RAID 1 combinados, em que as unidades lógicas terão metade do espaço de armazenamento do total de discos utilizados.",
    "correta": "C",
    "tema": "Infraestrutura - RAID",
    "justificativa": "RAID 10 (Stripe of Mirrors) e RAID 01 (Mirror of Stripes) combinam espelhamento e distribuição. Devido ao espelhamento, 50% da capacidade total é usada para redundância [27]. Analogia: Você compra 4 cadernos, mas só pode escrever em 2, porque os outros 2 são cópias exatas de segurança."
  },
  {
    "enunciado": "Na configuração RAID 1, são necessárias, pelos menos, duas unidades de armazenamento para fornecer redundância a falhas.",
    "correta": "C",
    "tema": "Infraestrutura - RAID",
    "justificativa": "RAID 1 é o espelhamento simples, exigindo no mínimo um disco original e uma cópia (2 discos) [26, 28]. Analogia: Para ter um gêmeo, você precisa de pelo menos duas pessoas."
  },
  {
    "enunciado": "Em um conjunto de armazenamento externo com quatro discos ativos, optou-se pelo máximo desempenho em leitura e escrita, porém, em determinado momento, houve falha em um dos discos, fato que gerou indisponibilidade dos dados. O arranjo de discos utilizado é do tipo RAID 6.",
    "correta": "E",
    "tema": "Infraestrutura - RAID",
    "justificativa": "Se houve indisponibilidade com a falha de um disco, não havia redundância. RAID 6 suporta a falha de até 2 discos. O arranjo descrito, focado em desempenho máximo e sem tolerância a falhas, é o RAID 0 [28]. Analogia: RAID 6 é um tanque blindado; RAID 0 é um carro de fórmula 1 de vidro – rápido, mas quebra fácil."
  },
  {
    "enunciado": "O esquema RAID que possui dois cálculos de paridade diferentes, executados e armazenados em blocos separados em discos distintos, e que necessita de D+2 discos, é o RAID 6.",
    "correta": "C",
    "tema": "Infraestrutura - RAID",
    "justificativa": "RAID 6 introduz dupla paridade distribuída, permitindo a falha simultânea de até dois discos sem perda de dados [29, 30]. Analogia: É como ter dois estepes no carro; você pode furar dois pneus e continuar rodando."
  },
  {
    "enunciado": "Se, em um arranjo de disco com RAID 0, um dos discos falhar, então os dados serão perdidos.",
    "correta": "C",
    "tema": "Infraestrutura - RAID",
    "justificativa": "RAID 0 divide o arquivo em pedaços espalhados pelos discos. A perda de qualquer parte corrompe o todo [31]. Analogia: Um quebra-cabeça onde uma peça se perde torna impossível ver a imagem completa."
  },
  {
    "enunciado": "O RAID 5 é capaz de fornecer redundância a partir de um conjunto de 3 ou mais discos.",
    "correta": "B",
    "tema": "Infraestrutura - RAID",
    "justificativa": "Note: Gabarito original B (Errado)? Verificação: Tecnicamente RAID 5 requer mínimo de 3 discos. Se o gabarito é Errado (B), pode ser uma pegadinha específica da banca ou erro de transcrição no texto fonte. Padrão de indústria: RAID 5 exige 3 discos. A fonte [32] indica gabarito 'B' (Errado) para o item 'RAID 5 é capaz de fornecer redundância a partir de um conjunto de 3 ou mais discos'. Isso é incomum. Possível explicação CESPE: RAID 5 *pode* ser implementado em software com partições, ou a banca considera que a redundância 'começa' a ser útil de outra forma? *Correção baseada em literatura padrão*: A afirmação é tecnicamente verdadeira. Se a banca marcou Errado, cuidado. Analisando a fonte [32], a questão 2640715 é 'RAID 0... dados perdidos' (Certo). A anterior 2640713 é RAID 5 (Errado). Talvez a pegadinha seja 'a partir de' vs 'com exatamente'. *Analise*: Vou manter a literalidade da fonte e gabarito."
  },
{
    "enunciado": "Na topologia em estrela, todos os dispositivos estão conectados a um único ponto central, geralmente um switch ou hub.",
    "correta": "C",
    "tema": "Topologias de Redes",
    "justificativa": "A característica definidora da topologia em estrela é a existência de um nó central (concentrador) por onde passa todo o tráfego. Se o nó central falhar, a rede para, mas a falha de um cabo individual afeta apenas um dispositivo [1]. Analogia: É como uma roda de bicicleta, onde todos os raios (cabos) se encontram no eixo central (switch).",
    "referencia": "[1]"
  },
  {
    "enunciado": "O modelo de referência OSI possui sete camadas.",
    "correta": "C",
    "tema": "Modelo OSI",
    "justificativa": "O modelo OSI é padronizado em 7 camadas: Física, Enlace, Rede, Transporte, Sessão, Apresentação e Aplicação [2]. Analogia: É como um sistema de correios com 7 etapas burocráticas, desde escrever a carta (Aplicação) até o transporte físico do caminhão (Física).",
    "referencia": "[2]"
  },
  {
    "enunciado": "O HTTP está presente na camada de rede do modelo OSI.",
    "correta": "E",
    "tema": "Modelo OSI",
    "justificativa": "O HTTP (HyperText Transfer Protocol) é um protocolo da camada de Aplicação (Camada 7), a mais alta, que interage com o usuário, e não da camada de Rede (Camada 3), que lida com roteamento (como o IP) [2]. Analogia: O HTTP é o conteúdo da carta escrita, não o caminhão (rede) que a transporta.",
    "referencia": "[2]"
  },
  {
    "enunciado": "O tratamento da transmissão de bits normais por um canal de comunicação é função da camada física.",
    "correta": "C",
    "tema": "Modelo OSI",
    "justificativa": "A Camada Física (Camada 1) lida com os aspectos mecânicos, elétricos e funcionais para transmitir bits brutos (0s e 1s) pelo meio físico [2]. Analogia: É a estrada de asfalto e as rodas do veículo; a pura infraestrutura física que permite o movimento.",
    "referencia": "[2]"
  },
  {
    "enunciado": "A camada de sessão gerencia estruturas de dados abstratas e permite a comunicação entre computadores com diferentes representações de dados.",
    "correta": "E",
    "tema": "Modelo OSI",
    "justificativa": "A descrição refere-se à Camada de Apresentação (Camada 6), responsável pela tradução, criptografia e formato dos dados (sintaxe). A Camada de Sessão (Camada 5) cuida do controle do diálogo e sincronização [2]. Analogia: A Sessão é quem agenda a reunião; a Apresentação é o tradutor que garante que ambos falem a mesma língua durante a reunião.",
    "referencia": "[2]"
  },
  {
    "enunciado": "Para a topologia em estrela utilizada em uma rede local, os servidores de arquivos e os dispositivos conectados através dos pontos de acesso sem fio têm obrigatoriamente as mesmas velocidades de conexão.",
    "correta": "E",
    "tema": "Topologias de Redes",
    "justificativa": "Em uma topologia estrela com switches, cada porta pode negociar velocidades diferentes. Um servidor pode estar conectado a 10 Gbps via cabo enquanto um dispositivo Wi-Fi está a 100 Mbps. Eles não precisam ter a mesma velocidade [3]. Analogia: Em uma rodoviária (hub central), podem chegar ônibus rápidos e carros lentos; a velocidade de um não dita a do outro.",
    "referencia": "[3]"
  },
  {
    "enunciado": "A topologia de LAN que atende melhor a demandas de alta taxa de transmissão, grandes distâncias entre elementos da rede e grande quantidade desses elementos é a estrela, desde que opere no modo broadcast.",
    "correta": "C",
    "tema": "Topologias de Redes",
    "justificativa": "A topologia estrela é a mais escalável e comum para LANs modernas, facilitando gerenciamento e altas taxas via switches (embora switches evitem broadcast desnecessário, a questão foca na capacidade estrutural da topologia em atender a demanda) [4]. Analogia: Um sistema de distribuição centralizado (estrela) é mais eficiente para entregar muitas encomendas longe do que passar a encomenda de mão em mão (anel/barramento).",
    "referencia": "[4]"
  },
  {
    "enunciado": "A topologia de rede em que todos os dispositivos estão conectados a um único cabo principal é do tipo barramento.",
    "correta": "C",
    "tema": "Topologias de Redes",
    "justificativa": "No barramento (bus), existe um backbone (cabo central) compartilhado onde todos os nós se conectam. [5]. Analogia: É como um varal de roupas; todas as roupas (nós) estão penduradas na mesma corda (cabo principal).",
    "referencia": "[5]"
  },
  {
    "enunciado": "Nas redes com topologia em barramento, a informação é transmitida a partir dos vários nós de rede, não havendo necessidade de controle de colisão dos pacotes.",
    "correta": "E",
    "tema": "Topologias de Redes",
    "justificativa": "Como o meio é compartilhado, se dois nós transmitirem ao mesmo tempo, ocorre colisão. É essencial ter controle de colisão (como o CSMA/CD no Ethernet antigo) [6]. Analogia: Em uma linha telefônica compartilhada por várias pessoas, se duas falarem ao mesmo tempo, ninguém se entende; é preciso um protocolo para decidir quem fala.",
    "referencia": "[6]"
  },
  {
    "enunciado": "Na topologia de redes em anel, o envio de mensagens é realizado somente no sentido horário.",
    "correta": "C",
    "tema": "Topologias de Redes",
    "justificativa": "Nas topologias em anel clássicas (como Token Ring), o tráfego é unidirecional (simplex no link, circular na rede), passando de nó em nó em um sentido definido [6]. Analogia: É como uma rotatória de trânsito onde os carros só podem girar em uma direção obrigatória.",
    "referencia": "[6]"
  },
  {
    "enunciado": "Em uma LAN com topologia anel, a rede inteira é necessariamente desativada se houver ruptura em um dos cabos.",
    "correta": "E",
    "tema": "Topologias de Redes",
    "justificativa": "Embora anéis simples falhem com ruptura, tecnologias de anel modernas (como FDDI ou anéis redundantes em Ethernet industrial) possuem anéis duplos ou mecanismos de autocura que mantêm a rede ativa mesmo com o rompimento de um cabo [7]. Analogia: Se uma estrada circular cai, existe um desvio (anel secundário) que permite o trânsito continuar fluindo.",
    "referencia": "[7]"
  },
  {
    "enunciado": "Na topologia de barramento, vários computadores são conectados entre si por meio de um servidor localizado no nó central.",
    "correta": "E",
    "tema": "Topologias de Redes",
    "justificativa": "A topologia de barramento não possui nó central. Todos os dispositivos se conectam linearmente ao mesmo cabo backbone [8]. Analogia: Não há uma recepção central num corredor longo; as portas apenas dão para o corredor.",
    "referencia": "[8]"
  },
  {
    "enunciado": "Topologias em malha, que permitem rotas alternativas entre nós, são adotadas para se garantir disponibilidade em WANs.",
    "correta": "C",
    "tema": "Topologias de Redes",
    "justificativa": "A malha (mesh) oferece múltiplos caminhos. Se um link cair, o tráfego pode seguir por outro, garantindo alta disponibilidade, crucial para WANs e Internet [9]. Analogia: Se a rodovia principal estiver bloqueada, você pode pegar estradas vicinais para chegar ao destino.",
    "referencia": "[9]"
  },
  {
    "enunciado": "Na topologia em barramento, a rede não pode ser expandida, porque todos os computadores estão conectados a um único cabo.",
    "correta": "E",
    "tema": "Topologias de Redes",
    "justificativa": "Redes em barramento podem ser expandidas usando conectores (barriletes) e repetidores, até os limites físicos de sinal e colisão da tecnologia [10]. Analogia: É possível emendar mais corda no varal para pendurar mais roupas, embora haja um limite de peso/comprimento.",
    "referencia": "[10]"
  },
  {
    "enunciado": "Em se tratando da topologia de rede em anel, quando o token e o quadro de dados transmitidos percorrem todo o anel e não encontram a estação destinatária, a retirada de ambos da rede é feita pela própria estação que os enviou.",
    "correta": "C",
    "tema": "Topologias de Redes",
    "justificativa": "No funcionamento do Token Ring, o remetente é responsável por retirar o quadro do anel após ele ter dado a volta completa, evitando que dados fiquem circulando eternamente [11]. Analogia: Quem coloca a carta na esteira rolante circular é responsável por tirá-la se ela voltar sem ter sido pega por ninguém.",
    "referencia": "[11]"
  },
  {
    "enunciado": "Em uma rede em topologia de barramento, as comunicações de mensagens do tipo difusão (broadcast) são facilitadas porque todos os nós conectados ao barramento são capazes de ouvir todas as transmissões realizadas.",
    "correta": "C",
    "tema": "Topologias de Redes",
    "justificativa": "Devido ao meio físico compartilhado, o sinal elétrico se propaga para todos os nós. Isso torna o broadcast natural nessa topologia [12]. Analogia: Se você grita em um corredor (barramento), todos que estão nas salas com a porta aberta ouvem, facilitando dar um aviso geral.",
    "referencia": "[12]"
  },
  {
    "enunciado": "Na arquitetura cliente-servidor de multinível, a mesma aplicação pode atuar simultaneamente como cliente e como servidor.",
    "correta": "C",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Em arquiteturas n-camadas (n-tier), um componente intermediário (como um servidor de aplicação) atua como servidor para o front-end, mas age como cliente ao requisitar dados ao servidor de banco de dados [13]. Analogia: O garçom serve o cliente (servidor), mas pede o prato ao cozinheiro (cliente).",
    "referencia": "[13]"
  },
  {
    "enunciado": "Um dos atributos vinculados à arquitetura cliente-servidor é a confiabilidade, que define a probabilidade de o servidor estar operacional em determinado instante.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "A definição dada refere-se à *Disponibilidade*. Confiabilidade refere-se à capacidade de o sistema realizar sua função sem falhas durante um intervalo de tempo [14]. Analogia: Disponibilidade é a loja estar aberta quando você chega. Confiabilidade é o produto que você comprou não quebrar logo em seguida.",
    "referencia": "[14]"
  },
  {
    "enunciado": "A arquitetura cliente-servidor em plataformas GeoWEB é fundamental para o compartilhamento de dados, pois permite que múltiplos usuários acessem e manipulem dados centralizados de forma eficiente.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "(Considerando o gabarito oficial da fonte [15]). Embora pareça correto tecnicamente, a questão pode conter pegadinhas sobre a natureza específica de GeoWEB (muitas vezes orientada a serviços/SOA ou nuvem, transcendendo o C/S simples) ou manipulação direta. A banca considerou Errado. Contexto de prova: Cuidado com generalizações sobre 'fundamental' ou 'manipulação direta' em arquiteturas complexas.",
    "referencia": "[15]"
  },
  {
    "enunciado": "Na arquitetura cliente-servidor para aplicações móveis, a comunicação entre o cliente (aplicativo móvel) e o servidor é sempre realizada de forma que todos os dados necessários são armazenados localmente no dispositivo móvel, o que elimina a necessidade de consultas ao banco de dados do servidor.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Aplicações móveis geralmente dependem de dados na nuvem/servidor. Armazenar *tudo* localmente é inviável e elimina a natureza 'conectada' da maioria dos apps [16]. Analogia: O app do banco no celular não guarda todo o dinheiro e extratos do mundo no seu aparelho; ele consulta o cofre central (servidor) a cada acesso.",
    "referencia": "[16]"
  },
  {
    "enunciado": "Com a criação da arquitetura cliente-servidor em três camadas, a arquitetura em duas camadas deixou de ser usada.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "A arquitetura de duas camadas (cliente gordo + banco de dados) ainda é amplamente utilizada em aplicações legadas ou simples. Uma nova tecnologia não extingue a anterior imediatamente [17]. Analogia: A invenção do avião não acabou com o uso de carros ou navios.",
    "referencia": "[17]"
  },
  {
    "enunciado": "Em uma aplicação web baseada na arquitetura cliente-servidor de três camadas, a lógica de negócios fica totalmente na camada intermediária, sem qualquer distribuição para as camadas de apresentação ou de dados.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Embora a lógica principal fique na camada intermediária, validações frequentemente ocorrem na apresentação (Javascript no navegador) e procedimentos armazenados (Stored Procedures) podem rodar no banco de dados [18]. Analogia: O gerente (camada média) toma as decisões, mas a recepção (apresentação) já filtra quem entra, e o arquivo (dados) tem suas próprias regras de organização.",
    "referencia": "[18]"
  },
  {
    "enunciado": "Na arquitetura cliente-servidor aplicada à computação em nuvem, a escalabilidade horizontal permite que mais servidores sejam adicionados, a fim de melhorar a capacidade de processamento, a resiliência e o desempenho do sistema.",
    "correta": "C",
    "tema": "Computação em Nuvem",
    "justificativa": "Escalabilidade horizontal (Scale Out) envolve adicionar mais máquinas (nós) ao cluster para dividir a carga, diferentemente da vertical (Scale Up), que seria aumentar a potência de uma única máquina [19]. Analogia: Para carregar mais peso, você contrata mais carregadores (horizontal) em vez de tentar transformar um único carregador no Hulk (vertical).",
    "referencia": "[19]"
  },
  {
    "enunciado": "Na arquitetura cliente-servidor multicamadas, o front-end representa o serviço que fica disponível no servidor para ser acessado pelos diversos clientes da aplicação.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "O front-end é a interface que roda no lado do *cliente* (navegador/app), não o serviço no servidor (que seria o back-end) [20]. Analogia: O front-end é o cardápio e a mesa onde você senta; o back-end é a cozinha onde a comida é feita.",
    "referencia": "[20]"
  },
  {
    "enunciado": "Na arquitetura cliente-servidor, há uma confiança mínima nos servidores dedicados, pois a aplicação utiliza a comunicação direta entre duplas de hospedeiros conectados alternadamente, denominados pares.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "A descrição refere-se à arquitetura Peer-to-Peer (P2P), não Cliente-Servidor. No modelo C/S, o servidor é central e confiável [21]. Analogia: Cliente-Servidor é como uma sala de aula com um professor (autoridade); P2P é um grupo de estudos onde todos alunos trocam informações entre si sem líder.",
    "referencia": "[21]"
  },
{
    "enunciado": "No protocolo IPv6, cada endereço tem 256 bits, que são divididos em duas partes (a primeira define a rede e a segunda identifica o host).",
    "correta": "E",
    "tema": "Protocolos de Rede - IPv6",
    "justificativa": "O IPv6 utiliza endereços de 128 bits, não 256 bits [1]. A estrutura hexadecimal é muito maior que o IPv4, mas o tamanho binário é fixo em 128. Analogia: É como dizer que o novo RG tem 20 dígitos quando, na verdade, foi padronizado em 10; o número está errado."
  },
  {
    "enunciado": "O endereço IP 172.19.4.11 pode ser usado como endereço de uma máquina na rede de comunicação interna de uma organização, mas não pode ser usado como endereço IP válido na Internet.",
    "correta": "C",
    "tema": "Endereçamento IP",
    "justificativa": "O endereço pertence à faixa de IPs privados da Classe B (172.16.0.0 a 172.31.255.255), definidos pela RFC 1918 para uso em redes internas (Intranets) e não roteáveis na Internet pública [2]. Analogia: É como um ramal interno de uma empresa; você pode ligar para ele de dentro do prédio, mas quem está fora não consegue discar esse número diretamente."
  },
  {
    "enunciado": "O IPv6 é constituído de 16 bytes com 128 bites de comprimento.",
    "correta": "C",
    "tema": "Protocolos de Rede - IPv6",
    "justificativa": "A matemática está correta: 16 bytes multiplicados por 8 bits cada resultam em 128 bits, que é o tamanho do endereço IPv6 [3]. Analogia: Uma caixa de ovos (byte) tem 8 ovos (bits). Se você tem 16 caixas, você tem 128 ovos no total."
  },
  {
    "enunciado": "O campo IHL (Internet Header Length) contém o tamanho do cabeçalho do pacote IP; o tamanho mínimo permitido equivale a 20 bytes.",
    "correta": "C",
    "tema": "Protocolos de Rede - IPv4",
    "justificativa": "O cabeçalho IPv4 mínimo tem 20 bytes (sem opções). O campo IHL indica o comprimento em palavras de 32 bits; o valor mínimo é 5 (5 * 4 bytes = 20 bytes) [4]. Analogia: O envelope da carta (cabeçalho) tem um peso mínimo padrão obrigatório antes de você colocar qualquer carta (dados) dentro."
  },
  {
    "enunciado": "Em uma rede TCP/IP, o endereçamento IP é responsável pela identificação única de cada dispositivo na rede.",
    "correta": "C",
    "tema": "Endereçamento IP",
    "justificativa": "O endereço IP funciona como o identificador lógico exclusivo de um host em uma rede TCP/IP, permitindo o roteamento correto [5]. Analogia: É como o endereço postal da sua casa; ele precisa ser único na cidade para que o carteiro saiba exatamente onde entregar a correspondência."
  },
  {
    "enunciado": "O protocolo IPv6 foi desenvolvido principalmente para aumentar a velocidade da transmissão de dados na Internet.",
    "correta": "E",
    "tema": "Protocolos de Rede - IPv6",
    "justificativa": "O objetivo primário do IPv6 foi resolver o esgotamento de endereços do IPv4, ampliando o espaço de endereçamento. Melhorias de velocidade ou segurança foram consequências arquiteturais, não o motivo principal [5]. Analogia: Construíram-se arranha-céus (IPv6) porque os terrenos (endereços IPv4) acabaram, não necessariamente para que os elevadores fossem mais rápidos."
  },
  {
    "enunciado": "O endereço IP é composto por quatro octetos em sua versão IPv4, e cada octeto varia de 0 a 255, possibilitando a identificação única de dispositivos em uma rede.",
    "correta": "C",
    "tema": "Endereçamento IP",
    "justificativa": "O IPv4 tem 32 bits, divididos em 4 grupos de 8 bits (octetos). $2^8$ permite valores de 0 a 255 [6]. Analogia: É como um código de cofre com 4 mostradores, onde cada mostrador vai de 0 a 255."
  },
  {
    "enunciado": "Um dos benefícios da criação do protocolo IPV6, em relação ao IPV4, foi aumentar a capacidade de endereços disponíveis, visto que o IPV6 utiliza endereços de 32 bites.",
    "correta": "E",
    "tema": "Protocolos de Rede - IPv6",
    "justificativa": "Embora o benefício da capacidade esteja correto, o erro está no tamanho: o IPv6 utiliza 128 bits, enquanto o IPv4 é que utiliza 32 bits [7]. Analogia: Dizer que ampliaram o estacionamento para caber mais carros, mas afirmar que as novas vagas têm o mesmo tamanho pequeno das antigas."
  },
  {
    "enunciado": "Nos endereços IP (IPv4) pertencentes à classe A, o primeiro byte varia entre 1 e 127 e o primeiro bit desse byte é fixo e identifica a classe do endereço.",
    "correta": "C",
    "tema": "Endereçamento IP",
    "justificativa": "Na Classe A, o primeiro bit é sempre 0, o que deixa 7 bits para variação da rede (0 a 127) [8]. Analogia: Em uma biblioteca, todos os livros da seção A começam com o código '0'; isso reserva todo o intervalo de 0 a 127 para essa categoria."
  },
  {
    "enunciado": "O protocolo IP opera na camada de transporte, que permite que hosts se comuniquem.",
    "correta": "E",
    "tema": "Modelo TCP/IP",
    "justificativa": "O Protocolo IP opera na Camada de Internet (ou Rede no modelo OSI), responsável pelo roteamento e endereçamento lógicos. A camada de Transporte é onde operam TCP e UDP [9]. Analogia: O IP é o sistema de endereços e estradas (Rede); o Caminhão (Transporte) é quem viaja por elas."
  },
  {
    "enunciado": "O campo TTL (time to live) do pacote IP é decrementado em um em cada roteador.",
    "correta": "C",
    "tema": "Protocolos de Rede - IP",
    "justificativa": "O TTL serve para evitar loops infinitos. Cada roteador que processa o pacote subtrai 1 desse valor; se chegar a zero, o pacote é descartado [9]. Analogia: É como uma bomba-relógio transportada de mão em mão; cada pessoa (roteador) diminui 1 segundo do relógio. Se o tempo acabar, a entrega é cancelada para não explodir o sistema."
  },
  {
    "enunciado": "No IPv4, a máscara de rede 255.255.255.192 deve ser utilizada para se criar uma sub-rede com suporte a 62 hosts.",
    "correta": "C",
    "tema": "Sub-redes",
    "justificativa": "A máscara .192 (final 11000000 em binário) deixa 6 bits para host. $2^6 - 2 = 64 - 2 = 62$ hosts válidos [10]. Analogia: Você comprou um terreno (rede) e construiu muros que deixam espaço livre exato para 62 casas (hosts)."
  },
  {
    "enunciado": "Em um endereço IPv4 da classe B, o último octeto é referente ao host.",
    "correta": "C",
    "tema": "Endereçamento IP",
    "justificativa": "Na Classe B padrão (/16), os dois últimos octetos são para host. Portanto, o último octeto é, de fato, parte do endereçamento do host [11]. Analogia: Se o sobrenome da família (Rede) ocupa as duas primeiras palavras, os nomes dos filhos (Hosts) ocupam as duas últimas. A última palavra certamente refere-se ao filho."
  },
  {
    "enunciado": "O endereço de broadcast é reservado como rota-padrão: quando um destino for requisitado, se o endereço não estiver presente na rede local, o protocolo procurará o endereço 255.255.255.255 e avaliará a rota configurada previamente.",
    "correta": "E",
    "tema": "Endereçamento IP",
    "justificativa": "A rota padrão (default gateway) é 0.0.0.0. O endereço 255.255.255.255 é o broadcast limitado local (envia para todos na mesma rede física) e não é roteado para fora [12]. Analogia: Gritar para todos na sala (Broadcast) não é o mesmo que sair pela porta de emergência (Rota Padrão) quando você não encontra quem procura."
  },
  {
    "enunciado": "Uma rede local configurada, em IPv4, com endereço de rede 172.27.10.0 e máscara de rede 255.255.255.0 tem a capacidade de distribuir endereços lógicos para até 254 hosts.",
    "correta": "C",
    "tema": "Sub-redes",
    "justificativa": "Uma máscara /24 (255.255.255.0) possui 8 bits para hosts. $2^8 - 2 = 256 - 2 = 254$ endereços utilizáveis [13]. Analogia: Um bloco de rifas com 256 números, onde o primeiro e o último são reservados, sobrando 254 para vender."
  },
  {
    "enunciado": "Uma rede IP com endereçamento classe A utiliza o primeiro byte como parte que define o endereço da rede.",
    "correta": "C",
    "tema": "Endereçamento IP",
    "justificativa": "Endereços Classe A usam o primeiro octeto (byte) para rede e os três restantes para hosts (Máscara padrão /8) [14]. Analogia: Em uma cidade muito grande (Classe A), o endereço é definido apenas pelo Bairro (1º byte), e todo o resto é detalhe da rua e casa."
  },
  {
    "enunciado": "O IPv4 funciona como identificador de 64 bits utilizado para identificar dispositivos em uma rede.",
    "correta": "E",
    "tema": "Endereçamento IP",
    "justificativa": "O IPv4 utiliza endereços de 32 bits. O IPv6 utiliza 128 bits. Nenhum dos padrões principais usa 64 bits como identificador de rede [15]. Analogia: Chamar uma nota de 32 reais de nota de 64 reais; o valor nominal está incorreto."
  },
  {
    "enunciado": "O TCP requisita que o destinatário informe, por meio do envio de um ACK (acknowledgement), qual foi o último pacote recebido com sucesso.",
    "correta": "E",
    "tema": "Protocolos de Rede - TCP",
    "justificativa": "O mecanismo de ACK do TCP geralmente confirma o *próximo* byte esperado (ACK cumulativo), indicando implicitamente o sucesso dos anteriores, e não apenas 'o último pacote' isoladamente [16]. Analogia: Ao receber páginas de um livro, você diz 'Pode mandar a página 11', o que confirma que você já leu até a 10."
  },
  {
    "enunciado": "O cabeçalho do UDP requer o uso de bits adicionais para o correto sequenciamento da informação, bem como o checksum obrigatório, para a integridade do cabeçalho e dos dados.",
    "correta": "E",
    "tema": "Protocolos de Rede - UDP",
    "justificativa": "O UDP não faz sequenciamento (não tem campos de sequência no cabeçalho) e o checksum é opcional no IPv4 (embora obrigatório no IPv6) [17]. Analogia: O UDP é um cartão postal simples; não tem número de página (sequência) e você não é obrigado a conferir se ele amassou no correio (checksum)."
  },
  {
    "enunciado": "O protocolo TCP garante a entrega de pacotes de dados na mesma ordem em que foram enviados.",
    "correta": "C",
    "tema": "Protocolos de Rede - TCP",
    "justificativa": "O TCP numera os segmentos (Sequence Numbers) e reordena-os no destino antes de entregar à aplicação, garantindo a ordem correta [18]. Analogia: Mesmo que as páginas de uma carta cheguem embaralhadas pelo correio, o protocolo lê os números das páginas e monta a carta na ordem certa antes de você ler."
  },
  {
    "enunciado": "Quando a aplicação DNS é utilizada, o UDP fornece um meio para enviar datagramas IP encapsulados sem que seja necessário estabelecer uma conexão.",
    "correta": "C",
    "tema": "Protocolos de Rede - UDP",
    "justificativa": "O DNS utiliza predominantemente UDP (porta 53) para consultas rápidas, aproveitando a característica 'connectionless' (sem handshake) para velocidade [19]. Analogia: Para perguntar as horas (DNS), você apenas grita a pergunta na rua (UDP); não precisa apertar a mão do estranho e se apresentar (TCP) antes."
  },
  {
    "enunciado": "As conexões TCP são do tipo fluxo de mensagens, full-duplex e ponto a ponto, sendo nelas admitidos processos de multicasting ou broadcasting.",
    "correta": "E",
    "tema": "Protocolos de Rede - TCP",
    "justificativa": "TCP é estritamente unicast (ponto a ponto). Não suporta multicast ou broadcast, pois exige uma conexão estabelecida e controle de estado entre dois pontos específicos [20]. Analogia: O TCP é um telefonema privado; você não pode fazer uma chamada TCP para 'todos da cidade' ao mesmo tempo."
  },
  {
    "enunciado": "O protocolo de datagrama do usuário (UDP), não orientado a conexão, fornece uma interface para o protocolo IP com recurso adicional de demultiplexação de vários processos que utilizam as portas e detecção opcional de erro fim a fim.",
    "correta": "C",
    "tema": "Protocolos de Rede - UDP",
    "justificativa": "O UDP adiciona portas (para distinguir aplicações/processos) e checksum (erro) sobre o IP bruto, sem adicionar controle de conexão [21]. Analogia: O UDP é como colocar o nome do destinatário (Porta) no envelope que o IP entrega, permitindo que a portaria saiba para qual apartamento enviar."
  },
  {
    "enunciado": "Todas as conexões TCP são full-duplex e não permitem os processos de broadcasting.",
    "correta": "C",
    "tema": "Protocolos de Rede - TCP",
    "justificativa": "TCP permite envio simultâneo em ambas as direções (Full-Duplex) mas é restrito a um par de comunicantes, excluindo broadcast [22]. Analogia: É uma conversa de rádio bidirecional exclusiva entre duas pessoas; ninguém mais pode entrar na frequência."
  },
  {
    "enunciado": "O completo encerramento de uma conexão TCP entre duas máquinas ocorre por meio da sinalização de dois segmentos TCP do tipo FIN, um para cada sentido da conexão.",
    "correta": "C",
    "tema": "Protocolos de Rede - TCP",
    "justificativa": "Para fechar a conexão completamente, cada lado deve enviar um FIN e receber um ACK (processo de 4 vias, ou FINs independentes), sinalizando que não há mais dados a enviar daquele lado [23]. Analogia: É como desligar o telefone: eu digo 'tchau' (FIN) e você responde (ACK), depois você diz 'tchau' (FIN) e eu respondo (ACK)."
  },
 {
    "enunciado": "Na arquitetura cliente/servidor multinível, uma mesma aplicação pode ser servidor para um cliente e cliente para outro servidor, desde que não simultaneamente.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Na arquitetura multinível (n-tier), um componente (como um servidor de aplicação) atua *simultaneamente* como servidor para o front-end e cliente para o banco de dados. A restrição de 'não simultaneamente' torna a questão errada [1], [2]. Analogia: Um gerente intermediário recebe ordens do diretor (é cliente) e dá ordens aos funcionários (é servidor) ao mesmo tempo."
  },
  {
    "enunciado": "Em uma arquitetura multicamadas de C/S, o sistema operacional de rede, para controle dos periféricos, está localizado na camada de hardware.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "O Sistema Operacional é software, portanto pertence à camada de software/sistema, não à camada de hardware (que envolve apenas os equipamentos físicos) [3]. Analogia: O motorista (SO) não é parte do chassi do carro (Hardware), ele é quem opera o carro."
  },
  {
    "enunciado": "Em uma arquitetura multicamadas de C/S, o processamento cooperativo ocorre quando dois ou mais processadores distintos atuam para completar uma simples transação.",
    "correta": "C",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "O processamento cooperativo distribui a execução de uma única transação lógica entre várias máquinas (cliente e servidores), aproveitando o poder computacional conjunto [4]. Analogia: Dois mecânicos trabalhando juntos no mesmo carro para trocar um pneu mais rápido."
  },
  {
    "enunciado": "Um serviço específico em um servidor que contenha outros serviços é identificado somente pelo endereço do protocolo na Internet (IP) daquele servidor.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "O endereço IP identifica a máquina (host). Para identificar um *serviço* específico dentro da máquina (como Web ou Email), é necessário o número da **Porta** em conjunto com o IP (Socket) [5], [6]. Analogia: O IP é o endereço do prédio; a Porta é o número do apartamento onde o serviço mora."
  },
  {
    "enunciado": "Em uma arquitetura cliente-servidor em duas camadas, é comum que o cliente armazene as regras de negócio da aplicação (Fat Client).",
    "correta": "C",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Na arquitetura de duas camadas tradicional, o cliente ('Gordo' ou Fat) contém a lógica de apresentação e de negócio, enquanto o servidor gerencia apenas os dados. Isso difere da arquitetura de três camadas, onde a lógica vai para o servidor de aplicação [7]. Analogia: É como um buffet self-service (2 camadas) onde o cliente tem que montar o prato e temperar (lógica no cliente), versus um restaurante à la carte (3 camadas) onde o chef prepara tudo e o cliente só recebe pronto."
  },
  {
    "enunciado": "O RAID 6 utiliza dupla paridade e códigos de correção de erros, priorizando a segurança dos dados, mas sofre perda de desempenho na escrita devido à gravação dupla dos bits de paridade.",
    "correta": "C",
    "tema": "Infraestrutura - RAID",
    "justificativa": "O RAID 6 é caracterizado pela dupla paridade distribuída, permitindo falha de até 2 discos. O cálculo e gravação dessa paridade extra penalizam a performance de escrita (Write Penalty) em troca de maior segurança [8], [9], [10]. Analogia: É como ter dois escrivães registrando cada ata de reunião para garantir segurança; demora o dobro do tempo para escrever, mas é muito mais seguro."
  },
  {
    "enunciado": "Os sistemas de RAID nível 4 gravam os dados e as informações de paridade distribuídas em todos os discos do volume.",
    "correta": "E",
    "tema": "Infraestrutura - RAID",
    "justificativa": "O RAID 4 utiliza um disco de paridade **dedicado**, e não distribuído. A paridade distribuída é característica do RAID 5 [11]. Analogia: No RAID 4, existe um 'inspetor' exclusivo (disco dedicado) que guarda os erros de todos; no RAID 5, todos os trabalhadores se revezam na função de inspetor."
  },
  {
    "enunciado": "O RAID 5+0 (ou RAID 50) requer no mínimo 4 discos para ser implementado.",
    "correta": "E",
    "tema": "Infraestrutura - RAID",
    "justificativa": "O RAID 50 é um arranjo (Stripe) de sub-arranjos RAID 5. Como cada RAID 5 exige no mínimo 3 discos, e são necessários pelo menos dois sub-arranjos para fazer o RAID 0, o mínimo total é de 6 discos (3+3) [12]. Analogia: Para fazer dois triângulos (RAID 5), você precisa de no mínimo 6 palitos."
  },
  {
    "enunciado": "O IPv6 entrega um pacote para todos os membros do grupo anycast, se esse pacote for destinado a um endereço anycast.",
    "correta": "E",
    "tema": "Protocolos de Rede - IPv6",
    "justificativa": "O endereçamento **Anycast** entrega o pacote apenas para o membro do grupo topologicamente **mais próximo** (um único destino), e não para *todos* (que seria Multicast ou Broadcast) [13], [14]. Analogia: Anycast é ligar para o número de emergência 190; atende a viatura mais próxima, não todas as viaturas da cidade."
  },
  {
    "enunciado": "O campo ECN (Explicit Congestion Notification) no cabeçalho IPv4 é utilizado para o descarte de pacotes congestionados.",
    "correta": "E",
    "tema": "Protocolos de Rede - IPv4",
    "justificativa": "O ECN serve justamente para *evitar* o descarte. Ele sinaliza o congestionamento para que os emissores reduzam a taxa de transmissão antes que o buffer encha e force o descarte de pacotes [14]. Analogia: É um sinal de trânsito amarelo avisando 'diminua a velocidade', para evitar que o guarda precise multar e parar (descartar) o carro lá na frente."
  },
  {
    "enunciado": "Em redes com muitos computadores, recomenda-se usar o endereço de loopback como default gateway para evitar conflito de IPs.",
    "correta": "E",
    "tema": "Endereçamento IP",
    "justificativa": "O endereço de Loopback (127.0.0.1) aponta para a própria máquina local. Usá-lo como Gateway Padrão faria com que o tráfego destinado à Internet nunca saísse do computador, isolando-o da rede [15]. Analogia: Tentar sair de casa usando uma porta que dá para o seu próprio quarto."
  },
  {
    "enunciado": "Para permitir o tráfego completo de DNS em um firewall, deve-se liberar regras para a porta 53 tanto em UDP quanto em TCP.",
    "correta": "C",
    "tema": "Segurança de Redes - Firewall",
    "justificativa": "O DNS utiliza UDP (porta 53) para consultas padrão (rápidas) e TCP (porta 53) para transferência de zona e respostas maiores que 512 bytes. Bloquear TCP pode quebrar funcionalidades do DNS [16]. Analogia: O correio normal (UDP) leva cartas; para pacotes grandes (transferência de zona), precisa do caminhão de carga (TCP). Ambos usam a mesma garagem (Porta 53)."
  },
  {
    "enunciado": "Na família TCP/IP, o UDP é considerado o principal protocolo da camada de aplicação.",
    "correta": "E",
    "tema": "Protocolos de Rede",
    "justificativa": "O UDP é um protocolo da camada de **Transporte**, não de Aplicação. Exemplos de protocolos de aplicação são HTTP, DNS, FTP [17]. Analogia: O UDP é o tipo de caminhão (Transporte), não a carga que está dentro dele (Aplicação)."
  },
  {
    "enunciado": "O SCTP é um protocolo confiável e orientado à conexão, tal qual o protocolo UDP.",
    "correta": "E",
    "tema": "Protocolos de Rede",
    "justificativa": "Embora o SCTP seja orientado a conexão (como o TCP), a comparação com o UDP está errada porque o UDP é **não confiável** e **não orientado a conexão**. O SCTP combina características de ambos, mas garante entrega (confiabilidade) [18]. Analogia: Dizer que um carro blindado (SCTP) é seguro 'assim como uma bicicleta sem freio' (UDP) é incorreto."
  },
  {
    "enunciado": "A confiabilidade de um servidor web está relacionada com o HTTP, pois este garante que os pacotes sejam entregues no destino e na ordem correta.",
    "correta": "E",
    "tema": "Protocolos de Rede",
    "justificativa": "A garantia de entrega e ordenação é função do protocolo **TCP** (Camada de Transporte), sobre o qual o HTTP roda. O HTTP (Aplicação) em si não gerencia pacotes ou conexões físicas [19]. Analogia: Quem garante que a carta chega inteira é o Correio (TCP), não o papel onde você escreveu a mensagem (HTTP)."
  },
  {
    "enunciado": "Na camada de transporte, o protocolo UDP provê serviço não orientado a conexão e controla o congestionamento por meio de janelas deslizantes.",
    "correta": "E",
    "tema": "Protocolos de Rede - UDP",
    "justificativa": "O UDP não possui mecanismos de controle de fluxo ou congestionamento (como janelas deslizantes). Essas são características exclusivas do TCP [20]. Analogia: O UDP é uma torneira aberta sem registro; ela joga água o quanto pode, sem saber se o balde já transbordou."
  },
  {
    "enunciado": "O quadro do padrão IEEE 802.11 (Wi-Fi) acomoda até quatro campos de endereço MAC, sendo o quarto campo utilizado apenas em situações específicas como redes em malha ou bridges (WDS).",
    "correta": "C",
    "tema": "Redes Sem Fio",
    "justificativa": "O cabeçalho 802.11 possui 4 campos de endereço para suportar a comunicação entre Pontos de Acesso (DS to DS), diferentemente do Ethernet que usa apenas 2 (Origem/Destino) [21]. Analogia: No correio interno (Ethernet), basta 'De/Para'; no correio internacional complexo (Wi-Fi Mesh), precisa de 'Remetente Original', 'Transmissor Intermediário', 'Receptor Intermediário' e 'Destino Final'."
  },
  {
    "enunciado": "Na arquitetura cliente-servidor, para que clientes acessem serviços de um servidor, é obrigatório que o servidor conheça previamente a identidade de todos os clientes.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Servidores geralmente ficam aguardando conexões de *qualquer* cliente (socket listen). Eles não precisam conhecer a lista de clientes a priori; a identificação ocorre durante o estabelecimento da conexão ou autenticação posterior [22]. Analogia: Uma loja aberta na rua (Servidor) não precisa saber o nome de todos os moradores da cidade antes de abrir a porta; ela atende quem entrar."
  },
  {
    "enunciado": "O protocolo TCP utiliza confirmações (ACKs) que fluem do destino para a origem para informar ao remetente o correto recebimento dos dados.",
    "correta": "C",
    "tema": "Protocolos de Rede - TCP",
    "justificativa": "Esta é a base da confiabilidade do TCP: o receptor envia ACKs confirmando até onde recebeu, permitindo que o emissor saiba o que precisa (ou não) retransmitir [23]. Analogia: É como conversar no rádio e dizer 'Câmbio' para confirmar que ouviu a mensagem anterior."
  },
  {
    "enunciado": "O uso de RAID nível 6 é adequado para aplicações que requeiram altas taxas de requisições de entrada e saída (I/O), especialmente escrita.",
    "correta": "E",
    "tema": "Infraestrutura - RAID",
    "justificativa": "Devido ao cálculo de dupla paridade, o RAID 6 tem desempenho de escrita inferior ao RAID 10 ou RAID 5. Não é a escolha ideal para *alta performance* de escrita, mas sim para alta redundância [24]. Analogia: O RAID 6 é um carro forte: muito seguro, mas pesado e lento para arrancar."
  },
  {
    "enunciado": "Para a definição de sub-redes a partir de um endereço classe C, a máscara de rede 255.255.255.192 (/26) cria 4 sub-redes.",
    "correta": "C",
    "tema": "Sub-redes",
    "justificativa": "Um endereço Classe C tem máscara padrão /24. Passando para /26, tomamos 2 bits emprestados da parte de host. $2^2 = 4$ sub-redes possíveis [25]. Analogia: Cortar uma pizza (/24) em 4 pedaços exige 2 cortes cruzados (2 bits)."
  },
  {
    "enunciado": "Na arquitetura cliente/servidor, o 'middleware' é a camada de hardware responsável pela conexão física entre cliente e servidor.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Middleware é **software** que atua como cola entre aplicações ou componentes (camada de serviços/intercâmbio), não é hardware físico [26] (contexto implícito de IPC/troca de mensagens). Analogia: O Middleware é o tradutor intérprete (software) entre duas pessoas, não o fio do telefone (hardware)."
  },
  {
    "enunciado": "Em uma rede de datagramas (como IP), cada pacote contém os endereços completos de origem e de destino e pode seguir rotas diferentes.",
    "correta": "C",
    "tema": "Protocolos de Rede - IP",
    "justificativa": "No modelo de datagrama (packet switching connectionless), cada pacote é independente e roteado individualmente, exigindo endereçamento completo em cada cabeçalho [27]. Analogia: Cada carta no correio tem o endereço completo e pode ir por caminhões diferentes; não é como um trem onde todos os vagões estão engatados no mesmo trilho."
  },
  {
    "enunciado": "Se, em um arranjo de disco com RAID 0, um dos discos falhar, a controladora utiliza os discos de backup duplicados para recuperar os dados.",
    "correta": "E",
    "tema": "Infraestrutura - RAID",
    "justificativa": "RAID 0 **não possui redundância** nem discos de backup/paridade. Falha em um disco resulta em perda total dos dados do volume [28], [29]. Analogia: RAID 0 é como escrever metade da frase em um papel e metade em outro; se perder um papel, a frase não faz mais sentido e não há cópia."
  },
  {
    "enunciado": "O IPv6 utiliza endereços de 128 bits, escritos em notação hexadecimal.",
    "correta": "C",
    "tema": "Protocolos de Rede - IPv6",
    "justificativa": "O IPv6 expandiu o espaço de endereçamento para 128 bits (16 bytes), representados usualmente como 8 grupos de 4 dígitos hexadecimais [13], [30]. Analogia: O IPv4 é um número de telefone antigo de 8 dígitos; o IPv6 é um código IBAN internacional longo e complexo."
  },
 {
    "enunciado": "No protocolo IPv6, cada endereço tem 256 bits, que são divididos em duas partes (a primeira define a rede e a segunda identifica o host).",
    "correta": "E",
    "tema": "Protocolos de Rede - IPv6",
    "justificativa": "O IPv6 possui endereços de 128 bits, e não 256. A estrutura de 128 bits é que permite o vasto espaço de endereçamento. Analogia: É como dizer que um número de telefone tem 20 dígitos quando o padrão é ter apenas 11; o tamanho informado está incorreto [1]."
  },
  {
    "enunciado": "O IPv6 entrega um pacote para todos os membros do grupo anycast, se esse pacote for destinado a um endereço anycast.",
    "correta": "E",
    "tema": "Protocolos de Rede - IPv6",
    "justificativa": "O endereçamento Anycast entrega o pacote apenas ao membro do grupo topologicamente *mais próximo* (um único destino), e não a todos (que seria Multicast). Analogia: Ligar para o número de emergência (Anycast) conecta você à atendente mais próxima, não toca o telefone de todas as atendentes do país ao mesmo tempo [2]."
  },
  {
    "enunciado": "O campo ECN (Explicit Congestion Notification) no cabeçalho IPv4 é utilizado para o descarte de pacotes e constitui um recurso obrigatório.",
    "correta": "E",
    "tema": "Protocolos de Rede - IPv4",
    "justificativa": "O ECN serve para *notificar* congestionamento sem descartar pacotes, permitindo que as pontas reduzam a transmissão. O descarte é o comportamento padrão quando não há ECN ou quando o buffer estoura. Analogia: O ECN é um aviso de 'lotação' no ônibus para que ninguém mais entre, evitando ter que empurrar passageiros para fora (descarte) [3]."
  },
  {
    "enunciado": "Em uma rede de datagramas, cada pacote contém os endereços completos de origem e de destino e pode seguir rotas diferentes.",
    "correta": "C",
    "tema": "Protocolos de Rede",
    "justificativa": "Em redes de comutação de pacotes (datagramas), cada unidade de dados é independente e autossuficiente, contendo todo o endereçamento necessário para ser roteada individualmente. Analogia: Cada carta lançada no correio tem o endereço completo e viaja independentemente das outras, ao contrário de vagões de trem que seguem juntos [4]."
  },
  {
    "enunciado": "Nos endereços IP (IPv4) pertencentes à classe A, o primeiro byte varia entre 1 e 127 e o primeiro bit desse byte é fixo e identifica a classe do endereço.",
    "correta": "C",
    "tema": "Endereçamento IP",
    "justificativa": "A Classe A é definida pelo bit mais significativo '0', abrangendo o intervalo de 0 a 127 no primeiro octeto. Analogia: É como uma enciclopédia onde o Volume A é reservado para todos os tópicos que começam com números pequenos (0-127) [5]."
  },
  {
    "enunciado": "A notação CIDR para o bloco de endereço IP privado da classe B é 172.16.0.0/12.",
    "correta": "C",
    "tema": "Endereçamento IP",
    "justificativa": "O intervalo privado da Classe B vai de 172.16.0.0 a 172.31.255.255. A máscara que cobre de 16 (00010000) a 31 (00011111) precisa fixar os primeiros 4 bits do segundo octeto, resultando em /12 (8+4). Analogia: É um condomínio fechado que comprou todos os lotes do número 16 ao 31 na rua 172 [6]."
  },
  {
    "enunciado": "Uma máscara de rede classe C possui 4 bytes, por padrão.",
    "correta": "C",
    "tema": "Endereçamento IP",
    "justificativa": "Qualquer máscara de sub-rede IPv4 (incluindo a padrão de Classe C, 255.255.255.0) tem 32 bits, ou seja, 4 bytes. Analogia: A régua (máscara) usada para medir o endereço tem o mesmo comprimento (32 bits) que o endereço em si [7]."
  },
  {
    "enunciado": "O endereço IP 172.16.10.1/24 é um exemplo de endereço classe C.",
    "correta": "E",
    "tema": "Endereçamento IP",
    "justificativa": "A classe de um endereço é determinada pelo seu primeiro octeto. 172.x.x.x é Classe B (128-191). O fato de usar uma máscara /24 (típica de Classe C) não muda a classe original do endereço, apenas define a sub-rede (Classless/CIDR). Analogia: Um caminhão (Classe B) estacionado em uma vaga pequena (máscara /24) continua sendo um caminhão, não vira um carro compacto (Classe C) [8]."
  },
  {
    "enunciado": "Na rede 192.168.10.0, se o endereço IP 192.168.10.10/25 e o endereço IP 192.168.10.254/25 estiverem em uso, então ambos estarão no mesmo domínio de broadcast da rede.",
    "correta": "E",
    "tema": "Sub-redes",
    "justificativa": "A máscara /25 divide a rede em duas sub-redes: 0-127 e 128-255. O IP .10 está na primeira e o .254 na segunda. Eles estão em redes lógicas diferentes e não compartilham broadcast. Analogia: Vizinhos que moram na mesma rua, mas um mora no 'Lado Norte' e outro no 'Lado Sul', separados por um muro; eles não se ouvem gritando (broadcast) [8, 9]."
  },
  {
    "enunciado": "Para a definição de quatro sub-redes a partir de um endereço classe C (192.168.10.0/24), para cada sub-rede prevista, o número total de hosts é 128, dos quais 126 são úteis.",
    "correta": "E",
    "tema": "Sub-redes",
    "justificativa": "Dividir uma Classe C (/24) em 4 sub-redes exige pegar 2 bits emprestados (/26). Isso deixa 6 bits para host. $2^6 = 64$ endereços totais (62 úteis), não 128. Analogia: Cortar uma pizza em 4 pedaços resulta em fatias menores do que cortá-la apenas em 2 [10]."
  },
  {
    "enunciado": "O endereço IP é dividido em duas partes: a primeira identifica o host dentro de uma rede; a segunda identifica a rede à qual o host está conectado.",
    "correta": "E",
    "tema": "Endereçamento IP",
    "justificativa": "A ordem é inversa: a primeira parte (prefixo) identifica a Rede, e a segunda parte (sufixo) identifica o Host. Analogia: No endereço 'Rua das Flores, 10', a primeira parte é a rua (Rede) e a segunda é a casa (Host) [11]."
  },
  {
    "enunciado": "Se a máscara 255.255.255.224 for aplicada à rede local usando-se IPv4, o número de sub-redes que poderão ser mapeadas de 192.168.0.0 a 192.168.0.255 será igual a 8.",
    "correta": "C",
    "tema": "Sub-redes",
    "justificativa": "A máscara final .224 é /27. Partindo de uma rede padrão /24, pegamos 3 bits emprestados ($27 - 24 = 3$). $2^3 = 8$ sub-redes. Analogia: Dobrar uma folha de papel 3 vezes cria 8 seções [12]."
  },
  {
    "enunciado": "O endereçamento definido por 192.168.10.128/25 possui a capacidade de suportar até 126 endereços IPs para hosts, e seu endereço de broadcast é 192.168.10.255.",
    "correta": "C",
    "tema": "Sub-redes",
    "justificativa": "A sub-rede começa em .128 e vai até .255 (tamanho 128). Menos rede e broadcast, restam 126 úteis. O último IP (.255) é o broadcast. Analogia: Um loteamento que vai do número 128 ao 255 tem 128 lotes; tirando a portaria e a área comum, sobram 126 para casas [13, 14]."
  },
  {
    "enunciado": "Uma máscara de rede de 23 bites pode ser utilizada em uma rede na qual seja necessário colocar 500 computadores para se comunicar diretamente.",
    "correta": "C",
    "tema": "Sub-redes",
    "justificativa": "Uma máscara /23 deixa 9 bits para host ($32 - 23 = 9$). $2^9 = 512$ endereços totais (510 úteis). É suficiente para 500 computadores. Analogia: Um ônibus com 510 lugares comporta uma excursão de 500 pessoas [15]."
  },
  {
    "enunciado": "Os endereços inseridos em um intervalo de 0.0.0.0 a 129.0.0.0 integram exclusivamente a classe A.",
    "correta": "E",
    "tema": "Endereçamento IP",
    "justificativa": "A Classe A vai de 0 a 127. O intervalo 128 a 191 pertence à Classe B. Portanto, endereços iniciados em 128 ou 129 não são Classe A. Analogia: Dizer que os números de 0 a 200 são todos 'baixos', quando a categoria 'baixo' termina em 100 [16]."
  },
  {
    "enunciado": "A demanda de um bloco de endereços com máscara de rede de 24 bites que necessite ser segmentado em pelo menos quatro sub-redes, capazes de comportar no mínimo 60 computadores cada uma, pode ser atendida utilizando-se uma máscara de 27 bites para cada sub-rede.",
    "correta": "E",
    "tema": "Sub-redes",
    "justificativa": "Uma máscara /27 cria sub-redes com 32 IPs totais (30 úteis). Isso não atende à demanda de 60 computadores. Seria necessária uma máscara /26 (64 IPs totais, 62 úteis). Analogia: Tentar colocar 60 pessoas em uma sala que só cabe 30 [17]."
  },
  {
    "enunciado": "O endereço IPv6 de loopback é representado por 0:0:0:0:0:0:0:1 (ou ::1).",
    "correta": "C",
    "tema": "Protocolos de Rede - IPv6",
    "justificativa": "No IPv6, o endereço de loopback (localhost) é ::1, equivalente ao 127.0.0.1 do IPv4. Analogia: É o endereço 'Eu mesmo' na rede IPv6 [17]."
  },
  {
    "enunciado": "A combinação entre um endereço IP e um número de porta é denominada endereço socket.",
    "correta": "C",
    "tema": "Protocolos de Rede",
    "justificativa": "O par (IP, Porta) define o ponto final único de uma conexão, conhecido tecnicamente como Socket. Analogia: Endereço do prédio (IP) + Número do apartamento (Porta) = Endereço completo para entrega (Socket) [18]."
  },
  {
    "enunciado": "O TCP, por ser orientado à conexão, divide os dados a serem transmitidos em pequenos blocos, sem identificação, já que esta tarefa é de responsabilidade do roteador da rede.",
    "correta": "E",
    "tema": "Protocolos de Rede - TCP",
    "justificativa": "O TCP **adiciona** identificação (Número de Sequência) aos segmentos para garantir a remontagem ordenada. Roteadores (camada de rede) não gerenciam a sequência de dados da aplicação. Analogia: O TCP numera as páginas da carta antes de enviar; o carteiro (roteador) não abre a carta para numerar as páginas [19]."
  },
  {
    "enunciado": "UDP é um protocolo não orientado a conexão, portanto, no fluxo da comunicação, cada datagrama UDP é dependente do anterior.",
    "correta": "E",
    "tema": "Protocolos de Rede - UDP",
    "justificativa": "Por ser não orientado a conexão, cada datagrama UDP é independente. Não há relação de dependência ou sequência garantida pelo protocolo. Analogia: Enviar vários postais (UDP) para um amigo; cada um chega quando der, e ler o segundo não depende de ter recebido o primeiro [20]."
  },
  {
    "enunciado": "Se, por padrão, a resolução de nomes ocorre via DNS em determinada porta e determinado protocolo, então, para permitir ou negar esse tipo de tráfego, o firewall deve ter regras específicas considerado o fluxo de dados do DNS na porta 53 UDP e na porta 53 TCP.",
    "correta": "C",
    "tema": "Segurança de Redes - Firewall",
    "justificativa": "O DNS utiliza a porta 53 tanto em UDP (consultas padrão) quanto em TCP (transferência de zona/respostas grandes). Um firewall deve considerar ambos para funcionamento completo. Analogia: Para deixar o serviço de entregas funcionar, a portaria deve liberar a entrada tanto de motos (UDP) quanto de caminhões (TCP) [21]."
  },
  {
    "enunciado": "Se, na comunicação TCP entre dois computadores em uma rede local, os dados transmitidos forem segmentados em pequenos blocos e chegarem fora de ordem à recepção, o computador receptor não conseguirá reagrupar os dados, devido à falta de ordem dos blocos de dados recebidos.",
    "correta": "E",
    "tema": "Protocolos de Rede - TCP",
    "justificativa": "O protocolo TCP foi projetado especificamente para reordenar segmentos que chegam fora de ordem, utilizando números de sequência. Analogia: Se você recebe as páginas de um livro soltas e fora de ordem, mas elas estão numeradas (TCP), você consegue montá-las na ordem correta antes de ler [22]."
  },
  {
    "enunciado": "O UDP é um protocolo orientado à conexão e garante a entrega dos dados.",
    "correta": "E",
    "tema": "Protocolos de Rede - UDP",
    "justificativa": "UDP é 'Connectionless' (sem conexão) e 'Unreliable' (não confiável/sem garantia). Quem garante entrega e conexão é o TCP. Analogia: O UDP é como jogar panfletos de avião; você não sabe quem pegou e não cria um vínculo com quem recebe [23]."
  },
  {
    "enunciado": "O TCP é utilizado na camada de transporte e opera orientado à conexão.",
    "correta": "C",
    "tema": "Protocolos de Rede - TCP",
    "justificativa": "Definição correta do TCP (Transmission Control Protocol): opera na camada 4 e estabelece uma sessão (handshake) antes de transmitir dados. Analogia: O TCP é uma chamada telefônica; você precisa discar e a pessoa atender (conexão) antes de começar a falar [24]."
  },
  {
    "enunciado": "Apesar de não ser orientado a conexão, o UDP (user datagram protocol) disponibiliza opcionalmente checksum e controle de fluxo para fornecer confiabilidade adicional ao protocolo.",
    "correta": "E",
    "tema": "Protocolos de Rede - UDP",
    "justificativa": "Embora o UDP tenha checksum (opcional no IPv4), ele **não** possui controle de fluxo. O controle de fluxo é característica do TCP. Analogia: O UDP verifica se a mensagem chegou rasgada (checksum), mas não controla se você está falando rápido demais para o ouvinte entender (controle de fluxo) [25]."
  },
  {
    "enunciado": "O protocolo IPv6 foi desenvolvido principalmente para aumentar a velocidade da transmissão de dados na Internet, eliminando a necessidade de roteamento.",
    "correta": "E",
    "tema": "Protocolos de Rede - IPv6",
    "justificativa": "O foco do IPv6 é o espaço de endereçamento (esgotamento do IPv4). Ele melhora a eficiência do roteamento, mas não elimina a necessidade de roteamento nem tem o aumento de velocidade como objetivo primário (o link físico define a velocidade). Analogia: Mudar as placas dos carros para um formato novo não faz os carros andarem mais rápido, apenas permite ter mais carros nas ruas [26, 27]."
  },
 {
    "enunciado": "A camada de transporte do TCP suporta protocolos como UDP e ICMP.",
    "correta": "E",
    "tema": "Protocolos de Rede - TCP/IP",
    "justificativa": "O TCP é um protocolo da camada de transporte, assim como o UDP. Eles são 'irmãos' na mesma camada, não um suportando o outro. O ICMP opera na camada de Internet (Rede), auxiliando o IP [1]. Analogia: Dizer que o motor do carro (Transporte) suporta as rodas (Transporte) e o asfalto (Rede). Eles trabalham juntos, mas um não contém o outro dessa forma.",
    "referencia": "[1]"
  },
  {
    "enunciado": "Para iniciar uma conexão usando TCP, o computador cliente deve enviar para o computador servidor um pedido de abertura de conexão com a flag ACK.",
    "correta": "E",
    "tema": "Protocolos de Rede - TCP",
    "justificativa": "O início de uma conexão TCP (Handshake) começa com a flag **SYN** (Synchronize). A flag ACK (Acknowledgment) é usada para confirmar o recebimento, geralmente na segunda e terceira etapas do aperto de mão [1], [2]. Analogia: Quando você vai cumprimentar alguém, você estende a mão primeiro (SYN); você não diz 'obrigado' (ACK) antes de a pessoa ter feito algo.",
    "referencia": "[1], [2]"
  },
  {
    "enunciado": "Na família TCP/IP, o UDP (user datagram protocol) é considerado o principal protocolo da camada de aplicação, sendo muito usado para consultas isoladas em ambiente cliente-servidor.",
    "correta": "E",
    "tema": "Protocolos de Rede - UDP",
    "justificativa": "O UDP é um protocolo da camada de **Transporte**, não de Aplicação. Ele suporta aplicações, mas não reside nessa camada [3]. Analogia: O UDP é o caminhão (Transporte), não a carga (Aplicação) que está sendo entregue.",
    "referencia": "[3]"
  },
  {
    "enunciado": "A flag que deve ser enviada para iniciar uma negociação de conexão TCP é a SYN.",
    "correta": "C",
    "tema": "Protocolos de Rede - TCP",
    "justificativa": "O bit SYN é ativado no primeiro segmento do handshake de três vias para sincronizar números de sequência entre hosts [2]. Analogia: É como levantar a mão para pedir a palavra em uma reunião.",
    "referencia": "[2]"
  },
  {
    "enunciado": "O UDP é um protocolo orientado à conexão e garante a entrega dos dados.",
    "correta": "E",
    "tema": "Protocolos de Rede - UDP",
    "justificativa": "O UDP é *connectionless* (não orientado a conexão) e *unreliable* (não garante entrega). Essas são características do TCP [4]. Analogia: O UDP é como enviar uma carta comum: você joga na caixa e torce para chegar; não há recibo de entrega (garantia) nem chamada telefônica prévia (conexão).",
    "referencia": "[4]"
  },
  {
    "enunciado": "TCP e UDP são os principais protocolos da camada de transporte do modelo de referência TCP/IP.",
    "correta": "C",
    "tema": "Protocolos de Rede",
    "justificativa": "Ambos são os núcleos da camada de transporte: TCP para confiabilidade e UDP para velocidade/simplicidade [5]. Analogia: São os dois principais tipos de frete: Expresso com seguro (TCP) e Econômico simples (UDP).",
    "referencia": "[5]"
  },
  {
    "enunciado": "O protocolo TCP tem como principal característica o envio de um datagrama sem oferecer garantia de que o pacote não sofreu perdas no processo de transmissão.",
    "correta": "E",
    "tema": "Protocolos de Rede - TCP",
    "justificativa": "A principal característica do TCP é justamente garantir a entrega confiável e a correção de erros/perdas. A descrição do enunciado refere-se ao IP ou UDP [6]. Analogia: Contratar um serviço de entrega blindada (TCP) e dizer que a principal característica dele é perder a encomenda.",
    "referencia": "[6]"
  },
  {
    "enunciado": "O protocolo TCP tem capacidade de operar no controle da transmissão, que permite a entrega sem erros de um fluxo de bytes entre dois computadores.",
    "correta": "C",
    "tema": "Protocolos de Rede - TCP",
    "justificativa": "O TCP gerencia controle de fluxo, retransmissão e sequenciamento para garantir que a aplicação receba os dados perfeitamente [7]. Analogia: É como um faxineiro de dados que recebe tudo bagunçado do correio, limpa, organiza e entrega perfeito para o chefe.",
    "referencia": "[7]"
  },
  {
    "enunciado": "O protocolo UDP, que é orientado à conexão e confiável, implementa acknowledgements e o controle checksum dentro do seu próprio header.",
    "correta": "E",
    "tema": "Protocolos de Rede - UDP",
    "justificativa": "O UDP não é orientado a conexão, não é confiável e não implementa ACKs. Ele possui checksum, mas as outras características listadas são do TCP [8]. Analogia: Descrever uma bicicleta (UDP) dizendo que ela tem motor V8 e ar-condicionado (características do TCP).",
    "referencia": "[8]"
  },
  {
    "enunciado": "Dada sua simplicidade, o protocolo UDP torna-se útil para um aplicativo que tem de enviar mensagens curtas e não consegue realizar a retransmissão de pacotes envolvida no TCP quando um pacote é corrompido ou perdido.",
    "correta": "C",
    "tema": "Protocolos de Rede - UDP",
    "justificativa": "Aplicações de tempo real (VoIP, streaming) ou consultas simples (DNS) preferem UDP pela baixa latência (overhead), aceitando perdas ocasionais em troca de velocidade [9]. Analogia: Em uma conversa ao vivo (UDP), se você não ouvir uma palavra, é melhor seguir em frente do que parar a conversa inteira para pedir para repetir (TCP).",
    "referencia": "[9]"
  },
  {
    "enunciado": "O SCTP é um protocolo confiável e orientado à conexão, a fluxos de bytes e a mensagens, tal qual o protocolo UDP.",
    "correta": "E",
    "tema": "Protocolos de Rede",
    "justificativa": "A comparação 'tal qual o protocolo UDP' invalida a questão, pois o UDP *não* é confiável nem orientado a conexão. O SCTP compartilha características com o TCP (confiabilidade) e UDP (mensagens), mas a afirmação equipara o UDP a um protocolo confiável [10]. Analogia: Dizer que um cofre é seguro 'tal qual uma caixa de papelão'.",
    "referencia": "[10]"
  },
  {
    "enunciado": "O protocolo TCP suporta o envio de dados sem o estabelecimento de uma conexão, de modo que, quando os dados enviados não são entregues, o pacote finaliza o referido envio por timeout.",
    "correta": "E",
    "tema": "Protocolos de Rede - TCP",
    "justificativa": "O TCP *exige* o estabelecimento de conexão (3-way handshake) antes de enviar qualquer dado de aplicação. Não existe envio de dados TCP 'sem conexão' [10]. Analogia: Tentar falar ao telefone (TCP) sem discar e esperar que a outra pessoa atenda.",
    "referencia": "[10]"
  },
  {
    "enunciado": "Apesar de não ser orientado a conexão, o UDP disponibiliza opcionalmente checksum e controle de fluxo para fornecer confiabilidade adicional ao protocolo.",
    "correta": "E",
    "tema": "Protocolos de Rede - UDP",
    "justificativa": "O UDP possui checksum (opcional no IPv4, obrigatório no IPv6), mas **não possui controle de fluxo**. O controle de fluxo é exclusivo do TCP [11]. Analogia: O UDP verifica se a carta chegou rasgada (checksum), mas não verifica se a caixa de correio está cheia demais (controle de fluxo).",
    "referencia": "[11]"
  },
  {
    "enunciado": "A confiabilidade de um servidor web está relacionada com o HTTP, pois este, ao ser utilizado, garante que os pacotes sejam entregues no destino e na ordem correta.",
    "correta": "E",
    "tema": "Protocolos de Rede",
    "justificativa": "Quem garante a entrega e ordem é o protocolo da camada de transporte **TCP**, não o HTTP (Aplicação). O HTTP confia no TCP para isso [12]. Analogia: Quem garante que a pizza chega quente é a moto rápida e o baú térmico (TCP), não a caixa de papelão (HTTP) onde a pizza está.",
    "referencia": "[12]"
  },
  {
    "enunciado": "Para controlar e garantir que o fluxo de dados seja entregue à aplicação de destino sem erros, o TCP usa confirmações (ACKs) que fluem do destino para a origem.",
    "correta": "C",
    "tema": "Protocolos de Rede - TCP",
    "justificativa": "O mecanismo de ACKs permite que o remetente saiba quais dados chegaram e quais precisam ser reenviados, garantindo a confiabilidade [13]. Analogia: É como enviar cartas registradas; você recebe um aviso de recebimento (ACK) para ter certeza que chegou.",
    "referencia": "[13]"
  },
  {
    "enunciado": "Na camada de transporte, o protocolo UDP provê serviço não orientado a conexão e controla o congestionamento por meio de janelas deslizantes.",
    "correta": "E",
    "tema": "Protocolos de Rede - UDP",
    "justificativa": "Janelas Deslizantes (Sliding Windows) são um mecanismo de controle de fluxo e congestionamento do **TCP**. O UDP não possui esse controle [13]. Analogia: Janelas deslizantes são como um semáforo inteligente que controla o trânsito (TCP); o UDP é uma estrada sem sinalização nenhuma.",
    "referencia": "[13]"
  },
  {
    "enunciado": "O endereço IP 192.168.10.10/25 e o endereço IP 192.168.10.254/25 estão no mesmo domínio de broadcast da rede.",
    "correta": "E",
    "tema": "Sub-redes",
    "justificativa": "A máscara /25 divide a rede em duas sub-redes: 0-127 e 128-255. O IP .10 está na primeira sub-rede e o .254 na segunda. Eles são logicamente separados [14]. Analogia: Morar na casa 10 e na casa 254 da mesma rua, mas existe um muro no meio da rua (máscara /25) impedindo a passagem.",
    "referencia": "[14]"
  },
  {
    "enunciado": "Para a definição de quatro sub-redes a partir de um endereço classe C (192.168.10.0/24), a máscara de rede adequada é 255.255.255.192 (/26).",
    "correta": "C",
    "tema": "Sub-redes",
    "justificativa": "Para criar 4 sub-redes, precisamos de 2 bits ($2^2=4$). Somando à máscara original /24, temos /26. Em decimal: 128+64 = 192 no último octeto [15]. Analogia: Cortar um bolo em 4 pedaços iguais requer cortes precisos definidos pela máscara.",
    "referencia": "[15]"
  },
  {
    "enunciado": "O IPv6 elimina o uso de máscaras de sub-rede, substituindo-as por prefixos de rede fixos, enquanto o IPv4 utiliza endereços de 32 bits.",
    "correta": "C",
    "tema": "Protocolos de Rede - IPv6",
    "justificativa": "O IPv6 utiliza a notação de prefixo (ex: /64) e não a máscara decimal pontuada (255.x.x.x) comum no IPv4, além de ter endereços de 128 bits contra 32 do IPv4 [16]. Analogia: O IPv4 usa um código postal antigo; o IPv6 usa um sistema de coordenadas GPS moderno.",
    "referencia": "[16]"
  },
  {
    "enunciado": "O endereço IP 172.19.4.11 não pode ser usado como endereço IP válido na Internet pública.",
    "correta": "C",
    "tema": "Endereçamento IP",
    "justificativa": "Este IP está na faixa 172.16.0.0/12 (RFC 1918), reservada para redes privadas. Não é roteável na Internet [17]. Analogia: É um número de ramal interno; você não consegue ligar para ele de fora da empresa diretamente.",
    "referencia": "[17]"
  },
  {
    "enunciado": "Para atribuir um IP estático a uma instância em nuvem, é necessário que a instância esteja na mesma zona desse IP estático.",
    "correta": "C",
    "tema": "Computação em Nuvem / IP",
    "justificativa": "IPs estáticos regionais ou zonais geralmente possuem escopo geográfico definido pela infraestrutura da nuvem para garantir roteamento [18]. Analogia: Você não pode usar um número de telefone com DDD de São Paulo para uma linha física instalada no Rio de Janeiro.",
    "referencia": "[18]"
  },
  {
    "enunciado": "O campo ECN (Explicit Congestion Notification) no IPv4 é um recurso obrigatório para descarte de pacotes.",
    "correta": "E",
    "tema": "Protocolos de Rede - IPv4",
    "justificativa": "O ECN é usado para *evitar* o descarte, sinalizando congestionamento, e não é estritamente obrigatório em todas as implementações legadas, embora recomendado [19]. Analogia: É um aviso de 'por favor, pare' antes de ser necessário usar a força bruta (descarte).",
    "referencia": "[19]"
  },
  {
    "enunciado": "O tamanho mínimo permitido para o cabeçalho do pacote IP (campo IHL) equivale a 20 bytes.",
    "correta": "C",
    "tema": "Protocolos de Rede - IPv4",
    "justificativa": "O cabeçalho IP tem 20 bytes fixos, mais opções variáveis. O IHL mínimo é 5 palavras de 32 bits (5 * 4 = 20 bytes) [20]. Analogia: O envelope padrão tem um peso mínimo, mesmo se estiver vazio de cartas.",
    "referencia": "[20]"
  },
  {
    "enunciado": "Em uma rede de datagramas, cada pacote contém os endereços completos de origem e de destino.",
    "correta": "C",
    "tema": "Protocolos de Rede",
    "justificativa": "Como cada pacote é tratado independentemente, ele precisa ter toda a informação para chegar ao destino sozinho [21]. Analogia: Cada carta precisa do endereço completo; você não pode escrever 'o mesmo da carta anterior'.",
    "referencia": "[21]"
  },
  {
    "enunciado": "Um endereço IPv6 tem 192 bits, sendo 128 bits de rede e 64 bits de sub-rede.",
    "correta": "E",
    "tema": "Protocolos de Rede - IPv6",
    "justificativa": "O endereço IPv6 tem **128 bits** no total. Geralmente, divide-se em 64 bits para prefixo de rede e 64 bits para interface ID [22]. Analogia: Dizer que uma régua de 30cm tem 50cm.",
    "referencia": "[22]"
  },
 {
    "enunciado": "A arquitetura cliente-servidor de computadores é separada em quatro camadas: aplicação, serviços, sistema e hardware.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Esta divisão (Aplicação, Serviços, Sistema, Hardware) refere-se geralmente a camadas de abstração de um sistema computacional ou SO, não à definição clássica de camadas da arquitetura Cliente-Servidor (que foca em Apresentação, Negócio, Dados) [23]. Analogia: Confundir as camadas de um bolo (arquitetura C/S) com os ingredientes da farinha (camadas do hardware/SO).",
    "referencia": "[23]"
  },
  {
    "enunciado": "Na arquitetura cliente-servidor, é obrigatório que os clientes conheçam os nomes dos servidores disponíveis, contudo os servidores não precisam conhecer a identidade de todos os clientes.",
    "correta": "C",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "O cliente precisa saber quem contactar (endereço do servidor), mas o servidor, por ser passivo (aguarda conexões), não precisa ter uma lista prévia de quem vai chamá-lo [24]. Analogia: O cliente precisa saber o endereço da pizzaria, mas a pizzaria não precisa saber o nome de todos os moradores da cidade antes que eles liguem.",
    "referencia": "[24]"
  },
  {
    "enunciado": "Para aplicações Cliente-Servidor que atuam na camada de aplicação, um mecanismo de troca de mensagens IPC (interprocess communication) é disponibilizado pela camada de serviços do sistema.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Mecanismos de IPC são geralmente fornecidos pelo Sistema Operacional (Kernel), e em redes, utiliza-se sockets/RPC. A questão tenta alocar a responsabilidade a uma 'camada de serviços' de forma imprecisa ou incorreta segundo a banca [25]. Analogia: O correio interno (IPC) é função da administração do prédio (SO), não do porteiro (serviços).",
    "referencia": "[25]"
  },
  {
    "enunciado": "Um serviço específico em um servidor é identificado somente pelo endereço do protocolo na Internet (IP) daquele servidor.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Para identificar o **serviço** (ex: Web, Email), é necessário o IP e a **Porta** (Socket). O IP identifica apenas a máquina [26]. Analogia: O IP entrega a carta no prédio; a Porta entrega no apartamento específico.",
    "referencia": "[26]"
  },
  {
    "enunciado": "Em uma arquitetura cliente-servidor em duas camadas, o cliente armazene as regras de negócio da aplicação (Fat Client).",
    "correta": "C",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "No modelo de 2 camadas tradicional, a lógica de negócio roda no cliente (aplicação instalada), e o servidor é apenas um banco de dados. Isso caracteriza o 'Cliente Gordo' [27]. Analogia: O cliente cozinha sua própria comida (regras de negócio) usando apenas os ingredientes (dados) que pega na despensa (servidor).",
    "referencia": "[27]"
  },
  {
    "enunciado": "O modelo de referência OSI possui sete camadas.",
    "correta": "C",
    "tema": "Modelo OSI",
    "justificativa": "O modelo OSI é estruturado em 7 camadas: Física, Enlace, Rede, Transporte, Sessão, Apresentação e Aplicação [28]. Analogia: Os 7 andares de um prédio corporativo padrão.",
    "referencia": "[28]"
  },
  {
    "enunciado": "O HTTP está presente na camada de rede do modelo OSI.",
    "correta": "E",
    "tema": "Modelo OSI",
    "justificativa": "HTTP é um protocolo de **Aplicação** (Camada 7), não de Rede (Camada 3) [28]. Analogia: O HTTP é a carta escrita (Aplicação), não o caminhão (Rede).",
    "referencia": "[28]"
  },
  {
    "enunciado": "Na topologia em estrela, todos os dispositivos estão conectados a um único ponto central, geralmente um switch ou hub.",
    "correta": "C",
    "tema": "Topologias de Redes",
    "justificativa": "Definição padrão de topologia estrela: nó central concentra as conexões [29]. Analogia: Raios de uma roda de bicicleta conectados ao eixo.",
    "referencia": "[29]"
  },
  {
    "enunciado": "A topologia de LAN que atende melhor a demandas de alta taxa de transmissão e grande quantidade de elementos é a estrela, desde que opere no modo broadcast.",
    "correta": "C",
    "tema": "Topologias de Redes",
    "justificativa": "Estrela é a topologia dominante (Ethernet com Switch) pela facilidade de gerenciamento e performance, suportando grandes redes [30]. Analogia: Um sistema de distribuição centralizado é mais eficiente que passar itens de mão em mão.",
    "referencia": "[30]"
  },
  {
    "enunciado": "Na topologia de redes em anel, o envio de mensagens é realizado somente no sentido horário.",
    "correta": "C",
    "tema": "Topologias de Redes",
    "justificativa": "Em anéis lógicos/físicos tradicionais (Token Ring), o tráfego é unidirecional [31]. Analogia: Uma rua de mão única em círculo.",
    "referencia": "[31]"
  },
  {
    "enunciado": "Em uma LAN com topologia anel, a rede inteira é desativada se houver ruptura em um dos cabos.",
    "correta": "E",
    "tema": "Topologias de Redes",
    "justificativa": "Sistemas de anel modernos (como FDDI ou anéis redundantes industriais) possuem mecanismos de anel duplo ou bypass para tolerar falhas. A afirmação generaliza que 'necessariamente' para [32]. Analogia: Se uma pista da rodovia circular quebra, o trânsito pode ser desviado para a pista de emergência.",
    "referencia": "[32]"
  },
  {
    "enunciado": "Topologias em malha, que permitem rotas alternativas entre nós, são adotadas para se garantir disponibilidade em WANs.",
    "correta": "C",
    "tema": "Topologias de Redes",
    "justificativa": "A malha (Mesh) oferece redundância de caminhos, essencial para a Internet e WANs robustas [33]. Analogia: Ter vários caminhos para chegar ao trabalho; se um estiver engarrafado, você usa outro.",
    "referencia": "[33]"
  },
  {
    "enunciado": "Na topologia em barramento, a rede não pode ser expandida, porque todos os computadores estão conectados a um único cabo.",
    "correta": "E",
    "tema": "Topologias de Redes",
    "justificativa": "Redes em barramento podem ser expandidas com repetidores ou conectores, dentro dos limites elétricos do cabo [34]. Analogia: Você pode emendar uma corda para torná-la mais longa.",
    "referencia": "[34]"
  },
  {
    "enunciado": "Na topologia de rede em anel, quando o token percorre todo o anel e não encontra o destinatário, a retirada é feita pela própria estação que o enviou.",
    "correta": "C",
    "tema": "Topologias de Redes",
    "justificativa": "O mecanismo do Token Ring exige que o remetente remova o pacote após uma volta completa para evitar loops infinitos [35]. Analogia: Quem coloca o lixo na lixeira giratória deve tirá-lo se ninguém o recolher.",
    "referencia": "[35]"
  },
  {
    "enunciado": "O processamento cooperativo em uma arquitetura cliente-servidor ocorre quando dois ou mais processadores processam uma simples transação.",
    "correta": "C",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Processamento cooperativo divide a carga de uma única tarefa entre múltiplas máquinas (cliente e servidor) [36]. Analogia: Duas pessoas carregando o mesmo sofá juntas.",
    "referencia": "[36]"
  },
  {
    "enunciado": "Na arquitetura cliente-servidor de multinível, a mesma aplicação pode atuar simultaneamente como cliente e como servidor.",
    "correta": "C",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Em n-camadas, a camada intermediária serve ao cliente, mas age como cliente ao consultar o banco de dados [37], [38]. Analogia: O gerente serve o cliente, mas pede ajuda ao diretor.",
    "referencia": "[37], [38]"
  },
  {
    "enunciado": "Um dos atributos da arquitetura cliente-servidor é a confiabilidade, definida como a probabilidade de o servidor estar operacional em determinado instante.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "A probabilidade de estar operacional num instante é **Disponibilidade**. Confiabilidade é a capacidade de funcionar sem falhas por um período [39]. Analogia: Disponibilidade é a loja estar aberta agora; Confiabilidade é o serviço não cair durante o atendimento.",
    "referencia": "[39]"
  },
  {
    "enunciado": "Na arquitetura cliente-servidor para aplicações móveis, todos os dados necessários são armazenados localmente no dispositivo móvel, eliminando a necessidade de consultas ao banco de dados do servidor.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Aplicações móveis dependem de sincronização com a nuvem/servidor. O armazenamento local é cache ou parcial, não total [40]. Analogia: O celular não guarda toda a Internet dentro dele.",
    "referencia": "[40]"
  },
  {
    "enunciado": "Em uma aplicação web baseada na arquitetura cliente-servidor de três camadas, a lógica de negócios fica totalmente na camada intermediária, sem qualquer distribuição para as camadas de apresentação.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Frequentemente, parte da lógica (validação de formulários, por exemplo) é distribuída para a apresentação (Javascript no navegador) para melhorar a performance [41]. Analogia: O garçom (apresentação) avisa que não tem Coca-Cola antes de levar o pedido para a cozinha (negócio).",
    "referencia": "[41]"
  },
  {
    "enunciado": "O front-end representa o serviço que fica disponível no servidor para ser acessado pelos diversos clientes da aplicação.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Front-end é a parte do cliente (interface). O serviço no servidor é o Back-end [42]. Analogia: Front-end é o salão do restaurante; Back-end é a cozinha.",
    "referencia": "[42]"
  },
  {
    "enunciado": "Na arquitetura cliente-servidor, há uma confiança mínima nos servidores dedicados, pois a aplicação utiliza a comunicação direta entre pares (P2P).",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Isso descreve redes Peer-to-Peer. No Cliente-Servidor, o servidor é central e confiável [43]. Analogia: Confundir uma sala de aula (professor central) com uma conversa de bar (todos iguais).",
    "referencia": "[43]"
  },
  {
    "enunciado": "Em ambiente cliente-servidor, os clientes se conectam aos servidores para obter acesso aos recursos compartilhados.",
    "correta": "C",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Definição básica do modelo: servidor detém recursos (arquivos, impressão, dados) e clientes solicitam acesso [44]. Analogia: Clientes vão ao banco (servidor) para acessar o dinheiro (recurso).",
    "referencia": "[44]"
  },
  {
    "enunciado": "O quadro do padrão IEEE 802.11 acomoda até quatro campos para endereços MAC.",
    "correta": "C",
    "tema": "Redes Sem Fio",
    "justificativa": "O Wi-Fi precisa de até 4 endereços (Transmissor, Receptor, Origem, Destino) para lidar com a distribuição via Access Points, diferente do Ethernet que usa 2 [45]. Analogia: O Wi-Fi é um sistema de correio complexo com escalas, precisando de mais etiquetas de endereço.",
    "referencia": "[45]"
  },
  {
    "enunciado": "O endereço IP 192.168.10.128/25 possui a capacidade de suportar até 126 endereços IPs para hosts.",
    "correta": "C",
    "tema": "Sub-redes",
    "justificativa": "Uma máscara /25 deixa 7 bits para host ($2^7 = 128$). Menos rede e broadcast, restam 126 [46]. Analogia: Um prédio com 128 apartamentos, onde 2 são usados para administração, sobrando 126 para moradores.",
    "referencia": "[46]"
  },
  {
    "enunciado": "Uma máscara de rede de 23 bits pode ser utilizada em uma rede na qual seja necessário colocar 500 computadores.",
    "correta": "C",
    "tema": "Sub-redes",
    "justificativa": "/23 deixa 9 bits para host ($2^9 = 512$). 510 úteis é suficiente para 500 máquinas [47]. Analogia: Um ônibus de 510 lugares cabe 500 passageiros.",
    "referencia": "[47]"
  },
{
    "enunciado": "Na camada de transporte, o protocolo TCP fragmenta mensagens longas em segmentos mais curtos e provê mecanismo de controle de congestionamento.",
    "correta": "C",
    "tema": "Protocolos de Rede - TCP",
    "justificativa": "O TCP é responsável pela segmentação dos dados da aplicação (MSS - Maximum Segment Size) e pelo gerenciamento robusto de congestionamento e fluxo. Analogia: O TCP é como uma empresa de mudanças que desmonta os móveis grandes (fragmentação) para caberem nas caixas e controla a velocidade dos caminhões para não engarrafar a estrada (controle de congestionamento) [1].",
    "referencia": "158"
  },
  {
    "enunciado": "Na camada de transporte, o protocolo UDP provê serviço não orientado a conexão e controla o congestionamento por meio de janelas deslizantes.",
    "correta": "E",
    "tema": "Protocolos de Rede - UDP",
    "justificativa": "Embora o UDP seja não orientado a conexão, ele **não** possui controle de congestionamento nem janelas deslizantes. Essas são funcionalidades exclusivas do TCP. Analogia: O UDP é uma torneira aberta que não sabe se o balde já transbordou; não existe um mecanismo (janela deslizante) para fechar a água automaticamente [1].",
    "referencia": "158"
  },
  {
    "enunciado": "Em uma rede de comunicação, quando dois computadores utilizam o TCP e a conexão está ativa para transmissão de dados, o protocolo é mantido no estado ESTABLISHED.",
    "correta": "C",
    "tema": "Protocolos de Rede - TCP",
    "justificativa": "O estado `ESTABLISHED` é o estado normal de transferência de dados após o handshake de três vias e antes do início do encerramento. Analogia: É o momento durante a ligação telefônica em que as duas pessoas estão conversando, após o 'Alô' inicial e antes do 'Tchau' [2].",
    "referencia": "150"
  },
  {
    "enunciado": "A deduplicação é uma técnica de armazenamento que permite reduzir a quantidade de espaço em disco consumida, eliminando cópias duplicadas de blocos repetidos em um sistema de arquivos.",
    "correta": "C",
    "tema": "Infraestrutura - Armazenamento",
    "justificativa": "Deduplicação identifica padrões de dados redundantes e armazena apenas uma cópia única, substituindo as repetições por ponteiros. Analogia: Em vez de guardar 10 cópias do mesmo livro na biblioteca, você guarda apenas um livro e coloca 9 placas dizendo 'Vide o livro na estante A' [3].",
    "referencia": "37"
  },
  {
    "enunciado": "O RAID nível 3 utiliza distribuição de paridade (striping) entre todos os discos, sem dedicar um disco específico para a paridade.",
    "correta": "E",
    "tema": "Infraestrutura - RAID",
    "justificativa": "O RAID 3 (assim como o RAID 4) utiliza um **disco de paridade dedicado**. A distribuição da paridade entre todos os discos (rotativa) é característica do RAID 5 ou 6. Analogia: No RAID 3, existe um 'auditor' exclusivo (disco dedicado); no RAID 5, todos os funcionários se revezam na função de auditoria [4].",
    "referencia": "46"
  },
  {
    "enunciado": "O RAID caracterizado pela distribuição uniforme dos bits de paridade por todos os discos, em modo round-robin, é o de nível 5.",
    "correta": "C",
    "tema": "Infraestrutura - RAID",
    "justificativa": "Esta é a definição técnica do RAID 5: striping de dados com paridade distribuída circularmente (round-robin) para evitar gargalos em um único disco. Analogia: É como um jogo de cartas onde o 'coringa' (paridade) muda de mão a cada rodada, em vez de ficar sempre com o mesmo jogador [4].",
    "referencia": "46"
  },
  {
    "enunciado": "As topologias de rede em anel apresentam caminhos duplos para a comunicação e baixo custo de manutenção, sendo a topologia predominante atualmente.",
    "correta": "E",
    "tema": "Topologias de Redes",
    "justificativa": "A topologia predominante atualmente é a **Estrela** (Ethernet/Wi-Fi). O anel (Token Ring/FDDI) é tecnologia legada ou de nicho (metro-ethernet), e sua manutenção e inserção de novos nós são complexas se comparadas à estrela. Analogia: O Anel é como uma linha de trem circular antiga; a Estrela é como o sistema moderno de Uber onde tudo centraliza no aplicativo/servidor [5].",
    "referencia": "64"
  },
  {
    "enunciado": "A topologia em estrela possui um aparelho concentrador (hub ou switch) que interconecta todos os cabos e pode interconectar outras redes facilmente.",
    "correta": "C",
    "tema": "Topologias de Redes",
    "justificativa": "A centralização através de um concentrador é o cerne da topologia estrela, facilitando a expansão e o isolamento de falhas. Analogia: O Switch é a régua de tomadas onde você liga vários aparelhos; se um queimar, os outros continuam funcionando [5].",
    "referencia": "64"
  },
  {
    "enunciado": "Uma rede de comunicação que permite a conexão de computadores para compartilhamento de recursos em uma área geográfica limitada, como um escritório, é denominada rede metropolitana (MAN).",
    "correta": "E",
    "tema": "Redes de Computadores",
    "justificativa": "Redes em áreas limitadas (escritórios, prédios) são **LANs** (Local Area Networks). MANs (Metropolitan) abrangem cidades. Analogia: A rede do seu escritório é a rede interna da sua casa (LAN); a rede da cidade é a rede elétrica da rua (MAN) [6].",
    "referencia": "62"
  },
  {
    "enunciado": "Na arquitetura cliente-servidor, a camada de gerenciamento de dados preocupa-se com a implementação da lógica da solução.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "A lógica da solução reside na **camada de processamento de aplicação** (ou camada de negócio). A camada de gerenciamento de dados cuida do armazenamento e recuperação (SGBD). Analogia: O cozinheiro (Lógica) prepara o prato; o despenseiro (Gerenciamento de Dados) apenas guarda e entrega os ingredientes [7].",
    "referencia": "86"
  },
  {
    "enunciado": "O modelo cliente-servidor é uma estrutura de aplicação que distribui tarefas e cargas de trabalho entre fornecedores de recursos (servidores) e requerentes (clientes).",
    "correta": "C",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Definição clássica e correta do modelo. O servidor provê, o cliente consome. Analogia: É a relação entre um restaurante (servidor que fornece comida) e os clientes (que pedem e consomem) [8].",
    "referencia": "87"
  },
  {
    "enunciado": "O endereço IP 172.16.0.0/12 representa o bloco de endereços privados da Classe B em notação CIDR.",
    "correta": "C",
    "tema": "Endereçamento IP",
    "justificativa": "A RFC 1918 define o intervalo privado da Classe B de 172.16.0.0 a 172.31.255.255. A agregação desses endereços resulta na máscara /12 (255.240.0.0). Analogia: É o 'código de área' reservado para ramais internos de grandes empresas [9].",
    "referencia": "108"
  },
  {
    "enunciado": "Como uma solução temporária para o esgotamento do IPv4, a RFC 1918 adotou o emprego de endereços IP privados, que não são roteáveis na Internet pública.",
    "correta": "C",
    "tema": "Endereçamento IP",
    "justificativa": "O uso de IPs privados combinado com NAT (Network Address Translation) foi a principal medida paliativa para economizar IPs públicos. Analogia: Usar ramais internos em um prédio permite ter milhares de telefones (IPs privados) usando apenas algumas linhas externas (IPs públicos) [9].",
    "referencia": "108"
  },
  {
    "enunciado": "Se uma rede Classe C (192.168.0.0) foi dividida em 8 sub-redes, a máscara utilizada, em binário, termina com 11100000.",
    "correta": "C",
    "tema": "Sub-redes",
    "justificativa": "Para criar 8 sub-redes, são necessários 3 bits ($2^3 = 8$). A máscara padrão é /24. Adicionando 3 bits, temos /27. Os 3 primeiros bits do último octeto são 1 (11100000 = 224). Analogia: Pegar uma pizza inteira e fazer 3 cortes cruzados para obter 8 fatias [10].",
    "referencia": "115"
  },
  {
    "enunciado": "O protocolo FTP utiliza o protocolo UDP na camada de transporte para garantir a velocidade na transferência de arquivos.",
    "correta": "E",
    "tema": "Protocolos de Rede",
    "justificativa": "O FTP (File Transfer Protocol) utiliza **TCP** para garantir a integridade e a entrega correta dos arquivos. Perder partes de um arquivo durante o download o tornaria inútil. Analogia: O FTP envia documentos importantes via correio registrado (TCP), não via panfletos jogados de avião (UDP) [11].",
    "referencia": "141"
  },
  {
    "enunciado": "A telefonia por Internet (VoIP) e o streaming de vídeo frequentemente utilizam UDP, pois toleram pequenas perdas de dados em favor da velocidade.",
    "correta": "C",
    "tema": "Protocolos de Rede",
    "justificativa": "Aplicações de tempo real preferem UDP porque a retransmissão de pacotes perdidos (TCP) causaria atrasos (lags) inaceitáveis. Analogia: Em uma chamada de vídeo, se a imagem falhar por um milissegundo, é melhor continuar fluindo do que travar a tela esperando aquele pedaço voltar [11].",
    "referencia": "141"
  },
  {
    "enunciado": "O protocolo Telnet utiliza a camada de aplicação para acesso terminal remoto, apoiando-se no protocolo TCP para transporte.",
    "correta": "C",
    "tema": "Protocolos de Rede",
    "justificativa": "Telnet requer uma conexão persistente e confiável para que os comandos digitados cheguem corretamente ao servidor, por isso usa TCP. Analogia: É como um controle remoto com fio longo; cada botão apertado precisa chegar exatamente na ordem certa [11].",
    "referencia": "141"
  },
  {
    "enunciado": "O acesso a serviços Web utiliza o protocolo HTTP na camada de aplicação e o protocolo UDP na camada de transporte para carregamento rápido das páginas.",
    "correta": "E",
    "tema": "Protocolos de Rede",
    "justificativa": "O HTTP (versões 1.1/2) utiliza **TCP**. O HTTP/3 utiliza QUIC (baseado em UDP), mas no contexto clássico e da maioria das questões, HTTP roda sobre TCP para garantir que o site carregue completo. Analogia: Um site faltando pedaços de código não funciona; ele precisa da garantia de entrega do TCP [11].",
    "referencia": "141"
  },
  {
    "enunciado": "Na topologia em barramento, quando um nó da rede está danificado, toda a comunicação da rede é interrompida.",
    "correta": "E",
    "tema": "Topologias de Redes",
    "justificativa": "Na topologia barramento, a falha de um *nó* (computador) não derruba a rede; a rede só cai se houver ruptura no *cabo central* (backbone). A questão confunde falha do nó com falha do meio. Analogia: Se uma casa na rua fica sem luz, a rua inteira não apaga; mas se o fio do poste principal quebrar, todos apagam [5].",
    "referencia": "64"
  },
  {
    "enunciado": "O endereço de loopback no IPv6 é representado por ::1.",
    "correta": "C",
    "tema": "Protocolos de Rede - IPv6",
    "justificativa": "A notação `::1` é a abreviação de `0:0:0:0:0:0:0:1`, que é o endereço de loopback (localhost) no IPv6. Analogia: É o apelido curto para 'eu mesmo' no mundo IPv6 [12].",
    "referencia": "125"
  },
  {
    "enunciado": "Para que uma conexão virtual seja estabelecida entre processos, é necessária a combinação de um endereço IP e um número de porta, denominada endereço socket.",
    "correta": "C",
    "tema": "Protocolos de Rede",
    "justificativa": "Socket é o ponto final da comunicação bidirecional, definido pela tupla {Protocolo, IP Local, Porta Local, IP Remoto, Porta Remota}. Analogia: O Socket é a tomada específica onde o plugue da aplicação se conecta na rede [13].",
    "referencia": "126"
  },
  {
    "enunciado": "Em arquiteturas de alta disponibilidade, um servidor só pode ser responsável por um único serviço para garantir a disponibilidade efetiva.",
    "correta": "E",
    "tema": "Arquitetura Cliente-Servidor",
    "justificativa": "Servidores podem (e frequentemente hospedam) múltiplos serviços (ex: Web + Banco de Dados + Email) via virtualização ou contêineres, sem necessariamente comprometer a disponibilidade se houver recursos suficientes. A restrição 'só pode' torna o item errado. Analogia: Um mesmo funcionário eficiente pode atender o telefone e responder emails; não é obrigatório contratar uma pessoa para cada tarefa se ele der conta [14].",
    "referencia": "76"
  },
  {
    "enunciado": "O protocolo IP versão 4 (IPv4) atua na camada de transporte do modelo TCP/IP.",
    "correta": "E",
    "tema": "Modelo TCP/IP",
    "justificativa": "O IPv4 atua na **Camada de Internet** (ou Rede no OSI). Quem atua na camada de Transporte são TCP e UDP. Analogia: O IP é o sistema de endereçamento da cidade (Rede); o Transporte é o veículo que anda na rua [15].",
    "referencia": "128"
  },
  {
    "enunciado": "Tanto o protocolo TCP quanto o UDP têm como garantia a integridade e ordem dos dados transmitidos.",
    "correta": "E",
    "tema": "Protocolos de Rede",
    "justificativa": "Apenas o TCP garante ordem e integridade robusta. O UDP não garante ordem e a verificação de integridade é básica (checksum) e opcional no IPv4. Analogia: O TCP é um arquivista meticuloso; o UDP é um entregador apressado que joga os pacotes de qualquer jeito [16].",
    "referencia": "151"
  },
  {
    "enunciado": "O TCP é um protocolo baseado em conexão que garante a entrega dos dados.",
    "correta": "C",
    "tema": "Protocolos de Rede - TCP",
    "justificativa": "TCP é 'Connection-Oriented' e 'Reliable'. Ele estabelece a sessão antes de enviar e retransmite o que for perdido. Analogia: Como uma carta registrada com aviso de recebimento: você tem certeza que chegou [17].",
    "referencia": "134"
  }
];