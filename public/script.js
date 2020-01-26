$('#chatForm').on('submit', function(e) {
	e.preventDefault()

	var data = $('#chatForm').serialize()

	$.ajax({
		type: "POST",
		url: '/api/chat',
		processData: false,
		data: data,
		success: function(response) {
			alert(JSON.stringify(response))
		}
	})
})