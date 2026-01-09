const questions = [
{
  enunciado: "A Inteligência Artificial busca desenvolver sistemas capazes de executar tarefas que normalmente exigiriam inteligência humana.",
  correta: "C",
  tema: "Conceitos Fundamentais de IA",
  justificativa: "É como ensinar uma máquina a raciocinar em tarefas que antes só humanos conseguiam fazer."
},
{
  enunciado: "A Inteligência Artificial limita-se exclusivamente à automação de tarefas repetitivas.",
  correta: "E",
  tema: "Conceitos Fundamentais de IA",
  justificativa: "Automação simples não envolve aprendizado ou tomada de decisão, que são centrais na IA."
},
{
  enunciado: "A IA fraca é projetada para executar tarefas específicas, sem consciência ou entendimento geral.",
  correta: "C",
  tema: "IA Fraca e IA Forte",
  justificativa: "É como um especialista em uma única tarefa, muito bom nela, mas incapaz fora desse contexto."
},
{
  enunciado: "A IA forte refere-se a sistemas capazes de consciência e inteligência geral semelhantes às humanas.",
  correta: "C",
  tema: "IA Fraca e IA Forte",
  justificativa: "Seria como uma máquina com capacidade de pensar de forma ampla, algo ainda teórico."
},
{
  enunciado: "Sistemas atuais amplamente utilizados já são exemplos consolidados de IA forte.",
  correta: "E",
  tema: "IA Fraca e IA Forte",
  justificativa: "As soluções atuais são IA fraca, mesmo quando parecem sofisticadas."
},
{
  enunciado: "Um agente inteligente percebe o ambiente por meio de sensores e atua sobre ele por meio de atuadores.",
  correta: "C",
  tema: "Agentes Inteligentes",
  justificativa: "Funciona como um ser humano: percebe com sentidos e age com ações."
},
{
  enunciado: "Agentes inteligentes sempre operam de forma totalmente autônoma, sem interferência humana.",
  correta: "E",
  tema: "Agentes Inteligentes",
  justificativa: "Alguns agentes dependem de supervisão ou interação humana."
},
{
  enunciado: "Aprendizado de máquina é uma subárea da Inteligência Artificial.",
  correta: "C",
  tema: "Machine Learning",
  justificativa: "O aprendizado de máquina é uma das principais formas de implementar IA."
},
{
  enunciado: "Machine Learning baseia-se exclusivamente em regras previamente programadas.",
  correta: "E",
  tema: "Machine Learning",
  justificativa: "A essência do aprendizado é extrair padrões dos dados, não apenas seguir regras fixas."
},
{
  enunciado: "No aprendizado supervisionado, os dados de treinamento possuem rótulos conhecidos.",
  correta: "C",
  tema: "Aprendizado Supervisionado",
  justificativa: "É como aprender com gabarito: o sistema sabe a resposta correta durante o treino."
},
{
  enunciado: "No aprendizado supervisionado, o sistema aprende sem qualquer referência de saída esperada.",
  correta: "E",
  tema: "Aprendizado Supervisionado",
  justificativa: "Isso caracteriza o aprendizado não supervisionado."
},
{
  enunciado: "O aprendizado não supervisionado busca identificar padrões e estruturas ocultas nos dados.",
  correta: "C",
  tema: "Aprendizado Não Supervisionado",
  justificativa: "É como organizar peças sem saber previamente o desenho final."
},
{
  enunciado: "No aprendizado não supervisionado, o modelo recebe respostas corretas previamente definidas.",
  correta: "E",
  tema: "Aprendizado Não Supervisionado",
  justificativa: "Não há rótulos nem respostas conhecidas nesse tipo de aprendizado."
},
{
  enunciado: "O aprendizado por reforço baseia-se na interação com o ambiente e no recebimento de recompensas ou punições.",
  correta: "C",
  tema: "Aprendizado por Reforço",
  justificativa: "Funciona como treinar um animal: ações corretas são recompensadas."
},
{
  enunciado: "No aprendizado por reforço, o modelo aprende apenas a partir de dados históricos rotulados.",
  correta: "E",
  tema: "Aprendizado por Reforço",
  justificativa: "O aprendizado ocorre por tentativa e erro, não por rótulos fixos."
},
{
  enunciado: "Dados de qualidade são fundamentais para o bom desempenho de sistemas de Inteligência Artificial.",
  correta: "C",
  tema: "Dados em IA",
  justificativa: "Dados ruins geram resultados ruins, como ingredientes estragados em uma receita."
},
{
  enunciado: "A quantidade de dados é irrelevante para o desempenho de modelos de IA.",
  correta: "E",
  tema: "Dados em IA",
  justificativa: "Quantidade e qualidade influenciam diretamente o aprendizado do modelo."
},
{
  enunciado: "Viés em sistemas de IA pode ocorrer quando os dados de treinamento não representam adequadamente a realidade.",
  correta: "C",
  tema: "Viés Algorítmico",
  justificativa: "Se o espelho é distorcido, a imagem refletida também será."
},
{
  enunciado: "O viés algorítmico é sempre resultado de erro intencional do desenvolvedor.",
  correta: "E",
  tema: "Viés Algorítmico",
  justificativa: "Viés pode surgir de forma não intencional, a partir dos dados."
},
{
  enunciado: "A explicabilidade em IA busca tornar compreensíveis as decisões tomadas pelos modelos.",
  correta: "C",
  tema: "Explicabilidade",
  justificativa: "É como pedir que a máquina explique o raciocínio, não apenas o resultado."
},
{
  enunciado: "Modelos de IA altamente complexos dispensam qualquer forma de explicabilidade.",
  correta: "E",
  tema: "Explicabilidade",
  justificativa: "Quanto mais complexo o modelo, maior a necessidade de explicação."
},
{
  enunciado: "Questões éticas devem ser consideradas no desenvolvimento e uso de sistemas de Inteligência Artificial.",
  correta: "C",
  tema: "Ética em IA",
  justificativa: "Tecnologia sem ética pode causar danos, como uma ferramenta poderosa sem controle."
},
{
  enunciado: "A ética em IA é irrelevante quando o sistema apresenta alta acurácia.",
  correta: "E",
  tema: "Ética em IA",
  justificativa: "Alta precisão não justifica decisões injustas ou discriminatórias."
},
{
  enunciado: "A Inteligência Artificial pode ser aplicada tanto no setor privado quanto no setor público.",
  correta: "C",
  tema: "Aplicações de IA",
  justificativa: "IA é tecnologia transversal, aplicável a diversos contextos."
},
{
  enunciado: "A aplicação de IA no setor público é vedada por riscos inerentes à tecnologia.",
  correta: "E",
  tema: "Aplicações de IA",
  justificativa: "Com governança e controles adequados, a IA pode trazer benefícios ao setor público."
},
{
  enunciado: "Machine Learning permite que sistemas aprendam padrões a partir de dados sem programação explícita para cada regra.",
  correta: "C",
  tema: "Machine Learning",
  justificativa: "É como ensinar por exemplos, não por instruções passo a passo."
},
{
  enunciado: "Modelos de Machine Learning produzem sempre resultados determinísticos.",
  correta: "E",
  tema: "Machine Learning",
  justificativa: "Resultados podem variar conforme dados, parâmetros e inicialização."
},
{
  enunciado: "Overfitting ocorre quando o modelo se ajusta excessivamente aos dados de treinamento.",
  correta: "C",
  tema: "Overfitting",
  justificativa: "É decorar a matéria sem entender: vai mal na prova nova."
},
{
  enunciado: "Overfitting melhora a capacidade de generalização do modelo.",
  correta: "E",
  tema: "Overfitting",
  justificativa: "Ele prejudica a generalização para dados novos."
},
{
  enunciado: "Underfitting ocorre quando o modelo é simples demais para capturar os padrões dos dados.",
  correta: "C",
  tema: "Underfitting",
  justificativa: "É como tentar explicar algo complexo com uma regra muito básica."
},
{
  enunciado: "Underfitting indica desempenho excelente tanto em treino quanto em teste.",
  correta: "E",
  tema: "Underfitting",
  justificativa: "O desempenho costuma ser ruim em ambos."
},
{
  enunciado: "Conjunto de treinamento é utilizado para ajustar os parâmetros do modelo.",
  correta: "C",
  tema: "Treinamento de Modelos",
  justificativa: "É a fase de aprendizado propriamente dita."
},
{
  enunciado: "O conjunto de teste deve ser utilizado durante o treinamento do modelo.",
  correta: "E",
  tema: "Treinamento de Modelos",
  justificativa: "O teste serve para avaliação final, não para aprendizado."
},
{
  enunciado: "A validação cruzada ajuda a avaliar a capacidade de generalização do modelo.",
  correta: "C",
  tema: "Validação Cruzada",
  justificativa: "É como testar o aluno com várias provas diferentes."
},
{
  enunciado: "A validação cruzada elimina completamente o risco de overfitting.",
  correta: "E",
  tema: "Validação Cruzada",
  justificativa: "Ela reduz o risco, mas não o elimina."
},
{
  enunciado: "Modelos supervisionados podem ser usados para classificação e regressão.",
  correta: "C",
  tema: "Aprendizado Supervisionado",
  justificativa: "Classificar é escolher categoria; regressão é prever valor."
},
{
  enunciado: "Regressão é técnica exclusiva do aprendizado não supervisionado.",
  correta: "E",
  tema: "Aprendizado Supervisionado",
  justificativa: "Regressão é típica do aprendizado supervisionado."
},
{
  enunciado: "Clusters são grupos de dados semelhantes formados no aprendizado não supervisionado.",
  correta: "C",
  tema: "Clustering",
  justificativa: "É organizar objetos parecidos sem rótulos prévios."
},
{
  enunciado: "Clustering depende de dados rotulados.",
  correta: "E",
  tema: "Clustering",
  justificativa: "Rótulos não existem nesse tipo de aprendizado."
},
{
  enunciado: "Aprendizado por reforço utiliza recompensas para orientar o comportamento do agente.",
  correta: "C",
  tema: "Reforço",
  justificativa: "Funciona como um jogo: pontos positivos e negativos guiam decisões."
},
{
  enunciado: "No aprendizado por reforço, o agente conhece previamente a melhor estratégia.",
  correta: "E",
  tema: "Reforço",
  justificativa: "A estratégia é aprendida ao longo da interação."
},
{
  enunciado: "Features são atributos utilizados pelo modelo para realizar previsões.",
  correta: "C",
  tema: "Engenharia de Atributos",
  justificativa: "São as informações que alimentam o modelo."
},
{
  enunciado: "A escolha inadequada de features não afeta o desempenho do modelo.",
  correta: "E",
  tema: "Engenharia de Atributos",
  justificativa: "Features ruins comprometem o aprendizado."
},
{
  enunciado: "Normalização de dados pode melhorar o desempenho de certos algoritmos.",
  correta: "C",
  tema: "Pré-processamento",
  justificativa: "É colocar tudo na mesma escala para facilitar o aprendizado."
},
{
  enunciado: "Pré-processamento é etapa dispensável em projetos de IA.",
  correta: "E",
  tema: "Pré-processamento",
  justificativa: "Sem preparação, o modelo aprende mal."
},
{
  enunciado: "A acurácia mede a proporção de previsões corretas do modelo.",
  correta: "C",
  tema: "Métricas de Avaliação",
  justificativa: "É o percentual de acertos."
},
{
  enunciado: "Acurácia é sempre a melhor métrica para avaliar modelos.",
  correta: "E",
  tema: "Métricas de Avaliação",
  justificativa: "Em dados desbalanceados, ela pode enganar."
},
{
  enunciado: "Precisão e recall avaliam diferentes aspectos do desempenho do modelo.",
  correta: "C",
  tema: "Métricas de Avaliação",
  justificativa: "Uma mede erro, a outra mede cobertura."
},
{
  enunciado: "Precisão e recall são métricas equivalentes.",
  correta: "E",
  tema: "Métricas de Avaliação",
  justificativa: "Elas capturam comportamentos distintos."
},
{
  enunciado: "Deep Learning é uma subárea do Machine Learning baseada em redes neurais profundas.",
  correta: "C",
  tema: "Deep Learning",
  justificativa: "São redes com muitas camadas, como um cérebro mais complexo."
},
{
  enunciado: "Deep Learning dispensa grandes volumes de dados.",
  correta: "E",
  tema: "Deep Learning",
  justificativa: "Quanto mais profundo o modelo, mais dados ele exige."
},
{
  enunciado: "Redes neurais artificiais são inspiradas no funcionamento do cérebro humano.",
  correta: "C",
  tema: "Redes Neurais",
  justificativa: "São abstrações dos neurônios biológicos."
},
{
  enunciado: "Redes neurais funcionam de forma idêntica ao cérebro humano.",
  correta: "E",
  tema: "Redes Neurais",
  justificativa: "A inspiração existe, mas o funcionamento é diferente."
},
{
  enunciado: "Modelos generativos são capazes de criar novos conteúdos.",
  correta: "C",
  tema: "IA Generativa",
  justificativa: "Eles criam textos, imagens e códigos inéditos."
},
{
  enunciado: "IA generativa apenas classifica dados existentes.",
  correta: "E",
  tema: "IA Generativa",
  justificativa: "Classificação é tarefa discriminativa, não generativa."
},
{
  enunciado: "LLMs são modelos treinados com grandes volumes de texto.",
  correta: "C",
  tema: "LLMs",
  justificativa: "Quanto mais dados, mais capacidade linguística."
},
{
  enunciado: "LLMs possuem compreensão semântica real do mundo.",
  correta: "E",
  tema: "LLMs",
  justificativa: "Eles identificam padrões estatísticos, não entendimento humano."
},
{
  enunciado: "Transformers são arquiteturas amplamente usadas em modelos de linguagem.",
  correta: "C",
  tema: "Transformers",
  justificativa: "Eles permitem processamento eficiente de sequências."
},
{
  enunciado: "Transformers dependem exclusivamente de recorrência.",
  correta: "E",
  tema: "Transformers",
  justificativa: "Eles usam atenção, não recorrência."
},
{
  enunciado: "RAG combina recuperação de informações com geração de texto.",
  correta: "C",
  tema: "RAG",
  justificativa: "É buscar referência antes de responder."
},
{
  enunciado: "RAG elimina a necessidade de bases de conhecimento externas.",
  correta: "E",
  tema: "RAG",
  justificativa: "Ele depende justamente dessas bases."
},
{
  enunciado: "Prompts influenciam diretamente as respostas de modelos generativos.",
  correta: "C",
  tema: "Prompt Engineering",
  justificativa: "A pergunta molda a resposta."
},
{
  enunciado: "Prompt engineering é irrelevante para o desempenho de LLMs.",
  correta: "E",
  tema: "Prompt Engineering",
  justificativa: "Bons prompts melhoram significativamente os resultados."
},
{
  enunciado: "Fine-tuning ajusta modelos pré-treinados para tarefas específicas.",
  correta: "C",
  tema: "Fine-tuning",
  justificativa: "É especializar um modelo generalista."
},
{
  enunciado: "Fine-tuning cria um modelo do zero.",
  correta: "E",
  tema: "Fine-tuning",
  justificativa: "Ele parte de um modelo já treinado."
},
{
  enunciado: "Embeddings representam textos ou dados em forma vetorial.",
  correta: "C",
  tema: "Embeddings",
  justificativa: "Transformam significado em números."
},
{
  enunciado: "Embeddings são visíveis diretamente ao usuário final.",
  correta: "E",
  tema: "Embeddings",
  justificativa: "Eles são representações internas."
},
{
  enunciado: "IA generativa pode produzir informações incorretas com aparência plausível.",
  correta: "C",
  tema: "Alucinação",
  justificativa: "É errar com confiança."
},
{
  enunciado: "Alucinação é falha exclusivamente causada por dados de baixa qualidade.",
  correta: "E",
  tema: "Alucinação",
  justificativa: "É característica inerente ao modelo probabilístico."
},
{
  enunciado: "Avaliar modelos generativos exige métricas qualitativas e quantitativas.",
  correta: "C",
  tema: "Avaliação de Modelos",
  justificativa: "Nem tudo pode ser medido apenas com números."
},
{
  enunciado: "Modelos generativos dispensam avaliação contínua.",
  correta: "E",
  tema: "Avaliação de Modelos",
  justificativa: "Avaliação contínua é essencial."
},
{
  enunciado: "A governança em IA busca garantir uso ético, seguro e alinhado aos objetivos organizacionais.",
  correta: "C",
  tema: "Governança em IA",
  justificativa: "Governar IA é colocar regras no uso de uma tecnologia poderosa."
},
{
  enunciado: "Governança em IA se limita a questões técnicas.",
  correta: "E",
  tema: "Governança em IA",
  justificativa: "Inclui ética, riscos, conformidade e impacto social."
},
{
  enunciado: "A explicabilidade é especialmente relevante em decisões automatizadas no setor público.",
  correta: "C",
  tema: "Explicabilidade",
  justificativa: "O cidadão precisa entender decisões que o afetam."
},
{
  enunciado: "Decisões automatizadas dispensam transparência quando baseadas em IA.",
  correta: "E",
  tema: "Explicabilidade",
  justificativa: "Transparência é ainda mais necessária."
},
{
  enunciado: "Riscos de IA incluem vieses, discriminação e decisões opacas.",
  correta: "C",
  tema: "Riscos de IA",
  justificativa: "São efeitos colaterais do mau uso."
},
{
  enunciado: "Eliminar totalmente os riscos de IA é viável com tecnologia atual.",
  correta: "E",
  tema: "Riscos de IA",
  justificativa: "O objetivo é mitigar, não eliminar."
},
{
  enunciado: "IA pode apoiar políticas públicas e tomada de decisão governamental.",
  correta: "C",
  tema: "IA no Setor Público",
  justificativa: "Ajuda a analisar grandes volumes de dados."
},
{
  enunciado: "O uso de IA no setor público é incompatível com princípios democráticos.",
  correta: "E",
  tema: "IA no Setor Público",
  justificativa: "Com governança, ela pode fortalecer políticas públicas."
},
{
  enunciado: "A avaliação de impacto é prática recomendada antes da adoção de IA sensível.",
  correta: "C",
  tema: "Avaliação de Impacto",
  justificativa: "É analisar consequências antes de implementar."
},
{
  enunciado: "Avaliação de impacto é desnecessária em projetos de baixo risco.",
  correta: "E",
  tema: "Avaliação de Impacto",
  justificativa: "Mesmo baixo risco exige análise proporcional."
},
{
  enunciado: "A conformidade legal é requisito para uso responsável de IA.",
  correta: "C",
  tema: "Conformidade",
  justificativa: "IA não está acima da lei."
},
{
  enunciado: "A conformidade legal limita a inovação em IA.",
  correta: "E",
  tema: "Conformidade",
  justificativa: "Ela orienta o uso responsável."
},
{
  enunciado: "A capacitação de pessoas é fator crítico para adoção eficaz de IA.",
  correta: "C",
  tema: "Capacitação",
  justificativa: "Tecnologia sem pessoas preparadas não gera valor."
},
{
  enunciado: "A adoção de IA dispensa mudança cultural nas organizações.",
  correta: "E",
  tema: "Capacitação",
  justificativa: "Mudança cultural é essencial."
},
{
  enunciado: "A IA deve ser vista como apoio à decisão humana, não como substituição total.",
  correta: "C",
  tema: "IA e Decisão Humana",
  justificativa: "A máquina auxilia, o humano decide."
},

];