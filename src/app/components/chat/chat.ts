import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chat as ChatService } from '../../services/chat';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './chat.html',
  styleUrl: './chat.scss'
})
export class Chat {
  messages$: ReturnType<ChatService['getMessages']>;
  newMessage = '';

  constructor(private chatService: ChatService) {
    this.messages$ = this.chatService.getMessages();
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.chatService.sendMessage(this.newMessage.trim());
      this.newMessage = '';
    }
  }

  clearChat(): void {
    this.chatService.clearChat();
  }
}
