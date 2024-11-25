import React, { useRef } from "react";

function TenthMarksSheet() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let engInputRef = useRef();
  let telInputRef = useRef();
  let hindiInputRef = useRef();
  let HTMLInputRef = useRef();
  let CSSInputRef = useRef();
  let reactInputRef = useRef();
  let resultParaRef = useRef();
  let cityName = "Hyderabad";
  //   console.log(firstName);  can't access
  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input type="text" ref={firstNameInputRef}></input>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" ref={lastNameInputRef}></input>
        </div>
        <div>
          <label>English</label>
          <input type="number" ref={engInputRef}></input>
        </div>
        <div>
          <label>Telugu</label>
          <input type="number" ref={telInputRef}></input>
        </div>
        <div>
          <label>Hindi</label>
          <input type="number" ref={hindiInputRef}></input>
        </div>
        <div>
          <label>HTML</label>
          <input type="number" ref={HTMLInputRef}></input>
        </div>
        <div>
          <label>CSS</label>
          <input type="number" ref={CSSInputRef}></input>
        </div>
        <div>
          <label>React</label>
          <input type="number" ref={reactInputRef}></input>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              console.log(cityName);
              let firstName = firstNameInputRef.current.value;
              let lastName = lastNameInputRef.current.value;
              let engMarks = Number(engInputRef.current.value);
              let telMarks = Number(telInputRef.current.value);
              let hindimarks = Number(hindiInputRef.current.value);
              let HTMLMarks = Number(HTMLInputRef.current.value);
              let CSSMarks = Number(CSSInputRef.current.value);
              let reactMarks = Number(reactInputRef.current.value);
              let totalMarks =
                engMarks +
                telMarks +
                hindimarks +
                HTMLMarks +
                CSSMarks +
                reactMarks;
              //   engInputRef.current.value = 9999000099988777;
              //   engInputRef.current.style.backgroundColor = "yellow";
              //   alert(engInputRef.current.value);
              // alert(`Total Marks: ${totalMarks}`);

              resultParaRef.current.innerHTML = `${firstName} ${lastName}'s Total Marks: ${totalMarks}`;
              console.log(totalMarks);
            }}
          >
            Calculate Result
          </button>
          <button
            onClick={() => {
              let a = 20;
              //   console.log(b); can't access
              console.log(a);
              //   () => {
              //     console.log(a);
              //     let b = 30;
              //     console.log(b);
              //   };
            }}
          >
            Scope of Variables
          </button>
        </div>
        <p ref={resultParaRef}>Please Enter Marks and Click Calculate</p>
      </form>
    </div>
  );
}

export default TenthMarksSheet;
