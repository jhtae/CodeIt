export const fetchUserNotes = user_id => (
  $.ajax({
    method: 'GET',
    url: '/api/notes',
    data: { user_id }
  })
);

export const createNote = note => (
  $.ajax({
    method: 'POST',
    url: '/api/notes',
    data: { note }
  })
);