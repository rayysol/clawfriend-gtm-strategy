#!/usr/bin/env node

/**
 * Generate or update the data/INDEX.md file with a table of contents
 * for all files under the data/ directory.
 */

const fs = require("fs");
const path = require("path");

const DATA_DIR = __dirname;
const INDEX_FILE = path.join(DATA_DIR, "INDEX.md");

function collectDataFiles() {
  // Return list of all files under data/ (relative to data/), excluding INDEX.md and this script
  const files = [];

  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      const relToData = path.relative(DATA_DIR, fullPath);

      if (entry.isDirectory()) {
        walk(fullPath);
      } else {
        if (entry.name === "INDEX.md" || entry.name === "update_data_index.js") {
          continue;
        }
        files.push(relToData);
      }
    }
  }

  if (fs.existsSync(DATA_DIR)) {
    walk(DATA_DIR);
  }

  files.sort();
  return files;
}

function buildIndexContent(files) {
  const header = [
    "## Data Index",
    "",
    "> **Mục đích:** Tổng hợp danh sách tất cả các file dữ liệu nằm trong thư mục `data/` để tiện tra cứu và dẫn link từ các deliverable khác.",
    "",
    "### Danh sách file dữ liệu",
    "",
  ];

  if (files.length === 0) {
    const body = [
      "Hiện tại thư mục `data/` chưa có file dữ liệu nào khác ngoài `INDEX.md`.",
      "",
      "Khi bạn thêm dữ liệu mới (CSV, JSON, Markdown, hình ảnh, v.v.), hãy chạy script `node data/update_data_index.js` từ root repo để tự động cập nhật mục lục.",
      "",
    ];
    return header.concat(body).join("\n");
  }

  const grouped = {};
  for (const rel of files) {
    const parts = rel.split(path.sep);
    if (parts.length === 1) {
      grouped["."] = grouped["."] || [];
      grouped["."].push(rel);
    } else {
      const top = parts[0];
      const rest = parts.slice(1).join("/");
      grouped[top] = grouped[top] || [];
      grouped[top].push(rest || top);
    }
  }

  const body = [];

  // Root files first
  if (grouped["."]) {
    body.push("#### File ở root của `data/`");
    body.push("");
    for (const rel of grouped["."]) {
      body.push(`- [\`${rel}\`](./${rel})`);
    }
    body.push("");
  }

  // Subdirectories
  Object.keys(grouped)
    .filter((k) => k !== ".")
    .sort()
    .forEach((folder) => {
      body.push(`#### Thư mục \`${folder}/\``);
      body.push("");
      for (const rel of grouped[folder]) {
        const fullRel = path.join(folder, rel).replace(/\\/g, "/");
        body.push(`- [\`${fullRel}\`](./${fullRel})`);
      }
      body.push("");
    });

  return header.concat(body).join("\n");
}

function main() {
  const files = collectDataFiles();
  const content = buildIndexContent(files);
  fs.writeFileSync(INDEX_FILE, content, { encoding: "utf8" });
  console.log(`Updated ${path.relative(path.join(DATA_DIR, ".."), INDEX_FILE)} with ${files.length} data file(s).`);
}

if (require.main === module) {
  main();
}

