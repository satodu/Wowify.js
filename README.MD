### Criando um README e uma Página Demo no GitHub

---

#### 1. **README em Inglês**

Crie um arquivo `README.md` com o seguinte conteúdo:

```markdown
# 🎉 Wowify.js

**Wowify.js** is a lightweight and fun JavaScript library to bring attention-grabbing animations to your web pages. It allows you to create dynamic effects like confetti parties with custom audio and duration.

---

## 🚀 Features
- 🎊 Dynamic confetti animation with custom duration.
- 🔊 Customizable sound effects.
- 🎨 Easy to integrate and use.

---

## 📦 Installation

1. Clone the repository or download the library:
   ```bash
   git clone https://github.com/your-username/wowify.js.git
   ```

2. Include the script in your HTML file:
   ```html
   <script src="wowify.js"></script>
   ```

---

## 💡 Usage

Here’s a quick example to get started:

```html
<button id="partyButton">🎉 Click for a Party! 🎉</button>
<div id="confetti-container"></div>

<script>
    document.getElementById('partyButton').addEventListener('click', () => {
        Wowify.startParty({
            confettiDuration: 5000, // Duration in milliseconds
            sound: 'https://www.soundjay.com/button/beep-07.wav' // Sound URL
        });
    });
</script>
```

---

## 🌐 Live Demo

Check out the live demo: [Wowify.js Demo](https://satodu.github.io/Wowify.js/)

---

## 🛠 Contributing

1. Fork the project.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## 📄 License

Wowify.js is licensed under the MIT License. See `LICENSE` for details.

```

---

#### 2. **Criando uma Página Demo no GitHub**

1. **Organize a Estrutura de Arquivos**
   - Crie uma pasta chamada `docs` no seu repositório.
   - Adicione o arquivo de demo `index.html` e os arquivos necessários, como `wowify.js` e `style.css`.

   Exemplo:
   ```
   ├── docs/
   │   ├── index.html
   │   ├── wowify.js
   │   ├── style.css
   ├── README.md
   ├── LICENSE
   ```

2. **Crie o Arquivo `index.html`**
   Use o seguinte exemplo para o arquivo demo:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Wowify.js Demo</title>
       <link rel="stylesheet" href="style.css">
   </head>
   <body>
       <button id="partyButton">🎉 Click for a Party! 🎉</button>
       <div id="confetti-container"></div>

       <script src="wowify.js"></script>
       <script>
           document.getElementById('partyButton').addEventListener('click', () => {
               Wowify.startParty({
                   confettiDuration: 5000, 
                   sound: 'https://www.soundjay.com/button/beep-07.wav'
               });
           });
       </script>
   </body>
   </html>
   ```