export var alertQueue = [];

function showAlert(bootstrapColor, title, message, callback) {
	alertQueue.push({
		id: "dAlert_"+new Date().getTime(),
		bootstrapColor: bootstrapColor,
		title: title,
		message: message,
		buttonLabel: "確認",
		callback: function() {
			if (typeof(callback)==="function") callback(); 
		}
	});
}

export function showMessage(message, callback) {
	showAlert("primary", "訊息", message, callback);
}

export function showErrorMessage(message, callback) {
	showAlert("danger", "錯誤", message, callback);
}