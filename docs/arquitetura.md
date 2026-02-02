# Arquitetura do Quiz App

## Visão Geral

Este documento descreve a arquitetura planejada para o Quiz App, com foco na melhoria de performance, manutenibilidade e escalabilidade do projeto.

## Problemas Identificados no Código Atual

### Performance
- **Re-renders excessivos**: O hook `QuizData` recalcula várias vezes causando re-renders desnecessários
- **Estado compartilhado**: Muitos componentes dependem do mesmo estado, causando cascata de re-renders
- **Callbacks inline**: Funções sendo criadas inline em eventos onClick

### Estrutura de Dados
- Estado centralizado mas com lógica misturada
- Falta de separação clara entre lógica de negócio e apresentação
- Dados de quiz hardcoded no hook

### Arquitetura
- Componentes com múltiplas responsabilidades
- Falta de camadas atômicas bem definidas
- Lógica de negócio espalhada

## Arquitetura Proposta

### Container-Presenter Pattern

Esta arquitetura separa claramente a lógica de negócio da camada de apresentação, melhorando a testabilidade e manutenibilidade.

#### Por que usar Container-Presenter?

1. **Separation of Concerns**: Separa lógica de negócio da UI
2. **Testabilidade**: Containers podem ser testados isoladamente da UI
3. **Reusabilidade**: Presenters podem ser reutilizados com diferentes sources de dados
4. **Performance**: Reduz re-renders desnecessários ao isolar estado

#### Estrutura

```
┌──────────────┐
│  Container   │  ← Lógica de Negócio
│──────────────│
│ State        │
│ API Calls    │
│ Logic        │
└──────┬───────┘
       │ props
┌──────▼───────┐
│ Presenter    │  ← Camada de UI
│──────────────│
│ JSX / UI     │
│ Styling      │
└──────────────┘
```

### Design Atômico

Organiza componentes em camadas hierárquicas, facilitando a reutilização e manutenção.

#### Por que usar Design Atômico?

1. **Reusabilidade**: Componentes atômicos podem ser reutilizados
2. **Consistência**: Padroniza a UI através de componentes atômicos
3. **Manutenibilidade**: Facilita a atualização de estilos e comportamentos
4. **Escalabilidade**: Permite construir interfaces complexas de forma organizada

#### Camadas

- **Átomos**: Componentes básicos (Button, Text, Input)
- **Moléculas**: Composição de átomos (AnswerButton, QuestionCard)
- **Organismos**: Componentes complexos (QuestionSection, ResultsSection)
- **Templates**: Layouts completos (QuizTemplate, ResultsTemplate)

## Estrutura de Hooks

### useQuizGame (Principal)
Gerencia todo o fluxo do quiz, centralizando a lógica de negócio.

**Responsabilidades**:
- Gerenciar estado do jogo
- Calcular pontuação
- Controlar fluxo de perguntas
- Validar respostas

### useQuizTimer
Gerencia o temporizador de cada pergunta.

**Responsabilidades**:
- Controle de tempo
- Callbacks de timeout
- Estado de ativação

### useQuizPersistence
Gerencia persistência de dados (localStorage).

**Responsabilidades**:
- Salvar progresso
- Carregar progresso
- Limpar dados

### useQuizAnalytics
Gerencia estatísticas e métricas do quiz.

**Responsabilidades**:
- Trackear respostas
- Calcular estatísticas
- Gerenciar histórico

## Estrutura de Dados

### Quiz State
Estado centralizado que gerencia todo o fluxo do quiz.

```typescript
interface QuizState {
  questions: IQuestion[];
  currentQuestionIndex: number;
  answers: IAnswer[];
  score: number;
  status: 'idle' | 'playing' | 'finished';
  selectedAnswer: string | null;
}
```

### Quiz Actions
Ações que podem ser realizadas no estado do quiz.

```typescript
type QuizAction = 
  | { type: 'SELECT_ANSWER'; payload: string }
  | { type: 'NEXT_QUESTION' }
  | { type: 'RESTART' }
  | { type: 'TIME_UP' }
  | { type: 'LOAD_QUESTIONS'; payload: IQuestion[] };
```

## Estratégia de Otimização

### Memorização Estratégica
- `useMemo` para cálculos de pontuação
- `useCallback` para handlers de eventos
- `React.memo` para componentes estáticos

### Separação de Estado
- Estado global para dados do quiz
- Estado local para feedback visual
- Estado derivado para cálculos

### Lazy Loading
- Importação dinâmica de componentes
- Carregamento preguiçoso de módulos

## Benefícios da Nova Arquitetura

1. **Performance**: Redução de re-renders e otimização de cálculos
2. **Manutenibilidade**: Código organizado e separação clara de responsabilidades
3. **Testabilidade**: Componentes e hooks isolados para testes unitários
4. **Escalabilidade**: Estrutura preparada para novas funcionalidades
5. **Reusabilidade**: Componentes atômicos e presenters reutilizáveis