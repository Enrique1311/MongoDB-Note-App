import { saveNote } from "./socket";

export const onHandleSubmit = (e) => {
	e.preventDefault();

	saveNote(noteForm["title"].value, noteForm["description"].value);
};
