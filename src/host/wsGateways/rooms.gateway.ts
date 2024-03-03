import { ConnectedSocket, OnGatewayConnection, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { ClientEvent, ServerEvent } from '@app/constants/enums';
import { Socket } from 'socket.io';

@WebSocketGateway({
  namespace: 'rooms',
  cors: { origin: '*' },
})
export class WsRoomsGateway implements OnGatewayConnection {
  handleConnection(client: Socket): void {
    client.emit(ServerEvent.ROOM_LIST_SENT, ['1', '2', '3']);
  }

  @SubscribeMessage(ClientEvent.JOIN_ROOM)
  handleJoinRoom(@ConnectedSocket() client: Socket): void {
    console.log(client.id);
  }

  @SubscribeMessage(ClientEvent.LEAVE_ROOM)
  handleLeaveRoom(@ConnectedSocket() client: Socket): void {
    console.log(client.id);
  }
}
