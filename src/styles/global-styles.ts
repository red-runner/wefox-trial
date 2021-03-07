import { createGlobalStyle } from "styled-components";
import { variables } from "./variables";

export const GlobalStyles = createGlobalStyle`

:root {
	${variables}
}

	body {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		height: 100vh;

		#root {
			height: inherit;

			.app {
				text-align: center;
				background-color: var(--main-background);
			}
		}
	}


`;
