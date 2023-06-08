import { PrismaClient } from '@prisma/client';
import { PostType } from './post.type';

const prisma = new PrismaClient();

export async function getAllPosts() {
  const posts = await prisma.posts.findMany();
  return posts;
}

export async function getPostById(id: string) {
  const post = await prisma.posts.findUnique({
    where: {
      id,
    },
  });
  return post;
}

export async function createPost(data: PostType) {
  const post = await prisma.posts.create({
    data,
  });
  return post;
}

export async function updatePostById(id: string, data: PostType) {
  const updatedPost = await prisma.posts.update({
    where: { id },
    data,
  });
  return updatedPost;
}

export async function deletePostById(id: string) {
  const post = await prisma.posts.delete({
    where: {
      id,
    },
  });
  return post;
}


