// Temporarily disabled for Vercel deployment.
// Restore this Prisma implementation when database/email functionality is enabled again.
//
// import { PrismaClient } from '@prisma/client'
//
// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined
// }
//
// export const prisma =
//   globalForPrisma.prisma ??
//   new PrismaClient({
//     log: ['query'],
//   })
//
// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export const prisma = null
