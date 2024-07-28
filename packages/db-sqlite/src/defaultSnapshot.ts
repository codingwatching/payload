import type { DrizzleSQLiteSnapshotJSON } from 'drizzle-kit/payload'

export const defaultDrizzleSnapshot: DrizzleSQLiteSnapshotJSON = {
  id: '00000000-0000-0000-0000-000000000000',
  _meta: {
    columns: {},
    tables: {},
  },
  dialect: 'sqlite',
  enums: {},
  prevId: '00000000-0000-0000-0000-00000000000',
  tables: {},
  version: '5',
}
