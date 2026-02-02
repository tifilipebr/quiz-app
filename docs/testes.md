# Cenários de Teste Unitário - Quiz App

Baseado na arquitetura proposta no documento `docs/arquitetura.md`, este documento define os cenários de teste unitário para cada componente da nova arquitetura.

## Estrutura de Testes

### Organização dos Testes

```
tests/
├── hooks/
│   ├── useQuizGame.test.ts
│   ├── useQuizTimer.test.ts
│   ├── useQuizPersistence.test.ts
│   └── useQuizAnalytics.test.ts
├── components/
│   ├── atoms/
│   │   ├── Button.test.tsx
│   │   ├── Text.test.tsx
│   │   └── Input.test.tsx
│   ├── molecules/
│   │   ├── AnswerButton.test.tsx
│   │   └── QuestionCard.test.tsx
│   └── organisms/
│       ├── QuestionSection.test.tsx
│       └── ResultsSection.test.tsx
├── containers/
│   ├── QuizContainer.test.tsx
│   └── ResultsContainer.test.tsx
└── templates/
    ├── QuizTemplate.test.tsx
    └── ResultsTemplate.test.tsx
```

## Testes de Hooks

### useQuizGame Hook

**Objetivo**: Testar a lógica de negócio central do quiz.

#### Cenários de Teste

1. **Estado Inicial**
   - [ ] Deve iniciar com estado padrão correto
   - [ ] Deve iniciar com pontuação zero
   - [ ] Deve iniciar com índice de pergunta zero
   - [ ] Deve iniciar com status 'idle'

2. **Seleção de Resposta**
   - [ ] Deve selecionar resposta corretamente
   - [ ] Deve atualizar pontuação quando resposta correta
   - [ ] Deve diminuir a pontuação em -1 quando resposta incorreta
   - [ ] Não deve permitir mudar resposta já selecionada

3. **Navegação de Perguntas**
   - [ ] Deve avançar para próxima pergunta
   - [ ] Deve reiniciar seleção de resposta ao mudar pergunta
   - [ ] Deve terminar quiz quando chegar na última pergunta
   - [ ] Deve validar índice de pergunta válido

4. **Reinício do Jogo**
   - [ ] Deve reiniciar todos os estados para valores iniciais
   - [ ] Deve limpar respostas anteriores
   - [ ] Deve resetar pontuação para zero

5. **Validação de Respostas**
   - [ ] Deve validar respostas corretas
   - [ ] Deve validar respostas incorretas
   - [ ] Deve lidar com respostas inválidas

6. **Carregamento de Perguntas**
   - [ ] Deve carregar perguntas corretamente
   - [ ] Deve validar estrutura de perguntas
   - [ ] Deve lidar com perguntas vazias

### useQuizTimer Hook

**Objetivo**: Testar o controle de tempo das perguntas.

#### Cenários de Teste

1. **Início do Timer**
   - [ ] Deve iniciar timer com tempo correto
   - [ ] Deve chamar callback ao iniciar
   - [ ] Deve resetar tempo ao iniciar novamente

2. **Contagem Regressiva**
   - [ ] Deve decrementar tempo corretamente
   - [ ] Deve parar em zero
   - [ ] Deve chamar callback quando zerar

3. **Parada do Timer**
   - [ ] Deve parar timer imediatamente
   - [ ] Deve chamar callback com tempo atual
   - [ ] Deve limpar intervalo corretamente

4. **Reinício do Timer**
   - [ ] Deve resetar para tempo inicial
   - [ ] Deve permitir múltiplos ciclos

### useQuizPersistence Hook

**Objetivo**: Testar a persistência de dados no localStorage.

#### Cenários de Teste

1. **Salvamento de Progresso**
   - [ ] Deve salvar estado do quiz
   - [ ] Deve salvar respostas
   - [ ] Deve salvar pontuação
   - [ ] Deve lidar com falhas no localStorage

2. **Carregamento de Progresso**
   - [ ] Deve carregar estado salvo
   - [ ] Deve validar dados carregados
   - [ ] Deve lidar com dados inválidos
   - [ ] Deve retornar estado padrão se não houver dados

3. **Limpeza de Dados**
   - [ ] Deve limpar todos os dados salvos
   - [ ] Deve lidar com localStorage indisponível

### useQuizAnalytics Hook

**Objetivo**: Testar o tracking de estatísticas e métricas.

#### Cenários de Teste

1. **Track de Respostas**
   - [ ] Deve registrar respostas corretas
   - [ ] Deve registrar respostas incorretas
   - [ ] Deve registrar tempo de resposta
   - [ ] Deve calcular taxa de acerto

2. **Cálculo de Estatísticas**
   - [ ] Deve calcular pontuação total
   - [ ] Deve calcular média de tempo
   - [ ] Deve calcular percentual de acertos
   - [ ] Deve gerar histórico de jogos

## Testes de Componentes Atômicos

### Button Component

**Objetivo**: Testar botão básico reutilizável.

#### Cenários de Teste

1. **Renderização**
   - [ ] Deve renderizar com texto correto
   - [ ] Deve aplicar estilos corretos
   - [ ] Deve ser clicável

2. **Comportamento**
   - [ ] Deve chamar onClick ao ser clicado
   - [ ] Deve desabilitar quando disabled=true
   - [ ] Deve aplicar estilos de loading

### Text Component

**Objetivo**: Testar componente de texto estilizado.

#### Cenários de Teste

1. **Renderização**
   - [ ] Deve renderizar texto corretamente
   - [ ] Deve aplicar variantes de estilo
   - [ ] Deve aplicar tamanho correto

### Input Component

**Objetivo**: Testar campo de input básico.

#### Cenários de Teste

1. **Renderização**
   - [ ] Deve renderizar campo de input
   - [ ] Deve aplicar placeholder
   - [ ] Deve aplicar tipo correto

2. **Comportamento**
   - [ ] Deve atualizar valor ao digitar
   - [ ] Deve chamar onChange
   - [ ] Deve validar estado disabled

## Testes de Componentes Moleculares

### AnswerButton Component

**Objetivo**: Testar botão de resposta de pergunta.

#### Cenários de Teste

1. **Renderização**
   - [ ] Deve renderizar opção de resposta
   - [ ] Deve aplicar estilos base
   - [ ] Deve mostrar texto da opção

2. **Feedback Visual**
   - [ ] Deve aplicar borda verde para resposta correta
   - [ ] Deve aplicar borda vermelha para resposta errada
   - [ ] Deve aplicar estilos neutros para opções não selecionadas
   - [ ] Deve desabilitar após seleção

3. **Comportamento**
   - [ ] Deve chamar onSelect ao ser clicado
   - [ ] Não deve permitir nova seleção após escolha
   - [ ] Deve aplicar hover styles

### QuestionCard Component

**Objetivo**: Testar cartão de exibição de pergunta.

#### Cenários de Teste

1. **Renderização**
   - [ ] Deve renderizar enunciado da pergunta
   - [ ] Deve renderizar valor da pergunta
   - [ ] Deve renderizar todas as opções
   - [ ] Deve aplicar estilos de card

2. **Comportamento**
   - [ ] Deve exibir feedback após seleção
   - [ ] Deve desabilitar opções após resposta
   - [ ] Deve aplicar loading states

## Testes de Componentes Organísmicos

### QuestionSection Component

**Objetivo**: Testar seção completa de pergunta.

#### Cenários de Teste

1. **Renderização**
   - [ ] Deve renderizar pergunta atual
   - [ ] Deve exibir pontuação atual
   - [ ] Deve exibir temporizador
   - [ ] Deve aplicar layout correto

2. **Comportamento**
   - [ ] Deve avançar para próxima pergunta após resposta
   - [ ] Deve exibir feedback de resposta
   - [ ] Deve controlar fluxo de tempo
   - [ ] Deve lidar com fim do quiz

### ResultsSection Component

**Objetivo**: Testar seção de exibição de resultados.

#### Cenários de Teste

1. **Renderização**
   - [ ] Deve exibir pontuação final
   - [ ] Deve exibir estatísticas
   - [ ] Deve exibir histórico de respostas
   - [ ] Deve aplicar estilos de resultados

2. **Comportamento**
   - [ ] Deve exibir detalhes de cada pergunta
   - [ ] Deve mostrar respostas corretas e incorretas
   - [ ] Deve permitir reiniciar quiz
   - [ ] Deve permitir visualização detalhada

## Testes de Containers

### QuizContainer Component

**Objetivo**: Testar container que gerencia lógica do quiz.

#### Cenários de Teste

1. **Integração com Hook**
   - [ ] Deve conectar corretamente com useQuizGame
   - [ ] Deve passar props corretas para presenters
   - [ ] Deve atualizar UI ao mudar estado

2. **Fluxo de Jogo**
   - [ ] Deve iniciar quiz corretamente
   - [ ] Deve gerenciar navegação entre perguntas
   - [ ] Deve lidar com término do quiz
   - [ ] Deve reiniciar jogo quando solicitado

3. **Persistência**
   - [ ] Deve salvar progresso automaticamente
   - [ ] Deve carregar progresso ao montar
   - [ ] Deve lidar com falhas de persistência

### ResultsContainer Component

**Objetivo**: Testar container de resultados.

#### Cenários de Teste

1. **Integração com Dados**
   - [ ] Deve receber dados do quiz concluído
   - [ ] Deve calcular estatísticas corretamente
   - [ ] Deve formatar dados para exibição

2. **Comportamento**
   - [ ] Deve permitir reiniciar quiz
   - [ ] Deve permitir visualização detalhada
   - [ ] Deve salvar estatísticas no histórico

## Testes de Templates

### QuizTemplate Component

**Objetivo**: Testar template de layout do quiz.

#### Cenários de Teste

1. **Layout**
   - [ ] Deve aplicar estilos de template
   - [ ] Deve posicionar elementos corretamente
   - [ ] Deve responsividade adequada

2. **Composição**
   - [ ] Deve renderizar header
   - [ ] Deve renderizar main content
   - [ ] Deve renderizar footer

### ResultsTemplate Component

**Objetivo**: Testar template de layout de resultados.

#### Cenários de Teste

1. **Layout**
   - [ ] Deve aplicar estilos de template de resultados
   - [ ] Deve destacar pontuação final
   - [ ] Deve organizar seções de forma clara

2. **Composição**
   - [ ] Deve renderizar resumo
   - [ ] Deve renderizar detalhes
   - [ ] Deve renderizar ações disponíveis

## Estratégia de Testes

### Abordagem TDD

1. **Escrever Testes Primeiro**: Criar testes antes da implementação
2. **Implementar para Passar**: Desenvolver código que faça os testes passarem
3. **Refatorar com Confiança**: Melhorar código mantendo testes verdes
4. **Iterar**: Continuar ciclo para novas funcionalidades

### Ferramentas Recomendadas

- **Jest**: Framework de testes
- **React Testing Library**: Testes de componentes React
- **MSW**: Mock de APIs
- **Cypress**: Testes end-to-end (futuro)

### Cobertura de Testes

- **Mínimo 80%** de cobertura de linhas
- **Mínimo 70%** de cobertura de branches
- **Testes unitários** para toda lógica de negócio
- **Testes de integração** para fluxos críticos

### Princípios de Testes

1. **Independência**: Cada teste deve ser independente
2. **Repetibilidade**: Testes devem ser consistentes
3. **Rapidez**: Testes devem ser rápidos de executar
4. **Clareza**: Testes devem ser autoexplicativos
5. **Completeness**: Cobrir casos de sucesso e falha