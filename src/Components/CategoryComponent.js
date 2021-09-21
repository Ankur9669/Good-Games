function CategoryComponent(props) {
  let categoryList = props.categoryList;
  let category = props.category;
  return (
    <div>
      {categoryList.map((item) => {
        if (category === item) {
          return (
            <button
              className="category-buttons active"
              onClick={() => props.onChange(item)}
            >
              {item}
            </button>
          );
        } else {
          return (
            <button
              className="category-buttons"
              onClick={() => props.onChange(item)}
            >
              {item}
            </button>
          );
        }
      })}
      <hr className="line"></hr>
    </div>
  );
}

export default CategoryComponent;
