import { defineDb, defineTable, column, } from 'astro:db';

const Posts = defineTable({
  columns: {
    author: column.text(),
    body: column.text(),
    comments: column.json()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Posts }
});
