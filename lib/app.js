
exports.validate_doc_update = function(newDoc, oldDoc, userCtx) {
	
	if (newDoc.type === 'feedback')
		validate_feedback(newDoc, oldDoc, userCtx);
}


function validate_feedback(newDoc, oldDoc, userCtx) {

		if(!newDoc.auth||!newDoc.newauth||!newDoc.auth.a||!newDoc.auth.r||!newDoc.auth.b||!newDoc.newauth.a||!newDoc.newauth.r)
			throw ({forbidden:'document not well formed'});

		if(userCtx.roles.indexOf('obermini')!=-1)
			return;

		if(!oldDoc)
			throw ({forbidden:'no new documents allowed for non-admins'});

		if(newDoc._deleted)
			throw ({forbidden:'deletion is not ok for you'});

		if(newDoc.auth.r != oldDoc.newauth.r||newDoc.auth.a!= oldDoc.newauth.a)
			throw ({forbidden:'challenge not answered'})

		if(require('views/lib/sha').sha(newDoc.auth.a+newDoc.auth.b) != oldDoc.auth.r)
			throw ({forbidden:'challenge not answered correctly'});
}
