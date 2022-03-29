import { SelectTranstypeStyled } from "./SelectTranstype.styled";

const SelectTranstype = ({handleChangeTransType,transType}) => {
  return (
    <SelectTranstypeStyled
      // htmlSize={2}
      name="transType"
      onChange={handleChangeTransType}
      value={transType}
    >
      <option value="incomes">Incomes</option>
      <option value="costs">Costs</option>
    </SelectTranstypeStyled>
  );
};

export default SelectTranstype;
