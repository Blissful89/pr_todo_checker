export type PrDiff = {
  sha: string
  filename: string
  status:
    | 'added'
    | 'removed'
    | 'modified'
    | 'renamed'
    | 'copied'
    | 'changed'
    | 'unchanged'
  additions: number
  deletions: number
  changes: number
  blob_url: string
  raw_url: string
  contents_url: string
  patch?: string | undefined
  previous_filename?: string | undefined
}[]

export type Todo = {
  filename: string
  todos: InnerTodo[]
}

export type InnerTodo = {
  line: number
  content: string
  added: boolean
}