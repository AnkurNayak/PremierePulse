/* eslint-disable react/prop-types */
const InputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs focus:outline-none focus:border focus:border-indigo-600"
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
};

export default InputField;
