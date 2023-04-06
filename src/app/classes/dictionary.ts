export interface Dictionary {
	word: string;
	phonetic: string;
	meanings: Array<Meanings>;
	phonetics: Array<Phonetics>;
}

export interface Meanings {
	antonyms: any[];
	synonyms: any[];
	definitions: any[];
	partOfSpeech: string;
}

export interface Phonetics {
	text: string;
	audio: string;
}