import { GetUser } from './get-user.decorator';
import { User } from '@prisma/client';
import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('my-posts')
  async getMyPosts(@GetUser() user: User) { 
    const posts = await this.prisma.post.findMany({
      where: { authorId: user.id }, 
    });

    const detailedPosts = [];
    for (const post of posts) {
      const comments = await this.prisma.comment.findMany({
        where: { postId: post.id }
      });
      detailedPosts.push({ ...post, comments });
    }

    return detailedPosts;
  }
}