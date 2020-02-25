- create lists migration
  id
  title
  board_id
  created_at
  update_at

- create cards migration (can have many comments)
  id
  title
  due_date
  labels (arr)
  list_id
  description
  archived (bool)
  created_at
  updated_at
  completed (bool)
  board_id
