json.partial! "api/notes/note", note: @note
json.tags @note.tags do |tag|
  json.partial! "api/tags/tag", tag: tag
end