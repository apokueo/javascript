function getSentence({ subject, verb, object }) {
	return `${subject} ${verb} ${object}`;
};

const o = {
	subject: "I",
	verb: "love",
	object: "Javascript"
};

getSentence(o);
