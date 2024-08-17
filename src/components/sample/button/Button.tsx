import "./Button.css";

export default function Button(props: any) {
  let buttonJustifyPosition = determineButtonJustifyPosition(
    props.justifyPosition
  );

  return (
    <div className={`flex-container ${buttonJustifyPosition}`}>
      <button type="button" onClick={() => alert(props.message)}>
        Show Message
      </button>
    </div>
  );
}

function determineButtonJustifyPosition(positon: string) {
  let predefinedPositon: any = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  };

  return predefinedPositon.hasOwnProperty(positon)
    ? predefinedPositon[positon]
    : predefinedPositon["start"];
}
