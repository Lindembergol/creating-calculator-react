# App Calculadora com React

Este projeto é uma implementação simples de uma calculadora em React utilizando componentes customizados. Abaixo estão os principais recursos e funcionalidades implementadas.

## Componentes Utilizados

### 1. **Container** e **Content**
Estes componentes são responsáveis por organizar a estrutura da calculadora na tela.

### 2. **Row**
Componente que organiza os botões em linhas.

### 3. **Input**
Componente que exibe o valor atual da operação.

### 4. **Button**
Cada botão representa uma ação ou número a ser utilizado na calculadora.

## Estados

O aplicativo utiliza três estados principais:

- `currentNumber`: mantém o número atual exibido no visor da calculadora.
- `firstNumber`: armazena o primeiro número da operação.
- `operation`: guarda a operação matemática selecionada pelo usuário.

## Funcionalidades

### 1. **handleOnClear**
Função responsável por limpar os valores e resetar a calculadora.

```javascript
const handleOnClear = () => {
  setCurrentNumber('0');
  setFirstNumber('0');
  setOperation('');
}
```
### 2. **handleAddNumber**
Função que adiciona números ao visor da calculadora, concatenando os números digitados.

```javascript
const handleAddNumber = (number) => {
  setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
}
```

### 3. **handleSumNumbers**
Função que realiza a soma entre o primeiro número e o número atual.

```javascript
const handleSumNumbers = () => {
  if (firstNumber === '0') {
    setFirstNumber(String(currentNumber));
    setCurrentNumber('0');
    setOperation('+');
  } else {
    const sum = Number(firstNumber) + Number(currentNumber);
    setCurrentNumber(String(sum));
    setOperation('');
  }
}
```
Para as demais operações como subtração, divisão e multiplicação, basta mudar o valor do estado **operation** para as demais operações aritméticas.

### 4. **handleRemoveNumbers**
Remove o último dígito do display.

```javascript
const handleRemoveNumbers = () => {
  setCurrentNumber(prev => `${prev.substring(0, prev.length - 1)}`);
}
```

### 4. **handlEquals**
Executa a operação matemática selecionada.

```javascript
const handlEquals = () => {
  if (firstNumber !== '0' && operation !== '' && currentNumber !== 0) {
    switch (operation) {
      case '+':
        handleSumNumbers();
        break;
      case '-':
        handleMinusNumbers();
        break;
      case 'x':
        handleMultNumbers();
        break;
      case '/':
        handleDivNumbers();
        break;
      default:
        break;
    }
  }
}
```

## **Interface da Calculadora**

- O visor é atualizado à medida que os números são adicionados.
- O usuário pode realizar operações matemáticas básicas: soma, subtração, multiplicação e divisão.
- Há botões para limpar os valores, remover o último dígito e calcular o resultado da operação atual.

## **Exemplo de Interface:**
```javascript
<Row>
  <Button label="C" onClick={handleOnClear} />
  <Button label="<" onClick={handleRemoveNumbers} />
  <Button label="/" onClick={handleDivNumbers} />
  <Button label="x" onClick={handleMultNumbers} />
</Row>
```

## **Execução do Projeto**
Para executar a aplicação, siga os passos abaixo:
- Clone o repositório.
- Instale as dependências utilizando npm install.
- Execute o projeto com npm start.