# AI Chat Interface - Angular

A modern, responsive AI-powered chat interface built with Angular 20 and TypeScript. Features a beautiful gradient design, real-time messaging, and simulated AI responses.

## 🚀 Features

- **Modern UI Design** - Beautiful gradient styling with purple/blue theme
- **Real-time Messaging** - Instant message display with smooth animations
- **Responsive Design** - Works perfectly on desktop and mobile devices
- **Message History** - Persistent chat history with timestamps
- **AI Simulation** - Simulated AI responses (ready for real AI integration)
- **Clear Chat** - Reset conversation with one click
- **TypeScript** - Fully typed for better development experience
- **Standalone Components** - Modern Angular architecture

## 🛠️ Technologies Used

- **Angular 20** - Latest Angular framework
- **TypeScript** - Type-safe JavaScript
- **SCSS** - Advanced CSS with variables and mixins
- **RxJS** - Reactive programming for message handling
- **Google Fonts** - Roboto font family for modern typography

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/writersrinivasan/aichat-interface-angular.git
   cd aichat-interface-angular
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

## 🎨 Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── chat/          # Main chat component
│   │       ├── chat.ts    # Component logic
│   │       ├── chat.html  # Template
│   │       └── chat.scss  # Styles
│   ├── services/
│   │   └── chat.ts        # Chat service for message management
│   ├── models/
│   │   └── message.ts     # Message interface
│   ├── app.ts             # Root component
│   ├── app.html           # Root template
│   └── app.config.ts      # App configuration
├── styles.scss            # Global styles
└── index.html             # Main HTML file
```

## 💬 How to Use

1. **Type a message** in the input field at the bottom
2. **Press Enter** or click the **Send button**
3. **Your message** appears on the right with a purple gradient
4. **AI response** appears automatically on the left after 1 second
5. **View timestamps** for each message
6. **Clear chat** using the Clear button in the header

## 🔧 AI Integration

The current implementation uses simulated AI responses. To integrate with a real AI service:

1. **Update the ChatService** in `src/app/services/chat.ts`
2. **Replace the setTimeout simulation** with actual API calls
3. **Add error handling** and loading states
4. **Configure your AI service** (OpenAI, Anthropic, etc.)

Example integration:
```typescript
async sendMessage(content: string): Promise<void> {
  // Add user message
  this.addMessage(content, 'user');
  
  try {
    // Call your AI service
    const response = await this.aiService.generateResponse(content);
    this.addMessage(response, 'assistant');
  } catch (error) {
    this.addMessage('Sorry, I encountered an error.', 'assistant');
  }
}
```

## 🎯 Development Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build and watch for changes
- `npm test` - Run unit tests

## 📱 Responsive Design

The interface is fully responsive and includes:
- **Desktop**: Full-width chat interface with optimal spacing
- **Mobile**: Compact design with touch-friendly controls
- **Tablet**: Balanced layout for medium screens

## 🎨 Customization

### Colors
Edit the gradient colors in `src/app/components/chat/chat.scss`:
```scss
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Typography
Change fonts in `src/index.html` and `src/styles.scss`:
```css
font-family: Roboto, "Helvetica Neue", sans-serif;
```

### Message Styling
Customize message bubbles in the chat component styles.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

Built with ❤️ using Angular and TypeScript
