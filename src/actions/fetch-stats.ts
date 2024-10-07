"use server";

// import { createClient } from "@midday/supabase/server";
import { unstable_cache } from "next/cache";

export async function fetchStats() {
  // const supabase = createClient({ admin: true });
  // const supabaseStorage = createClient({ admin: true, schema: "storage" });

  // const [
  //   { count: users },
  //   { count: transactions },
  //   { count: bankAccounts },
  //   { count: trackerEntries },
  //   { count: inboxItems },
  //   { count: bankConnections },
  //   { count: trackerProjects },
  //   { count: reports },
  //   { count: vaultObjects },
  //   { count: transactionEnrichments },
  // ] = await unstable_cache(
  //   async () => {
  //     return Promise.all([
  //       supabase
  //         .from("users")
  //         .select("id", { count: "exact", head: true })
  //         .limit(1),
  //       supabase
  //         .from("transactions")
  //         .select("id", { count: "exact", head: true })
  //         .limit(1),
  //       supabase
  //         .from("bank_accounts")
  //         .select("id", { count: "exact", head: true })
  //         .limit(1),
  //       supabase
  //         .from("tracker_entries")
  //         .select("id", { count: "exact", head: true })
  //         .limit(1),
  //       supabase
  //         .from("inbox")
  //         .select("id", { count: "exact", head: true })
  //         .limit(1),
  //       supabase
  //         .from("bank_connections")
  //         .select("id", { count: "exact", head: true })
  //         .limit(1),
  //       supabase
  //         .from("tracker_projects")
  //         .select("id", { count: "exact", head: true })
  //         .limit(1),
  //       supabase
  //         .from("reports")
  //         .select("id", { count: "exact", head: true })
  //         .limit(1),
  //       supabaseStorage
  //         .from("objects")
  //         .select("id", { count: "exact", head: true })
  //         .limit(1),
  //       supabase
  //         .from("transaction_enrichments")
  //         .select("id", { count: "exact", head: true })
  //         .limit(1),
  //     ]);
  //   },
  //   ["stats"],
  //   {
  //     revalidate: 300,
  //     tags: ["stats"],
  //   }
  // )();

  const users = 0;
  const transactions = 0;
  const bankAccounts = 0;
  const trackerEntries = 0;
  const inboxItems = 0;
  const bankConnections = 0;
  const trackerProjects = 0;
  const reports = 0;
  const vaultObjects = 0;
  const transactionEnrichments = 0;

  return {
    users,
    transactions,
    bankAccounts,
    trackerEntries,
    inboxItems,
    bankConnections,
    trackerProjects,
    reports,
    vaultObjects,
    transactionEnrichments,
  };
}
