import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class Chat {
  private messages = new BehaviorSubject<Message[]>([]);

  constructor() { }

  getMessages(): Observable<Message[]> {
    return this.messages.asObservable();
  }

  sendMessage(content: string): void {
    const currentMessages = this.messages.getValue();
    const userMessage: Message = {
      content,
      role: 'user',
      timestamp: new Date()
    };
    
    // Add user message
    currentMessages.push(userMessage);
    this.messages.next(currentMessages);

    // Simulate AI response (replace this with actual AI integration)
    setTimeout(() => {
      const aiMessage: Message = {
        content: 'This is a simulated AI response. Replace this with actual AI integration.',
        role: 'assistant',
        timestamp: new Date()
      };
      currentMessages.push(aiMessage);
      this.messages.next([...currentMessages]);
    }, 1000);
  }

  clearChat(): void {
    this.messages.next([]);
  }
}
