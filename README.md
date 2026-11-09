# 🚑 Calculadora de Doses de Emergência & UTI

Uma aplicação web clínica, rápida e intuitiva para cálculo de doses, volumes de ampolas e velocidades de infusão (bolus e bombas contínuas) para situações de emergência, intubação e terapia intensiva.

---

## ⚡ 100% Independente de APIs & Funciona Offline

> **Sim! Esta aplicação é 100% autônoma.**
> - **Zero dependências de backend ou APIs externas:** todas as fórmulas matemáticas farmacológicas são calculadas localmente no navegador (client-side) pelo React/TypeScript.
> - **Funciona sem internet (offline):** uma vez carregada no navegador do celular ou computador do plantonista, pode ser usada sem sinal de Wi-Fi ou rede móvel no pronto-socorro e na UTI.
> - **Sem custos de hospedagem:** por ser estática, pode ser hospedada gratuitamente no GitHub Pages, Vercel, Netlify, Cloudflare Pages ou aberta localmente.

---

## 🚀 Como subir para o seu repositório no GitHub

Siga os passos abaixo no seu computador com Git e Node.js instalados:

### 1. Crie um novo repositório no GitHub
1. Acesse [github.com/new](https://github.com/new).
2. Dê um nome ao repositório (ex: `calculadora-emergencia`).
3. Deixe o repositório como **Público** (ou Privado, se preferir).
4. **Não** marque "Add a README file" (já temos um completo aqui).
5. Clique em **Create repository**.

### 2. Inicialize e envie os arquivos pelo terminal
No diretório onde estão os arquivos deste projeto, execute:

```bash
# 1. Inicialize o repositório git local (se ainda não tiver iniciado)
git init

# 2. Adicione todos os arquivos
git add .

# 3. Crie o primeiro commit
git commit -m "feat: Calculadora de doses de emergência sem dependência de APIs"

# 4. Renomeie a branch principal para main
git branch -M main

# 5. Conecte ao seu repositório remoto no GitHub (substitua pelo seu link)
git remote add origin https://github.com/SEU-USUARIO/calculadora-emergencia.git

# 6. Envie o código
git push -u origin main
```

---

## 🌐 Como publicar gratuitamente no GitHub Pages (com 1 clique)

Este repositório já inclui o arquivo `.github/workflows/deploy.yml` pré-configurado para publicação automática!

1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages**.
3. Na seção **Build and deployment > Source**, selecione:
   - **GitHub Actions**
4. Pronto! O GitHub executará o build automaticamente e fornecerá um link público no formato:
   `https://SEU-USUARIO.github.io/calculadora-emergencia/`

Qualquer nova alteração enviada com `git push` atualizará o site automaticamente!

---

## 💻 Como rodar o projeto localmente no seu computador

Requisitos: [Node.js](https://nodejs.org/) (versão 18+) instalado.

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento local
npm run dev
```

Abra no navegador em: `http://localhost:3000` ou no link indicado no terminal.

Para gerar os arquivos prontos para produção (pasta `dist/`):
```bash
npm run build
```
A pasta gerada `dist/` contém HTML, CSS e JavaScript estáticos puros que rodam em qualquer servidor web ou até diretamente em pendrive.

---

## 💊 Como personalizar ou adicionar novos medicamentos

Todos os medicamentos, doses de referência, ampolas e diluições estão organizados de forma limpa em:
- **`constants.ts`**

Para adicionar um medicamento novo, basta incluir um novo objeto na categoria desejada com:
- `name`: Nome do fármaco (ex: "Amiodarona")
- `calculationType`: `'bolus'` ou `'infusion'`
- `unit`: Unidade da dose (ex: `'mg/kg'`, `'mcg/kg/min'`, `'mg/kg/h'`, `'U/min'`)
- `defaultDose` e `doseRange`: Valores recomendados
- `presentations`: Concentrações comerciais das ampolas
- `dilutions`: Protocolos de diluição recomendados em UTI/sala de emergência

---

## 🔒 Aviso Médico / Isenção de Responsabilidade

Esta aplicação foi desenvolvida como auxílio e consulta rápida para profissionais de saúde. Não substitui o julgamento clínico individual, diretrizes institucionais hospitalares e protocolos vigentes. Sempre confira o peso do paciente, concentração real da ampola disponível e contraindicações antes da administração.
