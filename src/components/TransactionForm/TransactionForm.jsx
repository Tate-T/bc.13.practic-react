import { Component } from "react";
import CategoryList from "../CategoryList/CategoryList";

class TransactionForm extends Component {
    state = {
        date: "2022-02-03",
        time: "",
        category: "eat",
        sum: "",
        currency: "UAH",
        comment: "",
        categoriesList: [],
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    addCategory = (newCategory) => {
        this.setState((prevState) => ({
            categoriesList: [...prevState.categoriesList, newCategory],
        }));
    };

    handleSubmitTrans = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        const { date, time, category, sum, currency, comment, categoriesList } =
            this.state;
        return (
            <>
                <select name="transactionType" id="">
                    <option value="Incomes">Доходы</option>
                    <option value="Expends">Расходы</option>
                </select>
                <form onSubmit={this.handleSubmitTrans}>
                    <label>
                        День
                        <input
                            type="date"
                            name="date"
                            value={date}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        Время
                        <input
                            type="time"
                            name="time"
                            value={time}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        Категория
                        <input
                            type="button"
                            name="category"
                            value={category}
                            onClick={null}
                        />
                    </label>

                    <label>
                        Сумма
                        <input
                            type="text"
                            placeholder="Enter sum"
                            name="sum"
                            value={sum}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        Валюта
                        <input
                            type="button"
                            name="currency"
                            value={currency}
                            onClick={null}
                        />
                    </label>

                    <label>
                        <input
                            type="text"
                            placeholder="comment"
                            name="comment"
                            value={comment}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <CategoryList
                    categoriesList={categoriesList}
                    addCategory={this.addCategory}
                />
            </>
        );
    }
}

export default TransactionForm;