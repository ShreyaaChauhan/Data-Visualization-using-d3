import React from "react";
import { useState, useEffect } from "react";
import { CsvToHtmlTable } from "react-csv-to-table";

const CsvFiles = () => {
  const [csvData, setcsvData] = useState(null);
  const Csvurl =
    "https://gist.githubusercontent.com/ShreyaaChauhan/e5a43df5c7fe582a19cfa8d7ee776004/raw/b0074299a15a7bd5dede88c734c20ba079a211fa/cssNamedColors.csv";
  useEffect(() => {
    const getdata = async (url) => {
      const response = await fetch(url);
      return await response.text();
    };
    getdata(Csvurl).then((text) => {
      setcsvData(text);
    });
  }, []);
  console.log(csvData);
  return (
    <>
    <div className="csvheading">
      <p >Fetching data from url in csv format and displaying it </p>
      </div>
      <div className="csvtable">
        {csvData && (
          <CsvToHtmlTable
            data={csvData}
            csvDelimiter=","
            hasHeader={true}
            className="table"
          />
        )}
      </div>
    </>
  );
};

export default CsvFiles;
