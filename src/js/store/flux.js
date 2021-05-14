const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personas: [],
			planetas: [],
			personabiografia: []
		},
		actions: {
			// Use getActions to call a function within a function
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				let store = getStore();

				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(result => setStore({ personas: result.results }))
					.catch(error => console.log("error", error));

				fetch("https://www.swapi.tech/api/planets/")
					.then(response => response.json())
					.then(result => setStore({ planetas: result.results }))
					.catch(error => console.log("error", error));
			},
			verBioPerson: idepersona => {
				idepersona += 1;

				let link = "https://www.swapi.tech/api/people/" + idepersona;
				fetch(link)
					.then(resp => resp.json())
					.then(resp => setStore({ personabiografia: resp.result.properties }))
					.catch(error => console.log(true));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
