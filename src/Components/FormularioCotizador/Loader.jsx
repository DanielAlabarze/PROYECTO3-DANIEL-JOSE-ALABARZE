import { useState } from "react";

const Loader = () => {
  const [imageRef, setImageRef] = useState(null);

  const handleClick = () => {
    setImageRef(<img src="/src/assets/Ellipsis-1.1s-44px.gif" width="40px" />);

    setTimeout(() => {
      setImageRef(null);
    }, 2000);
  };

  return (
    <button onClick={handleClick}>
      <img src={imageRef && imageRef} />
    </button>
  );
};

export default Loader;
