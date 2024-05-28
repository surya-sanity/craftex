import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const submitPostRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        url: z.string().min(1),
        description: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.submitPost.create({
        data: {
          url: input.url,
          name: input.name,
          description: input.description,
        },
      });
    }),
});
