import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  novaMsg!:string;
  listaMsg:string[] =[];

  constructor(private chatService:ChatService){}

  ngOnInit(){
    this.chatService.getNewMessage().subscribe((msg:string)=>{
      this.listaMsg.push(msg);
    })
  }

  sendMsg(){
    this.chatService.sendMessage(this.novaMsg);
    this.novaMsg ="";
  }


}
