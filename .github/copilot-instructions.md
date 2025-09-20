<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# AI Chat Interface - Angular Project

This is an Angular-based AI-powered chat interface application.

## Project Structure
- `src/app/components/chat/` - Main chat component with UI and logic
- `src/app/services/chat.ts` - Service for managing chat messages and AI responses
- `src/app/models/message.ts` - Interface definition for chat messages

## Key Features
- Modern Material Design UI
- Real-time message display
- Message timestamps
- Clear chat functionality
- Responsive design

## Development Notes
- Uses Angular Material for UI components
- Standalone components architecture
- SCSS for styling
- TypeScript for type safety

## AI Integration
The current implementation includes a simulated AI response. To integrate with a real AI service:
1. Update the `sendMessage` method in `ChatService`
2. Replace the setTimeout simulation with actual API calls
3. Handle loading states and error scenarios
