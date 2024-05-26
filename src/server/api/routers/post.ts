import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        url: z.string().min(1),
        featuredImage: z.string().min(1),
        slug: z.string().min(1),
        category: z.array(z.string().min(1)),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          title: input.title,
          slug: input.slug,
          featuredImage: input.featuredImage,
          url: input.url,
          category: input.category,
        },
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),

  getAllPosts: publicProcedure
    .input(
      z.object({
        query: z.string().optional(),
        category: z.string().optional(),
      }),
    )
    .query(({ ctx, input }) => {
      return ctx.db.post.findMany({
        orderBy: { createdAt: "desc" },
        where: {
          ...(input.query
            ? {
                OR: [
                  {
                    title: {
                      startsWith: input?.query,
                      mode: "insensitive",
                    },
                  },
                  {
                    title: {
                      contains: input?.query,
                      mode: "insensitive",
                    },
                  },
                ],
              }
            : null),
          ...(input.category
            ? {
                AND: {
                  category: {
                    has: input?.category?.toLowerCase(),
                  },
                },
              }
            : null),
        },
      });
    }),
});
