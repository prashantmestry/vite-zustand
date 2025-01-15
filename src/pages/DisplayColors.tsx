import useColoListStore from "../store/colorStore";

const DisplayColors = () => {
  const { colors, addColor } = useColoListStore();
  //
  return (
    <div>
      <h3>Display colors</h3>
      {(colors || []).map((item: string) => {
        return (
          <div key={item} style={{ color: item }}>
            {item}
          </div>
        );
      })}
      <button onClick={() => addColor("pink")}>Add color</button>
    </div>
  );
};

export default DisplayColors;
