import { Button } from "@mui/material";
import { useQuestionStore } from "./store/questions";

export function Start() {
	const fetchQuestions = useQuestionStore((state) => state.fetchQuestions);

	const handleClick = () => {
		fetchQuestions(10);
	};
	return (
		<Button onClick={handleClick} variant="contained">
			Empezar
		</Button>
	);
}
