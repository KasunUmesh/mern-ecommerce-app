/* eslint-disable @typescript-eslint/ban-types */
interface Props {
  type: string;
  name: string;
  placeholder?: string;
  label: string;
  optional: boolean;
  callBack: Function;
  value?: string;
}

function Input(props: Props): JSX.Element {
  return (
    <div className={"m-2"}>
      <label
        htmlFor={props.name}
        className={"block mb-1 text-sm text-gray-500 font-medium"}
      >
        {props.label}
        {!props.optional ? <span className="text-red-600">*</span> : null}
      </label>
      <input
        type={props.type}
        id={props.name}
        placeholder={props.placeholder}
        className={
          "bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-purple-500 block w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
        }
        onChange={(e) => props.callBack(e, props.name)}
        value={props.value}
      />
    </div>
  );
}

export default Input;
