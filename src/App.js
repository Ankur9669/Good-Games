import "./styles.css";
import BackgroundAnimationComponent from "./Components/BackgroundAnimationComponent";
import HeaderComponent from "./Components/HeaderComponent";
import { Component } from "react";
import ListComponent from "./Components/ListComponent";
import CategoryComponent from "./Components/CategoryComponent";
class App extends Component {
  constructor() {
    super();
    this.state = {
      category: "strategy"
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(category) {
    //console.log(category);
    this.setState({
      category: category
    });
  }
  render() {
    let games = {
      strategy: [
        "Chess ⭐⭐⭐⭐⭐(Brain Game)",
        "Clash of clans ⭐⭐⭐⭐⭐(Mobile Game)",
        "Clash royale ⭐⭐⭐⭐(Dueling Game)",
        "Brawl stars⭐⭐⭐⭐(Multiplayer Game)"
      ],
      arcade: [
        "ludo king ⭐⭐⭐⭐⭐(Dice Game)",
        "cricket2007⭐⭐⭐⭐(Mobile Game)"
      ],
      story: [
        "Gta sanandres⭐⭐⭐⭐⭐(Crime Game)",
        "God of war⭐⭐⭐⭐⭐(Revenge Game)"
      ]
    };
    let categoryList = Object.keys(games);
    return (
      <div className="App">
        <BackgroundAnimationComponent />
        <div className="place-over-animation">
          <HeaderComponent />
          <CategoryComponent
            categoryList={categoryList}
            category={this.state.category}
            onChange={this.onChange}
          />
          <ListComponent
            list={games[this.state.category]}
            category={this.state.category}
          />
        </div>
      </div>
    );
  }
}
export default App;
