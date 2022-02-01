const TransactionForm = () => {
    return (
        <>
            <select name="transType" id="">
                <option value="incomes">Доходы</option>
                <option value="costs">Расходы</option>
            </select>

            <form action="">
                <label>
                    День
                    <input type="date" />
                </label>

                <label>
                    Время
                    <input type="time" />
                </label>

                <label>
                    Категория
                    <input type="button" value="Eat" />
                </label>

                <label>
                    Сумма
                    <input placeholder="Введите сумму" type="text" />
                </label>

                <label>
                    Валюта
                    <input type="button" value="UAH" />
                </label>

                <label>
                    <input placeholder="comment" type="comment" />
                </label>
            </form>
        </>
    );
};

export default TransactionForm;