import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway({
  namespace: 'ws',
  cors: { origin: '*' },
})
export class WsAppGateway {
  @SubscribeMessage('events')
  handleEvent(@MessageBody() message: string): string {
    return message;
  }
}
