export const fetchNotebooks = () => (
  $.ajax({
    method: 'GET',
    url: '/api/notebooks',
  })
);

export const fetchNotebooksByUser = user_id => (
  $.ajax({
    method: 'GET',
    url: '/api/notebooks',
    data: { user_id }
  })
);

export const fetchNotebook = id => (
  $.ajax({
    method: 'GET',
    url: `/api/notebooks/${id}`,
  })
);

export const createNotebook = notebook => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/notebooks',
      data: JSON.stringify({ note }),
      dataType: 'json',
      contentType: 'application/json',
    })
  )
}