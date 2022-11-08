import React from 'react';

interface IProps {
    people: {
      name: string,
      age: number,
      url: string, 
      note?: string
    }[]
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
const List: React.FC<IProps> = () =>{
    return (
        <div>
            I am a list
        </div>
    )
}

export default List