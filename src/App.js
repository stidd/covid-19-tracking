import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api/index";

import coronaImage from "./images/ronaImage.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      country: "",
    };
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
    });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({
      data: fetchedData,
      country: country,
    });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <p>By Steven Tidd</p>
      </div>
    );
  }
}

export default App;
