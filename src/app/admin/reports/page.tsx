import { prisma } from "@/lib/prisma";

export async function getReportStats() {
  const [
    totalClients,
    totalCases,
    totalHearings,
    totalDocuments,
  ] = await Promise.all([
    prisma.client.count(),
    prisma.case.count(),
    prisma.hearing.count(),
    prisma.document.count(),
  ]);

  return {
    totalClients,
    totalCases,
    totalHearings,
    totalDocuments,
  };
}