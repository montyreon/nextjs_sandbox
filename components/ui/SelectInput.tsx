interface SelectInputProps {
    name: string;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Array<{ value: string | number; label: string }>;
}

/**
 * A select input component for forms with customizable options.
 * 
 * @param props - The component props
 * @param props.name - The name attribute for the select element
 * @param props.value - The currently selected value
 * @param props.onChange - Function to handle change events
 * @param props.options - Array of option objects with value and label properties
 * @returns A styled select input component with the provided options
 */
export default function SelectInput({ name, value, onChange, options }: SelectInputProps) {
    return (
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="w-full p-2 text-black rounded-lg bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

