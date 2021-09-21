import { ProcessBubbleType } from "react-particles-js";

function ListComponent(props) {
  let gamesList = props.list;
  let category = props.category;
  return (
    <div>
      <h3>Following are some of my fav {category} games 👇👇👇</h3>
      {gamesList.map((item) => {
        return <li className="games-list">{item}</li>;
      })}
    </div>
  );
}
export default ListComponent;
