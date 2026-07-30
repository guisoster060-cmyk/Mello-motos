# 🏍️ Mello Motos - Site de Estoque Digital

Site profissional de estoque digital para a concessionária **Mello Motos** em Passo Fundo-RS.

## 📁 Estrutura do Projeto

```
teste/
├── mellomotos.html          # Arquivo principal (HTML)
├── style.css                # Estilos CSS
├── script.js                # Lógica JavaScript
├── motos-dados.js           # Base de dados das motos
└── img/                     # Pasta com imagens dos veículos
    ├── WhatsApp Image 2026-07-29 at 20.20.17 (1).jpeg
    ├── WhatsApp Image 2026-07-29 at 20.20.17 (2).jpeg
    ├── WhatsApp Image 2026-07-29 at 20.20.17.jpeg
    ├── WhatsApp Image 2026-07-29 at 20.20.18.jpeg
    └── ... (mais imagens)
```

## 🛠️ Arquivos

### **mellomotos.html** - Estrutura Principal
- Contém a estrutura HTML completa
- Importa CSS e JavaScript como arquivos separados
- Define o banner do vendedor, cards de motos e modal de detalhes

### **style.css** - Estilos e Design
- Tema de cores: vermelho (#e60000) e branco
- Design responsivo para mobile, tablet e desktop
- Animações e transições suaves
- CSS Grid para layout dos cards

### **script.js** - Funcionalidades
- `renderizarMotos()` - Gera os cards dinamicamente
- `abrirModal(index)` - Abre o modal com detalhes da moto
- `fecharModal()` - Fecha o modal
- `enviarWhatsApp()` - Envia mensagem via WhatsApp

### **motos-dados.js** - Base de Dados
- Array com 17 motos diferentes
- Estrutura: nome, tipo, ano, km, preço, imagem, descrição
- Fácil de editar e adicionar novas motos

## 🚀 Como Usar

1. **Abra no navegador:**
   - Clique duplo em `mellomotos.html` ou arraste para o navegador

2. **Editar motos:**
   - Abra `motos-dados.js` e adicione/remova motos no array
   - Formato:
   ```javascript
   { 
     nome: 'MARCA MODELO', 
     tipo: 'Tipo', 
     ano: '2024',
     km: '10.000 km',
     preco: 'R$ XX.XXX',
     imagem: 'img/nome-da-foto.jpeg',
     descricao: 'Descrição da moto...'
   }
   ```

3. **Atualizar número WhatsApp:**
   - Em `mellomotos.html`, procure `5554992354040` e atualize com seu número

4. **Personalizar cores:**
   - Em `style.css`, edite as variáveis CSS no `:root`
   - `--accent: #e60000` (cor vermelha principal)

## 📱 Funcionalidades

✅ **Responsivo** - Funciona em desktop, tablet e celular  
✅ **Modal Interativo** - Clique em "Falar com vendedor" para ver detalhes  
✅ **Integração WhatsApp** - Botão direto para enviar mensagem ao vendedor  
✅ **Descrição Completa** - Cada moto tem informações detalhadas  
✅ **Design Profissional** - Identidade visual da Mello Motos  

## 🔧 Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Grid, Flexbox, Animações
- **JavaScript Puro** - Sem dependências externas
- **Responsive Design** - Mobile-first

## 📋 Motos no Estoque

1. YAMAHA TENERE 250
2. HONDA CG 160 START
3. HONDA CG 125 KS
4. ECOVIVA JE-7 1000W
5. ECOVIVA HE-6 1000W
6. HONDA BIZ 125 EX
7. HONDA HRV EX 1.8
8. HONDA BIZ 125 ES
9. YAMAHA FAZER 250
10. HUSQVARNA FC 250
11. VW POLO TRACK
12. RENAULT KWID ZEN
13. HONDA XRE 300 ADVENTURE
14. HONDA CG 160 TITAN
15... e mais

## 💡 Dicas

- As imagens devem estar na pasta `img/` com os nomes corretos
- O número de WhatsApp pode ser alterado em qualquer lugar
- Adicione mais motos simplesmente editando `motos-dados.js`
- O site carrega rápido - sem servidor necessário!

## 📞 Contato

**Mello Motos - Passo Fundo RS**  
WhatsApp: (54) 99235-4040  
4.000+ Motos Vendidas  

---

**Desenvolvido para Mello Motos © 2026**
