## Rode estes comandos **(em ordem)** no terminal para instalar as dependências
```
1- npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react @testing-library/react @testing-library/jest-dom
2- npm install --save-dev jest-environment-jsdom
3- npm install --save-dev identity-obj-proxy

```
## Crie um arquivo de configuração para o Jest chamado **jest.config.js** na raiz do seu projeto:
```
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["components/**/*.js"],
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/examples/",
    "config.js",
  ],
};


```
> Detalhe: collectCoverageFrom específica o diretório que vai ser feita a cobertura dos testes. Nesse caso, vai ser feito dentro da pasta componentes e de todas suas subpastas qualquer arquivo que tenha a extensão .js
## Crie um arquivo de configuração do Babel chamado **babel.config.js** na raiz do seu projeto:
```
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
};
```
## Na seção "scripts" do arquivo **package.json**, adicione o comando para executar os testes

```
"scripts": {
  "test": "jest"
},
```
## 