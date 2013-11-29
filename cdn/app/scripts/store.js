
App.pouch = EPDB.Storage.create({
	dbName: "miniplan",
	docTypes: {
		ministrant: App.Ministrant
	}
});
