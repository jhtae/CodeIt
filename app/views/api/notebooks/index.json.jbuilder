json.array! @notebooks do |notebook|
  json.partial! "api/notebooks/notebook", notebook: notebook
  json.notes notebook.notes do |note|
    json.extract! note, :id, :description, :note, :updated_at
    json.tags note.tags do |tag|
      json.id tag.id
      json.name tag.name
    end
  end
end