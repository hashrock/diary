const yyyyMMdd = new Date().toISOString().slice(0, 10);
const fileName = `posts/${yyyyMMdd}.md`
const template = `---
title: Diary
publish_date: ${yyyyMMdd}
---
`
const encoder = new TextEncoder();
const data = encoder.encode(template);

Deno.writeFileSync(fileName, data);
console.log(fileName)