const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
