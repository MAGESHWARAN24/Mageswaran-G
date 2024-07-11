import React from "react";
export default function Form({handleSubmit, handleChanges, properties, error}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="grid lg:grid-cols-2 grid-cols-1 gap-3"
    >
      <div className="flex flex-col w-full h-fit">
        <label htmlFor="name">Name</label>
        <input
          placeholder="Enter value...."
          name="name"
          onChange={handleChanges}
          value={properties.name}
          className="border border-black"
        />
        <div className="text-red-500">{error.name}</div>
      </div>
      <div className="flex flex-col w-full h-fit">
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          onChange={handleChanges}
          value={properties.gender}
          className="border border-black"
        >
          <option value="">Select the gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <div className="text-red-500">{error.gender}</div>
      </div>
      <div className="flex flex-col w-full h-fit">
        <label htmlFor="address">Address</label>
        <textarea
          name="address"
          rows="5"
          onChange={handleChanges}
          value={properties.address}
          className="border border-black"
        />
        <div className="text-red-500">{error.address}</div>
      </div>
      <div className="flex flex-col w-full h-fit">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          onChange={handleChanges}
          value={properties.age}
          className="border border-black"
        />
        <div className="text-red-500">{error.age}</div>
      </div>
      <div className="flex flex-col w-full h-fit">
        <label htmlFor="rating">
          Rate yourself {"(1 - 10)"} - {properties.rating}
        </label>
        <input
          type="range"
          name="rating"
          min="1"
          max="10"
          step="1"
          onChange={handleChanges}
          value={properties.rating}
        />
        <div className="text-red-500">{error.rating}</div>
      </div>
      <div>
        <input
          type="checkbox"
          name="condition"
          onChange={handleChanges}
          checked={properties.condition}
        />
        <label htmlFor="condition">Do you agree?</label>
        <div className="text-red-500">{error.condition}</div>
      </div>
      <div className="flex flex-col w-full h-fit">
        <label htmlFor="dob">DOB:</label>
        <input
          type="date"
          name="dob"
          onChange={handleChanges}
          value={properties.dob}
          className="border border-black"
        />
        <div className="text-red-500">{error.dob}</div>
      </div>
      <div className="flex flex-col w-full h-fit">
        <label htmlFor="color">Pick a color</label>
        <input
          type="color"
          name="color"
          onChange={handleChanges}
          value={properties.color}
        />
        <div className="text-red-500">{error.color}</div>
      </div>
      <div className="flex flex-col w-full h-fit">
        <label htmlFor="experience">Experience</label>
        <div>
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index}>
              <input
                type="radio"
                name="experience"
                value={item}
                onChange={handleChanges}
                checked={properties.experience === item.toString()}
              />
              <label htmlFor="experience">{item} - year</label>
            </div>
          ))}
        </div>
        <div className="text-red-500">{error.experience}</div>
      </div>
      <div></div>
      <input type="submit" className="w-20 h-10 bg-green-500 rounded-xl" />
    </form>
  );
}
