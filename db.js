/* db.js — adapter de banco.
   Usa Turso/libsql quando DATABASE_URL esta definida (nuvem, persistente),
   senao better-sqlite3 em arquivo local (desenvolvimento).
   API assincrona unica: dbGet, dbAll, dbRun, dbInit. */
const path = require("path");
const fs = require("fs");

const SCHEMA = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  email TEXT,
  pass_hash TEXT,
  github_id TEXT UNIQUE,
  created_at INTEGER NOT NULL,
  last_login INTEGER
);
CREATE TABLE IF NOT EXISTS progress (
  user_id INTEGER NOT NULL,
  area_id TEXT NOT NULL,
  stage_id TEXT NOT NULL,
  exercise_idx INTEGER NOT NULL,
  done INTEGER NOT NULL DEFAULT 0,
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (user_id, area_id, stage_id, exercise_idx)
);
CREATE TABLE IF NOT EXISTS stars (
  user_id INTEGER NOT NULL,
  area_id TEXT NOT NULL,
  starred INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, area_id)
);
`;

let mode = "local";
let local = null;     // better-sqlite3 instance
let libsql = null;    // @libsql/client client

const DATABASE_URL = process.env.DATABASE_URL;

async function dbInit() {
  if (DATABASE_URL) {
    const { createClient } = require("@libsql/client");
    libsql = createClient({ url: DATABASE_URL });
    mode = "turso";
    await libsql.execute(SCHEMA);
  } else {
    const Database = require("better-sqlite3");
    const DATA_DIR = __dirname;
    local = new Database(path.join(DATA_DIR, "estudos.db"));
    local.pragma("journal_mode = WAL");
    local.pragma("foreign_keys = ON");
    local.exec(SCHEMA);
  }
}

// params: array; retorna primeira linha ou undefined
async function dbGet(sql, params = []) {
  if (mode === "turso") {
    const r = await libsql.execute({ sql, args: params });
    return r.rows[0];
  }
  return local.prepare(sql).get(...params);
}

// retorna array de linhas
async function dbAll(sql, params = []) {
  if (mode === "turso") {
    const r = await libsql.execute({ sql, args: params });
    return r.rows;
  }
  return local.prepare(sql).all(...params);
}

// retorna { lastInsertRowid }
async function dbRun(sql, params = []) {
  if (mode === "turso") {
    const r = await libsql.execute({ sql, args: params });
    return { lastInsertRowid: Number(r.lastInsertRowid) };
  }
  const info = local.prepare(sql).run(...params);
  return { lastInsertRowid: info.lastInsertRowid };
}

module.exports = { dbInit, dbGet, dbAll, dbRun, getMode: () => mode };
