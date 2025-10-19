function Payment({ setActiveItem }) {
  return (
    <div>
      Hello from Payment
      <div className="flex justify-end mt-10">
        <button
          onClick={() => setActiveItem("successfullyPaymeny")}
          className={`py-3 font-medium px-24 rounded-lg transition bg-[#E37600] text-white hover:bg-[#d96a00]`}
        >
          متابعة وتأكيد
        </button>
      </div>
    </div>
  );
}

export default Payment;
