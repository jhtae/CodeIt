export const fetchUserNotes = user_id => (
  $.ajax({
    method: 'GET',
    url: '/api/notes',
    data: { user_id }
  })
);

export const fetchNotesByTags = tags => (
  $.ajax({
    method: 'GET',
    url: '/api/notes',
    data: { tags }
  })
);

export const createNote = note => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/notes',
      data: JSON.stringify({ note }),
      dataType: 'json',
      contentType: 'application/json',
    })
  )
}