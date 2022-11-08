import React from "react";

interface IProps {
	people: {
		name: string;
		age: number;
		url: string;
		note?: string;
	}[];
}

// How to pass in an interface while performing traditional prop drilling

// const List = (props: IProps) =>{
//     return (
//         <div>
//             I am a list
//         </div>
//     )
// }

// Passing in an interface with a React Functional Component will
const List: React.FC<IProps> = ({ people }) => {

	// It's a good idea to define the element being returned instead of letting Typescript infer what is being returned? How to determine what is being returned? Hover the mouse over the function ( renderList) and it will show the return type (JSX.Element [])-an array
	const renderList = (): JSX.Element [] => {
		return people.map((person) => {
			return (
				<li className="List">
					<div className="List-header">
						<img className="List-img" src={person.url} alt="" />
						<h2>{person.name}</h2>
					</div>
					<p>{person.age} years old</p>
					<p className="List-note">{person.note}</p>
				</li>
			);
		})
	};
	return (
		<ul>
			{renderList()}
		</ul>
	);
};

export default List;
