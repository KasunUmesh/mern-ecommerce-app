interface Option {
  value: string;
  label: string;
}

interface Props {
  name: string;
  label: string;
  selected: string;
  values: Option[];
}

export default function DropdownComponent(props: Props): JSX.Element {
  return (
    <div className="m-2">
      <label
        htmlFor={props.name}
        className="block mb-1 text-sm font-medium text-gray-500"
      >
        {props.label}
      </label>
      <select
        id={props.name}
        className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-500 block w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
      >
        <option selected>{props.selected}</option>
        {props.values.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
