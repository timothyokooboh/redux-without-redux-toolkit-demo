import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeBranches, changeDepartments } from "../store/actionCreators";

const TestComponent = () => {
  const branches = useSelector((state) => state.branches);
  const departments = useSelector((state) => state.departments);
  const dispatch = useDispatch();

  const [branch, setBranch] = useState("");
  const [department, setDepartment] = useState("");

  const branchList = branches.map((branch, idx) => {
    return <div key={idx}>{branch} </div>;
  });

  const departmentList = departments.map((department, idx) => {
    return <div key={idx}>{department} </div>;
  });

  const addBranch = () => {
    dispatch(changeBranches(branch));
    setBranch("");
  };

  const addDepartment = () => {
    dispatch(changeDepartments(department));
    setDepartment("");
  };

  return (
    <>
      <input
        placeholder="add branch"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        placeholder="add department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      <div>hello from the component</div>
      <section>
        <h4>Branches</h4>
        {branchList}
      </section>
      <section>
        <h4>Departments</h4>
        {departmentList}
      </section>

      <section style={{ display: "flex", marginTop: "20px" }}>
        <button onClick={addBranch} style={{ marginRight: "10px" }}>
          add branches
        </button>
        <button onClick={addDepartment}>add branches</button>
      </section>
    </>
  );
};

export default TestComponent;
