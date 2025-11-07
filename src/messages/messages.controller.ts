import { GetUser } from './get-user.decorator';

@Controller('messages')
export class MessagesController {
  @Get(':id')
  getMessageThread(@Param('id') messageId: string) {
    return this.prisma.message.findUnique({
      where: { id: messageId },
    });
  }
}